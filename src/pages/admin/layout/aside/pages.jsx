import { AllUsers, DashboardIcon, SettingIcon, Subscriptions } from "../../../../assets/svgs/icon";

export const pages = [
  {
    id: 1,
    title: "Dashboard",
    link: '/admin',
    icon: <DashboardIcon />,
  },
  {
    id: 9,
    title: "All Users",
    link: '/admin/all-users',
    icon: <AllUsers />,
  },
  {
    id: 6,
    title: "Subscriptions",
    link: '/admin/subscriptions',
    icon: <Subscriptions />,
  },

  {
    id: 6,
    title: "Settings",
    link: '/admin/settings',
    icon: <SettingIcon />,
  },


];
