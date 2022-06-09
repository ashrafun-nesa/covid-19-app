import React from 'react';
import './Chart.css'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  

export default function Chartapp() {
     const options = {
        responsive: true,
        
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                display: false,
              },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['', '', '', '', '', '', ''];
      
       const data = {
        labels,
        datasets: [
          {
            // label: 'Dataset 1',
            data: [0, 15, 5, 40, 5, 50, 10],
            borderColor: '#5D8BF1',
            backgroundColor: '#D8D8F0',
            tension : 0.4,
            fill : true
          },
        //   {
        //     label: 'Dataset 2',
        //     data: [10, 5, 30, 10, 50, 10, 50],
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
        ],
      };
  return (
    // <p className='chart'>hello</p>
    <div className='chart'>
        <Line height='90px' width='200px' options={options} data={data} />
    </div>
     
  );
}
