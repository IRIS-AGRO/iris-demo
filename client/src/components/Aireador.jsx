export const Aireador = ({ id, frecuencia }) => {
    return (
        <div className='col p-3 border-0'>
            <div className="text-start bg-dark text-center p-2 pt-5 pb-5 rounded-4 card-in press row mx-auto">
                <h1 className="fs-4 fw-normal text-white">Airedor: {id}</h1>
                <h1 className="fs-5 fw-light text-secondary">Frecuencia: {frecuencia}</h1>
            </div>
        </div>
    );
};