import { useState, useEffect, useContext } from 'react'
import {WeatherContext, WeatherData} from './WeatherContext'

function WeatherBubble(  ) {

  const {weatherData,setWeatherData} = useContext(WeatherContext)
  const props = weatherData;

  console.log(props)

  const [location, setLocation] = useState( props.location )
  const [currentTemp, setCurrentTemp] = useState( props.temp )
  const [lowTemp, setLowTemp] = useState( props.lowTemp )
  const [highTemp, setHighTemp] = useState( props.highTemp )
  const [condition, setCondition] = useState( props.condition )
  const [sunrise, setSunrise] = useState( props.sunrise )
  const [sunset, setSunset] = useState( props.sunset )
  const [windSpeed, setWindSpeed] = useState( props.windSpeed )
  const [windDirection, setWindDirection] = useState( props.windDirection )
  const [pressure, setPressure] = useState( props.pressure  )
  const [humidity, setHumidity] = useState( props.humidity )

  console.log(location)
  useEffect(()=>{

    setLocation     (props.location)
    setCurrentTemp  (props.temp)
    setLowTemp      (props.lowTemp)
    setHighTemp     (props.highTemp)
    setCondition    (props.condition)
    setSunrise      (props.sunrise)
    setSunset       (props.sunset)
    setWindSpeed    (props.windSpeed)
    setWindDirection(props.windDirection)
    setPressure     (props.pressure)
    setHumidity     (props.humidity)

  },[props])

  return (

    <div className='weather-app inactive'>

      <div className="title-box">
        <h1 id="location">{location}</h1>
      </div>

      <div className="weather-box"
        onClick={(e) => {
          // Loop throught the child nodes and toggle inactive
          for( let nestedElement of e.currentTarget.children){
            // Skip the temperature-box that is already visible
            if(!nestedElement.matches('.temperature-box'))
              nestedElement.classList.toggle('inactive')
          }
        }}>

        <div className="temperature-box">
          <div className="temp"> <span id="temperature-value">{currentTemp}°</span>
          

            <div className="low-high"> 
              <span className='left'>Low:</span> <span id="low-value right">{lowTemp}°</span>
              <span className='left'>High:</span> <span id="high-value right">{highTemp}°</span>
            </div>
          </div>
        </div>
        
          
        <hr className="vertical-divider inactive"/>

        <div className="other-info inactive">
          
          <div className="sunrise"> Sunrise: <span id="sunriseTime">{sunrise}</span></div>
          <div className="sunset"> Sunset: <span id="sunset=time">{sunset}</span></div>
          
          <br />
          
          <div className="condition"> Condition: <span id="condition-value">{condition}</span></div>

          <br />

          <div className="humidity"> Humidity: <span id="humidity-value">{humidity}%</span></div>
          <div className="pressure"> Pressure: <span id="pressure-value">{pressure}mmHg</span></div>
          
          <div className="wind-speed-dir">Wind Speed: <span id="wind-value">{windSpeed}mph {windDirection} deg</span></div>

        </div>
      </div>

    </div>

  )
}

export default WeatherBubble


