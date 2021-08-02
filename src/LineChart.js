import React from "react";
import { Line } from "react-chartjs-2";
import './components/Weather'



const LineChart = () => {
    return <div>
        <Line
          data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [
                  {

                      data: [1,2,3,4,5,3],
                      background: [

                      ],
                      borderColor: [
                        '#FF715B'
                      ],
                      borderWidth: 1
                  },
              ],
          }}
          height={101}
          width={320}
          options={{
              maintainAspectRatio: false,
              scales: {
                  yAxes: [
                      {
                          ticks: {
                              beginAtZero: false,
                          }
                      }
                  ]
              }
          }}
        />
    </div>
}


export default LineChart;
