import { useEffect } from "react"

const of = {
  overflow: "hidden",
}

export const Carousel = ({ children, onRight, onLeft, ableToSlide }) => {
  
  useEffect(() => {
    
  }, [ableToSlide])

  const handleSlide = (side) => {
    if (ableToSlide === true) {
      side()
    }
  }

  //console.log(ableToSlide)

  return (
    <div className='ms-0 me-0 col-8 row pt-3' style={of}>
      <button
        className='col-1 bg-dark border-0'
        onClick={() => handleSlide(onLeft)}
      >
        <img
          className='col-12 invert'
          src='https://img.icons8.com/?size=1000&id=sbc7OUEFZIVS&format=png'
        />
      </button>
      <div className='col-10 row row-cols-2'>{children}</div>
      <button
        className='col-1 bg-dark border-0'
        onClick={() => handleSlide(onRight)}
      >
        <img
          className='col-12 invert'
          src='https://img.icons8.com/?size=1000&id=gllDEJ9mWQZd&format=png'
        />
      </button>
    </div>
  )
}
