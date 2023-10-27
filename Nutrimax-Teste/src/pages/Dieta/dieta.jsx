import React from 'react';
import './dieta.css';
import Navbar from '../NavBar/navbar';


const Dieta = () => {
    return ( <>
    <Navbar/>
    <div className="containerDieta">
        <div className="dieta">
            <div className="elementosDieta">
                <h1>Almoço</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam harum, quasi obcaecati quam, exercitationem commodi debitis sunt neque sint voluptatum libero dolorem unde molestiae eligendi placeat distinctio dolor? Beatae, quos.</p>
                <hr />
                <h2>Jantar</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique natus, fugit atque accusamus voluptatum dolorem nisi dolore, nobis in odio itaque, veniam hic neque ullam tenetur doloribus temporibus doloremque vel.</p>
            </div>
        </div>
    </div>
    </> );
}
 
export default Dieta;