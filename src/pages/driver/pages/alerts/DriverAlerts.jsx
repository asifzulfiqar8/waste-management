import React from 'react'
import RedBin from '../../../../assets/images/driver/alert/RedBin.png'
import { MdOutlineShowChart } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
import BinAlert from './components/BinAlert';
import alertsData from './utils/alertsData';


// const alertsData = [
//   {
//     image: RedBin,
//     binName: 'Bin 1',
//     binPercentage: 95,
//     time1: '30min',
//     time2: '45min',
//     status: 'Bin at Location 1 is full and needs collection',
//     date: '2025-03-13T10:00:00', // Today (if today is March 13, 2025)
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 2',
//     binPercentage: 50,
//     time1: '15min',
//     time2: '30min',
//     status: 'half',
//     date: '2025-03-12T09:00:00', // Yesterday
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 3',
//     binPercentage: 20,
//     time1: '5min',
//     time2: '20min',
//     status: 'serviced',
//     date: '2025-03-11T08:00:00', // 2 days ago (Tuesday if today is Wednesday, adjust as needed)
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 4',
//     binPercentage: 85,
//     time1: '40min',
//     time2: '55min',
//     status: 'Bin at Location 4 is full and needs collection',
//     date: '2025-03-10T07:00:00', // 3 days ago
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 5',
//     binPercentage: 65,
//     time1: '35min',
//     time2: '50min',
//     status: 'half',
//     date: '2025-03-09T06:00:00', // 4 days ago
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 6',
//     binPercentage: 10,
//     time1: '20min',
//     time2: '40min',
//     status: 'serviced',
//     date: '2025-03-08T12:00:00', // 5 days ago
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 7',
//     binPercentage: 100,
//     time1: '45min',
//     time2: '60min',
//     status: 'Bin at Location 7 is full and needs collection',
//     date: '2025-03-07T14:00:00', // 6 days ago
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 8',
//     binPercentage: 75,
//     time1: '25min',
//     time2: '35min',
//     status: 'Bin at Location 8 is full and needs collection',
//     date: '2025-03-06T16:00:00', // 7 days ago
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 9',
//     binPercentage: 30,
//     time1: '10min',
//     time2: '20min',
//     status: 'half',
//     date: '2025-03-05T11:00:00', // 8 days ago → Previous
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 10',
//     binPercentage: 55,
//     time1: '20min',
//     time2: '30min',
//     status: 'serviced',
//     date: '2025-03-04T10:00:00', // 9 days ago → Previous
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 11',
//     binPercentage: 80,
//     time1: '40min',
//     time2: '55min',
//     status: 'Bin at Location 11 is full and needs collection',
//     date: '2025-03-03T09:00:00', // 10 days ago → Previous
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 12',
//     binPercentage: 45,
//     time1: '15min',
//     time2: '25min',
//     status: 'half',
//     date: '2025-03-02T08:00:00', // 11 days ago → Previous
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 13',
//     binPercentage: 35,
//     time1: '10min',
//     time2: '20min',
//     status: 'serviced',
//     date: '2025-03-01T07:00:00', // 12 days ago → Previous
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 14',
//     binPercentage: 90,
//     time1: '50min',
//     time2: '65min',
//     status: 'Bin at Location 14 is full and needs collection',
//     date: '2025-02-28T06:00:00', // 13 days ago → Previous
//   },
//   {
//     image: RedBin,
//     binName: 'Bin 15',
//     binPercentage: 60,
//     time1: '30min',
//     time2: '45min',
//     status: 'half',
//     date: '2025-02-27T05:00:00', // 14 days ago → Previous
//   },
// ];

function DriverAlerts() {
  return (
    <div>
      <BinAlert alerts={alertsData} />
    </div>
  )
}

export default DriverAlerts