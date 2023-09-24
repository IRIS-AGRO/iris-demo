export const Laguna = ({ id, od, orp, cantidad }) => {
    return (
        <div className='col p-3 pt-5 pb-5'>
            <div className="bg-secondary p-2 pt-3 pb-3 rounded-4 card-in press row mx-auto">
                <h1 className="fs-3 fw-normal large-text text-white">Laguna: {id}</h1>
                <h1 className="fs-4 fw-light text-secondary">Od: {od}</h1>
                <h1 className="fs-4 fw-light text-secondary">Orp: {orp}</h1>
                <h1 className="fs-4 fw-light text-secondary">Aireadores: {cantidad}</h1>
            </div>
        </div>
    );
};