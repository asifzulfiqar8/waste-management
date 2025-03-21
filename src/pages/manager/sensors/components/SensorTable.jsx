import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../../../components/shared/small/Modal";
import { initialSensorData } from "../utils/sensonListTable";
import { SensorListTableStyle } from "../utils/SensorListTableStyle";
import EditModal from "./EditModal";

const SensorTable = () => {
    const [data, setData] = useState(initialSensorData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSensor, setCurrentSensor] = useState(null);

    const handleEdit = (sensor) => {
        setCurrentSensor(sensor);
        setIsModalOpen(true);
    };

    const handleDelete = (sensorId) => {
        if (window.confirm("Are you sure you want to delete this sensor?")) {
            setData(data.filter((sensor) => sensor.id !== sensorId));
        }
    };

    const handleSave = (updatedSensor) => {
        setData(data.map((sensor) => (sensor.id === updatedSensor.id ? updatedSensor : sensor)));
        setIsModalOpen(false);
        setCurrentSensor(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setCurrentSensor(null);
    };

    const columns = [
        {
            name: "Sensor Name",
            selector: (row) => row.sensorName,
        },
        {
            name: "Sensor Type",
            selector: (row) => row.sensorType,
        },
        {
            name: "Created Date",
            selector: (row) => row.createdDate,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex ">
                    <FaRegEdit
                        onClick={() => handleEdit(row)}
                        className="cursor-pointer text-lg mr-2 text-[#64AA42CC] "
                    />
                    <MdDeleteOutline
                        onClick={() => handleDelete(row.id)}
                        className="cursor-pointer text-xl text-[#BA2222B2] "
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="p-4">
            <DataTable customStyles={SensorListTableStyle}
                columns={columns} data={data} />
            {isModalOpen && currentSensor && (<>
                <Modal title={"Edit Sensor"} onClose={handleCancel}>
                    <EditModal sensor={currentSensor} onSave={handleSave} onCancel={handleCancel} />
                </Modal>
            </>
            )}
        </div>
    );
};

export default SensorTable;
