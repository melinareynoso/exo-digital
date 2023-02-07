
import {FaBars, FaTimes} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import '../Styles/App.css';
import logo from '../Images/logoheader.png';




function Navbar(){

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <div id='left'>
                <img src={logo} alt='Logo-header' width="150px"/>
            </div>
            

            <div id='rigth'><nav ref={navRef}>
                <a href="/#!">Inicio</a>
                <a href="/#!">Servicios</a>
                <a href="/#!">Contacto</a>
                {/* eslint-disable-next-line */}
                <BsInstagram id='ig'><a href="https://www.instagram.com/exodigitalcba/" target="_blank" rel="noopener noreferrer"></a></BsInstagram>
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