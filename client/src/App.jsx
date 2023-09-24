import { useState } from 'react'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import './main.css'
import { Dashboard } from './components/Dashboard'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar></Navbar>
      <Dashboard>
        
      </Dashboard>
    </Container>
  )
}

export default App
