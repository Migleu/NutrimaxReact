import React, {useState} from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import iconNutri from '../../assets/iconNutri.svg';


const Navbar = () => {
    const navigation = useNavigate();

    return ( <>
    <nav>
    <div className="logo">
    <img src={iconNutri} alt=""/>
        <h1>Nutri<span>Max</span></h1>
    </div>
    <div className="links">
        <ul className="nav-itens">
            <li onClick={() => navigation('/')}>Inicio</li>
            <li onClick={() => navigation('/')}> Nutricionista</li>
            <li onClick={() => navigation('/calendario')}> Calendario</li>
            <li onClick={() => navigation('/dieta')}> Dietas</li>
        </ul>
    </div>
    
    <div className="btn">
       <button className="logar" onClick={() => navigation('/login')}>Logar</button>
    </div>
</nav>

    {/* {redirect == 3 && <Dieta/>} */}
    </> );
}
 
export default Navbar;