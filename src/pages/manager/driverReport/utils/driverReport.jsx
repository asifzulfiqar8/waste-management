// Data file (e.g., driverData.js)
const driverData = [
  {
    id: 1,
    driverName: "Alice",
    totalDistanceCovered: "150",
    assignedTruck: "truck-001",
    totalBinCollected: 10,
    garbageCollected: 20, // in kg
    lastActiveDate: "2025-02-28",
    performanceRating: "85",
    alert: "None",
  },
  {
    id: 2,
    driverName: "Bob",
    totalDistanceCovered: "300",
    assignedTruck: "truck-002",
    totalBinCollected: 12,
    garbageCollected: 22, // in kg
    lastActiveDate: "2025-03-01",
    performanceRating: "78",
    alert: "Late Pickup",
  },
  {
    id: 3,
    driverName: "Charlie",
    totalDistanceCovered: "200",
    assignedTruck: "truck-003",
    totalBinCollected: 15,
    garbageCollected: 18, // in kg
    lastActiveDate: "2025-03-02",
    performanceRating: "92",
    alert: "None",
  },
  {
    id: 4,
    driverName: "Diana",
    totalDistanceCovered: "180",
    assignedTruck: "truck-004",
    totalBinCollected: 9,
    garbageCollected: 16, // in kg
    lastActiveDate: "2025-02-27",
    performanceRating: "70",
    alert: "Missed Collection",
  },
  {
    id: 5,
    driverName: "Ethan",
    totalDistanceCovered: "250",
    assignedTruck: "truck-005",
    totalBinCollected: 11,
    garbageCollected: 20, // in kg
    lastActiveDate: "2025-03-03",
    performanceRating: "80",
    alert: "Late Pickup",
  },
];

const CustomHeader = ({ title, width }) => (
  <div style={{ width, overflow: "hidden" }}>
    {title}
  </div>
);

const driverDataColumns = [
  {
    name: <CustomHeader title="Driver Name" width="150px" />,
    selector: (row) => row.driverName,
  },
  {
    name: <CustomHeader title="Driver ID" width="150px" />,
    selector: (row) => row.id,
  },
  {
    name: <CustomHeader title="Assigned Truck" width="100px" />,
    selector: (row) => row.assignedTruck,
  },
  {
    name: <CustomHeader title="Total Distance Covered" width="100px" />,
    selector: (row) => `${row.totalDistanceCovered}km`,
  },
  {
    name: <CustomHeader title="Total Bin Collected" width="100px" />,
    selector: (row) => row.totalBinCollected,
  },
  {
    name: <CustomHeader title="Garbage Collected (kg)" width="100px" />,
    selector: (row) => `${row.garbageCollected}kg`,
  },
  {
    name: <CustomHeader title="Last Active Date" width="150px" />,
    selector: (row) => row.lastActiveDate,
  },
  {
    name: <CustomHeader title="Performance Rating" width="100px" />,
    selector: (row) => `${row.performanceRating}%`,
  },
  {
    name: <CustomHeader title="Alert" width="150px" />,
    selector: (row) => row.alert,
  },
];

export { driverData, driverDataColumns };
