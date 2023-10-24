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

const consumo = [15,22,44,55,66,53]
const tiempo = ['00:00', '01:00', '02:00', '03:00','04:00','05:00']

const data = {
  labels: tiempo,
  datasets: [
    {
      label: 'Consumo',
      data: consumo,
      tension: 0.5,
      fill: true,
      borderColor: 'rgba(225, 115, 34, 1)',
      backgroundColor: 'rgba(225, 115, 34, 0.5)',
      pointRadius: 6,
      pointBorderColor: 'rgba(63, 65, 77)',
      pointBackgroundColor: 'rgba(225, 115, 34, 1)'
    }
  ]
}

const options = {}

export const LineChart = () => {
  return <Line data={data} options={options}/>
}