import React, { useState, useEffect, useContext } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import LineChart from '../LineChart';
import './tempSwap';
import { convertToCelsius, convertToFahrenheit } from './tempSwap';


function DisplayWeather(props) {
    const {data} = props;
    const { t, i18n } = useTranslation('');
    useEffect(()=> {
    },[])

    function deleteForm(id) {
        let form = form.filter((data) => data.id !== id)
    }
   
    // const temp = Math.floor(data.main.temp - 273.15);
    const tempLike = Math.floor(data.main.feels_like - 273.15);


    return <div className="displayweather">
        <div className="maincard">
           <span className="cardtitle">
              {data.name}, {data.sys.country}
              <span>{data.weather[0].description}</span>
              <button className="krest" onClick={() => deleteForm(data.id)}>x</button>
           </span>
               <span className="cardsubtitle">
               {new Date().toLocaleDateString()}
               </span>
               <LineChart/>
           <div className="section">
                <div className="temp">
                <h3> {Math.floor(data.main.temp - 273.15)}   
                    <sup><button className="tempCel" onClick = {convertToFahrenheit}>&deg;C</button> 
                    | 
                    <button className="tempFahr" onClick = {convertToCelsius}>&deg;F</button></sup>
                </h3>
                <span className="feels">
                    {t('Feels like')}: {tempLike} 
                </span>
                </div>
                <div className="characteristics">
                <p><b>{t('Wind')}:</b> {Math.floor((data.wind.speed *18)/5)} {t('m/s')}</p>
                <p><b>{t('Humidity')}:</b> {data.main.humidity} % </p>
                <p><b>{t('Pressure')}:</b> {data.main.pressure} {t('Pa')}</p>
                </div>
            </div>
        </div>
      </div>   
}

export default DisplayWeather
