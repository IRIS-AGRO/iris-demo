import { useState } from 'react'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import './main.css'
import { Dashboard } from './components/Dashboard'
import { Card } from './components/Card'
import { Carousel } from './components/Carousel'
import { CarouselCard } from './components/CarouselCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar></Navbar>
      <Dashboard>
        <Carousel>
          <CarouselCard></CarouselCard>
          <CarouselCard></CarouselCard>
        </Carousel>
      </Dashboard>
    </Container>
  )
}

export default App
