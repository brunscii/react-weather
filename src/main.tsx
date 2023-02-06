import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WeatherBubble from './WeatherBubble'
import ForecastWeatherBubble from './ForecastBubble'
import './css/main.css'
import { WeatherContext, WeatherContextProvider } from './WeatherContext'
import InputZipCode from './InputZipCode'
import WeatherPane from './WeatherPane'

// const {weatherData, setWeatherData} = useContext(WeatherContext)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <WeatherContextProvider >
      
      {/* <App /> */}

      {/* <WeatherPane /> */}
      <InputZipCode />
      <WeatherBubble />

    </WeatherContextProvider>
    {/* <ForecastWeatherBubble time='1675285200' temp='55' lowTemp='2' /> */}
  </React.StrictMode>,
)
