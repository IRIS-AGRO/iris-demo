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
    <div className='row bg-dark text-white'>
      <Carousel onRight={handleRightSlide} onLeft={handleLeftSlide}>
        {data.slice(startIndex, startIndex + itemsPerPage).map((num) => (
          <CarouselCard key={num} num={num} />
        ))}
      </Carousel>
    </div>
  )
}
