import React, {useState} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import iconNutri from '../../assets/iconNutri.svg';


const Navbar = ({setredirect}) => {
    const navigation = useNavigate();

    return ( <>
    <nav>
    <div className="logo">
    <img src={iconNutri} alt=""/>
        <h1>Nutri<span>Max</span></h1>
    </div>
    <div className="links">
        <ul className="nav-itens">
            <li onclick="inicio()"onClick={() => navigation('/')}>Inicio</li>
            <li onClick={() => setredirect(1)}> Nutricionista</li>
            <li onClick={() => setredirect(2)}> Calendario</li>
            <li onClick={() => navigation('/dieta')}> Dietas</li>
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