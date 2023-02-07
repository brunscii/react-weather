import { useState, useEffect, useContext } from 'react'
import ForecastBubble from './ForecastBubble'
import {WeatherContext, WeatherData} from './WeatherContext'
import {ForecastBubbleProps} from './ForecastBubble'
function WeatherBubble( ) {

  const {weatherData} = useContext(WeatherContext)


  

  const [ location, setLocation ]           = useState( weatherData.location )
  const [ currentTemp, setCurrentTemp ]     = useState( weatherData.temp )
  const [ lowTemp, setLowTemp ]             = useState( weatherData.lowTemp )
  const [ highTemp, setHighTemp ]           = useState( weatherData.highTemp )
  const [ condition, setCondition ]         = useState( weatherData.condition )
  const [ sunrise, setSunrise ]             = useState( weatherData.sunrise )
  const [ sunset, setSunset ]               = useState( weatherData.sunset )
  const [ windSpeed, setWindSpeed ]         = useState( weatherData.windSpeed )
  const [ windDirection, setWindDirection ] = useState( weatherData.windDirection )
  const [ pressure, setPressure ]           = useState( weatherData.pressure  )
  const [ humidity, setHumidity ]           = useState( weatherData.humidity )
  const [ forecast, setForecast ]           = useState( weatherData.forecast )

  console.log(location)
  useEffect(()=>{

    setLocation     ( weatherData.location )
    setCurrentTemp  ( weatherData.temp )
    setLowTemp      ( weatherData.lowTemp )
    setHighTemp     ( weatherData.highTemp )
    setCondition    ( weatherData.condition )
    setSunrise      ( weatherData.sunrise )
    setSunset       ( weatherData.sunset )
    setWindSpeed    ( weatherData.windSpeed )
    setWindDirection( weatherData.windDirection )
    setPressure     ( weatherData.pressure )
    setHumidity     ( weatherData.humidity )
    setForecast     ( weatherData.forecast )

  },[weatherData])

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
      <div className='forecast-box'>
        {
        forecast?.map( ( forecastData ) =>{
          let fd : ForecastBubbleProps  = {
            time          : forecastData['dt'],
            temp          : forecastData['main']['temp'],
            lowTemp       : forecastData['main']['temp_min'],
            highTemp      : forecastData['main']['temp_max'],
            condition     : forecastData['weather'][0]['main'],
            windSpeed     : forecastData['wind']['speed'],
            windDirection : forecastData['wind']['deg'],
            pressure      : forecastData['main']['pressure'],
            humidity      : forecastData['main']['humidity']
          }

          console.log(forecastData)
          return (
            
            <ForecastBubble key={new Date(parseInt(fd.time)*1000).toLocaleDateString('en-US')} {...fd} />
            
          )
        } 
        // .map((node, index, nodes)=>{
            
        //     if(index < nodes.length && nodes[index+1].key != node.key){
        //       return(
        //         <div >
        //           {nodes.slice(0,index)}
        //         </div>
        //       )
        //     }
        //     return(
        //       <>
        //       </>
        //     )
        //   }

        )}
      </div>

    </div>

  )
}

export default WeatherBubble


