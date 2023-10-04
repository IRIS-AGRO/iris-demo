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
      <div className='text-start bg-dark text-center p-2 pt-2 pb-5 rounded-4 card-in press row mx-auto'>
        <span
          className={`form-check form-switch p-2 pe-3 pb-4 ${
            encendido ? 'text-success' : 'text-danger'
          }`}
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'right',
            marginLeft: 7,
            fontSize: 20,
          }}
        >
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </span>
        <h1 className='fs-4 fw-normal text-white'>Aireador:</h1>
        <h1 className='fs-5 fw-light text-white large-text'>{id}</h1>
        <h1 className='fs-5 fw-light text-secondary'>
          Consumo: {frecuencia} kw/h
        </h1>
      </div>
    </div>
  );
};
