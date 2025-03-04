import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { violationsData } from '../utils/truck';

// Example data for five violations
// const violationsData = [
//   {
//     id: 1,
//     name: 'Speeding',
//     time: '30min ago',
//     image: 'https://via.placeholder.com/30', // Replace with your image source
//     details: 'Exceeded speed limit by 20mph.',
//   },
//   {
//     id: 2,
//     name: 'Illegal Parking',
//     time: '1hr ago',
//     image: 'https://via.placeholder.com/30', // Replace with your image source
//     details: 'Parked in a no-parking zone.',
//   },
//   {
//     id: 3,
//     name: 'Red Light Violation',
//     time: '2hr ago',
//     image: 'https://via.placeholder.com/30', // Replace with your image source
//     details: 'Ran a red light at Main St.',
//   },
//   {
//     id: 4,
//     name: 'Seatbelt Violation',
//     time: '3hr ago',
//     image: 'https://via.placeholder.com/30', // Replace with your image source
//     details: 'Driver not wearing a seatbelt.',
//   },
//   {
//     id: 5,
//     name: 'Overloading',
//     time: '4hr ago',
//     image: 'https://via.placeholder.com/30', // Replace with your image source
//     details: 'Truck overloaded by 500kg.',
//   },
// ];

const ViolationsAccordion = () => {
    // Track which violation is open. Only one can be open at a time.
    const [openViolationId, setOpenViolationId] = useState(null);

    // Toggle the violation details based on id
    const toggleViolation = (id) => {
        setOpenViolationId(openViolationId === id ? null : id);
    };

    return (
        <section
            className="flex flex-col justify-between w-[380px] h-[275px] overflow-auto bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] mt-5"

        >
            {violationsData.map((violation) => (
                <section
                    key={violation.id}
                    className="flex justify-between border-b-[1px] p-2 md:p-4 "
                >
                    <section className="flex flex-col gap-4 ">
                        <section className='flex gap-4'>

                            <section>
                                <img
                                    src={violation.image}
                                    alt={violation.name}
                                    className="rounded-t-lg w-[30px] h-[30px] mx-auto"
                                />
                            </section>
                            <section>
                                <h3 className="font-medium text-sm md:text-base">{violation.name}</h3>
                                <p className="text-[#69776D] text-sm md:text-base">{violation.time}</p>
                            </section>
                        </section>
                        {/* Only show details if this violation is open */}
                        {openViolationId === violation.id && (
                            <section>
                                <p className="text-[#69776D] text-sm md:text-base">{violation.details}</p>
                            </section>
                        )}
                    </section>
                    <section>
                        <IoIosArrowDown
                            onClick={() => toggleViolation(violation.id)}
                            className={`text-[#69776D] cursor-pointer transition-transform duration-200 ${openViolationId === violation.id ? 'rotate-180' : ''
                                }`}
                        />
                    </section>
                </section>
            ))}
        </section>
    );
};

export default ViolationsAccordion;
