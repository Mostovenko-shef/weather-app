import React, { useState, useEffect } from 'react'
// import LineChart from './LineChart';

function DisplayWeather(props) {
    const {data} = props;
    const [feels_like,setFeelsLike] = useState('');
    useEffect(()=> {
    },[])
    // const iconurl = "http://openweathermap.org/img/wn/10d@2x.png" + `${data.weather[0].icon}` + ".png";

    // class UnitsToggle extends Component {
    //     handleToggle = (e) => {
    //       this.props.onUnitChange({
    //         unit: e.target.checked ? "f" : "c"
    //       });
    //     };

    // }

    return <div className="displayweather">
        <div className="maincard">
           <span className="cardtitle">
               {data.name}
               <h4 className="cardsubtitle">
               {new Date().toLocaleDateString()}
               </h4>
           </span>
           {/* <LineChart/> */}
           <h3>{Math.floor(data.main.temp - 273.15)}   <sup><sup>o</sup>C | <sup>o</sup>F</sup></h3>

           {/* <img src={iconurl} className="weather-icon"/> */}
           <span className="feels">
               Feels like: {Math.floor(data.main.feels_like - 273.15)} 
           </span>
           <div className="section">
                <p><b>Wind:</b> {Math.floor((data.wind.speed *18)/5)} m/s</p>
                <p><b>Humidity:</b> {data.main.humidity} % </p>
                <p><b>Pressure:</b> {data.main.pressure} Pa</p>
            </div>
        </div>
      </div>   
}

export default DisplayWeather
