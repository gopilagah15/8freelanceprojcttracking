// components/TimeTrackerPopup.js
import React, { useState } from "react";

const TimeTrackerPopup = ({ project, onCompleteMilestone }) => {
  const [hours, setHours] = useState(0);

  if (!project) return null;

  const handleTrackTime = () => {
    onCompleteMilestone(project.id, hours);
    setHours(0);
  };

  return (
    <div>
      <h2>Track Time for {project.projectName}</h2>
      <input
        type="number"
        placeholder="Hours Worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        required
      />
      <button onClick={handleTrackTime}>Complete Milestone</button>
    </div>
  );
};

export default TimeTrackerPopup;
