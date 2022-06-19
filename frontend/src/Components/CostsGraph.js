import { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { GraphContainer } from './Styles/Container.styled'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

function CostsGraph({ costsData }) {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    initializeChart();
  }, [costsData])

  function initializeChart() {
    const labelsArray = [];
    const sumsArray = [];

    costsData.forEach(cost => {
      if (labelsArray.includes(cost.category)) {
        sumsArray[labelsArray.indexOf(cost.category)] += parseInt(cost.sum);
      }
      else {
        labelsArray.push(cost.category);
        sumsArray.push(parseInt(cost.sum));
      }
    })
    setChartLabels(labelsArray);
    setChartData(sumsArray);
  }
  const colorLevel = "0.7"
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'sum of Costs',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132,' + colorLevel + ')', // red
          'rgba(54, 162, 235, ' + colorLevel + ')', // blue
          'rgba(255, 206, 86, ' + colorLevel + ')', // yellow
          'rgba(75, 192, 192, ' + colorLevel + ')', // green
          'rgba(153, 102, 255,' + colorLevel + ')', // purple
          'rgba(255, 159, 64, ' + colorLevel + ')', // orange
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <GraphContainer>
      <Doughnut data={data} style={{ maxHeight: "225px" }} />
    </GraphContainer>
  )
}

export default CostsGraph