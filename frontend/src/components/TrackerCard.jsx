import React, { useState } from 'react';
import './TrackerCard.css';

const habits = ['💪 Exercise', '📖 Read', '🧘‍♀️ Meditate', '😴 Sleep by 10'];

const TrackerCard = () => {
  const [checkedHabits, setCheckedHabits] = useState({});

  const toggleHabit = (habit) => {
    setCheckedHabits({ ...checkedHabits, [habit]: !checkedHabits[habit] });
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-heading">🌱 Daily Habits</h2>
      <ul className="habit-list">
        {habits.map((habit) => (
          <li key={habit} className={`habit-item ${checkedHabits[habit] ? 'checked' : ''}`} onClick={() => toggleHabit(habit)}>
            <span className="checkbox"></span>
            <span className="habit-text">{habit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackerCard;
