/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { Laguna } from "./Laguna"
import { useLagunasStore } from "../store/lagunas"

export const Lagunas = () => {
  const fetchlagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)

  useEffect(() => {
    fetchlagunas()
  }, [fetchlagunas])

  return (
    <div className='col-12 row row-cols-4 ms-0 me-0'>
      {lagunas.map((laguna) => (
        <Laguna
          key={laguna.id}
          id={laguna.id}
          orp={laguna.orp}
          od={laguna.od}
          cantidad={laguna.aireadores.length}
          Aireadores={laguna.aireadores}
        />
      ))}
    </div>
  )
}
