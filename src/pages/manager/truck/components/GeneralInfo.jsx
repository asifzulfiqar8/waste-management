import React, { useState } from "react";
import Input from "../../../../components/shared/small/Input";
import Dropdown from "../../../../components/shared/small/Dropdown";
import { IoClose } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

function GeneralInfo({ handleNext, currentStep }) {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    truckName: "",
    truckId: "",
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
      <h1 className="text-2xl font-medium mb-6">General Truck Information</h1>

      {/* Form Fields */}
      <section className="space-y-4 w-full ">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Input
            type="text"
            name="truckName"
            onChange={formDataChangeHandler}
            placeholder="Truck Name"
          />
          <Input
            type="text"
            name="truckId"
            onChange={formDataChangeHandler}
            placeholder="Truck ID"
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
      <section className="p-5 w-full flex flex-col items-center">
        <h1 className="text-xl font-medium mb-4">Upload or Drag Image</h1>

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
            className={`relative w-32 h-24 sm:w-40 sm:h-28 flex flex-col items-center justify-center rounded-lg border-2 border-dashed ${
              isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"
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
              {isDragging ? "Drop images here..." : "Upload or Drop Images"}
            </p>
            <FiPlusCircle className="mt-2 text-gray-500" />
          </div>
        </section>
      </section>
      <section className="flex pt-4  w-full justify-center">
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
