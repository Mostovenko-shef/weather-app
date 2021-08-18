import React, { useEffect, Component, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import LineChartExample from './chart';
import CanvasJSReact from '../canvasjs.react';
import './tempSwap';
import { convertToCelsius, convertToFahrenheit } from './tempSwap';
import moment from 'moment';




function DisplayWeather(props) {
    const {data} = props;
    const { t, i18n } = useTranslation('');
    useEffect(()=> {
    },[])

    function deleteForm(id) {
        let form = form.filter((data) => data.id !== id)
    }
   

    const tempLike = Math.floor(data.main.feels_like - 273.15);


    const renderWeatherIcon = data.weather.map(item => {
          return <img src={`http://openweathermap.org/img/w/${item.icon}.png`} />;
    });

    const DATE_OPTIONS = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'long', 
        hour:'numeric', 
        minute:'numeric', 
        hour12: false
    };


    return <div className="displayweather">
        <div className="maincard">
           <span className="cardtitle">
              <div className="gorod">{data.name}, {data.sys.country} </div>
              <span><div className="picture">{renderWeatherIcon}</div> <div className="pogoda">{data.weather[0].description}</div></span>
              <button className="krest" onClick={() => deleteForm(data.id)}>Х</button>
           </span>
            <span className="cardsubtitle">
              {new Date().toLocaleDateString('en-US', DATE_OPTIONS)}
            </span>
            <LineChartExample/>
           <div className="section">
                <div className="temp">
                <h3> +{Math.floor(data.main.temp - 273.15)}   
                    <sup><button className="tempCel" onClick = {convertToFahrenheit}>°C</button> 
                    | 
                    <button className="tempFahr" onClick = {convertToCelsius}>°F</button></sup>
                </h3>
                <span className="feels">
                    {t('Feels like')}: +{tempLike} °C 
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
