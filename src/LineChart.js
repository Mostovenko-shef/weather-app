import React, {useState, Component} from "react";
import { Chart } from 'chart.js'
import 'chartjs-adapter-luxon'
import { Line } from "react-chartjs-2";
import { xAxis } from "recharts";
import './components/Weather'
// import { APIKEY } from "./components/Weather";




const LineChart = () => {
    const [form, setForm] = useState({ city:"" });


    // const hourlWeather = fetch(`api.openweathermap.org/data/2.5/onecall?q=${form.city}&exclude={part}&appid=${APIKEY}`)
    return <div>
        <Line
          data={{
              labels: [],
              datasets: [
                  {
                      background: [

                      ],
                      borderColor: [
                        '#FF715B'
                      ],
                      borderWidth: 1,
                      lineTension: 3,
                  },
                  
              ],
 
          }}
          height={101}
          width={320}
          options={{
              maintainAspectRatio: true,
              scales: {
                    yAxes: [
                        {
                            ticks: {
                              beginAtZero: true,
                            }
                        }
                    ],
                    xAxis: [{
                        labels: {
                            format: ''
                        },
                        type: 'line',
                        time: {
                            unit: 'hour'
                        },
                        tickInterval: 36e5,
                    }]
                }
            }}
        />
    </div>
}


export default LineChart;
