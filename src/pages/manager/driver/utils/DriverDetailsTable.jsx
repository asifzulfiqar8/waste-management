import React, { useState, useRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaEllipsisV } from "react-icons/fa";

// Sample data
export const DriverWasteData = [
    {
      id: 1,
      date: "Feb 10, 2024",
      Hours: "8-hrs",
      bin: "16",
      route: "Route A",
      Attendance: "leave",
      missedPickup: "2",
      task: "complete",
    },
    {
      id: 2,
      date: "Feb 11, 2024",
      Hours: "10-hrs",
      bin: "12",
      route: "Route B",
      Attendance: "present",
      missedPickup: "1",
      task: "incomplete",
    },
    {
      id: 3,
      date: "Feb 12, 2024",
      Hours: "9-hrs",
      bin: "20",
      route: "Route C",
      Attendance: "leave",
      missedPickup: "0",
      task: "complete",
    },
    {
      id: 4,
      date: "Feb 13, 2024",
      Hours: "8-hrs",
      bin: "10",
      route: "Route A",
      Attendance: "present",
      missedPickup: "3",
      task: "incomplete",
    },
    {
      id: 5,
      date: "Feb 14, 2024",
      Hours: "7-hrs",
      bin: "18",
      route: "Route D",
      Attendance: "leave",
      missedPickup: "2",
      task: "complete",
    },
    {
      id: 6,
      date: "Feb 15, 2024",
      Hours: "8-hrs",
      bin: "14",
      route: "Route B",
      Attendance: "present",
      missedPickup: "1",
      task: "incomplete",
    },
    {
      id: 7,
      date: "Feb 16, 2024",
      Hours: "9-hrs",
      bin: "16",
      route: "Route C",
      Attendance: "leave",
      missedPickup: "0",
      task: "complete",
    },
    {
      id: 8,
      date: "Feb 17, 2024",
      Hours: "10-hrs",
      bin: "22",
      route: "Route D",
      Attendance: "present",
      missedPickup: "2",
      task: "incomplete",
    },
    {
      id: 9,
      date: "Feb 18, 2024",
      Hours: "8-hrs",
      bin: "18",
      route: "Route A",
      Attendance: "leave",
      missedPickup: "3",
      task: "complete",
    },
    {
      id: 10,
      date: "Feb 19, 2024",
      Hours: "7-hrs",
      bin: "15",
      route: "Route B",
      Attendance: "present",
      missedPickup: "1",
      task: "incomplete",
    },
    {
      id: 11,
      date: "Feb 20, 2024",
      Hours: "9-hrs",
      bin: "20",
      route: "Route C",
      Attendance: "leave",
      missedPickup: "2",
      task: "complete",
    },
    {
      id: 12,
      date: "Feb 21, 2024",
      Hours: "8-hrs",
      bin: "12",
      route: "Route D",
      Attendance: "present",
      missedPickup: "0",
      task: "incomplete",
    },
    {
      id: 13,
      date: "Feb 22, 2024",
      Hours: "10-hrs",
      bin: "16",
      route: "Route A",
      Attendance: "leave",
      missedPickup: "1",
      task: "complete",
    },
    {
      id: 14,
      date: "Feb 23, 2024",
      Hours: "7-hrs",
      bin: "14",
      route: "Route B",
      Attendance: "present",
      missedPickup: "3",
      task: "incomplete",
    },
    {
      id: 15,
      date: "Feb 24, 2024",
      Hours: "9-hrs",
      bin: "18",
      route: "Route C",
      Attendance: "leave",
      missedPickup: "2",
      task: "complete",
    },
  ];
  

const EditableTaskCell = ({ row, onUpdateTask }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [taskValue, setTaskValue] = useState(row.task);
  const menuRef = useRef(null);

  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (value) => {
    setTaskValue(value);
    setShowMenu(false);
    // Optionally update your data source
    if (onUpdateTask) {
      onUpdateTask(row.id, value);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="w-20">{taskValue}</span>
        <FaEllipsisV onClick={handleIconClick} style={{ cursor: "pointer", marginLeft: 8 }} />
      </div>
      {showMenu && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            width: "100px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            zIndex: 50,
          }}
        >
          <div
            onClick={() => handleOptionClick("complete")}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              color: taskValue === "complete" ? "green" : "inherit",
            }}
          >
            complete
          </div>
          <div
            onClick={() => handleOptionClick("incomplete")}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              color: taskValue === "incomplete" ? "red" : "inherit",
            }}
          >
            incomplete
          </div>
        </div>
      )}
    </div>
  );
};

// Define the columns for DataTable
export const DriverDataColumns = [
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Hours",
    selector: (row) => row.Hours,
  },
  {
    name: "Bin",
    selector: (row) => row.bin,
  },
  {
    name: "Route",
    selector: (row) => row.route,
  },
  {
    name: "Attendance",
    cell: (row) => (
      <div className="flex h-full w-full items-center justify-center" style={{ background: row.Attendance.toLowerCase() === "leave" ? "#FAB1B1" : "inherit" }}>
        {row.Attendance}
      </div>
    ),
  },
  {
    name: "Missed Pickup",
    selector: (row) => row.missedPickup,
  },
  {
    name: "Task",
    cell: (row) => <EditableTaskCell row={row} />,
  },
];

