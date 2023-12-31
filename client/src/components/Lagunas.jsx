import { useEffect} from "react"
import { Laguna } from "./Laguna"
import { useLagunasStore } from "../store/lagunas"
import { Dialog } from './Dialog'

export const Lagunas = ({ children }) => {
  const fetchlagunas = useLagunasStore((state) => state.fetchLagunas)
  const lagunas = useLagunasStore((state) => state.lagunas)

  useEffect(() => {
    fetchlagunas()
  }, [])

  return (
  <div className='col-12 row row-cols-4 ms-0 me-0'>
    {lagunas.map(laguna => (
        <Laguna id={laguna.id} name={laguna.name} orp={laguna.orp} od={laguna.od} cantidad={laguna.aireadores.length} Aireadores={laguna.aireadores}/>
    ))}
  </div>
  )
}
