import React, { useState } from 'react';

export default function GoalStat(props) {
  const [goalMode, setGoalMode] = useState(false);
  if (goalMode) {
    return (
      null
    );
  } else {
    return (
      <div className="goalPercentDiv">
      You have reached 1% of your goal of $400 this week
        <div>
          <button className="setGoal-btn" onClick={() => setGoalMode(true)}>Set New Goal</button>
        </div>
      </div>
    );
  }

}
