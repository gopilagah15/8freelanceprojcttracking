import React, { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import TimeTrackerPopup from "./components/TimeTrackerPopup";
import Invoice from "./Invoice";
import Report from "./Report";
 
const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTimeTracker, setShowTimeTracker] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const handleAddProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const handleOpenTimeTracker = (project) => {
    setSelectedProject(project);
    setShowTimeTracker(true);
    setShowInvoice(false);
  };

  const handleCompleteMilestone = (projectId, hours) => {
    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? { ...project, hoursWorked: project.hoursWorked + hours }
        : project
    );
    setProjects(updatedProjects);
    setShowTimeTracker(false);
    setShowInvoice(true);
  };

  return (
    <div>
      <h1>Freelance Project Tracking System</h1>
      <ProjectForm onAddProject={handleAddProject} />

      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.projectName} - {project.clientName}
            <button onClick={() => handleOpenTimeTracker(project)}>
              Track Time
            </button>
          </li>
        ))}
      </ul>

      {showTimeTracker && selectedProject && (
        <TimeTrackerPopup
          project={selectedProject}
          onCompleteMilestone={handleCompleteMilestone}
        />
      )}

      {showInvoice && selectedProject && <Invoice project={selectedProject} />}
      <Report projects={projects} />
    </div>
  );
};

export default App;
