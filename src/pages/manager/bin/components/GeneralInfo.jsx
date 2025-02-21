import React, { useState } from 'react';
import Input from '../../../../components/shared/small/Input';
import Dropdown from '../../../../components/shared/small/Dropdown';
import { IoClose } from 'react-icons/io5';
import { FiPlusCircle } from 'react-icons/fi';

function GeneralInfo({ handleNext, currentStep }) {
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

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

    return (
        <div className="flex flex-col items-center w-full lg:w-[1060px] justify-center p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-6">General Information</h1>

            {/* Form Fields */}
            <section className="space-y-4 w-full max-w-5xl">
                <section className="grid grid-cols-1  lg:grid-cols-3 gap-4">
                    <Input placeholder="Bin Name" />
                    <Input placeholder="Dustbin ID" />
                    <Input placeholder="Address" />
                </section>

                <section className="flex flex-col lg:flex-row gap-4 ">
                    <section className='w-full'>

                        <Input placeholder="Description" className=" " />
                    </section>
                    <section className='w-full lg:w-[48%] '>


                        <Dropdown defaultText="Sensor type" className="" />
                    </section>
                </section>
            </section>

            {/* Image Upload Section */}
            <section className="p-5 w-full max-w-5xl">
                <h1 className="text-xl font-bold mb-4">Upload or Drag Image</h1>

                <section className="flex flex-wrap gap-3 justify-center">
                    {/* Display uploaded images */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-lg overflow-hidden shadow-md"
                        >
                            <img
                                src={image}
                                alt={`Uploaded ${index}`}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-80"
                            >
                                <IoClose size={16} />
                            </button>
                        </div>
                    ))}

                    {/* Drag and Drop Area */}
                    <div
                        className={`relative w-32 h-24 sm:w-40 sm:h-28 flex flex-col items-center justify-center rounded-lg border-2 border-dashed ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-400'
                            } cursor-pointer transition-all`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <p className="text-gray-500 text-center text-sm">
                            {isDragging ? 'Drop images here...' : 'Upload or Drop Images'}
                        </p>
                        <FiPlusCircle className="mt-2 text-gray-500" />
                    </div>
                </section>
            </section>
            <section className='flex   w-full justify-end'>


                {currentStep > 1 && (
                    <button
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                )}
                {currentStep < 3 ? (
                    <button
                        className="px-4 py-2 bg-primary text-white rounded-lg"
                        onClick={handleNext}
                    >
                        Next
                    </button>
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
}

export default GeneralInfo;
