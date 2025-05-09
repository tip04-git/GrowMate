import React, { useState } from 'react';
import './App.css';
import Alarm from './components/Alarm';
import TodoMaker from './components/TodoMaker';
import TrackerCard from './components/TrackerCard';
import MoodTracker from './components/MoodTracker';

function App() {
  const [activeComponent, setActiveComponent] = useState(null); // Track the active component

  return (
    <div className="App">
      {!activeComponent && <TrackerCard />}

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
