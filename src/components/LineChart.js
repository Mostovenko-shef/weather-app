import React, {Component} from 'react'
import Plot from 'react-plotly.js'

class LineChart extends Component {
    render() {
        return (
            <Plot
                data={[
                 {   
                    x: ['12:17', '13"17', '14:17', '15:17', '16:17', '17:17', '18:17', '20:17'],
                    y: [10, 11, 12, 13, 14, 15],
                    type: 'scatter'
                 }
                ]}    
                layout= {{width:320, height: 51, title: 'line' }}
            />
        )
    }
}

export default LineChart;
