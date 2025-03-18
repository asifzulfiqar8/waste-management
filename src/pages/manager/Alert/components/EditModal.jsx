import React, { useState } from "react";
import Button from "../../../../components/shared/small/Button";
import Input from "../../../../components/shared/small/Input";

const EditModal = ({ alert, onSave, onCancel }) => {
  // Initialize state with fields matching your alert object
  const [alertName, setAlertName] = useState(alert.alertName);
  const [alertType, setAlertType] = useState(alert.alertType);
  const [notificationType, setNotificationType] = useState(alert.notificationType);
  const [severity, setSeverity] = useState(alert.severity);
  const [status, setStatus] = useState(alert.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAlert = {
      ...alert,
      alertName,
      alertType,
      notificationType,
      severity,
      status,
    };
    onSave(updatedAlert);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Alert Name:</label>
        <Input
          type="text"
          value={alertName}
          onChange={(e) => setAlertName(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Alert Type:</label>
        <Input
          type="text"
          value={alertType}
          onChange={(e) => setAlertType(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Notification Type:</label>
        <select
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="on Platform">On Platform</option>
          <option value="on email">On Email</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Severity:</label>
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="full">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>
      <div className="mt-6 gap-4 flex justify-end">
        <Button type="submit" className="p-2 text-xs" text="Save" />
        <Button type="button" className="p-2 text-xs" text="Cancel" onClick={onCancel} />
      </div>
    </form>
  );
};

export default EditModal;
