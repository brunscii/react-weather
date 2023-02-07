import { useEffect, useState } from 'react'

export interface ForecastBubbleProps {
  time          : string,
  temp          : string,
  lowTemp       : string,
  highTemp      : string,
  condition     : string,
  windSpeed     : string,
  windDirection : string,
  pressure      : string,
  humidity      : string

}

function ForecastWeatherBubble( props : ForecastBubbleProps ) {

  console.log(props.temp)

  /*
  clouds
: 
{all: 100}
dt
: 
1675976400
dt_txt
: 
"2023-02-09 21:00:00"
main
: 
{temp: 65.44, feels_like: 65.3, temp_min: 65.44, temp_max: 65.44, pressure: 1021, …}
pop
: 
0
sys
: 
{pod: 'd'}
visibility
: 
10000
weather
: 
[{…}]
wind
: 
deg
: 
217
gust
: 
21.18
speed
: 
9.95
*/

  const [time, setTime] = useState( props.time || Date.now.toString() )
  const [currentTemp, setCurrentTemp] = useState( props.temp || 0 )
  const [lowTemp, setLowTemp] = useState( props.lowTemp || 0 )
  const [highTemp, setHighTemp] = useState( props.highTemp || 0 )
  const [condition, setCondition] = useState( props.condition || 'Unknown' )
  const [windSpeed, setWindSpeed] = useState( props.windSpeed || 'Unknown' )
  const [windDirection, setWindDirection] = useState( props.windDirection || 'Unknown' )
  const [pressure, setPressure] = useState( props.pressure || 'Unknown' )
  const [humidity, setHumidity] = useState( props.humidity || 'Unknown' )



  useEffect( () => {
    setTime           ( props.time )
    setCurrentTemp    ( props.temp )
    setLowTemp        ( props.lowTemp )
    setHighTemp       ( props.highTemp )
    setCondition      ( props.condition )
    setWindSpeed      ( props.windSpeed )
    setWindDirection  ( props.windDirection )
    setPressure       ( props.pressure )
    setHumidity       ( props.humidity )
    
  }, [props])

  return (

    <div className='forecase-data'>

      <div className="weather-box">

        <div className="temperature-box">
          <div className="time"><span id='time-value'>{ new Date(parseInt(time)*1000).toLocaleString('en-US',{timeZone: 'est'}) }</span></div>
          <div className="temp"> <span id="temperature-value">{currentTemp}°</span>
          

            <div className="low-high"> 
              <span className='left'>Low:</span> <span id="low-value right">{lowTemp}°</span>
              <span className='left'>High:</span> <span id="high-value right">{highTemp}°</span>
            </div>
          </div>
        </div>
        
          
        <hr className="vertical-divider" />

        <div className="other-info ">
          
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


