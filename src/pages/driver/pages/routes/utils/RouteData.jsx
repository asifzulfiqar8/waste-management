import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const routeData = [
  {
    date: "20/12/2024",
    startPoint: "Downtown",
    endPoint: "Zone A",
    totalDistanceCovered: "1200",
    totalBinServiced: "25",
    wastCollected: "123",
    timeTaken: "2",
    status: "completed",
  },
  {
    date: "21/12/2024",
    startPoint: "Uptown",
    endPoint: "Zone B",
    totalDistanceCovered: "1500",
    totalBinServiced: "30",
    wastCollected: "145",
    timeTaken: "2.5",
    status: "completed",
  },
  {
    date: "22/12/2024",
    startPoint: "Central Park",
    endPoint: "Zone C",
    totalDistanceCovered: "1000",
    totalBinServiced: "20",
    wastCollected: "110",
    timeTaken: "1.8",
    status: "pending",
  },
  {
    date: "23/12/2024",
    startPoint: "Suburb",
    endPoint: "Zone D",
    totalDistanceCovered: "800",
    totalBinServiced: "15",
    wastCollected: "95",
    timeTaken: "1.5",
    status: "completed",
  },
  {
    date: "24/12/2024",
    startPoint: "Downtown",
    endPoint: "Zone E",
    totalDistanceCovered: "1300",
    totalBinServiced: "28",
    wastCollected: "130",
    timeTaken: "2.2",
    status: "completed",
  },
  {
    date: "25/12/2024",
    startPoint: "City Center",
    endPoint: "Zone F",
    totalDistanceCovered: "1100",
    totalBinServiced: "22",
    wastCollected: "115",
    timeTaken: "1.9",
    status: "pending",
  },
  {
    date: "26/12/2024",
    startPoint: "East Side",
    endPoint: "Zone G",
    totalDistanceCovered: "900",
    totalBinServiced: "18",
    wastCollected: "100",
    timeTaken: "1.6",
    status: "completed",
  },
  {
    date: "27/12/2024",
    startPoint: "West End",
    endPoint: "Zone H",
    totalDistanceCovered: "1400",
    totalBinServiced: "27",
    wastCollected: "125",
    timeTaken: "2.3",
    status: "completed",
  },
  {
    date: "28/12/2024",
    startPoint: "North Town",
    endPoint: "Zone I",
    totalDistanceCovered: "1600",
    totalBinServiced: "32",
    wastCollected: "155",
    timeTaken: "2.7",
    status: "completed",
  },
  {
    date: "29/12/2024",
    startPoint: "South Town",
    endPoint: "Zone J",
    totalDistanceCovered: "1000",
    totalBinServiced: "20",
    wastCollected: "105",
    timeTaken: "1.7",
    status: "pending",
  },
];

const CustomHeader = ({ title, width }) => (
  <div
    style={{
      width: width,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "normal",
      wordBreak: "break-word",
      textAlign: "center",
      display: "flex",
    }}
  >
    {title}
  </div>
);

const handleViewMap = (row) => {
  // Implement your view map functionality here.
  console.log("View Map clicked for:", row);
};

const routeDataColumns = [
  {
    name: <CustomHeader title="Date" width="90px" />,
    selector: (row) => row.date,
  },
  {
    name: <CustomHeader title="Start Point" width="90px" />,
    selector: (row) => row.startPoint,
  },
  {
    name: <CustomHeader title="End Point" width="90px" />,
    selector: (row) => row.endPoint,
  },
  {
    name: <CustomHeader title="Total Distance Covered" width="90px" />,
    selector: (row) => `${row.totalDistanceCovered} km`,
  },
  {
    name: <CustomHeader title="Total Bin Serviced" width="90px" />,
    selector: (row) => `${row.totalBinServiced}`,
  },
  {
    name: <CustomHeader title="Wast Collected" width="90px" />,
    selector: (row) => `${row.wastCollected}`,
  },
  {
    name: <CustomHeader title="Time Taken" width="90px" />,
    selector: (row) => `${row.timeTaken} hrs`,
  },
  {
    name: <CustomHeader title="Status" width="90px" />,
    selector: (row) => `${row.status}`,
  },
  {
    name: <CustomHeader title="Action" width="90px" />,
    cell: (row) => (
      <div
        onClick={() => handleViewMap(row)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-primary text-sm font-semibold">
          View Map
        </span>
        <MdKeyboardDoubleArrowRight className="text-primary text-sm font-semibold" />
      </div>
    ),
  },
];

export { routeData, routeDataColumns };
