import React from 'react';
import './dieta.css';
import Navbar from '../NavBar/navbar';
import TopBar from '../../Componentes/topBar';


const Dieta = () => {
    return ( <>
    <Navbar/>
    <TopBar/>
    <div className="containerDieta">
        <div className="dieta">
            <div className="elementosDieta">
                <h1>Café da manhã</h1>
<ul>
    <li><span className="alimentos spanDieta">Omelete de claras de ovos</span> - <span className="medidas spanDieta">150g</span> ou <span className="medidas spanDieta">3 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Aveia com leite desnatado</span> - <span className="medidas spanDieta">40g de aveia</span> e <span className="medidas spanDieta">200ml de leite</span></li>
    <li><span className="alimentos spanDieta">Frutas (morangos)</span> - <span className="medidas spanDieta">100g</span> ou <span className="medidas spanDieta">4 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Iogurte grego</span> - <span className="medidas spanDieta">150g</span> ou <span className="medidas spanDieta">3 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Pão integral</span> - <span className="medidas spanDieta">40g</span></li>
</ul>
<hr />

<h1>Almoço</h1>
<ul>
    <li><span className="alimentos spanDieta">Peito de frango grelhado</span> - <span className="medidas spanDieta">150g</span></li>
    <li><span className="alimentos spanDieta">Arroz integral</span> - <span className="medidas spanDieta">100g</span> ou <span className="medidas spanDieta">2 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Feijão</span> - <span className="medidas spanDieta">100g</span> ou <span className="medidas spanDieta">2 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Salada de alface, tomate e cenoura</span> - <span className="medidas spanDieta">a gosto</span></li>
</ul>
<hr />

<h1>Café da tarde</h1>
<ul>
    <li><span className="alimentos spanDieta">Iogurte natural</span> - <span className="medidas spanDieta">150g</span> ou <span className="medidas spanDieta">3 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Castanhas</span> - <span className="medidas spanDieta">30g</span> ou <span className="medidas spanDieta">1 colher de sopa</span></li>
    <li><span className="alimentos spanDieta">Frutas (maçã)</span> - <span className="medidas spanDieta">150g</span> ou <span className="medidas spanDieta">6 colheres de sopa</span></li>
</ul>
<hr />

<h1>Jantar</h1>
<ul>
    <li><span className="alimentos spanDieta">Salmão grelhado</span> - <span className="medidas spanDieta">150g</span></li>
    <li><span className="alimentos spanDieta">Quinoa cozida</span> - <span className="medidas spanDieta">100g</span> ou <span className="medidas spanDieta">2 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Brócolis cozidos</span> - <span className="medidas spanDieta">a gosto</span></li>
</ul>
<hr />

<h1>Ceia</h1>
<ul>
    <li><span className="alimentos spanDieta">Queijo cottage</span> - <span className="medidas spanDieta">100g</span> ou <span className="medidas spanDieta">2 colheres de sopa</span></li>
    <li><span className="alimentos spanDieta">Nozes</span> - <span className="medidas spanDieta">30g</span> ou <span className="medidas spanDieta">1 colher de sopa</span></li>
</ul>

               
            
        </div>
    </div>
    </div>
    </> );
}
 
export default Dieta;