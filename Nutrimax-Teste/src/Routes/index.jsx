import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dieta from '../pages/Dieta/dieta';
import Feedback from '../pages/Feedback/feedback';
import Home from '../pages/Home/Index';
import Login from '../pages/Login/Login';

const Routers = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dieta" element={<Dieta/>} />
            <Route path="/feedback" element={<Feedback/>} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default Routers;