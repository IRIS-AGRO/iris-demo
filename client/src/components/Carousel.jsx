const of = {
    overflow: 'hidden'
}

export const Carousel = ({ children }) => {
  return (
    <div className="ms-0 pt-5 pb-5 col-8 row" style={of}>
        <button className="col-1 bg-dark border-0">
            <img className="col-12 invert" src="https://img.icons8.com/?size=1000&id=sbc7OUEFZIVS&format=png" />
        </button>
        <div className="col-10 row">
            {children}
        </div>
        <button className="col-1 bg-dark border-0">
            <img className="col-12 invert" src="https://img.icons8.com/?size=1000&id=gllDEJ9mWQZd&format=png" />
        </button>
    </div>
  );
}
