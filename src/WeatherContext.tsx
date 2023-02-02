import { createContext, ReactNode, useState} from 'react';

// Since this is just for display 
// and not calculations I will 
// set everything as strings

interface WeatherData {
  location?      : string,
  time?          : string,
  temp?          : string,
  lowTemp?       : string,
  highTemp?      : string,
  condition?     : string,
  sunrise?       : string,
  sunset?        : string,
  windSpeed?     : string,
  windDirection? : string,
  pressure?      : string,
  humidity?      : string
}

interface WeatherProps {
  weatherData: WeatherData,
  setWeatherData: (data: WeatherData)=> void
}

export const WeatherContext = createContext<WeatherProps | null>( {
  weatherData : {},
  setWeatherData: ()=>{}
} )

// export const WeatherProvider : React.FC = ( props  ) => {
//   const [weather, setWeather] = useState<WeatherData>({})

//   return (
//     <WeatherContext.Provider value = { {weatherData: weather, setWeatherData : setWeather} } >
//       {props.children}
//     </WeatherContext.Provider>
//   )
// }



