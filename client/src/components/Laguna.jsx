import { Dialog } from "./Dialog"
import { useState } from "react"

export const Laguna = ({ id, od, orp, cantidad, Aireadores }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        id={id}
        od={od}
        orp={orp}
        onOpen={open}
        onClose={handleClose}
        Aireadores={Aireadores}
        lagunaId={id}
      />
      <button className='col p-3 bg-none border-0' onClick={() => setOpen(true)}>
        <div className='text-start bg-secondary p-2 pt-3 pb-3 rounded-4 card-in press row mx-auto'>
          <h1 className='fs-4 fw-normal large-text text-white'>Laguna: {id}</h1>
          <h1 className='fs-5 fw-light text-secondary'>Od: {od}</h1>
          <h1 className='fs-5 fw-light text-secondary'>Orp: {orp}</h1>
          <h1 className='fs-5 fw-light text-secondary'>
            Aireadores: {cantidad}
          </h1>
        </div>
      </button>
    </>
  )
}
