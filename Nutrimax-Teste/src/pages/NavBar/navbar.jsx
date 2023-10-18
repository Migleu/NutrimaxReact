import React from 'react';
import './navbar.css';
import iconapple from '../../assets/icon.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigation = useNavigate();

    return ( <>
    <nav>
    <div className="logo">
    <img src={iconapple} alt=""/>
        <h1>NutriMax</h1>
    </div>
    <div className="links">
        <ul className="nav-itens">
            <li id="inicio" onclick="inicio()"><a href="#">Inicio</a></li>
            <li id="nutri"><a href="#" onclick="nutricionistaPopup()">Nutricionista</a></li>
            <li id="calendario" ><a href="#">Calendario</a></li>
            <li><a href="#" >Dietas</a></li>
        </ul>
    </div>
    <div className="mobile-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <div className="btn">
       <button className="logar" onClick={() => navigation('/login')}>Logar</button>
    </div>
</nav>
    </> );
}
 
export default Navbar;