import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WeatherBubble from './WeatherBubble'
import ForecastWeatherBubble from './ForecastBubble'
import './css/main.css'
import { WeatherContext, WeatherContextProvider } from './WeatherContext'

// const {weatherData, setWeatherData} = useContext(WeatherContext)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <WeatherContextProvider >
      
      <App />
      <WeatherBubble />

    </WeatherContextProvider>
    {/* <ForecastWeatherBubble time='1675285200' temp='55' lowTemp='2' /> */}
  </React.StrictMode>,
)
