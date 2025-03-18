import React from 'react';
import { MdOutlineShowChart } from 'react-icons/md';
import { IoIosAlert } from 'react-icons/io';

const DriverAlert = ({ image, binName, binPercentage, time1, time2, status }) => {
  const isFull = status.toLowerCase().includes("full");

  return (
    <div className="flex w-full py-2 ">
      <div>
        <img src={image} alt="Bin" className="w-10 h-10 object-contain" />
      </div>
      <div className="flex flex-col w-full ml-2">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div className="mr-4">{binName}</div>
            <div className="flex items-center">
              <span className="mr-1 text-red-800">{binPercentage}%</span>
              <MdOutlineShowChart />
            </div>
          </div>
          <div className="flex items-center">
            {isFull && (
              <IoIosAlert className="mr-1 text-[#EE4444] text-3xl" />
            )}
            <span className="text-[#7C7C7C]">{status}</span>
          </div>
        </div>
        <div className="flex justify-between ">
          <span className="text-[#7C7C7C]">{time1}</span>
          <span className="text-[#7C7C7C]">{time2}</span>
        </div>
      </div>
    </div>
  );
};

const BinAlert = ({ alerts }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDiffDays = (dateStr) => {
    const alertDate = new Date(dateStr);
    alertDate.setHours(0, 0, 0, 0);
    const diffTime = today - alertDate;
    return diffTime / (1000 * 3600 * 24);
  };

  const getDayLabel = (dateStr) => {
    const diffDays = getDiffDays(dateStr);
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) {
      return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' });
    }
    return 'Previous';
  };

  const groups = {};
  alerts.forEach((alert) => {
    const diffDays = getDiffDays(alert.date);
    const label = getDayLabel(alert.date);
    if (!groups[label]) {
      groups[label] = { alerts: [], minDiff: diffDays };
    } else {
      groups[label].minDiff = Math.min(groups[label].minDiff, diffDays);
    }
    groups[label].alerts.push(alert);
  });

  const sortedGroups = Object.entries(groups).map(([label, group]) => ({
    label,
    alerts: group.alerts,
    minDiff: group.minDiff,
  }));

  sortedGroups.sort((a, b) => {
    const orderValue = (group) => {
      if (group.label === 'Today') return 0;
      if (group.label === 'Yesterday') return 1;
      if (group.label === 'Previous') return 1000;
      return group.minDiff;
    };
    return orderValue(a) - orderValue(b);
  });

  return (
    <div className='border p-3 rounded-lg shadow-lg'>
      {sortedGroups.map((group) => (
        <div key={group.label}>
          <h3 className="text-lg font-bold mb-2">{group.label}</h3>
          {group.alerts.map((alert, index) => (
            <DriverAlert
              key={index}
              image={alert.image}
              binName={alert.binName}
              binPercentage={alert.binPercentage}
              time1={alert.time1}
              time2={alert.time2}
              status={alert.status}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BinAlert;
