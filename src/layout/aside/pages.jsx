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
import { LiaRecycleSolid } from "react-icons/lia";

export const pages = [
  {
    id: 1,
    title: "Dashboard",
    link: '/',
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: "Bin",
    link: '/bin',
    icon: <BinIcon />,
  },
  {
    id: 3,
    title: "Truck",
    link: '/truck',
    icon: <TruckIcon />,
  },
  {
    id: 4,
    title: "Driver",
    link: '/driver',
    icon: <DriverIcon />,
  },
  {
    id: 5,
    title: "Sensors",
    link: '/sensors',
    icon: <SensorsIcon />,
  },
  {
    id: 6,
    title: "Settings",
    link: '/settings',
    icon: <SettingIcon />,
  },
  {
    id: 7,
    title: "Recycle",
    link: '/recycle',
    icon: <Recycle />,
  },
  {
    id: 8,
    title: "Bin Report",
    link: '/bin-report',
    icon: <BinIcon />,
  },
  {
    id: 9,
    title: "Truck Report",
    link: '/truck-report',
    icon: <Truck />,
  },
  {
    id: 9,
    title: "Driver Report",
    link: '/driver-report',
    icon: <Driver />,
  },
  {
    id: 9,
    title: "Recycle Report",
    link: '/recycle-report',
    icon: <Recycle />,
  },
  {
    id: 9,
    title: "Wast Report",
    link: '/wast-report',
    icon: <Wast />,
  },
  {
    id: 9,
    title: "Configuration",
    link: '/configuration',
    icon: <Configuration />,
  },
  {
    id: 9,
    title: "Alert",
    link: '/alert',
    icon: <Alert />,
  },
];
