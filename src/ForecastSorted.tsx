import { useContext, useEffect, useState } from "react"
import { DefaultSerializer } from "v8"
import { WeatherContext, WeatherData } from "./WeatherContext"


export function ForecastSorted( ){
  
  // The days of week is an array of tuples containing the day name followed by it's forecast info
  let daysOfWeek : [string, [] ][]= [ ['Sunday', [] ] ,[ 'Monday', [] ], [ 'Tuesday', [] ], [ 'Wednesday', [] ], [ 'Thursday', [] ], [ 'Friday', [] ], [ 'Saturday', [] ] ]

  const {weatherData} = useContext(WeatherContext)

  const [ forecast, setForecast ]= useState( weatherData.forecast )

  useEffect( () => {
    setForecast( weatherData.forecast )

    console.log( forecast )
  }, [weatherData] )



  /* This function sorts the list of days so that the current day is at index 0
     and sorts the forecast into the list of days */
  function sortDays(){

    const currentDay = new Date( Date.now() ).getDay()


    // sort the forecast info into the days of the week
    forecast?.map( forecastInfo => {
      console.log( new Date(forecastInfo['dt']).getDay() )
    } )
    // sort the list of days so they are in order begining with today
    if( currentDay === 0 ){

      return [...daysOfWeek]

    } 
    else {
      
      let rotationCount = currentDay % daysOfWeek.length

      for( let i = 0; i < rotationCount; i++ )
        daysOfWeek.push( daysOfWeek.shift()  || [ '', [] ] )
      
      return daysOfWeek;
    }
  }
  
  return (
    <div className='forecast'>
      { 
        sortDays().map( (day) => {
          console.log(day)
          return (
          <div className="day-box">
            <h2>{day}</h2>
            //insert weather forecast bubbles here
          </div>
          )
        })
      }
    </div>
  )
}


/*<div className='forecast-box'>
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
      */