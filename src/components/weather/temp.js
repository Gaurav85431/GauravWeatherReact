import { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './weatherCard';

const Temp = () => {

  const [searchValue, setSearchValue] = useState("Patna");
  const [tempInfo, setTempInfo] = useState({});

  /** fetch the api */

  const getWeatherInfo = async () => {

    try {
      let url = `
      https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2ac4f466fb1a66ce25822eb9bc6f28d0`;

      const res = await fetch(url);
      const data = await res.json();

      // console.log(data);


      // data ke under main hai aur main ke under temp, pressure, humidity le rhe hai
      const { temp, humidity, pressure } = data.main;
      // console.log(temp);


      // hm destructuring and name change v saath hi kar rhe hain

      // 0th index pr weather ke main hia
      const { main: weathermood } = data.weather[0];

      const { name } = data;
      const { speed } = data.wind;

      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        speed,
        name,
        country,

        sunset
      };
      setTempInfo(myNewWeatherInfo);





    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    getWeatherInfo();
  }, [])






  return (
    <>
      <div className='wrap'>
        <div className='search'>

          <input type='search' placeholder='search'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>

        </div>

      </div>

      {/* -our temp card  */}

      <WeatherCard tempInfo={tempInfo} />

    </>

  )


}

export default Temp;