export const Card = ({ children }) => {
    return (
        <div className='p-4'>
            <div className="col-3 bg-secondary p-5 rounded-4">
                {children}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};