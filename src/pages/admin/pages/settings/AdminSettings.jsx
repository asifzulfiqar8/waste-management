import React, { useState } from 'react';
import Input from '../../../../components/shared/small/Input';
import { SmallButton } from '../../../../components/shared/small/Button';
// import Input from '../../../../components/shared/small/Input';
import Profiles from "../../../../assets/images/settings/Profiles.png";
// import { SmallButton } from '../../../../components/shared/small/Button';

const inputFields = [
  { label: "Full Name", type: "text", name: "fullName", placeholder: "Full Name" },
  { label: "Username", type: "text", name: "userName", placeholder: "UserName" },
  { label: "Email Address", type: "text", name: "email", placeholder: "Email" },
  { label: "Gender", type: "text", name: "gender", placeholder: "Gender" },
  { label: "Marital status", type: "text", name: "maritalStatus", placeholder: "Marital status" },
  { label: "Location", type: "text", name: "location", placeholder: "Location" },
];

function AdminSettings() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    gender: '',
    maritalStatus: '',
    location: '',
  });

  // Handler function for form inputs
  const formDataChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className='lg:p-12'>

      <section className='shadow-custom p-2 lg:p-8 w-full bg-white rounded-lg border h-full lg:h-[560px]'>

        {/* Profile Picture and Details */}
        <section className='flex flex-col lg:flex-row gap-4 items-center'>
          <section>
            <img
              src={Profiles}
              alt="Profile"
              className="rounded-t-lg object-cover h-full md:mx-auto"
            />
          </section>
          <section>
            <h1 className='text-2xl font-bold'>mks</h1>
            <h1 className='text-lg font-normal text-[#06060699]'>mks@gmail.com</h1>
          </section>
        </section>

        {/* Form Inputs */}
        <section className='mt-11'>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {inputFields.map(field => (
              <Input
                key={field.name}
                type={field.type}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formDataChangeHandler}
              />
            ))}
          </section>
        </section>

        {/* Action Buttons */}
        <section className='flex flex-wrap gap-4 justify-end my-4'>
          <SmallButton className='bg-white border border-primary'>
            Cancel
          </SmallButton>
          <SmallButton>
            Save
          </SmallButton>
          <SmallButton>
            Edit
          </SmallButton>
        </section>
      </section>
    </section>

  );
}

export default AdminSettings;
