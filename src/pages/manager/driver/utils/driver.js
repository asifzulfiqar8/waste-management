import TruckDriver from '../../../../assets/images/drivers/TruckDriver.png'
import DustBin from '../../../../assets/images/drivers/DustBin.png'
// import Driver from '../../../../assets/images/drivers/Driver.png'
import HeavyMachinery from '../../../../assets/images/drivers/HeavyMachinery.png'
import Driver from '../../../../assets/images/drivers/Driver.png'
import TrafficLight from '../../../../assets/images/drivers/TrafficLight.png'

const driverData = [
  {
    title: "En Route",
    value: 90,
  },
  {
    title: "Available",
    value: 45,
  },
  {
    title: "Leave",
    value: 25,
  },
];

const drivers = [
  {
    id: "DR001",
    name: "John Doe",
    img: TruckDriver,
    DustBin: DustBin,
    title: "Experienced Driver",
    pickups: 15,
  },
  {
    id: "DR002",
    name: "Jane Smith",
    img: TruckDriver,
    DustBin: DustBin,
    title: "Reliable Driver",
    pickups: 12,
  },
  {
    id: "DR003",
    name: "Alice Johnson",
    img: TruckDriver,
    DustBin: DustBin,
    title: "Efficient Driver",
    pickups: 18,
  },
  {
    id: "DR004",
    name: "Bob Brown",
    img: TruckDriver,
    DustBin: DustBin,
    title: "Safe Driver",
    pickups: 10,
  },
  {
    id: "DR005",
    name: "Charlie Davis",
    img: TruckDriver,
    DustBin: DustBin,
    title: "Friendly Driver",
    pickups: 14,
  },
];

const truckData = {
  image: HeavyMachinery,
  details: [
    { label: 'Truck Id', value: '#000000' },
    { label: 'Registration', value: 'aaa 0000' },
    { label: 'Status', value: 'En Route' },
    { label: 'Last Emptied', value: '00:00 PM' },
  ],
};
const driversData = {
  image: Driver,
  details: [
    { label: 'Name', value: 'Jon' },
    { label: 'ID', value: '4323' },
    { label: 'National ID', value: '87236' },
    { label: 'Address', value: 'Your Address Here' },
    { label: 'Status', value: 'On Duty' },
  ],
};

const violationsData = [
  {
    id: 1,
    name: 'Speeding',
    time: '30min ago',
    image: TrafficLight, // Replace with your image source
    details: 'Exceeded speed limit by 20mph.',
  },
  {
    id: 2,
    name: 'Illegal Parking',
    time: '1hr ago',
    image: TrafficLight, // Replace with your image source
    details: 'Parked in a no-parking zone.',
  },
  {
    id: 3,
    name: 'Red Light Violation',
    time: '2hr ago',
    image: TrafficLight, // Replace with your image source
    details: 'Ran a red light at Main St.',
  },
  {
    id: 4,
    name: 'Seatbelt Violation',
    time: '3hr ago',
    image: TrafficLight, // Replace with your image source
    details: 'Driver not wearing a seatbelt.',
  },
  {
    id: 5,
    name: 'Overloading',
    time: '4hr ago',
    image: TrafficLight, // Replace with your image source
    details: 'Truck overloaded by 500kg.',
  },
];

export default drivers;


export {
  driverData, drivers, truckData,
  driversData,
  violationsData
};
