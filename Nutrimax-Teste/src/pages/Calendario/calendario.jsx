import React, { useState, useEffect } from 'react';
import './calendario.css';
import arrow from '../../assets/Componentes/arrow.svg';
import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import TopBar from '../../Componentes/topBar';

function Calendario() {
    const [today, setToday] = useState(new Date());
    const [activeDay, setActiveDay] = useState(null);
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [date, setDate] = useState('');
    const [days, setDays] = useState([]);
    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    // Função para formatar a data
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        initCalendar();
    }, [month, year]);

    function initCalendar() {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);
        const prevDays = prevLastDay.getDate();
        const lastDate = lastDay.getDate();
        const day = firstDay.getDay();
        const nextDays = 7 - lastDay.getDay() - 1;

        setDate(`${months[month]} ${year}`);
        let daysArray = [];

        for (let x = day; x > 0; x--) {
            daysArray.push({ day: prevDays - x + 1, type: 'prev-date' });
        }

        for (let i = 1; i <= lastDate; i++) {
            let dayType = '';
            if (
                i === today.getDate() &&
                year === today.getFullYear() &&
                month === today.getMonth()
            ) {
                setActiveDay(i);
                if (eventExists(i)) {
                    dayType = 'today active event';
                } else {
                    dayType = 'today active';
                }
            } else {
                if (eventExists(i)) {
                    dayType = 'event';
                }
            }
            daysArray.push({ day: i, type: dayType });
        }

        for (let j = 1; j <= nextDays; j++) {
            daysArray.push({ day: j, type: 'next-date' });
        }

        setDays(daysArray);
    }

    function prevMonth() {
        setMonth((prevMonth) => {
            if (prevMonth === 0) {
                setYear(year - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    }

    function nextMonth() {
        setMonth((prevMonth) => {
            if (prevMonth === 11) {
                setYear(year + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    }

    function getActiveDay(date) {
        setActiveDay(date);
    }

    // Função para verificar se um evento existe na data
    function eventExists(date) {
        const formattedDate = formatDate(new Date(year, month, date));
        // Substitua eventsArr com sua lista de eventos
        const eventsArr = [
            { date: '2023-10-01', description: 'Evento 1' },
            { date: '2023-10-15', description: 'Evento 2' },
            // Adicione mais eventos conforme necessário
        ];
        return eventsArr.some((event) => event.date === formattedDate);
    }

    return (<>
        <Navbar/>
        <TopBar/>
        <div className="container">
            <div className="left">
                <div className="calendar">
                    <div className="month">
                        <img src={arrow} onClick={prevMonth} className="prev arrow" />
                        <div className="date">{date}</div>
                        <img src={arrow} onClick={nextMonth} className="next arrow" />
                    </div>
                    <div className="weekdays">
                        {daysOfWeek.map((day, index) => (
                            <div key={index}>{day}</div>
                        ))}
                    </div>
                    <div className="days">
                        {days.map((dayObj, index) => (
                            <div key={index} className={`day ${dayObj.type}`} onClick={() => getActiveDay(dayObj.day)}>
                                {dayObj.day}
                            </div>
                        ))}
            <div className="goto-today">
                <button className="today-btn" onClick={() => setMonth(today.getMonth())}>Hoje</button>
            </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>
    )
};

export default Calendario;
