import React, { useState } from 'react';
import './MoodTracker.css';

const moods = [
  { emoji: '😄', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😴', label: 'Tired' }
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-container">
      <h2 className="mood-heading">🧠 How are you feeling today?</h2>
      <div className="mood-options">
        {moods.map((mood) => (
          <div
            key={mood.label}
            className={`mood-card ${selectedMood === mood.label ? 'selected' : ''}`}
            onClick={() => setSelectedMood(mood.label)}
          >
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
