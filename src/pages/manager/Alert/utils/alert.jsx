export const initialAlertData = [
  {
    id: 1,
    alertName: "truck offline",
    alertType: "Truck",
    severity: "Medium", // This will render as yellow
    notificationType: "On Platform",
    status: "full", // "full" means enabled
    action: "full",
  },
  {
    id: 2,
    alertName: "sensor offline",
    alertType: "Sensor",
    severity: "Low", // This will render as green
    notificationType: "On email",
    status: "full",
    action: "full",
  },
  {
    id: 3,
    alertName: "truck offline",
    alertType: "Truck",
    severity: "High", // This will render as red
    notificationType: "On Platform",
    status: "full",
    action: "full",
  },
];