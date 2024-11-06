import {
    DashboardIcon,
    BinIcon,
    TruckIcon,
    DriverIcon,
    SensorsIcon,
    SettingIcon
  } from "../../assets/svgs/icon";
  
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
  ];
  