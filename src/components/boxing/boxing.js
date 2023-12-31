import React, { useState, useEffect, useContext  } from 'react';
import './boxing.css';
import { IsNew } from '../../App';
const Boxing = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const { isNewYear, setIsNewYear } = useContext(IsNew);
    const [NewYear, setNewYear] = useState('До Нового года осталось');

    useEffect(() => {
        const countDownDate = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(formatTime(days));
            setHours(formatTime(hours));
            setMinutes(formatTime(minutes));
            setSeconds(formatTime(seconds));

            if (distance < 0) {
                clearInterval(timer);
                setNewYear('С Новым 2024 годом!');
                setIsNewYear(true);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    return (
        <div className="boxing">
            <h1 className="boxing_promo">{NewYear}</h1>
            {isNewYear ? (<></>) : (
                <div className="box">
                    <div className="day">
                        <h1 className={`day_promo ${days !== '00' ? 'animate' : ''}`}>{days}</h1>
                        <h2 className="day_text">дней</h2>
                    </div>
                    <div className="day">
                        <h1 className={`day_promo ${hours !== '00' ? 'animate' : ''}`}>{hours}</h1>
                        <h2 className="day_text">часов</h2>
                    </div>
                    <div className="day">
                        <h1 className={`day_promo ${minutes !== '00' ? 'animate' : ''}`}>{minutes}</h1>
                        <h2 className="day_text">минут</h2>
                    </div>
                    <div className="day">
                        <h1 className={`day_promo ${seconds !== '00' ? 'animate' : ''}`}>{seconds}</h1>
                        <h2 className="day_text">секунд</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Boxing;