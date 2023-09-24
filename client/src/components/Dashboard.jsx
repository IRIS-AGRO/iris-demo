import { Carousel } from "./Carousel"
import { Laguna } from "./Laguna"
import { ChartContainer } from "./ChartContainer"
import { useState } from "react"

export const Dashboard = () => {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 2

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
        <h1 className="mb-0 ps-5">Lagunas con Prioridad</h1>
        <h2 className="fs-5 ps-5 text-secondary fw-light">Lista de lagunas con problemas psicologicos.</h2>
      </div>
      <Carousel onRight={handleRightSlide} onLeft={handleLeftSlide}>
        {data.slice(startIndex, startIndex + itemsPerPage).map((num) => (
          <Laguna key={num} num={num} />
        ))}
      </Carousel>
      <div className="col-4 p-5">
        <button className="bg-btn border-0 col-12 p-4 text-white rounded-4 fs-3 press">
            Ver Lagunas
        </button>
      </div>
      <div className="pt-4">
        <h1 className="mb-0 ps-5">Grafico</h1>
        <h2 className="fs-5 ps-5 text-secondary fw-light">Va a tener info del consumo. (Muestra)</h2>
      </div>
      <ChartContainer></ChartContainer>
    </div>
  )
}
