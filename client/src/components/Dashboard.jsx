import { Carousel } from "./Carousel"
import { Laguna } from "./Laguna"
import { ChartContainer } from "./ChartContainer"
import { useState } from "react"
import { LineChart } from "./LineChart"
import { useNavigate } from "react-router-dom"
import { useLagunasStore } from "../store/lagunas"
import { useEffect } from "react"

export const Dashboard = () => {
  const fetchlagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)

  const [ableToSlide, setAbleToSlide] = useState(true)

  useEffect(() => {
    fetchlagunas()

    if (lagunas.length <= 2) {
      setAbleToSlide(false)
    } else {
      setAbleToSlide(true)
    }

    console.log(lagunas.length)
  }, [lagunas.length])

  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 2

  const navigate = useNavigate()

  const options = [
    { value: "1", text: "Hora ☁️" },
    { value: "2", text: "Milisegundo 🍏" },
    { value: "3", text: "Siglo 🍌" },
    { value: "4", text: "Chillion de Anios 🥝" },
  ]

  const [selected, setSelected] = useState(options[0].value)

  const handleChange = (event) => {
    setSelected(event.target.value)
  }

  const data = ["1", "2", "3", "4", "5", "6", "7", "8"] //SOY TONY STARK

  const handleRightSlide = () => {
    const newStartIndex = startIndex + itemsPerPage

    if (newStartIndex >= data.length) {
      setStartIndex(0)
    } else {
      setStartIndex(newStartIndex)
    }
  }

  const handleLeftSlide = () => {
    const newStartIndex = startIndex - itemsPerPage

    if (newStartIndex < 0) {
      setStartIndex(data.length - itemsPerPage)
    } else {
      setStartIndex(newStartIndex)
    }
  }

  return (
    <div className='row bg-dark text-white pt-4 pb-4'>
      <div>
        <h1 className='mb-0 ps-5'>Lagunas con Prioridad</h1>
        <h2 className='fs-5 ps-5 text-secondary fw-light'>
          Lista de lagunas con problemas psicologicos.
        </h2>
      </div>
      <Carousel
        onRight={handleRightSlide}
        onLeft={handleLeftSlide}
        ableToSlide={ableToSlide}
      >
        {lagunas.slice(startIndex, startIndex + itemsPerPage).map((laguna) => (
          <Laguna
            id={laguna.id}
            orp={laguna.orp}
            od={laguna.od}
            cantidad={laguna.aireadores.length}
          />
        ))}
      </Carousel>
      <div className='col-4 p-5'>
        <button
          className='bg-btn border-0 col-12 p-4 text-white rounded-4 fs-3 press mb-1'
          onClick={() => navigate("/lagunas")}
        >
          Ver Lagunas
        </button>
        <button
          className='bg-success border-0 col-12 p-4 text-white rounded-4 fs-3 press'
          onClick={() => navigate("/lagunas")}
        >
          Otro Boton
        </button>
      </div>
      <div className='pt-4'>
        <h1 className='mb-0 ps-5'>Grafico</h1>
        <h2 className='fs-5 ps-5 text-secondary fw-light'>
          Va a tener info del consumo. (Muestra)
        </h2>
      </div>
      <ChartContainer>
        <LineChart option={selected}></LineChart>
      </ChartContainer>
      <div className='col-3'>
        <div className='p-5'>
          <label className=''>Seleccionar Intervalo:</label>
          <select
            id='select-1'
            className='form-select bg-secondary text-white'
            aria-label='Default select example'
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className='col-12 p-3 pt-0'>
          <p className='bg-secondary rounded-4 p-3 just-text'>
            El gráfico ubicado a la derecha muestra la función esencial al
            proporcionar una representación visual detallada de la información
            relacionada con el consumo global de las lagunas. Este recurso
            gráfico es una herramienta invaluable para la gestión de datos sobre
            el uso de lagunas, ya que permite observar y analizar de diversas
            maneras cómo evoluciona esta información a lo largo del tiempo, lo
            que facilita una toma de decisiones más informada y eficiente.
          </p>
        </div>
      </div>
    </div>
  )
}
