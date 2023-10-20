import React, {useState} from 'react';
import './navbar.css';
import iconapple from '../../assets/icon.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setredirect}) => {
    const navigation = useNavigate();

    return ( <>
    <nav>
    <div className="logo">
    <img src="https://cdn-icons-png.flaticon.com/512/1880/1880204.png" alt=""/>
        <h1>Nutri<span>Max</span></h1>
    </div>
    <div className="links">
        <ul className="nav-itens">
            <li id="inicio" onclick="inicio()"><a href="#" onClick={() => navigation('/')}>Inicio</a></li>
            <li id="nutri"><a href="#" onClick={() => setredirect(1)}>Nutricionista</a></li>
            <li id="calendario" ><a href="#" onClick={() => setredirect(2)}>Calendario</a></li>
            <li><a href="#"  onClick={() => navigation('/dieta')}>Dietas</a></li>
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

    {/* {redirect == 3 && <Dieta/>} */}
    </> );
}
 
export default Navbar;