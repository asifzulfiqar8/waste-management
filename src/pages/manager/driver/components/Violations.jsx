import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
// import { violationsData } from '../utils/truck';

const ViolationsAccordion = ({ violationsData }) => {
    // Track which violation is open. Only one can be open at a time.
    const [openViolationId, setOpenViolationId] = useState(null);

    // Toggle the violation details based on id
    const toggleViolation = (id) => {
        setOpenViolationId(openViolationId === id ? null : id);
    };

    return (
        <section
            className="flex flex-col justify-between h-[260px]  lg:h-[290px] custom-scroll  w-full overflow-auto bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] "

        >
            <section className='text-base font-semibold'>

                Violations
            </section>
            {violationsData.map((violation) => (
                <section
                    key={violation.id}
                    className="flex justify-between border-b-[1px] py-2 "
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
