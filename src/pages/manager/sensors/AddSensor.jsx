import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import Input from '../../../components/shared/small/Input';
import Dropdown from '../../../components/shared/small/Dropdown';
import Button, { SmallButton } from '../../../components/shared/small/Button';
function AddSensor() {
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [formData, setFormData] = useState({
        driverName: "",
        driverId: "",
        address: "",
        description: "",
        sensorType: "",
    });

    // Handler function for form inputs
    const formDataChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Custom handler for the dropdown since it doesn't use a normal event
    const handleDropdownChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            sensorType: value,
        }));
    };

    // For debugging form data
    console.log("formData", formData);

    // Handle file upload
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files || e.dataTransfer.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prev) => [...prev, ...newImages]);
    };

    // Remove image
    const handleRemoveImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    // Handle drag events
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleImageUpload(e);
    };
    const dropdownOptions = [
        { option: "Option 1", value: "option1" },
        { option: "Option 2", value: "option2" },
        { option: "Option 3", value: "option3" },
    ];

    return (
        <div className="flex flex-col items-center w-full  justify-center p-4 md:p-8">
            <h1 className="text-3xl font-medium mb-6">Add Sensor</h1>
            <h1 className="text-2xl font-medium mb-6">General Driver Information</h1>

            {/* Form Fields */}
            <section className="space-y-4 w-full ">
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Input
                        type="text"
                        name="driverName"
                        onChange={formDataChangeHandler}
                        placeholder="Driver Name"
                    />
                    <Input
                        type="text"
                        name="driverId"
                        onChange={formDataChangeHandler}
                        placeholder="Driver ID"
                    />
                    <Input
                        type="text"
                        name="address"
                        onChange={formDataChangeHandler}
                        placeholder="Address"
                    />
                </section>

                <section className="flex flex-col lg:flex-row gap-4">
                    <section className="w-full">
                        <Input
                            type="text"
                            name="description"
                            onChange={formDataChangeHandler}
                            placeholder="Description"
                        />
                    </section>

                    <section className="w-full lg:w-[48%]">
                        <Dropdown
                            options={dropdownOptions}
                            defaultText="Select an option"
                            onSelect={handleDropdownChange}
                        />
                    </section>
                </section>
            </section>

            {/* Image Upload Section */}
            <section className="flex pt-4 gap-4  w-full justify-center">
                <SmallButton className='bg-white border border-primary'>
                    Cancel
                </SmallButton>


                <SmallButton >
                    Save
                </SmallButton>

            </section>
        </div>
    );
}

export default AddSensor