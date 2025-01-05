import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const handleAddEvent = () => {
    if (!name.trim()) {
      setError('O nome do evento não pode estar em branco.');
      return;
    }

    if (!date || isNaN(new Date(`${date}T${time || '00:00'}`).getTime())) {
      setError('Data ou horário inválido.');
      return;
    }

    const eventDate = new Date(`${date}T${time || '00:00'}`);

    if (eventDate.getTime() < Date.now()) {
      setError('O evento não pode estar no passado.');
      return;
    }

    const newEvent = { name, date: eventDate.toISOString() };
    setEvents((prev) => [...prev, newEvent]);
    localStorage.setItem('events', JSON.stringify([...events, newEvent]));
    setName('');
    setDate('');
    setTime('');
    setError('');
  };

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  return (
    <div className="app">
      <h1>Contador Regressivo</h1>
      <div className="event-form">
        <input
          type="text"
          placeholder="Nome do evento"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleAddEvent}>Iniciar</button>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="events">
        {events.map((event, index) => (
          <CountdownTimer key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default App;