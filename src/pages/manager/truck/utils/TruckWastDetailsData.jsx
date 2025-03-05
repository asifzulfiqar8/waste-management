export const TruckWasteData = [
    {
      id: 1,
      date: "Feb 12, 2024",
      km: "230km",
      fuel: "16-ltr",
      bin: "16",
      route: "Route A",
      weight: "16kg",
      missedPickup: "0",
      task: "complete",
    },
    {
      id: 2,
      date: "Feb 13, 2024",
      km: "250km",
      fuel: "18-ltr",
      bin: "17",
      route: "Route B",
      weight: "18kg",
      missedPickup: "1",
      task: "Incomplete",
    },
    {
      id: 3,
      date: "Feb 14, 2024",
      km: "210km",
      fuel: "15-ltr",
      bin: "15",
      route: "Route C",
      weight: "15kg",
      missedPickup: "0",
      task: "complete",
    },
    {
      id: 4,
      date: "Feb 15, 2024",
      km: "240km",
      fuel: "17-ltr",
      bin: "16",
      route: "Route D",
      weight: "17kg",
      missedPickup: "2",
      task: "Incomplete",
    },
    {
      id: 5,
      date: "Feb 16, 2024",
      km: "220km",
      fuel: "16-ltr",
      bin: "15",
      route: "Route E",
      weight: "16kg",
      missedPickup: "0",
      task: "complete",
    },
    {
      id: 6,
      date: "Feb 17, 2024",
      km: "235km",
      fuel: "18-ltr",
      bin: "16",
      route: "Route F",
      weight: "18kg",
      missedPickup: "1",
      task: "Incomplete",
    },
    {
      id: 7,
      date: "Feb 18, 2024",
      km: "255km",
      fuel: "20-ltr",
      bin: "18",
      route: "Route G",
      weight: "20kg",
      missedPickup: "0",
      task: "complete",
    },
    {
      id: 8,
      date: "Feb 19, 2024",
      km: "265km",
      fuel: "21-ltr",
      bin: "19",
      route: "Route H",
      weight: "21kg",
      missedPickup: "2",
      task: "Incomplete",
    },
    {
      id: 9,
      date: "Feb 20, 2024",
      km: "245km",
      fuel: "19-ltr",
      bin: "17",
      route: "Route I",
      weight: "19kg",
      missedPickup: "1",
      task: "complete",
    },
    {
      id: 10,
      date: "Feb 21, 2024",
      km: "260km",
      fuel: "22-ltr",
      bin: "20",
      route: "Route J",
      weight: "22kg",
      missedPickup: "0",
      task: "Incomplete",
    },
  ];
  
export const TruckWasteDataColumns = [
    {
        name: "Date",
        selector: (row) => row?.date,
    },
    {
        name: "Km",
        selector: (row) => row?.km, // Changed from "trucks" to "km" to match data
    },
    {
        name: "Fuel",
        selector: (row) => row?.fuel, // Changed from "metal" to "fuel"
    },
    {
        name: "Bin",
        selector: (row) => row?.bin, // Changed from "plastic" to "bin"
    },
    {
        name: "Route",
        selector: (row) => row?.route, // Changed from "wood" to "route"
    },
    {
        name: "Weight",
        selector: (row) => row?.weight, // Changed from "paper" to "weight"
    },
    {
        name: "Missed Pickup",
        selector: (row) => row?.missedPickup, // Changed from "liquid" to "missedPickup"
    },
    {
        name: "Task",
        selector: (row) => <div>{row?.task}</div>, // Changed from "recycled" to "task"
    },
    {
        name: "Task",
        cell: (row) => (
            <div
                style={{
                    display: "block", // Ensure div takes full width of the cell
                    width: "100%",
                    height:"100%",
                    backgroundColor:
                        row.task.toLowerCase() === "complete" ? "#ACF781" : "#FAB1B1",
                    background:
                        row.task.toLowerCase() === "complete" ? "#ACF781" : "#FAB1B1",
                    color:
                        row.task.toLowerCase() === "complete" ? "#155724" : "#721c24",
                    padding: "8px",
                    textAlign: "center",
                }}
            >
                {row.task}
            </div>
        ),
    },
];
