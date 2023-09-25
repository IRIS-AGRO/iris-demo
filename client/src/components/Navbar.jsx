import logo from "../assets/logo.png"
import { useLocation, Navigate } from "react-router-dom"

const z = {
  zIndex: -10
}

export const Navbar = () => {
  const location = useLocation()
  const isOnLagunasPage = location.pathname === "/lagunas"


  return (
    <nav className='row bg-dark text-center p-3' style={z}>
      <div className='col-5 text-start'>
        {isOnLagunasPage && (
          <button className='border-0 bg-dark col-1' href='/user'>
            <img
              className='col-12 invert'
              src='https://img.icons8.com/?size=256&id=pVOup2X72g9B&format=png'
              draggable='false'
            />
          </button>
        )}
      </div>
      <a href='/' className='col-2'>
        <img className='col-7' src={logo} draggable='false' />
      </a>
      <div className='col-5 text-end'>
        <button className='border-0 bg-dark col-1'>
          <img
            className='col-12 invert'
            src='https://img.icons8.com/pulsar-line/256/settings.png'
            draggable='false'
          />
        </button>
        <button className='border-0 bg-dark col-1' href='/user'>
          <img
            className='col-12 invert'
            src='https://img.icons8.com/?size=256&id=AZazdsitsrgg&format=png'
            draggable='false'
          />
        </button>
        <button className='border-0 bg-dark col-1' href='/user'>
          <img
            className='col-12 invert'
            src='https://img.icons8.com/?size=256&id=UJnkuFxctx6X&format=png'
            draggable='false'
          />
        </button>
      </div>
    </nav>
  )
}
