import { DefaultSerializer } from "v8"


export function ForecastSorted( ){
  
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  function sortDays(){
    const currentDay = new Date( Date.now() ).getDay()

    if( currentDay === 0 ){
      return [...daysOfWeek]
    } 
    else {
      let rotationCount = currentDay % daysOfWeek.length

      for( let i = 0; i < rotationCount; i++ ){
        
        daysOfWeek.push( daysOfWeek.shift()  || '' )
        
      }
      return daysOfWeek;
    }
  }
  
  return (
    <div className='forecast'>
      { 
        sortDays().map( (day) => {
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