/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Aireador } from "./Aireador"

const dialog = {
  width: "100%",
  height: "200%",
  backgroundColor: "rgba(0,0,0,0.2)",
  position: "fixed",
  zIndex: 10,
  marginTop: "-20%",
}

const content = {
  height: "90%",
  width: "90%",
  position: "fixed",
  top: "5%",
  left: "50%",
  transform: "translateX(-50%)",
  overflowY: "auto",
  overflowX: "hidden",
  zIndex: 20,
}

export const Dialog = ({
  children,
  onOpen,
  onClose,
  id,
  od,
  orp,
  Aireadores,
}) => {
  useEffect(() => {}, [Aireadores])

  return (
    <dialog
      id='dialog'
      open={onOpen}
      className='border-0 text-white'
      style={dialog}
    >
      <button
        className='border-0 opacity-0'
        style={dialog}
        onClick={onClose}
      ></button>
      <div className='bg-dark rounded-4' style={content}>
        <div className='p-1'>
          <button
            className='text-end float-end col-1 border-0 bg-none'
            onClick={onClose}
          >
            <img
              className='invert col-5'
              src='https://img.icons8.com/?size=256&id=pVOup2X72g9B&format=png'
            />
          </button>
        </div>
        <div className='col-12 row mx-auto p-2 ps-5 pe-5 pb-5'>
          <div className='col-8'>
            <h1 className='fs-2 mb-0'>Laguna {id}</h1>
            <h2 className='fs-5 text-secondary fw-light'>Aireadores</h2>
          </div>
          <div className='col-4 text-end fw-bold'>
            <p className='m-0'>Consumo Laguna:</p>
            <p className='m-0'>OD: {od}</p>
            <p className='m-0'>ORP: {orp}</p>
          </div>
          <div className='bg-secondary rounded-4 p-4 mt-5 row row-cols-6 mx-auto'>
            {Aireadores.length === 0 ? (
              <p className='col-12 fs-3 fw-light text-center'>
                No hay aireadores asociados a la laguna...
              </p>
            ) : (
              Aireadores.map((aireador) => (
                <Aireador
                  key={aireador.id}
                  id={aireador.id}
                  frecuencia={aireador.frecuencia}
                  encendido={aireador.encendido}
                ></Aireador>
              ))
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}
