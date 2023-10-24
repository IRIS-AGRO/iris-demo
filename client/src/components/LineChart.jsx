import { Line } from "react-chartjs-2"
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
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const dataSex = [15,22,44,55]
const tiempo = ['1', '2', '3', '4']

const data = {
  labels: tiempo,
  datasets: [
    {
      label: 'Sexoo',
      data: dataSex,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 5,
      pointBorderColor: 'rgba(255, 99, 132)',
      pointBackgroundColor: 'rgba(255, 99, 132'
    }
  ]
}

const options = {}

export const LineChart = () => {
  return <Line data={data} options={options}/>
}