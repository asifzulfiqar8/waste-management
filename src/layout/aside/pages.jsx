// import {
//   DashboardIcon,
//   BinIcon,
//   TruckIcon,
//   DriverIcon,
//   SensorsIcon,
//   SettingIcon,
//   Recycle,
//   Truck,
//   Driver,
//   Configuration,
//   Alert,
//   Wast
// } from "../../assets/svgs/icon";
// import { LiaRecycleSolid } from "react-icons/lia";

// export const pages = [
//   {
//     id: 1,
//     title: "Dashboard",
//     link: '/',
//     icon: <DashboardIcon />,
//   },
//   {
//     id: 2,
//     title: "Bin",
//     link: '/bin',
//     icon: <BinIcon />,
//   },
//   {
//     id: 3,
//     title: "Truck",
//     link: '/truck',
//     icon: <TruckIcon />,
//   },
//   {
//     id: 4,
//     title: "Driver",
//     link: '/driver',
//     icon: <DriverIcon />,
//   },
//   {
//     id: 5,
//     title: "Sensors",
//     link: '/sensors',
//     icon: <SensorsIcon />,
//   },
//   {
//     id: 6,
//     title: "Settings",
//     link: '/settings',
//     icon: <SettingIcon />,
//   },
//   {
//     id: 7,
//     title: "Recycle",
//     link: '/recycle',
//     icon: <Recycle />,
//   },
//   {
//     id: 8,
//     title: "Bin Report",
//     link: '/bin-report',
//     icon: <BinIcon />,
//   },
//   {
//     id: 9,
//     title: "Truck Report",
//     link: '/truck-report',
//     icon: <Truck />,
//   },
//   {
//     id: 10,
//     title: "Driver Report",
//     link: '/driver-report',
//     icon: <Driver />,
//   },
//   {
//     id: 11,
//     title: "Recycle Report",
//     link: '/recycle-report',
//     icon: <Recycle />,
//   },
//   {
//     id: 12,
//     title: "Wast Report",
//     link: '/wast-report',
//     icon: <Wast />,
//   },
//   {
//     id: 13,
//     title: "Configuration",
//     link: '/configuration',
//     icon: <Configuration />,
//   },
//   {
//     id: 14,
//     title: "Alert",
//     link: '/alert',
//     icon: <Alert />,
//   },
// ];

// pages.js
import {
  DashboardIcon,
  BinIcon,
  TruckIcon,
  DriverIcon,
  SensorsIcon,
  SettingIcon,
  Recycle,
  Truck,
  Driver,
  Configuration,
  Alert,
  Wast
} from "../../assets/svgs/icon";

export const pages = [
  // Main Section
  {
    id: 1,
    title: "Dashboard",
    link: '/',
    icon: <DashboardIcon />,
    section: "Main",
  },
  {
    id: 2,
    title: "Bin",
    link: '/bin',
    icon: <BinIcon />,
    section: "Main",
  },
  {
    id: 3,
    title: "Truck",
    link: '/truck',
    icon: <TruckIcon />,
    section: "Main",
  },
  {
    id: 4,
    title: "Driver",
    link: '/driver',
    icon: <DriverIcon />,
    section: "Main",
  },
  {
    id: 5,
    title: "Sensors",
    link: '/sensors',
    icon: <SensorsIcon />,
    section: "Main",
  },
  {
    id: 7,
    title: "Recycle",
    link: '/recycle',
    icon: <Recycle />,
    section: "Main",
  },
  // Reports Section
  {
    id: 8,
    title: "Bin Report",
    link: '/bin-report',
    icon: <BinIcon />,
    section: "Reports",
  },
  {
    id: 9,
    title: "Truck Report",
    link: '/truck-report',
    icon: <Truck />,
    section: "Reports",
  },
  {
    id: 10,
    title: "Driver Report",
    link: '/driver-report',
    icon: <Driver />,
    section: "Reports",
  },
  {
    id: 11,
    title: "Recycle Report",
    link: '/recycle-report',
    icon: <Recycle />,
    section: "Reports",
  },
  {
    id: 12,
    title: "Wast Report",
    link: '/wast-report',
    icon: <Wast />,
    section: "Reports",
  },
  // Settings Section
  {
    id: 6,
    title: "Settings",
    link: '/settings',
    icon: <SettingIcon />,
    section: "Settings",
  },
  {
    id: 13,
    title: "Configuration",
    link: '/configuration',
    icon: <Configuration />,
    section: "Settings",
  },
  {
    id: 14,
    title: "Alert",
    link: '/alert',
    icon: <Alert />,
    section: "Settings",
  },
];
