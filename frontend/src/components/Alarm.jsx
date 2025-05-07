import React, { useState, useEffect } from 'react';
import './Alarm.css';
import quotes from './quotes';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmSet, setAlarmSet] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    let interval;
    if (alarmSet) {
      interval = setInterval(() => {
        const now = new Date();
        const time = now.toTimeString().substring(0, 5);
        if (time === alarmTime) {
          const audio = new Audio('/alarm.wav');
          audio.play();
          setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
          setShowQuote(true);
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [alarmSet, alarmTime]);

  const handleSetAlarm = () => {
    if (alarmTime) {
      setAlarmSet(true);
      setShowQuote(false);
    }
  };

  return (
    <div className="alarm-container">
        <h2>🌙 Night Mode</h2>
        <p>Set your alarm, journal your day, and view your motivational quote.</p>
      <h2 className="alarm-heading">⏰ Set Alarm</h2>
      <div className="alarm-group">
        <input
          type="time"
          className="alarm-input"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button className="alarm-btn" onClick={handleSetAlarm}>
          Set Alarm
        </button>
      </div>

      {showQuote && (
        <div className="alarm-quote-popup">
          <h3>🌟 Motivation</h3>
          <p>{quote}</p>
        </div>
      )}
    </div>
  );
};

export default Alarm;
