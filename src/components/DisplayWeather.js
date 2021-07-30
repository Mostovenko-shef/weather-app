import React, { useState, useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// import GetGraph from '../GetGraph';




function DisplayWeather(props) {
    const {data} = props;
    const { t, i18n } = useTranslation('');
    useEffect(()=> {
    },[])

    function deleteForm(id) {
        let form = form.filter((form) => form.id !== id)
    }


    return <div className="displayweather">
        <div className="maincard">
           <span className="cardtitle">
              {data.name}, {data.sys.country}
              <span>{data.weather[0].description}</span>
              <a href="http://openweathermap.org/img/wn/${icon}@2x.png"></a>
              <button className="krest" onClick={() => deleteForm(data.id)}>x</button>
           </span>
               <h4 className="cardsubtitle">
               {new Date().toLocaleDateString()}
               </h4>
               {/* <GetGraph forecast3hrs={this.props.forecast3hrs} /> */}
           <div className="section">
                <div className="temp">
                <h3>{Math.floor(data.main.temp - 273.15)}   <sup><sup>o</sup>C | <sup>o</sup>F</sup></h3>
                <span className="feels">
                    {t('Feels like')}: {Math.floor(data.main.feels_like - 273.15)} 
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
