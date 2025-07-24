import React from "react";

const RunDashboard = ({ runs, onDelete }) => {
  const handleDelete = (runId) => {
    console.log("Delete button clicked for runId:", runId); // Log the runId
    onDelete(runId);
  };

  return (
    <div>
      <h2>Run Dashboard</h2>
      <ul>
        {runs.map((run, index) => (
          <li key={index}>
            <strong>Date:</strong> {run.date}, <strong>Distance:</strong>{" "}
            {run.distance} miles, <strong>Time:</strong> {run.time},{" "}
            <strong>Pace:</strong> {run.pace}
            <button onClick={() => handleDelete(run.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunDashboard;
