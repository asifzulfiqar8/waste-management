
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../../../components/shared/small/Modal";
import Button from "../../../../components/shared/small/Button";
import { AlertListTableStyle } from "../utils/AlertListTableStyle";
import { initialAlertData } from "../utils/alert";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
        case "medium":
            return "text-yellow-500";
        case "high":
            return "text-red-500";
        case "low":
            return "text-green-500";
        default:
            return "text-gray-500";
    }
};

const AlertTable = () => {
    const [data, setData] = useState(initialAlertData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAlert, setCurrentAlert] = useState(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [alertToDelete, setAlertToDelete] = useState(null);

    const handleEdit = (alert) => {
        setCurrentAlert(alert);
        setIsModalOpen(true);
    };

    // Remove direct delete and instead open delete confirmation modal
    // const handleDelete = (alertId) => {
    //     if (window.confirm("Are you sure you want to delete this alert?")) {
    //         setData(data.filter((alert) => alert.id !== alertId));
    //     }
    // };

    const openDeleteModal = (alert) => {
        setAlertToDelete(alert);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setAlertToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const confirmDelete = () => {
        if (alertToDelete) {
            setData(data.filter((alert) => alert.id !== alertToDelete.id));
            closeDeleteModal();
        }
    };

    const handleSave = (updatedAlert) => {
        setData(
            data.map((alert) =>
                alert.id === updatedAlert.id ? updatedAlert : alert
            )
        );
        setIsModalOpen(false);
        setCurrentAlert(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setCurrentAlert(null);
    };

    const handleToggle = (alert, newStatus) => {
        const updatedAlert = {
            ...alert,
            status: newStatus ? "full" : "disabled",
        };
        setData(data.map((item) => (item.id === alert.id ? updatedAlert : item)));
    };

    const ToggleButton = ({ alert, onToggle }) => {
        const [isEnabled, setIsEnabled] = useState(alert.status === "full");

        useEffect(() => {
            setIsEnabled(alert.status === "full");
        }, [alert.status]);

        const handleClick = () => {
            const newStatus = !isEnabled;
            setIsEnabled(newStatus);
            onToggle(alert, newStatus);
        };

        return (
            <div className="flex items-center">
                <button
                    onClick={handleClick}
                    className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${isEnabled ? "bg-primary" : "bg-gray-300"}`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${isEnabled ? "translate-x-6" : "translate-x-0"}`}
                    />
                </button>
                <span className="ml-2 text-sm">
                    {isEnabled ? "Enabled" : "Disabled"}
                </span>
            </div>
        );
    };

    const columns = [
        {
            name: "Alert Name",
            selector: (row) => row.alertName,
        },
        {
            name: "Alert Type",
            selector: (row) => row.alertType,
        },
        {
            name: "Severity",
            cell: (row) => (
                <span className={getSeverityColor(row.severity)}>
                    {row.severity}
                </span>
            ),
        },
        {
            name: "Notification Type",
            selector: (row) => row.notificationType,
        },
        {
            name: "Status",
            cell: (row) => (
                <ToggleButton alert={row} onToggle={handleToggle} />
            ),
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex">
                    <FaRegEdit
                        onClick={() => handleEdit(row)}
                        className="cursor-pointer text-lg mr-2 text-[#4C4C4CE5]"
                    />
                    <MdDeleteOutline
                        onClick={() => openDeleteModal(row)}
                        className="cursor-pointer text-xl text-[#BA2222CC]"
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="p-4">
            <DataTable
                customStyles={AlertListTableStyle}
                columns={columns}
                data={data}
                pagination={true}
            />
            {isModalOpen && currentAlert && (
                <Modal title={"Edit Alert"} onClose={handleCancel}>
                    <EditModal
                        alert={currentAlert}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                </Modal>
            )}
            {isDeleteModalOpen && alertToDelete && (
                <Modal title="Confirm Delete" onClose={closeDeleteModal}>
                    <DeleteModal
                    closeDeleteModal={closeDeleteModal}
                    confirmDelete={confirmDelete}
                    />
                    
                </Modal>
            )}
        </div>
    );
};

export default AlertTable;
