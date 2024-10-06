import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import clear_day from '../assets/clear_day.png'
// import clear_night from '../assets/clear_night.png'
// import few_clouds_day from '../assets/few_clouds_day.png'
// import few_clouds_night from '../assets/few_clouds_night.png'
// import mist from '../assets/mist.png'
// import rain_day from '../assets/rain_day.png'
// import rain_night from '../assets/rain_night.png'
// import scattered_clouds from '../assets/scattered_clouds.png'
// import shower_rain_day from '../assets/shower_rain_day.png'
// import shower_rain_night from '../assets/shower_rain_night.png'
// import snow from '../assets/snow.png'
// import thuderstorm_day from '../assets/thuderstorm_day.png'
// import thunderstorm_night from '../assets/thunderstorm_night.png'


const Weather = () => {

    const [weatherData, setWeatherData] = useState(false);


    const search = async (city)=>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
                console.log(data);
                setWeatherData({
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    temperature: Math.floor(data.main.temp),
                    location: data.name
                })
        } catch (error) {
            
        }
    }
 
    useEffect(() => {
        search("Chicago")
    }, []) 


  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt="" />
        </div>
        <img src={clear_day} alt="" className='weather-icon'/>
        <p className='temperature'>68°F</p>
        <p className='location'>Chicago</p>
        <div className="weather-data">
         <div className="col">
              <img src={humidity_icon} alt="" className='metrics'/>
              <div>
                  <p>50 %</p>
                  <span>Humidity</span>
              </div>
            </div>
         <div className="col">
              <img src={wind_icon} alt="" className='metrics'/>
              <div>
                  <p>12 mp/h</p>
                  <span>Wind Speed</span>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Weather    
