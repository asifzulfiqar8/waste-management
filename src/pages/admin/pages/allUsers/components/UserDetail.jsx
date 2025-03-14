import React, { memo } from 'react';
import AdminWasteOverViewChart from '../../dashboard/components/AdminWasteOverViewChart';

const Divider = memo(() => (
    <div className="w-[0.6px] h-6 bg-[#00000033]" />
));

const DetailItem = memo(({ label, children }) => (
    <div className="flex flex-col items-center justify-center w-full">
        <span className="text-xs font-bold">{label}</span>
        <span className="text-xs font-semibold text-[#4F4F4FB2]">{children}</span>
    </div>
));

const UserDetail = memo(({ user }) => {
    if (!user) return null;

    const {
        image,
        name,
        company,
        email,
        contact,
        city,
        totalBins,
        totalTruck,
        totalSensors,
        companyName,
        companyEmail,
        plane,
        packageType,
    } = user;

    const maxEmailLength = 15;
    const truncatedEmail =
        email?.length > maxEmailLength ? `${email.substring(0, maxEmailLength)}...` : email;

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
                <img src={image} alt={name} className="rounded-full" />
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">{name}</span>
                    <span className="text-sm font-medium">{company}</span>
                </div>
            </div>
            <div className="w-full h-[0.6px] bg-[#00000033]" />
            <div className="flex w-full justify-between items-center">
                <DetailItem label="Username">{name}</DetailItem>
                <Divider />
                <DetailItem label="Email">{truncatedEmail}</DetailItem>
                <Divider />
                <DetailItem label="Contact">{contact}</DetailItem>
                <Divider />
                <DetailItem label="City">{city}</DetailItem>
            </div>
            <div className="w-full h-[0.6px] bg-[#00000033]" />
            <div className="flex w-full justify-between items-center">
                <DetailItem label="Company Contact">{companyName}</DetailItem>
                <Divider />
                <DetailItem label="Company Email">{companyEmail}</DetailItem>
                <Divider />
                <DetailItem label="Plan">{plane}</DetailItem>
                <Divider />
                <DetailItem label="Plan Type">{packageType}</DetailItem>
            </div>
            <div className="flex w-full justify-between gap-4 items-center">
                <div className="flex flex-col items-center justify-center w-full h-24 shadow-xl rounded-xl border">
                    <span className="text-sm font-semibold">Total Bin</span>
                    <span className="text-2xl font-semibold">{totalBins}</span>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-24 shadow-xl rounded-xl border">
                    <span className="text-sm font-semibold">Total Truck</span>
                    <span className="text-2xl font-semibold">{totalTruck}</span>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-24 shadow-xl rounded-xl border">
                    <span className="text-sm font-semibold">Total Sensor</span>
                    <span className="text-2xl font-semibold">{totalSensors}</span>
                </div>
            </div>
            <div className="w-full border shadow-lg rounded-lg">
                <AdminWasteOverViewChart />
            </div>
        </div>
    );
});

export default UserDetail;
