import React from 'react'

function Confirmation({ currentStep, handleNext, handlePrevious, handleCancel }) {
    return (
        <div>Confirmation


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
    )
}

export default Confirmation