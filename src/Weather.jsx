import React, { useEffect } from 'react'
import { useWeather } from './WeatherContext'
import axios from 'axios'

import './index.css'
import SearchNReset from './SearchNReset'
const Weather = () => {
  const {weatherData, setWeather, City , setCity}= useWeather();
  const api =`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=5938676d803804afb310026239a552cc`

  useEffect(()=>{
    const fetchWeatherData=async()=>{
      try{
        const response = await axios.get(api);
        setWeather(response.data)
      }catch(error){
        console.log("There is some error ", error)
      }
    }
    fetchWeatherData()
  }, [setWeather, City])
  return (
    <div>
      <h2 className='text-black bg-green-500 w-3/6 mx-auto p-2 rounded-lg shadow-lg font-bold text-center mb-5 shadow-indigo-500/50'>Weather Information</h2>
        {weatherData ? (
          <>
          <SearchNReset/>
          <p className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>City : {weatherData.name} </p>
          <p className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>Temperature : {(weatherData.main.temp-273.15).toFixed(2) } &deg;C</p>
          <p className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>Description : {weatherData.weather[0].description} </p>
          </>
        ): (
          <p>Weather data is Loading...</p>
        )} 
    </div>
  )
}

export default Weather



