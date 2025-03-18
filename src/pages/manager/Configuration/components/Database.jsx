import React, { useState } from 'react';
import Input from '../../../../components/shared/small/Input';
import Button from '../../../../components/shared/small/Button';
import Modal from '../../../../components/shared/small/Modal';

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
  const [pendingOption, setPendingOption] = useState('local');
  const [modal, setModal] = useState(false);

  const modalOpenHandler = () => setModal(true);
  const modalCloseHandler = () => setModal(false);

  const handleConfirmChange = () => {
    setDbType(pendingOption);
    modalCloseHandler();
  };

  const formDataChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update the pendingOption and show modal on change
  const handleDbTypeChange = (event) => {
    setPendingOption(event.target.value);
    modalOpenHandler();
  };

  return (
    <>
      {modal && (
        <Modal
          // onClose={modalCloseHandler}
          title="Database Storage Confirmation"
          width="w-[320px] md:w-[450px]"
        >
          <ConfirmationModal
            onClose={modalCloseHandler}
            onConfirm={handleConfirmChange}
          />
        </Modal>
      )}
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
    </>
  );
}

export default Database;

const ConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <div>
      <h6 className="text-sm md:text-base text-gray-400 font-medium">
        Do you want to store your data in a local database
      </h6>
      <div className="mt-12 flex justify-end">
        <div className="flex flex-wrap items-center gap-4">
          <Button
            text="Cancel"
            width="w-[120px]"
            height="h-[40px] md:h-[50px]"
            onClick={onClose}
          />
          <Button
            text="Change"
            width="w-[120px]"
            height="h-[40px] md:h-[50px]"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};
