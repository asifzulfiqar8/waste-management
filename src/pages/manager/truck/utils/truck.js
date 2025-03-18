import BigIdleTruck from "../../../../assets/images/truck/BigIdleTruck.png";
import BigInRepairTuck from "../../../../assets/images/truck/BigInRepairTuck.png";
import BigOnRootTruck from "../../../../assets/images/truck/BigOnRootTruck.png";
import Driver from "../../../../assets/images/truck/Driver.png";
import GasPump from "../../../../assets/images/truck/GasPump.png";
import HeavyMachinery from "../../../../assets/images/truck/HeavyMachinery.png";
import IdleTruck from "../../../../assets/images/truck/IdleTruck.png";
import InRepairTruck from "../../../../assets/images/truck/InRepairTruck.png";
import OnRootSmallTruck from "../../../../assets/images/truck/OnRootSmallTruck.png";
import overload from "../../../../assets/images/truck/overload.png";
import Route from "../../../../assets/images/truck/Route.png";
import Weight from "../../../../assets/images/truck/Weight.png";

const tuckData = [
    { name: "Paper", value: 10 },
    { name: "Paper", value: 70 },
    { name: "Paper", value: 20 },
];


const truckListData = [
    {
        img: OnRootSmallTruck,
        color: "text-[#47484A]",
        count: "32",
        text: "On Root",
    },
    {
        img: IdleTruck,
        color: "text-[#FAC109]",
        count: "32",
        text: "Idle",
    },
    {
        img: InRepairTruck,
        color: "text-[#E30613]",
        count: "03",
        text: "In Repair",
    },
];
const fuelData = [
    { image: GasPump, text: "Fuel | 95%", percentage: 95, lineColor: "#28a745" },
    { image: Weight, text: "Weight | 480kg", percentage: 50, lineColor: "#ffc107" },
    { image: Route, text: "Status | En Route", percentage: 20, lineColor: "#dc3545" }
];


const trucks = [
    {
        id: '000001',
        driverName: 'John Doe',
        image: BigInRepairTuck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 75,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 50,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 90,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000002',
        driverName: 'Jane Doe',
        image: BigOnRootTruck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 65,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 40,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 80,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000003',
        driverName: 'Bob Smith',
        image: BigIdleTruck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 85,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 55,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 70,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000004',
        driverName: 'Alice Johnson',
        image: BigInRepairTuck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 70,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 60,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 75,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000005',
        driverName: 'Michael Brown',
        image: BigOnRootTruck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 80,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 45,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 85,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000006',
        driverName: 'Linda Davis',
        image: BigIdleTruck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 60,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 30,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 95,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000007',
        driverName: 'Robert Wilson',
        image: BigInRepairTuck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 90,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 70,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 65,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000008',
        driverName: 'Patricia Garcia',
        image: BigOnRootTruck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 55,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 35,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 88,
                lineColor: '#F87171',
            },
        ],
    },
    {
        id: '000009',
        driverName: 'Charles Martinez',
        image: BigIdleTruck,
        fuelData: [
            {
                image: GasPump,
                text: 'Fuel | 95%',
                percentage: 95,
                lineColor: '#34D399',
            },
            {
                image: Weight,
                text: 'Weight | 480kg',
                percentage: 65,
                lineColor: '#FBBF24',
            },
            {
                image: Route,
                text: 'Status | En Route',
                percentage: 50,
                lineColor: '#F87171',
            },
        ],
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
const driverData = {
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
        image: overload, // Replace with your image source
        details: 'Exceeded speed limit by 20mph.',
    },
    {
        id: 2,
        name: 'Illegal Parking',
        time: '1hr ago',
        image: overload, // Replace with your image source
        details: 'Parked in a no-parking zone.',
    },
    {
        id: 3,
        name: 'Red Light Violation',
        time: '2hr ago',
        image: overload, // Replace with your image source
        details: 'Ran a red light at Main St.',
    },
    {
        id: 4,
        name: 'Seatbelt Violation',
        time: '3hr ago',
        image: overload, // Replace with your image source
        details: 'Driver not wearing a seatbelt.',
    },
    {
        id: 5,
        name: 'Overloading',
        time: '4hr ago',
        image: overload, // Replace with your image source
        details: 'Truck overloaded by 500kg.',
    },
];
const routesData = [
    { id: 1, title: 'Eyland Ave to Hilside Ave', time: '02 min ago' },
    { id: 2, title: 'Route B', time: '05 min ago' },
    { id: 3, title: 'Route C', time: '10 min ago' },
    { id: 4, title: 'Route C', time: '10 min ago' },
    { id: 5, title: 'Route C', time: '10 min ago' },
    { id: 6, title: 'Route C', time: '10 min ago' },
    { id: 7, title: 'Route C', time: '10 min ago' },
    { id: 8, title: 'Route C', time: '10 min ago' },
    { id: 9, title: 'Route C', time: '10 min ago' },
    // add more routes as needed
];



export { driverData, fuelData, routesData, truckData, truckListData, trucks, tuckData, violationsData };
