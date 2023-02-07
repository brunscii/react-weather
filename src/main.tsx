import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import WeatherBubble from './WeatherBubble'
import './css/main.css'
import { WeatherContextProvider } from './WeatherContext'
import InputZipCode from './InputZipCode'
import ForecastWeatherBubble from './ForecastBubble'

// const {weatherData, setWeatherData} = useContext(WeatherContext)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    
    <WeatherContextProvider >
      
      {/* <App /> */}

      {/* <WeatherPane /> */}
      <InputZipCode />
      <WeatherBubble />

    </WeatherContextProvider>
    {/* <ForecastWeatherBubble time='1675285200' temp='55' lowTemp='2' /> */}
  </StrictMode>,
)
