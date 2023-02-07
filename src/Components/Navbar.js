
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import '../Styles/App.css';


function Navbar(){

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <div>
                <img src='/logoheader.png'/>
            </div>
            

            <div id='rigth'><nav ref={navRef}>
                <a href="/#!">Inicio</a>
                <a href="/#!">Servicios</a>
                <a href="/#!">Contacto</a>
                <a href="/#!">Instagram</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
            
        </header>
        );
}


export default Navbar;