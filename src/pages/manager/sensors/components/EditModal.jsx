import React, { useState } from "react";
import Input from "../../../../components/shared/small/Input";
import Button from "../../../../components/shared/small/Button";
const EditModal = ({ sensor, onSave, onCancel }) => {
    const [sensorName, setSensorName] = useState(sensor.sensorName);
    const [sensorType, setSensorType] = useState(sensor.sensorType);
    const [createdDate, setCreatedDate] = useState(sensor.createdDate);
    const [status, setStatus] = useState(sensor.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedSensor = {
            ...sensor,
            sensorName,
            sensorType,
            createdDate,
            status,
        };
        onSave(updatedSensor);
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col">
                    <label className="mb-1">Sensor Name:</label>
                    <Input
                        type="text"
                        value={sensorName}
                        onChange={(e) => setSensorName(e.target.value)}

                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="mb-1">Sensor Type:</label>
                    <Input
                        type="text"
                        value={sensorType}
                        onChange={(e) => setSensorType(e.target.value)}

                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="mb-1">Created Date:</label>
                    <Input
                        type="date"
                        value={createdDate}
                        onChange={(e) => setCreatedDate(e.target.value)}

                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="mb-1">Status:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border p-2 rounded"
                    >
                        <option value="full">Full</option>
                        <option value="half">Half</option>
                        <option value="empty">Empty</option>
                    </select>
                </div>
                <div className="mt-6 gap-4 flex justify-end">

                    <Button type='submit' className={' p-2 text-xs'} text="Save" />
                    <Button type='button' className={' p-2 text-xs'} text="Cancel" onClick={onCancel} />

                </div>
            </form>

        </>

    );
};

export default EditModal;
