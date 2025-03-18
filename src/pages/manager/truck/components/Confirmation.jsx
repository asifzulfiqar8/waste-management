import React, { useState } from "react";
import Dropdown from "../../../../components/shared/small/Dropdown";
import Input from "../../../../components/shared/small/Input";
import CustomMap from "./CustomMap";

function Confirmation({
  currentStep,
  handleNext,
  handlePrevious,
  handleCancel,
}) {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);

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

  const dropdownOptions = [
    { option: "Option 1", value: "option1" },
    { option: "Option 2", value: "option2" },
    { option: "Option 3", value: "option3" },
  ];

  return (
    <div className="flex flex-col items-center w-full  justify-center p-4 md:p-8">
      <h1 className="text-2xl font-medium mb-6">Confirmation</h1>

      <section className="flex flex-col lg:flex-row gap-2 w-full">
        <section className="space-y-4 w-full border rounded-lg p-2 ">
          <section className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            <Input
              type="text"
              name="truckName"
              onChange={formDataChangeHandler}
              placeholder="Truck Name"
              label="Truck name"
            />
            <Input
              type="text"
              name="truckId"
              onChange={formDataChangeHandler}
              label="Truck id"
              placeholder="Truck ID"
            />
            <Input
              type="text"
              name="address"
              onChange={formDataChangeHandler}
              label="Address"
              placeholder="Address"
            />
            <Input
              type="text"
              name="description"
              onChange={formDataChangeHandler}
              label="Description"
              placeholder="Description"
            />
          </section>

          <section className="flex ">
            <section className="w-full ">
              <Dropdown
                label="sensor"
                options={dropdownOptions}
                defaultText="Select an option"
                onSelect={handleDropdownChange}
              />
            </section>
          </section>
        </section>
        <section className="h-[280px] w-full lg:w-[40%] border rounded-lg p-2 ">
          <CustomMap longitude={longitude} latitude={latitude} />
        </section>
      </section>
      <section className="flex pt-4  w-full  justify-center">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 border border-primary text-primary rounded-lg"
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
            className="px-4 py-2 ml-2 bg-primary text-white rounded-lg"
            onClick={handleCancel}
          >
            Confirm
          </button>
        )}
      </section>
    </div>
  );
}

export default Confirmation;
