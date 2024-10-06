import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import clear_day from '../assets/clear_day.png'
import clear_night from '../assets/clear_night.png'
import few_clouds_day from '../assets/few_clouds_day.png'
import few_clouds_night from '../assets/few_clouds_night.png'
import mist from '../assets/mist.png'
import rain_day from '../assets/rain_day.png'
import rain_night from '../assets/rain_night.png'
import scattered_clouds from '../assets/scattered_clouds.png'
import shower_rain_day from '../assets/shower_rain_day.png'
import shower_rain_night from '../assets/shower_rain_night.png'
import snow from '../assets/snow.png'
import thunderstorm_day from '../assets/thunderstorm_day.png'
import thunderstorm_night from '../assets/thunderstorm_night.png'


const Weather = () => {

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);
    const allIcons = {
        "01d": clear_day,
        "01n": clear_night,
        "02d": few_clouds_day,
        "02n": few_clouds_night,
        "50d": mist,
        "50n": mist,
        "10d": rain_day,
        "10n": rain_night,
        "03d": scattered_clouds,
        "03n": scattered_clouds,
        "09d": shower_rain_day,
        "09n": shower_rain_night,
        "13d": snow,
        "13n": snow,
        "11d": thunderstorm_day,
        "11n": thunderstorm_night

    }


    const search = async (city)=>{
        if(city === ""){
            alert("Enter a valid City")
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

                console.log(data);
                const icon = allIcons [data.weather[0].icon] || clear_day;
                setWeatherData({
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    temperature: Math.floor(data.main.temp),
                    location: data.name,
                    icon: icon
            
                })
        } catch (error) {
            setWeatherData(false);
            console.error("Error fetching Weather Data");
            
        }
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            search(inputRef.current.value);
        }
    };

    
 
    useEffect(() => {
        search("Chicago")
    }, []); 


  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='Search' onKeyDown={handleKeyDown}/>
            <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature} °F</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
         <div className="col">
              <img src={humidity_icon} alt="" className='metrics'/>
              <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
              </div>
            </div>
         <div className="col">
              <img src={wind_icon} alt="" className='metrics'/>
              <div>
                  <p>{weatherData.windSpeed} mp/h</p>
                  <span>Wind Speed</span>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Weather    
