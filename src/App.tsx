import { useState, useEffect } from 'react'

function App() {


  

  async function getWeatherData(zipCode : string) {

    const zip = parseInt(zipCode)
    // console.log(process.env)
    const geoRes = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + zip + '&appid=' + import.meta.env.VITE_WEATHER_API_KEY)
      const geo = await geoRes.json();
      
      console.log(geo.lat, geo.lon)

      let lat = geo.lat
      let lon = geo.lon

      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' +  import.meta.env.VITE_WEATHER_API_KEY + '&units=imperial')
      const rec = await res.json();

      console.log(rec)

      const locationRes = await fetch('http://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon +'&limit=5&appid=' + import.meta.env.VITE_WEATHER_API_KEY )
      const locationRec = await locationRes.json();


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
        <h1 id="city-name"></h1>
      </div>

      <div className="weatherBox inactive">

        <div className="temp"> <span id="temperature-value"></span></div>

        <div className="temperature-box">
              <div className="low-high"> <span className="small-temp">Low <span id="low"></span> </span>
                  <br/>
                  <div className="horizontal-divider"> </div>
                  <span className="small-temp">High <span id="high"></span> </span>
              </div>
        </div>
          
        <hr className="vertical-divider"/>

        <div className="other-info">
          <div className="condition"> Condition: <span id="condition-value"></span></div>
          <br />
          
          <div className="sun-time-box ">
            <div className="sunrise"> Sunrise: <span id="sunriseTime"></span></div>
            <div className="sunset"> Sunset: <span id="sunset=time"></span></div>
          </div>

          <br />
          <div className="wind-box">
            <div className="wind-speed-dir"> Wind Speed: <span id="wind-speed-value"></span> <span id="wind-dir-value"></span></div>
          </div>

          <div className="pressure"> Pressure: <span id="pressure-value"></span></div>
          <div className="humidity"> Humidity: <span id="humidity-value"></span></div>
          
          <div className="precip"> Precipitation %: <span id="precip-value"></span></div>
          <br />
        </div>
      </div>

    </div>

  )
}

export default App