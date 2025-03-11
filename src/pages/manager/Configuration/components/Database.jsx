import React, { useState } from 'react';
import Input from '../../../../components/shared/small/Input';

const inputFields = [
  { label: "Host Name", type: "text", name: "hostName", placeholder: "Host Name" },
  { label: "Port Name", type: "text", name: "portName", placeholder: "0000" },
  { label: "DataBase Name", type: "text", name: "databaseName", placeholder: "Email" },
  { label: "Username", type: "text", name: "username", placeholder: "Username" },
  { label: "Password", type: "password", name: "password", placeholder: "Password" },
];

function Database() {
  const [formData, setFormData] = useState({
    hostName: '',
    portName: '',
    databaseName: '',
    username: '',
    password: '',
  });

  const [dbType, setDbType] = useState('local');

  const formDataChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDbTypeChange = (event) => {
    setDbType(event.target.value);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <section className='text-2xl font-semibold'>
        Database Type
      </section>
      <section className='flex items-center gap-8'>
        <label className='flex items-center gap-2'>
          <input
            type='radio'
            name='dbType'
            value='local'
            checked={dbType === 'local'}
            onChange={handleDbTypeChange}
            className='custom-radio'
          />
          Local Database
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='radio'
            name='dbType'
            value='remote'
            checked={dbType === 'remote'}
            onChange={handleDbTypeChange}
            className='custom-radio'
          />
          Remote Database
        </label>
      </section>
      <section className='w-full'>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {inputFields.map((field, index) => (
            <div
              key={field.name}
              className={`${index === inputFields.length - 1 ? "lg:col-span-2" : ""}`}
            >
              <Input
                type={field.type}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formDataChangeHandler}
                value={formData[field.name]}
              />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Database;
