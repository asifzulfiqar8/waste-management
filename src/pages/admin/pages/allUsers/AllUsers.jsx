import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AddIcon } from '../../../../assets/svgs/icon';
import Button, { SmallButton } from "../../../../components/shared/small/Button";
import Users from '../../../../assets/images/driver/allUsers/Users.png';
import UserCard from './components/UserCard';
import Modal from '../../../../components/shared/small/Modal';
import UserDetail from './components/UserDetail';

const usersData = [
  {
    id: 1,
    image: Users,
    name: 'John Doe',
    company: 'ABC Company',
    email: 'john.doe@example.com',
    contact: '123 456 7890',
    city: 'New York',
    totalBins: 10,
    totalTruck: 2,
    totalSensors: 5,
    packageType: 'Premium',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"monthly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  {
    id: 2,
    image: Users,
    name: 'Jane Smith',
    company: 'XYZ Company',
    email: 'jane.smith@example.com',
    contact: '987 654 3210',
    city: 'Los Angeles',
    totalBins: 15,
    totalTruck: 3,
    totalSensors: 7,
    packageType: 'standard',
    companyName:"abc",
    companyEmail:"Company@gmail.com",
    plane:"yearly"
  },
  // ...other users
];

function AllUsers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal title="User Details" onClose={closeModal}>
          {/* Pass the selected user data to UserDetail */}
          <UserDetail user={selectedUser} />
        </Modal>
      )}
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] mt-5">
        <ListingHeader />
        <div className="w-full h-[0.6px] bg-[#00000033] my-[18px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-h-[700px] overflow-y-scroll custom-scroll">
          {usersData.map((user) => (
            // Pass a callback that includes the current user data
            <UserCard key={user.id} {...user} openModal={() => openModal(user)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllUsers;

const ListingHeader = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <h6 className="text-base font-semibold text-[#060606CC]">Bins Listing</h6>
      <div className="flex items-center gap-2 bg-transparent border border-[#e7e7e7] rounded-[10px] py-2 px-4 h-[38px] w-full max-w-[322px]">
        <CiSearch fontSize={20} color="#7E7E7E" />
        <input
          type="text"
          placeholder="Search by Driver ID, Name, or truck"
          className="w-full text-xs md:text-sm font-medium bg-transparent border-none focus:outline-none text-[#939699]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          to="/admin/add-manager"
          className="flex items-center gap-3 text-[#060606CC] text-base font-semibold"
        >
          Add Manager
          <AddIcon />
        </Link>
      </div>
    </div>
  );
};
