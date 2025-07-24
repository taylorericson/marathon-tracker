import React from "react";

const RunDashboard = ({ runs }) => {
  return (
    <div>
      <h2>Run Dashboard</h2>
      <ul>
        {runs.map((run, index) => (
          <li key={index}>
            <strong>Date:</strong> {run.date}, <strong>Distance:</strong>{" "}
            {run.distance} miles, <strong>Time:</strong> {run.time},{" "}
            <strong>Pace:</strong> {run.pace}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunDashboard;
