import { useState } from 'react'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import './main.css'
import { Dashboard } from './components/Dashboard'
import { Card } from './components/Card'
import { Routes, Route } from 'react-router-dom'
import { Lagunas } from './components/Lagunas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/lagunas' element={<Lagunas />} />
      </Routes>
    </Container>
  )
}

export default App
