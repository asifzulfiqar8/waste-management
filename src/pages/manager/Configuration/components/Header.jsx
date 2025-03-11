import React, { useState } from 'react';
import Dropdown from '../../../../components/shared/small/Dropdown';

const dropdownOptions = [
  { option: "Option 1", value: "option1" },
  { option: "Option 2", value: "option2" },
  { option: "Option 3", value: "option3" },
];

function Header() {
  const [sensorType, setSensorType] = useState('option1');

  const handleDropdownChange = (value) => {
    setSensorType(value);
  };

  return (
    <div className='w-full flex flex-col gap-3'>
      <section className='text-2xl font-semibold'>
        Pull Request Intervals
      </section>
      <section className='text-[#1D1D1F66]'>
        <Dropdown
          label="Select Time Intervals"
          options={dropdownOptions}
          defaultText="Select an option"
          onSelect={handleDropdownChange}
        />
      </section>
    </div>
  );
}

export default Header;
