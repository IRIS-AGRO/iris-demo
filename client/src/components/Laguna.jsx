import { Dialog } from './Dialog'

export const Laguna = ({ id, od, orp, cantidad }) => {
    return (
        <>
            <Dialog></Dialog>
            <button className='col p-3 bg-none border-0'>
                <div className="text-start bg-secondary p-2 pt-3 pb-3 rounded-4 card-in press row mx-auto">
                    <h1 className="fs-4 fw-normal large-text text-white">Laguna: {id}</h1>
                    <h1 className="fs-5 fw-light text-secondary">Od: {od}</h1>
                    <h1 className="fs-5 fw-light text-secondary">Orp: {orp}</h1>
                    <h1 className="fs-5 fw-light text-secondary">Aireadores: {cantidad}</h1>
                </div>
            </button>
        </>
    );
};