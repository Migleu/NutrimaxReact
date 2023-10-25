import React from 'react';
import './calendario.css';


const Calendario = () => {
     return ( <>
     <div class="container">
            <div class="left">
                <div class="calendar">
                    <div class="month">
                        <i class="fas fa-angle-left prev"></i>
                        <div class="date">março 2015</div>
                        <i class="fas fa-angle-right next"></i>
                    </div>
                    <div class="weekdays">
                        <div>Dom</div>
                        <div>Seg</div>
                        <div>Ter</div>
                        <div>Qua</div>
                        <div>Qui</div>
                        <div>Sex</div>
                        <div>Sab</div>
                    </div>
                    <div class="days"></div>
                </div>
            </div>
            <div class="right">
                <div class="today-date">
                    <div class="event-day">Dieta</div>
                    <div class="event-date">12th dezembro 2022</div>
                    <div class="goto-today">
                        <button class="today-btn">Hoje</button>
                    </div>
                </div>
                <div class="events"></div>
            </div>
        </div>

     </> );
}
 
export default Calendario;