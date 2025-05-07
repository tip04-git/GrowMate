import React from 'react';
import './App.css';
import Alarm from './components/Alarm';
import TodoMaker from './components/TodoMaker';
import TrackerCard from './components/TrackerCard';
import MoodTracker from './components/MoodTracker';


function App() {
  return (
    <div className="App">
      <TrackerCard />
      <MoodTracker />
      <TodoMaker />
      <Alarm />
    </div>
  );
}


export default App;
