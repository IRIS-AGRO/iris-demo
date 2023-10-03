export const Aireador = ({ id, frecuencia, encendido }) => {
  return (
    <div className='col p-3 border-0'>
      <div className='text-start bg-dark text-center p-2 pt-5 pb-5 rounded-4 card-in press row mx-auto'>
        <h1 className='fs-4 fw-normal text-white'>Aireador:</h1>
        <h1 className='fs-5 fw-light text-white large-text'>{id}</h1>
        <h1 className='fs-5 fw-light text-secondary'>
          Frecuencia: {frecuencia}
        </h1>
        <span>
          {encendido ? (
            <img src='https://img.icons8.com/?size=30&id=FkQHNSmqWQWH&format=png' />
          ) : (
            <img src='https://img.icons8.com/?size=30&id=Zyo5wDjgJxRW&format=png' />
          )}
        </span>
      </div>
    </div>
  )
}
