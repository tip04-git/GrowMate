import React from 'react';
import QuoteDisplay from './QuoteDisplay';
import AlarmSettings from './AlarmSettings';
import ToDoList from './TodoMaker';
import TrackerCard from './TrackerCard';
import MoodTracker from './MoodTracker';
import GoalSetter from './GoalSetter';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>GrowMate Dashboard</h2>
      <QuoteDisplay />
      <AlarmSettings />
      <ToDoList />
      <TrackerCard />
      <MoodTracker />
      <GoalSetter />
    </div>
  );
};

export default Dashboard;
