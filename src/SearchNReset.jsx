import React, { useContext, useState } from 'react';
import {useWeather } from './WeatherContext';

const SearchNReset = () => {
  const { City, setCity } = useWeather();
  const [selectedCity, setSelectedCity] = useState(City || ''); 

  const onlyCities = ['delhi', 'mumbai', 'chennai', 'kolkata'];

  const handleCityChange = (event) => {
    const selected = event.target.value.toLowerCase();
    if (onlyCities.includes(selected)) {
      setCity(selected);
      setSelectedCity(selected); 
    } 
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange} className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>
        <option value="">Select a City</option>
        {onlyCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {/* Error message can be displayed conditionally here if needed */}
    </div>
  );
};

export default SearchNReset;
