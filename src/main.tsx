import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WeatherBubble from './WeatherBubble'
import ForecastWeatherBubble from './ForecastBubble'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <ForecastWeatherBubble time='1675285200' temp='55' lowTemp='2' /> */}
    {/* <WeatherBubble /> */}
  </React.StrictMode>,
)
