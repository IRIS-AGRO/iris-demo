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

  const itemsToShow = Math.min(itemsPerPage, lagunas.length - startIndex)

  const handleRightSlide = () => {
    const newStartIndex = startIndex + itemsPerPage

    if (newStartIndex < lagunas.length) {
      setStartIndex(newStartIndex)
    }
  }

  const handleLeftSlide = () => {
    const newStartIndex = startIndex - itemsPerPage

    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex)
    }
  }

  return (
    <div className='row bg-dark text-white pt-4 pb-4'>
      <div>
        <h1 className='mb-0 ps-5'>Lagunas con Prioridad</h1>
        <h2 className='fs-5 ps-5 text-secondary fw-light'>
          Lista de lagunas con problemas.
        </h2>
      </div>
      <Carousel
        onRight={handleRightSlide}
        onLeft={handleLeftSlide}
        ableToSlide={ableToSlide}
      >
        {Array.from({ length: itemsToShow }).map((_, index) => {
          const lagunaIndex = startIndex + index
          const laguna = lagunas[lagunaIndex]
          if (laguna) {
            return (
              <Laguna
                key={laguna.id}
                id={laguna.id}
                orp={laguna.orp}
                od={laguna.od}
                cantidad={laguna.aireadores.length}
                Aireadores={laguna.aireadores}
              />
            )
          } else {
            return <div key={index} style={{ width: "100%" }}></div>
          }
        })}
      </Carousel>
      <div className='col-4 p-4'>
        <button
          className='bg-btn border-0 col-12 p-3 text-white rounded-4 fs-3 press'
          onClick={() => navigate("/lagunas")}
        >
          Ver Lagunas
        </button>
        <div className='pt-3'>
          <button className='bg-success border-0 col-12 p-3 text-white rounded-4 fs-3 press'>
            Otro Botón
          </button>
        </div>
      </div>
      <div className='pt-4'>
        <h1 className='mb-0 ps-5'>Gráfico</h1>
        <h2 className='fs-5 ps-5 text-secondary fw-light'>
          Va a tener info del consumo. (Muestra)
        </h2>
      </div>
      <ChartContainer>
        <LineChart option={selected}></LineChart>
      </ChartContainer>
      <div className='col-3 row text-center'>
        <div className='p-5 col-12'>
          <label className='pb-2 fs-5'>Seleccionar Intervalo:</label>
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
            El gráfico de la izquierda representa datos ficticios sobre el
            consumo de lagunas. Aunque actualmente es ilustrativo, en la
            realidad serviría para gestionar y comprender mejor la información
            temporal del consumo de lagunas.
          </p>
        </div>
      </div>
    </div>
  )
}
