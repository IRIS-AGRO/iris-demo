import { Carousel } from "./Carousel"
import { CarouselCard } from "./CarouselCard"
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
      <Carousel onRight={handleRightSlide} onLeft={handleLeftSlide}>
        {data.slice(startIndex, startIndex + itemsPerPage).map((num) => (
          <CarouselCard key={num} num={num} />
        ))}
      </Carousel>
      <div className="col-4 p-5">
        <button className="bg-btn border-0 col-12 p-4 text-white rounded-4 fs-3 press">
            Ver Lagunas
        </button>
      </div>
      {/* Aqui pobe ek gradrfguhdfsgsdfjdsfgdfagadfg */}
    </div>
  )
}
