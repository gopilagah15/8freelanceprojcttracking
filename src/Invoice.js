// components/Invoice.js
import React from "react";

const Invoice = ({ project }) => {
  if (!project) return null;

  const totalAmount = project.hourlyRate * project.hoursWorked;

  return (
    <div>
      <h2>Invoice</h2>
      <p>Client: {project.clientName}</p>
      <p>Project: {project.projectName}</p>
      <p>Hours Worked: {project.hoursWorked}</p>
      <p>Hourly Rate: ${project.hourlyRate}</p>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Invoice;
