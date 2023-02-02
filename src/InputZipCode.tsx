import { time } from 'console'
import { stringify } from 'querystring'
import { useState, useEffect } from 'react'

function Input() {

  async function getWeatherData(zipCode : string) {

    const zip = parseInt(zipCode)
    // console.log(process.env)
    const geoRes = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + zip + '&appid=' + import.meta.env.VITE_WEATHER_API_KEY)
      const geo = await geoRes.json();
      
      // console.log(geo.lat, geo.lon)

      let lat = geo.lat
      let lon = geo.lon

      const weatherRes = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=' +  import.meta.env.VITE_WEATHER_API_KEY + '&units=imperial')
      const weatherRec = await weatherRes.json();
      
      const locationRes = await fetch('http://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon +'&limit=5&appid=' + import.meta.env.VITE_WEATHER_API_KEY )
      const locationRec = await locationRes.json();
      
      const forecastRes = await fetch('https://api.openweathermap.org/data/2.5/forecast?cnt=120&lat='+ lat + '&lon=' + lon + '&appid=' +  import.meta.env.VITE_WEATHER_API_KEY + '&units=imperial')
      const forecastRec = await forecastRes.json();

      console.log(forecastRec)

      // console.log(weatherRec)

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
                // console.log(e)
                if( !target.value.match('^[0-9]+$') ){
                  // console.log('not a number')
                  target.value = target.value.replaceAll(/\D/g, '')
                }
              }}
              required />

    </div>
  )
}

export default Input


