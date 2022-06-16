import { Chart, Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'





export const Diagram = (type = 'bar', labels, data) => {
    console.log(labels)
    console.log(data)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
        responsive: true,
    
    }
    
    const d = {
        labels,
        datasets: [
            {
                label: "Dataset",
                data,
                borderColor: 'black',
                backgroundColor: 'blue'
            }
        ]
    }

    if (!labels || !data){
        return(
            <></>
        )
    }

    return(
        <>
        {type === "bar" ? 
        <Bar options = {options} data = {d}></Bar> :
        <Line options = {options} data = {d}></Line>
        }
        </>
    )

}

