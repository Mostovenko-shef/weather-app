import React, {useState, Component} from 'react'
import { render } from 'react-dom'
import DisplayWeather from './DisplayWeather';

function Weather() {
    const APIKEY = '7152601474c1cf9265871aef6014d011';

    const [form, setForm] = useState({ city:"" });
    const [weather, setWeather] = useState([]);


    // componentDidMount() ;{
    //     navigator.geolocation.getCurrentPosition(
    //       function(position) {
    //           console.log(position);
    //       },
    //       function(error) {
    //           console.error('Error code = ' + error.code + ' - ' + error.message);
    //       }
    //     );
    // }


    const weatherData = async (e) => {
        e.preventDefault();
        if (form.city == "") {
            alert ("Add values");
        } else {
            const data  = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`
            )

           .then((res) => res.json())
           .then((data) => data);

            setWeather({data : data});
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name =="city") {
            setForm({...form, city:value})
        }
        console.log(form.city);
    }

    return (
        <div className="weather">
            <form>
                <input 
                  type="text" 
                  name="city" 
                  placeholder="City name..." 
                  onChange={e => handleChange(e)}
                />
                &nbsp;&nbsp;&nbsp;
                <button className="getweather" onClick={e => weatherData(e)}>
                    Add
                </button>
                <select className="droplist">
                    <option>EN</option>
                    <option>UA</option>
                    <option>RU</option>
                 </select>
            </form>
            {weather.data != undefined ? <div><DisplayWeather data={weather.data}/></div> : null}
        </div>
    )
}

export default Weather
