import { useLagunasStore } from "../store/lagunas";

export const Aireador = ({ lagunaId, id, frecuencia, encendido }) => {
  const turnOff = useLagunasStore((state) => state.turnOffAireador);
  const turnOn = useLagunasStore((state) => state.turnOnAireador);

  const handleToggleSwitch = () => {
    if (encendido) {
      // Si está encendido, apágalo
      turnOff(lagunaId, id);
    } else {
      // Si está apagado, enciéndelo
      turnOn(lagunaId, id);
    }
  };

  return (
    <div className='col p-3 border-0'>
      <div className='text-start bg-dark text-center p-2 pt-5 pb-5 rounded-4 card-in press row mx-auto'>
        <h1 className='fs-4 fw-normal text-white'>Aireador:</h1>
        <h1 className='fs-5 fw-light text-white large-text'>{id}</h1>
        <h1 className='fs-5 fw-light text-secondary'>
          Consumo: {frecuencia} kw/h
        </h1>
        <span>
          {encendido ? (
            <img
              src='https://img.icons8.com/?size=30&id=FkQHNSmqWQWH&format=png'
              alt='Encendido'
            />
          ) : (
            <img
              src='https://img.icons8.com/?size=30&id=Zyo5wDjgJxRW&format=png'
              alt='Apagado'
            />
          )}
        </span>
        <span
          className={`form-check form-switch lg ${
            encendido ? 'text-success' : 'text-danger'
          }`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
            fontSize: 20,
          }}
        >
          <label className='form-check-label'>
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              checked={encendido}
              onChange={handleToggleSwitch}
            />
            {encendido ? 'Encendido' : 'Apagado'}
          </label>
        </span>
      </div>
    </div>
  );
};
