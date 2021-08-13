import React, {useState, Component} from 'react'
import { useTranslation, Trans } from 'react-i18next'
import DisplayWeather from './DisplayWeather';
import LanguageSwitcher from './LanguageSwitcher';



const lngs = {
    en: { nativeName: 'EN' },
    ru: { nativeName: 'RU' }, 
    ua: { nativeName: 'UA' }
};

function Weather() {
    const APIKEY = '7152601474c1cf9265871aef6014d011';
    

    const { t, i18n } = useTranslation('');
    const [form, setForm] = useState({ city:"" });
    const [weather, setWeather] = useState([]);


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
                  placeholder={t("City name...")}
                  onChange={e => handleChange(e)}
                />
                &nbsp;&nbsp;&nbsp;
                <button className="getweather" onClick={e => weatherData(e)}>
                {t('Add')}
                </button>
                &nbsp;&nbsp;&nbsp;
                <span className="options">
                    <LanguageSwitcher/>
                </span>
            </form>
            {weather.data != undefined ? <div><DisplayWeather data={weather.data}/></div> : null}
        </div>
    )
}


export default Weather
