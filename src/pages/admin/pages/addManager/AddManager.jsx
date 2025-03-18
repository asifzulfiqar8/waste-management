import { useState } from "react";
import CompanyDetails from "./components/CompanyDetails";
import ManagerInfo from "./components/ManagerInfo";
import SubscriptionDetails from "./components/SubscriptionDetails";

const AddManager = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [generalInfoData, setGeneralInfoData] = useState({});

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
    <div className="flex  w-full  h-full items-center justify-center">
      <section className="p-4 flex flex-col items-center bg-white w-full max-w-7xl ">
        {/* Stepper Navigation */}
        <section className="text-4xl font-semibold text-black mb-6">
          Add Manager
        </section>
        <div className="flex flex-col items-center justify-center">
          {/* Step Indicators */}
          <div className="flex items-center justify-center ml-[-20px] mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex items-center ">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${currentStep >= step ? "bg-primary" : "bg-gray-300"}`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 border-t w-16 lg:w-32 ${currentStep > step ? "border-green-500" : "border-gray-300"}`}></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Titles */}
          <div className="flex gap-5 lg:gap-16 justify-center mb-4">
            <div className={`text-sm font-medium ${currentStep === 1 ? "text-primary" : "text-gray-500"}`}>
              Manager Info
            </div>
            <div className={`text-sm font-medium ${currentStep === 2 ? "text-primary" : "text-gray-500"}`}>
              Company Details
            </div>
            <div className={`text-sm font-medium ${currentStep === 3 ? "text-primary" : "text-gray-500"}`}>
              Subscription Details
            </div>
          </div>
        </div>


        {/* Step Components */}
        {currentStep === 1 && (
          <ManagerInfo currentStep={currentStep} handleNext={handleNext} />
        )}
        {currentStep === 2 && (
          <CompanyDetails
            currentStep={currentStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleCancel={handleCancel}
          />
        )}
        {currentStep === 3 && (
          <SubscriptionDetails
            currentStep={currentStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleCancel={handleCancel}
          />
        )}

        {/* Step Navigation Buttons */}
        <section className="flex justify-between mt-4"></section>
      </section>
    </div>
  );
};

export default AddManager;

// export default AddManager