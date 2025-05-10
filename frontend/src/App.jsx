// filepath: c:\Users\tirum\GrowMate\frontend\src\App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Alarm from './components/Alarm';
import TodoMaker from './components/TodoMaker';
import TrackerCard from './components/TrackerCard';
import MoodTracker from './components/MoodTracker';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TrackerCard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <div className="icon-bar">
        <button onClick={() => setActiveComponent('todo')} title="Edit Tasks">✏️</button>
        <button onClick={() => setActiveComponent('alarm')} title="Set Alarm">⏰</button>
        <button onClick={() => setActiveComponent('mood')} title="Mood Tracker">😊</button>
      </div>

      {activeComponent === 'todo' && <TodoMaker />}
      {activeComponent === 'alarm' && <Alarm />}
      {activeComponent === 'mood' && <MoodTracker />}
    </div>
  );
}

export default App;