import { time } from 'console'
import { stringify } from 'querystring'
import { useState, useEffect } from 'react'

function App() {

  const [location, setLocation] = useState(null || String)
  const [currentTemp, setCurrentTemp] = useState(null)
  const [lowTemp, setLowTemp] = useState(null)
  const [highTemp, setHighTemp] = useState(null)
  const [condition, setCondition] = useState(null)
  const [sunrise, setSunrise] = useState(null || String)
  const [sunset, setSunset] = useState(null || String)
  const [windSpeed, setWindSpeed] = useState(null)
  const [windDirection, setWindDirection] = useState(null)
  const [pressure, setPressure] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [precipitation, setPrecipitation] = useState(null)

  async function getWeatherData(zipCode : string) {

    const zip = parseInt(zipCode)
    // console.log(process.env)
    const geoRes = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + zip + '&appid=' + import.meta.env.VITE_WEATHER_API_KEY)
      const geo = await geoRes.json();
      
      console.log(geo.lat, geo.lon)

      let lat = geo.lat
      let lon = geo.lon

      const weatherRes = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' +  import.meta.env.VITE_WEATHER_API_KEY + '&units=imperial')
      const weatherRec = await weatherRes.json();

      const locationRes = await fetch('http://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon +'&limit=5&appid=' + import.meta.env.VITE_WEATHER_API_KEY )
      const locationRec = await locationRes.json();


      console.log(weatherRec)

      setCurrentTemp(weatherRec.main.temp)
      setHighTemp(weatherRec.main.temp_max)
      setLowTemp(weatherRec.main.temp_min)
      
      setCondition(weatherRec.weather[0].description)

      setSunrise((new Date(1000 * weatherRec.sys.sunrise)).toTimeString().slice(0,5))
      setSunset((new Date(1000 * weatherRec.sys.sunset)).toTimeString().slice(0,5))
      
      setWindSpeed(weatherRec.wind.speed)
      setWindDirection(weatherRec.wind.deg)

      setPressure(weatherRec.main.pressure)
      setHumidity(weatherRec.main.humidity)

      setLocation(weatherRec.name + ', ' + locationRec[0].state)

      

      console.log(locationRec)
  }


  return (

    <div className='weather-app'>
      <input type="text" 
              id="zip-code-input" 
              aria-label="Zip Code Input" 
              pattern="^\d{5}$" 
              placeholder="Zip Code" 
              maxLength={5} 
              // Checks for enter being pressed to submit zip code
              onKeyDown={
                (e)=>{
                  const target = e.target as HTMLInputElement
                  if( e.key == 'Enter' ){
                    if( target.value.match( /^\d{5}$/ ) ){
                      getWeatherData(target.value)
                      document.querySelector('.weather-box')?.classList.remove('inactive')
                      document.querySelector('.title-box')?.classList.remove('inactive')
                    }
                  }
                }
              } 
              // This removes non numbers as input pattern doesn't seem to work in react/typescript 
              onChange={(e)=>{
                const target = e.target as HTMLInputElement
                console.log(e)
                if( !target.value.match('^[0-9]+$') ){
                  console.log('not a number')
                  target.value = target.value.replaceAll(/\D/g, '')
                }
              }}
              required />

      <div className="title-box inactive">
        <h1 id="location">{location}</h1>
      </div>

      <div className="weather-box inactive"
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

export default App
