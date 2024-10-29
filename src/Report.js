// components/Report.js
import React from "react";

const Report = ({ projects }) => {
  const totalEarnings = projects.reduce(
    (total, project) => total + project.hoursWorked * project.hourlyRate,
    0
  );
  const completedProjects = projects.length;

  return (
    <div>
      <h2>Project Report</h2>
      <p>Total Projects Completed: {completedProjects}</p>
      <p>Total Earnings: ${totalEarnings.toFixed(2)}</p>
    </div>
  );
};

export default Report;
