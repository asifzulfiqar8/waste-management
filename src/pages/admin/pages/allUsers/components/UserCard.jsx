
import React from 'react';
import { SmallButton } from '../../../../../components/shared/small/Button';
import { UserBin, UserSensor, UserTruck, Premium, Standard, Basic } from '../../../../../assets/svgs/icon';
import Modal from '../../../../../components/shared/small/Modal';

const Divider = () => (
  <div className="w-[0.6px] h-[80%] bg-[#00000033]" />
);

const DetailItem = ({ label, children }) => (
  <div className="flex flex-col items-center justify-center w-full">
    <span className="text-xs font-bold">{label}</span>
    <span className="text-xs font-semibold text-[#4F4F4FB2]">{children}</span>
  </div>
);

const PackageBadge = ({ packageType }) => {
  let IconComponent;
  let bgClass = "";
  const type = packageType.toLowerCase();

  if (type === 'premium') {
    IconComponent = Premium;
    bgClass = "bg-yellow-500";
  } else if (type === 'standard') {
    IconComponent = Standard;
    bgClass = "bg-blue-500";
  } else if (type === 'basic') {
    IconComponent = Basic;
    bgClass = "bg-gray-500";
  } else {
    bgClass = "bg-blue-500";
  }

  return (
    <div className={`absolute top-4 right-0 gap-2 flex items-center text-white rounded px-2 py-1 text-xs ${bgClass}`}>
      {IconComponent && <IconComponent className="w-4 h-4 mr-1" />}
      <span className="capitalize">{packageType}</span>
    </div>
  );
};

function UserCard({
  image,
  name,
  company,
  email,
  contact,
  city,
  totalBins,
  totalTruck,
  totalSensors,
  packageType,
  openModal,
}) {
  // Truncate email if it's too long
  const maxEmailLength = 15;
  const truncatedEmail =
    email.length > maxEmailLength ? `${email.substring(0, maxEmailLength)}...` : email;

  return (
    <section className="rounded-2xl flex flex-col relative h-[320px] shadow-lg border">
      {/* Header Section */}
      <div className="flex flex-col items-center h-full justify-center">
        <div>
          <img src={image} className="rounded-full" alt={name} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-sm font-medium">{company}</span>
        </div>
      </div>

      {/* Package Badge */}
      {packageType && <PackageBadge packageType={packageType} />}

      <div className="w-full h-[0.6px] bg-[#00000033]" />

      {/* Details Section */}
      <div className="flex flex-col w-full mt-2 gap-4 items-center justify-center h-full">
        <div className="flex w-full justify-between items-center">
          <DetailItem label="Email">{truncatedEmail}</DetailItem>
          <Divider />
          <DetailItem label="Contact">{contact}</DetailItem>
          <Divider />
          <DetailItem label="City">{city}</DetailItem>
        </div>
        <div className="flex w-full justify-between items-center mt-2">
          <DetailItem label="Total Bins">
            <div className="flex gap-2 items-center">
              <UserBin /> {totalBins}
            </div>
          </DetailItem>
          <Divider />
          <DetailItem label="Total Truck">
            <div className="flex gap-2 items-center">
              <UserTruck /> {totalTruck}
            </div>
          </DetailItem>
          <Divider />
          <DetailItem label="Total Sensors">
            <div className="flex gap-2 items-center">
              <UserSensor /> {totalSensors}
            </div>
          </DetailItem>
        </div>
        <div className="flex h-full items-center justify-center">
          <SmallButton onClick={openModal}>View Details</SmallButton>
        </div>
      </div>
    </section>
  );
}

export default UserCard;
