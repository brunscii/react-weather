import { time } from 'console'
import { stringify } from 'querystring'
import { useState, useEffect } from 'react'

interface ForecastBubbleProps {
  time?          : string,
  temp?          : string,
  lowTemp?       : string,
  highTemp?      : string,
  condition?     : string,
  windSpeed?     : string,
  windDirection? : string,
  pressure?      : string,
  humidity?      : string

}

function ForecastWeatherBubble( props : ForecastBubbleProps ) {


  const [time, setTime] = useState( props.temp || Date.now() )
  const [currentTemp, setCurrentTemp] = useState( props.temp || 0 )
  const [lowTemp, setLowTemp] = useState( props.lowTemp || 0 )
  const [highTemp, setHighTemp] = useState( props.highTemp || 0 )
  const [condition, setCondition] = useState( props.condition || 'Unknown' )
  const [windSpeed, setWindSpeed] = useState( props.windSpeed || 'Unknown' )
  const [windDirection, setWindDirection] = useState( props.windDirection || 'Unknown' )
  const [pressure, setPressure] = useState( props.pressure || 'Unknown' )
  const [humidity, setHumidity] = useState( props.humidity || 'Unknown' )


  return (

    <div className='weather-app'>

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

export default ForecastWeatherBubble


