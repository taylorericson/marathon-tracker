import React, { useState, useEffect } from "react";
import AddRunForm from "./components/AddRunForm";
import RunDashboard from "./components/RunDashboard";

const App = () => {
  const [runs, setRuns] = useState([]);

  const addRun = async (newRun) => {
    try {
      const response = await fetch("http://localhost:5000/runs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRun),
      });

      if (!response.ok) {
        throw new Error(`Error! status code: ${response.status}`);
      }

      const result = await response.json();
      console.log("Run added successfully:", result);
      setRuns((prevRuns) => [...prevRuns, newRun]);
      fetchRuns(); // Refresh the runs list after adding a new run
    } catch (error) {
      console.error("Error adding run:", error);
    }
  };

  const fetchRuns = async () => {
    try {
      const response = await fetch("http://localhost:5000/runs");
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      // Check if data.runs exists and is an array
      if (Array.isArray(data.runs)) {
        setRuns(data.runs);
      } else if (Array.isArray(data)) {
        // If the backend returns an array directly
        setRuns(data);
      } else {
        console.error("Unexpected response format:", data);
        setRuns([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error("Error fetching runs:", error);
      setRuns([]); // Fallback to an empty array
    }
  };

  const handleDelete = async (runId) => {
    console.log("Attempting to delete run with ID:", runId); // Log the runId
    try {
      const response = await fetch(`http://localhost:5000/runs/${runId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error! status code: ${response.status}`);
      }

      console.log("Run deleted successfully");
      // Refresh the runs list after deletion
      fetchRuns();
    } catch (error) {
      console.error("Error deleting run:", error);
    }
  };

  useEffect(() => {
    fetchRuns();
  }, []);

  return (
    <div>
      <h1>Marathon Tracker</h1>
      <AddRunForm onAddRun={addRun} />
      <RunDashboard runs={runs} onDelete={handleDelete} />
    </div>
  );
};

export default App;
