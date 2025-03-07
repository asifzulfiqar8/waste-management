import {
    DashboardIcon,
    BinIcon,
    TruckIcon,
    DriverIcon,
    SensorsIcon,
    SettingIcon,
    Recycle
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
      icon: <Recycle  />,
    },
  ];
  