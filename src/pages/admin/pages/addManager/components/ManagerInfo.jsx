import React, { useState, useCallback } from 'react';
import Input from '../../../../../components/shared/small/Input';
import { IoClose } from 'react-icons/io5';
import { FiPlusCircle } from 'react-icons/fi';

const ManagerInfo = ({ handleNext, handlePrevious, handleCancel, currentStep }) => {
    // State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        alternateNumber: '',
        userName: '',
        password: '',
    });

    // State for image upload and drag status
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    // Handler for input changes
    const formDataChangeHandler = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    // Handler for file upload (supports drag & drop)
    const handleImageUpload = useCallback((e) => {
        const files = Array.from(e.target.files || e.dataTransfer.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prev) => [...prev, ...newImages]);
    }, []);

    // Remove a specific image from the list
    const handleRemoveImage = useCallback((index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    }, []);

    // Drag events for styling and behavior
    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            setIsDragging(false);
            handleImageUpload(e);
        },
        [handleImageUpload]
    );

    // For debugging form data
    console.log('formData', formData);

    return (
        <div className="flex flex-col items-center w-full justify-center p-4 md:p-8">
            <h1 className="text-2xl font-medium mb-6">General Manager Information</h1>

            {/* Form Fields */}
            <section className="space-y-4 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Input
                        type="text"
                        name="fullName"
                        onChange={formDataChangeHandler}
                        placeholder="Full Name"
                    />
                    <Input
                        type="text"
                        name="email"
                        onChange={formDataChangeHandler}
                        placeholder="Email Address"
                    />
                    <Input
                        type="text"
                        name="contactNumber"
                        onChange={formDataChangeHandler}
                        placeholder="Contact Number"
                    />
                    <Input
                        type="text"
                        name="alternateNumber"
                        onChange={formDataChangeHandler}
                        placeholder="Alternate Number"
                    />
                    <Input
                        type="text"
                        name="userName"
                        onChange={formDataChangeHandler}
                        placeholder="Username"
                    />
                    <Input
                        type="password"
                        name="password"
                        onChange={formDataChangeHandler}
                        placeholder="Password"
                    />
                </div>
            </section>

            {/* Navigation Buttons */}
            <section className="flex pt-4 w-full justify-center">
                {currentStep > 1 && (
                    <button
                        className="px-4 py-1 bg-gray-400 text-white rounded-lg"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                )}
                {currentStep < 3 ? (
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-1 bg-white border border-primary text-primary rounded-lg"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-1 bg-primary text-white rounded-lg"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                ) : (
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg"
                        onClick={handleCancel}
                    >
                        Confirm
                    </button>
                )}
            </section>
        </div>
    );
};

export default ManagerInfo;
