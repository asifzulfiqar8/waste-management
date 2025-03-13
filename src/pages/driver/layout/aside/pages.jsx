import { DashboardIcon, Alert, SettingIcon, Route,  } from "../../../../assets/svgs/icon";

export const pages = [
  {
    id: 1,
    title: "Dashboard",
    link: '/drivers',
    icon: <DashboardIcon />,
  },
  {
    id: 9,
    title: "Alerts",
    link: '/drivers/alert',
    icon: <Alert />,
  },
  {
    id: 6,
    title: "Routes",
    link: '/drivers/routes',
    icon: <Route />,
  },

  {
    id: 6,
    title: "Settings",
    link: '/drivers/settings',
    icon: <SettingIcon />,
  },


];
