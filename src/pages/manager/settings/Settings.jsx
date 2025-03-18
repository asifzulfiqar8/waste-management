import React, { useState } from 'react';
import Plans from './Components/Plans';
import Profile from './Components/Profile';
import Subscriptions from './Components/Subscriptions';
const Settings = () => {

  const [activeTab, setActiveTab] = useState('profile');

  // Function to render the active component based on state
  const renderComponent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'subscription':
        return <Subscriptions />;
      case 'plans':
        return <Plans />;
      default:
        return null;
    }
  };

  // Button styles: filled style if active, otherwise a transparent background
  const buttonStyle = (tab) =>
    `px-4  rounded w-[131px] ${activeTab === tab ? 'bg-white text-black' : 'bg-transparent text-gray-400'
    }`;



  return (
    <div className=' lg:px-16  lg:py-9'>
      {/* Header with gray background and padding */}
      <div className="bg-gray-100 p-1 flex justify-center flex-col lg:flex-row space-x-2 w-[140px] lg:w-[417px] item-center  lg:h-10 rounded-md">
        <section className='flex flex-col lg:flex-row'>

          <button className={buttonStyle('profile')} onClick={() => setActiveTab('profile')}>
            Profile
          </button>
          <button className={buttonStyle('subscription')} onClick={() => setActiveTab('subscription')}>
            Subscription
          </button>
          <button className={buttonStyle('plans')} onClick={() => setActiveTab('plans')}>
            Plans
          </button>
        </section>
      </div>

      {/* Display the component based on active tab */}
      <div className="mt-10 flex ">{renderComponent()}</div>
    </div>
  )
}

export default Settings


