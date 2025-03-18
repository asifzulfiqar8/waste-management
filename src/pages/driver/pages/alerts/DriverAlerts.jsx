import React from 'react'
import RedBin from '../../../../assets/images/driver/alert/RedBin.png'
import { MdOutlineShowChart } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
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