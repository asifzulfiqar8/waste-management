import React, { useCallback, useState } from 'react';
import Input from '../../../../../components/shared/small/Input';

function CompanyDetails({ currentStep, handleNext, handlePrevious, handleCancel }) {
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    city: '',
    state: '',
    companyNumber: '',
    companyEmail: '',
  });

  // Memoized handler for form input changes
  const formDataChangeHandler = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Define the form fields to reduce repetition
  const formFields = [
    { name: 'companyName', placeholder: 'Company Name', type: 'text' },
    { name: 'companyAddress', placeholder: 'Company Address', type: 'text' },
    { name: 'city', placeholder: 'City', type: 'text' },
    { name: 'state', placeholder: 'State/Province', type: 'text' },
    { name: 'companyNumber', placeholder: 'Company Contact Number', type: 'text' },
    { name: 'companyEmail', placeholder: 'Company Email Address', type: 'text' },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full justify-center p-4 md:p-8">
      <span className="text-2xl font-medium mb-4">Manager Company Details</span>
      <section className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4">
        {formFields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            onChange={formDataChangeHandler}
            placeholder={field.placeholder}
          />
        ))}
      </section>

      <section className="flex pt-4 w-full justify-center mt-4 space-x-2 p-2 rounded-lg">
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
            className="px-4 py-1 bg-primary text-white rounded-lg"
            onClick={handleCancel}
          >
            Confirm
          </button>
        )}
      </section>
    </div>
  );
}

export default CompanyDetails;
