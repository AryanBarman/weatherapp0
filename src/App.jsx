// App.js
import React from 'react';
import Weather from './Weather';
import { WeatherProvider } from './WeatherContext';

const App = () => {
  return (
      <div className='max-w-md mx-auto shadow-md rounded-md mt-4 p-4 bg-gray-100 '>
        <h1 className='mb-10 mx-auto max-w-sm font-bold bg-blue-200 rounded-md p-2 text-center text-2xl shadow-md shadow-cyan-500/50'>React Weather App</h1>
        <Weather />
      </div>
  );
};

export default App;
