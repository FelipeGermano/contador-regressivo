import React, { useState, useEffect } from 'react';

function CountdownTimer({ event }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(event.date));

    function calculateTimeLeft(eventDate) {
        const difference = new Date(eventDate) - new Date();
        if (difference <= 0) {
            return null;
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(event.date);
            if (newTimeLeft) {
                setTimeLeft(newTimeLeft);
            } else {
                clearInterval(timer);
                alert(`Evento "${event.name}" alcançado!`);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [event.date]);

    if (!timeLeft) {
        return <p>O evento "{event.name}" foi alcançado!</p>;
    }

    return (
        <div className="countdown">
            <h2>{event.name}</h2>
            <p>
                {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds} segundos
            </p>
        </div>
    );
}

export default CountdownTimer;
