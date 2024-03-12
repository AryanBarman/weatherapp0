import React, { createContext, useContext, useState } from "react";


const WeatherContext= createContext();

export const useWeather = ()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider = ( {children})=>{
    const [weatherData, setWeatherData]=useState();
    const [City , setCity ] = useState (null);

    const setWeather=(data)=>{
        setWeatherData(data)
    }
    return (
        <WeatherContext.Provider value={{weatherData, setWeather, City , setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}
