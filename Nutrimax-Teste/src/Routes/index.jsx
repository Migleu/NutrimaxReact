import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendario from '../pages/Calendario/calendario';
import Dieta from '../pages/Dieta/dieta';
import Feedback from '../pages/Feedback/feedback';
import Home from '../pages/Home/Index';
import Login from '../pages/Login/Login';
// import Teste from '../pages/testes/popup';



const Routers = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dieta" element={<Dieta/>} />
            <Route path="/feedback" element={<Feedback/>} />
            <Route path="/calendario" element={<Calendario/>} />
            {/* <Route path="/teste" element={<Teste/>} /> */}
        </Routes>
        </BrowserRouter>
     );
}
 
export default Routers;