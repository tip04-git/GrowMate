import React, { useState } from 'react';
import TrackerCard from './TrackerCard';
import Todo from './TodoMaker';
import TodoEditor from './TodoEditor';
import NightMode from './NightMode';
import './Home.css'; // We’ll style it next

const Home = () => {

    const [showTodoEditor, setShowTodoEditor] = useState(false);
    const [showNightMode, setShowNightMode] = useState(false);
   
  return (
    <div className="home-container">
      
      {/* Main Dashboard */}
      <section className="main-dashboard">
        <TrackerCard />
        <Todo compact={true} /> {/* Only today's list, minimal UI */}
      </section>

      {/* Icon Bar */}
      <div className="icon-bar">
        <button onClick={() => setShowTodoEditor(true)} title="Edit Tasks">✏️</button>
        <button onClick={() => setShowNightMode(true)} title="Night Mode">🌙</button>
      </div>
        
      {/* Overlays */}
      {showTodoEditor && (
        <div className="overlay">
          <TodoEditor onClose={() => setShowTodoEditor(false)} />
        </div>
      )}

      {showNightMode && (
        <div className="overlay">
          <NightMode onClose={() => setShowNightMode(false)} />
        </div>
      )}
    </div>
  );
};

export default Home;
