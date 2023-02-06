import React, { createContext, ProviderProps, ReactNode, useState} from 'react';
import { render } from 'react-dom';

// Since this is just for display 
// and not calculations I will 
// set everything as strings
export interface WeatherData {
  location?      : string,
  time?          : string,
  temp?          : string,
  lowTemp?       : string,
  highTemp?      : string,
  condition?     : string,
  sunrise?       : string,
  sunset?        : string,
  windSpeed?     : string,
  windDirection? : string,
  pressure?      : string,
  humidity?      : string
}

export type WeatherContextType = {
  weatherData: WeatherData,
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

export const defaultWeatherProps : WeatherData= {
  location: '',
  time: '',
  temp: '',
  lowTemp: '',
  highTemp: '',
  condition: '',
  sunrise: '',
  sunset: '',
  windSpeed: '',
  windDirection: '',
  pressure: '',
  humidity: ''
}

const WeatherContext = createContext<WeatherContextType>({weatherData:{}, setWeatherData:()=>{} });

export const WeatherContextProvider = ( {children} : { children: React.ReactNode } ) => {
  const [weather, setWeather] = useState<WeatherData>(defaultWeatherProps)

  return(
    <WeatherContext.Provider value={ {weatherData:weather, setWeatherData: setWeather} }>
      {children}
    </WeatherContext.Provider>
  )
};

export { WeatherContext };




