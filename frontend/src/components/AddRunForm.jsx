import React, { useState } from "react";

const AddRunForm = ({ onAddRun }) => {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [pace, setPace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRun = {
      date,
      distance: parseFloat(distance),
      time: parseFloat(time),
      pace: parseFloat(pace),
    };
    console.log("Submitting run:", newRun); // Log the data being sent
    onAddRun(newRun);
    setDate("");
    setDistance("");
    setTime("");
    setPace("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Distance (miles): </label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time (hh:mm:ss): </label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pace (min/mile): </label>
        <input
          type="text"
          value={pace}
          onChange={(e) => setPace(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Run</button>
    </form>
  );
};

export default AddRunForm;
