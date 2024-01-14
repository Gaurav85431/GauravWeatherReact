import { useEffect, useState } from "react";


const WeatherCard = ({ tempInfo }) => {

  const [weatherState, setWeatherState] = useState("");


  const {
    temp,
    humidity,
    pressure,
    weathermood,
    speed,
    name,
    country,

    sunset
  } = tempInfo;

  // weather logo of sun/ cloud;;;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState('wi-day-cloudy');

          break;

        case "Haze":
          setWeatherState('wi-fog');

          break;

        case "Clear":
          setWeatherState('wi-day-sunny');

          break;

        default: setWeatherState('wi-day-sunny');
          break;
      }
    }
  })







  // convert second into times:-
  let sec = sunset;
  let date = new Date(sec * 1000);
  // let timeStr = `${{ date.getHours() } : ${ date.getMinutes() }}`;
  let hours = date.getHours();
  let min = date.getMinutes();
  let time = `${hours}: ${min}`;
  console.log(date);


  return (

    <>


      <article className='widget'>

        <div className='weatherIcon'>

          {/* <i className={"wi wi-day-sunny"}></i>   */}
          <i className={`wi ${weatherState}`}></i>

        </div>

        <div className='weatherInfo'>
          <div className='temperature'>

            {/* <span> 25.5 &deg; </span> */}
            <span> {temp}&deg; </span>


          </div>


          <div className='description'>

            <div className='weatherCondition'>
              {weathermood}
            </div>
            <div className='place'>{name}, {country}</div>


          </div>


        </div>
        <div className='date'>{new Date().toLocaleString()}</div>

        {/* our 4th column section */}

        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>

              {/* sunset small logo */}
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='extra-info-leftside'>
                {time} <br />
                Sunset
              </p>

            </div>

            {/*  */}



            <div className='two-sided-section'>

              <p>
                <i className={"wi wi-humidity"}></i>
              </p>

              <p className='extra-info-leftside'>
                {humidity} <br />
                Humidity
              </p>

            </div>
          </div>


          {/*  */}

          <div className='weather-extra-info'>

            <div className='two-sided-section'>

              <p>
                <i className={"wi wi-rain"}></i>
              </p>

              <p className='extra-info-leftside'>
                {pressure} <br />
                Pressure
              </p>

            </div>

            <div className='two-sided-section'>

              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>

              <p className='extra-info-leftside'>
                {speed} <br />
                Speed
              </p>

            </div>

          </div>

        </div>


      </article >


    </>

  )


}
export default WeatherCard;