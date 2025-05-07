import React, { useState } from 'react';

const GoalSetter = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goal.trim()) {
      setGoals([...goals, goal]);
      setGoal('');
    }
  };

  const deleteGoal = (index) => {
    const updated = goals.filter((_, i) => i !== index);
    setGoals(updated);
  };

  return (
    <div>
      <h3>Goals</h3>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Add new goal"
      />
      <button onClick={addGoal}>Add</button>
      <ul>
        {goals.map((g, i) => (
          <li key={i}>
            {g} <button onClick={() => deleteGoal(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalSetter;
