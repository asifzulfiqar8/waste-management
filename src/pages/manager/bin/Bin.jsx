import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import MapInfo from './components/MapInfo';
import Confirmation from './components/Confirmation';

const Bin = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Handlers for navigation
  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCancel = () => {
    setCurrentStep(1);
  };

  return (
    <div className="flex h-full w-full  items-center justify-center">
      <section className="p-4 bg-white rounded-lg shadow-lg">
        {/* Stepper Navigation */}
        <section className="flex items-center justify-center mb-6">
          {[1, 2, 3].map((step) => (
            <section key={step} className="flex flex-col items-center">
              <section className="flex items-center">
                <section
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${currentStep >= step ? 'bg-primary' : 'bg-gray-300'
                    }`}
                >
                  {step}
                </section>
                {step < 3 && (
                  <section
                    className={`flex-1 border-t w-16 lg:w-24 ${currentStep > step ? 'border-green-500' : 'border-gray-800'
                      }`}
                  ></section>
                )}
              </section>
            </section>
          ))}
        </section>

        {/* Step Titles */}
        <section className="flex gap-5 lg:gap-16 justify-center mb-4">
          <section className={`text-sm font-medium ${currentStep === 1 ? 'text-primary' : 'text-gray-500'}`}>General Info</section>
          <section className={`text-sm font-medium ${currentStep === 2 ? 'text-primary' : 'text-gray-500'}`}>Mapping Info</section>
          <section className={`text-sm font-medium ${currentStep === 3 ? 'text-primary' : 'text-gray-500'}`}>Confirmation</section>
        </section>

        {/* Step Components */}
        {currentStep === 1 && <GeneralInfo currentStep={currentStep} handleNext={handleNext} />}
        {currentStep === 2 && <MapInfo currentStep={currentStep} handleNext={handleNext} handlePrevious={handlePrevious} handleCancel={handleCancel} />}
        {currentStep === 3 && <Confirmation currentStep={currentStep} handleNext={handleNext} handlePrevious={handlePrevious} handleCancel={handleCancel} />}

        {/* Step Navigation Buttons */}
        <section className="flex justify-between mt-4">
        </section>
      </section>
    </div>
  );
};

export default Bin;
