import React from 'react';
import {Chart} from 'chart.js';
import {Line as LineChart} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

Chart.defaults.set('plugins.datalabels', {
    color: '#C5C5C5'
});

function chartData() {

  return {
    labels: ['12:17', '13:17', '14:17', '15:17', '16:17', '17:17', '18:17', '20:17'],
    datasets: [
      {
        data: [10, 12, 14, 15, 14, 10, 11, 14, 13, 8],
        borderColor: '#FF715B',
        backgroundColor: '#FF715B',
        fill: true,
        cubicInterpolationMode: 'monotone',
        pointRadius: 0
    },  
    ],
  }
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            grid: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            } 
        },
        x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
                font: {
                    size: 8
                }
            }
        },
    }    
}

class LineChartExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
        <LineChart 
          data={this.state.data}
          options={options}
          id="myChart"
          width="320" height="71" />
    )
  }
}

export default LineChartExample;