import React, { useState } from 'react';
import Dropdown from '../../../../../components/shared/small/Dropdown';
import Input from '../../../../../components/shared/small/Input';

function SubscriptionDetails({ currentStep, handleNext, handlePrevious, handleCancel }) {
  const [formData, setFormData] = useState({
    date: '',
    subscriptionPlan: '',
    planType: '',
  });

  // Handler for standard input changes
  const formDataChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for the subscription plan dropdown
  const handleSubscriptionPlanChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      subscriptionPlan: value,
    }));
  };

  // Handler for the plan type dropdown
  const handlePlanTypeChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      planType: value,
    }));
  };

  // For debugging form data
  console.log('formData', formData);

  const dropdownOptions = [
    { option: 'Option 1', value: 'option1' },
    { option: 'Option 2', value: 'option2' },
    { option: 'Option 3', value: 'option3' },
  ];

  return (
    <div className="flex flex-col items-center w-full justify-center p-4 md:p-8">
      <h1 className="text-2xl font-medium mb-6">Manager Subscription</h1>

      <section className="flex flex-col lg:flex-row gap-2 w-full">
        <section className="space-y-4 w-full rounded-lg p-2">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Dropdown
              options={dropdownOptions}
              defaultText="Subscription Plan"
              onSelect={handleSubscriptionPlanChange}
            />
            <Dropdown
              options={dropdownOptions}
              defaultText="Plan Type"
              onSelect={handlePlanTypeChange}
            />
            <Input
              type="date"
              name="date"
              onChange={formDataChangeHandler}
              placeholder="Select Date"
            />
          </section>
        </section>
      </section>

      <section className="flex pt-4 w-full justify-center">
        {currentStep > 1 && (
          <button
            className="px-4 py-1 border border-primary text-primary rounded-lg"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button
            className="px-4 py-1 bg-primary text-white rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-1 ml-2 bg-primary text-white rounded-lg"
            onClick={handleCancel}
          >
            Confirm
          </button>
        )}
      </section>
    </div>
  );
}

export default SubscriptionDetails;
