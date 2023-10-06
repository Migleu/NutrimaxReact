import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
    <div className="logo">
        <h1><i className="fa-solid fa-apple-whole"></i>NutriMax</h1>
    </div>
    <div className="links">
        <ul className="nav-itens">
            <li id="inicio" onclick="inicio()"><a href="#">Inicio</a></li>
            <li id="nutri"><a href="#" onclick="nutricionistaPopup()">Nutricionista</a></li>
            <li id="calendario" onclick="calendario()"><a href="#">Calendario</a></li>
            <li><a href="#" onclick="dieta()">Dietas</a></li>
        </ul>
    </div>
    <div className="mobile-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <div className="btn">
        <a href="./login.php"><button className="logar">Logar</button></a>
    </div>
</nav>
    </>
  )
}

export default App
