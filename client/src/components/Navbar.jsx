import logo from '../assets/logo.png'

export const Navbar = () => {
    return (
        <nav className="row bg-dark text-center p-3">
            <div className="col-5">
                {/* Seccion Libre */}
            </div>
            <a href="/" className="col-2">
                <img className="col-7" src={logo} draggable="false"/>
            </a>
            <div className='col-5 text-end'>
                <button className='border-0 bg-dark col-1'>
                    <img className="col-12 invert" src="https://img.icons8.com/pulsar-line/256/settings.png" draggable="false"/>
                </button>
                <button className="border-0 bg-dark col-1" href="/user">
                    <img className="col-12 invert" src="https://img.icons8.com/pulsar-line/256/name.png" draggable="false"/>
                </button>
            </div>
        </nav>
    )
};
