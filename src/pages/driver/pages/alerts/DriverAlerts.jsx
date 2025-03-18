import React from 'react';
import BinAlert from './components/BinAlert';
import alertsData from './utils/alertsData';



function DriverAlerts() {
  return (
    <div className='p-5 h-full overflow-auto custom-scroll'>
      <BinAlert alerts={alertsData} />
    </div>
  )
}

export default DriverAlerts