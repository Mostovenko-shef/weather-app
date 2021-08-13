import React from "react";
// import { Chart } from 'chart.js'
// import 'chartjs-adapter-luxon'
// import { Line } from "react-chartjs-2";
import { 
    Label, 
    Line, 
    LineChart, 
    XAxis, 
    YAxis, 
    ResponsiveContainer, 
    CartesianGrid,
} from "recharts";
// import './components/Weather'
// import { APIKEY } from "./components/Weather";

const Chart = ({ data }) => {
    return (
      <ResponsiveContainer width={"100%"} height={51}>
        <LineChart 
            width={320} 
            height={51} 
            data={data}
        >
            <CartesianGrid/>
            <XAxis type="number" dataKey="time" domain={["dataMin", "dataMax"]}>
                <Label
                    value={"Time"}
                    position="bottom"
                    style={{ textAnchor: "middle" }}
                />
            </XAxis>
            <YAxis>
                <Label 
                    value= {"Temperature °C"}
                    position="left"
                    angle={-90}
                    style={{ textAnchor: "middle" }}
                />        
            </YAxis>
            <Line  
                dataKey="temperature"
                name="Temperature"
                unit={"°C"}
                dot={false}
                type={"natural"}
            />
        </LineChart>
      </ResponsiveContainer>      
    );
};

export default Chart;



/* //     const [form, setForm] = useState({ city:"" });


//     // const hourlWeather = fetch(`api.openweathermap.org/data/2.5/onecall?q=${form.city}&exclude={part}&appid=${APIKEY}`)
//     return <div>
        // <Line */
        /* //   data={{ */
//               labels: [],
//               datasets: [
//                   {
//                       background: [

//                       ],
//                       borderColor: [
//                         '#FF715B'
//                       ],
//                       borderWidth: 1,
//                       lineTension: 3,
//                   },
                  
//               ],
 
//           }}
//           height={101}
//           width={320}
//           options={{
//               maintainAspectRatio: true,
//               scales: {
//                     yAxes: [
//                         {
//                             ticks: {
//                               beginAtZero: true,
//                             }
//                         }
//                     ],
//                     xAxis: [{
//                         labels: {
//                             format: ''
//                         },
//                         type: 'line',
//                         time: {
//                             unit: 'hour'
//                         },
//                         tickInterval: 36e5,
//                     }]
//                 }
//             }}
//         />
//     </div>
// }


// export default LineChart;


