import {Bar} from "react-chartjs-2";
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["1", "2", "3" , "4", "5", "6", "7", "8", "9", "10" , "11", "12", "13", "14", "15", "16", "17"],
    datasets: [
        {
            label:"mount",
            data:[5000,14000,12000,22000,11000,18000,14000,12000,15000,14000,12000,22000,11000,18000,14000,12000,8000],
            backgroundColor:["aquamarine"],
            
            
        },
    ],
  };

  function ChartBar() {


    return(
        <div style={{backgroundColor:"rgb(12, 12, 12)", marginRight:15, borderRadius:8, height:150}}>
            <Bar data={data}
            
             // width={400}
          // height={150} 
          />
        </div>
    )
  }

  export default ChartBar;