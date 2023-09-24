export const Laguna = ({ id, od, orp, cantidad }) => {
    return (
        <div className='col-3'>
            <div className="bg-secondary p-5 rounded-4 card-in">
                <h1 className="fs-3 fw-light">Laguna: {id}</h1>
                <h1 className="fs-3 fw-light">Od: {od}</h1>
                <h1 className="fs-3 fw-light">Orp: {orp}</h1>
                <h1 className="fs-3 fw-light">Aireadores: {cantidad}</h1>
            </div>
        </div>
    );
};