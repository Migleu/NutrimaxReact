import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Index';
import Login from '../pages/Login/Login';

const Routers = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default Routers;