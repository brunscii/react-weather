import { useContext, useEffect, useState } from "react"
import { DefaultSerializer } from "v8"
import { WeatherContext, WeatherData } from "./WeatherContext"


export function ForecastSorted( ){
  
  // The days of week is an array of tuples containing the day name followed by it's forecast info
  // let daysOfWeek : [string, [] ][]= [ ['Sunday', [] ] ,[ 'Monday', [] ], [ 'Tuesday', [] ], [ 'Wednesday', [] ], [ 'Thursday', [] ], [ 'Friday', [] ], [ 'Saturday', [] ] ]

  const {weatherData} = useContext(WeatherContext)

  const [ forecast, setForecast ]= useState( weatherData.forecast )

  useEffect( () => {
    setForecast( weatherData.forecast )
    if( forecast )
      console.log( forecastToList( forecast ))
    // {
    //   for( let f in forecastToList( forecast ) ){
    //     console.log( f )
    //   }
    // }
    // if( forecast )
      // console.log( forecastToList( forecast ) )
  }, [weatherData.forecast] )
  
  /* The easiest way to sort the forecast is going to be load all of the 
    forecast objects into a map of days to forecast lists. From there you
    can check for the first day in the list and sort the resulting obj so
    the first day is first and so on and so forth. You could also just 
    create an object using the first day from the forecast as a starting 
    point and use the day name from the subsequent days.
    
    ie) the first forecast is wednesday. You can sort everything so that
    the object starts with wednesday and ends with tuesday. if you start
    with sunday at index 0 then you can rotate so that wednesday is 0
    instead of 3 using the pop and push method or something similar. */


  
  
  function forecastToList( forecast : object[] ){
    const DaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let week = {
      'Sunday'    : [],
      'Monday'    : [],
      'Tuesday'   : [],
      'Wednesday' : [],
      'Thursday'  : [],
      'Friday'    : [],
      'Saturday'  : []
    }
    // TODO: make a interface for the forecast objects to appease the TypeScript gods
    forecast?.forEach( f => {
      week[DaysOfWeek[new Date( f['dt'] * 1000 ).getDay()]].push(f)
    })

    return week
    
  }

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
        //   console.log(day)
        //   return (
        //   <div className="day-box">
        //     <h2>{day}</h2>
        //     //insert weather forecast bubbles here
        //   </div>
        //   )
        // })

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