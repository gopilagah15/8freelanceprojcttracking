// components/ProjectForm.js
import React, { useState } from "react";

const ProjectForm = ({ onAddProject }) => {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [hourlyRate, setHourlyRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Math.random().toString(),
      clientName,
      projectName,
      hourlyRate: parseFloat(hourlyRate),
      hoursWorked: 0,
    };
    onAddProject(newProject);
    setClientName("");
    setProjectName("");
    setHourlyRate(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Project</h2>
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Hourly Rate"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(e.target.value)}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
