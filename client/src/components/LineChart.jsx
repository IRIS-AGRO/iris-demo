import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { useConsumoStore } from "../store/consumo"

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const LineChart = () => {
  const [dataSet, setDataSet] = useState([])
  const [timeLabels, setTimeLabels] = useState([])
  const consumo = useConsumoStore((state) => state.consumo)
  const fetchConsumo = useConsumoStore((state) => state.fetchConsumo)

  useEffect(() => {
    const interval = setInterval(() => {
      fetchConsumo()
      setDataSet((prevData) => [...prevData, consumo])

      setTimeLabels((prevLabels) => {
        const currentTime = new Date().toLocaleTimeString()
        return [...prevLabels, currentTime]
      })
    }, 1)

    return () => {
      clearInterval(interval)
    }
  }, [consumo])

  console.log(consumo)

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: "Consumo",
        data: dataSet,
        tension: 0.5,
        fill: true,
        borderColor: "rgba(225, 115, 34, 1)",
        backgroundColor: "rgba(225, 115, 34, 0.5)",
        pointRadius: 0,
        pointBorderColor: "rgba(63, 65, 77)",
        pointBackgroundColor: "rgba(225, 115, 34, 1)",
      },
    ],
  }

  const options = {
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }

  return <Line data={data} options={options} />
}
