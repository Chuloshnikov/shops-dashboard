import React from 'react'
import ReactApexChart from 'react-apexcharts';
import styles from './Analytics.module.css';

const Analytics = () => {
  
  const data = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#BE70FA', '#FE919D', '#FFCA71']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1,
        colors: ['#BE70FA', '#FE919D', '#FFCA71']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      },
    },
  
  
  };
  
  return (
    <div className={styles.Analytics}>
        <h1>Analytics</h1>
        <ReactApexChart options={data.options} series={data.series} type="bar" height={520} />
    </div>
  )
}

export default Analytics;