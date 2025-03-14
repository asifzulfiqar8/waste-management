import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";

export const DriverWasteData = [
  {
    id: 1,
    date: "Feb 12, 2024",
    trucks: "3",
    metal: "16",
    plastic: "16",
    wood: "16",
    paper: "16",
    liquid: "16",
    recycled: "80%",
  },
  {
    id: 2,
    date: "Feb 13, 2024",
    trucks: "4",
    metal: "20",
    plastic: "12",
    wood: "18",
    paper: "15",
    liquid: "14",
    recycled: "78%",
  },
  {
    id: 3,
    date: "Feb 14, 2024",
    trucks: "2",
    metal: "14",
    plastic: "18",
    wood: "15",
    paper: "13",
    liquid: "12",
    recycled: "75%",
  },
  {
    id: 4,
    date: "Feb 15, 2024",
    trucks: "5",
    metal: "22",
    plastic: "10",
    wood: "20",
    paper: "17",
    liquid: "19",
    recycled: "82%",
  },
  {
    id: 5,
    date: "Feb 16, 2024",
    trucks: "3",
    metal: "18",
    plastic: "14",
    wood: "16",
    paper: "14",
    liquid: "15",
    recycled: "79%",
  },
  {
    id: 6,
    date: "Feb 17, 2024",
    trucks: "3",
    metal: "15",
    plastic: "15",
    wood: "15",
    paper: "15",
    liquid: "15",
    recycled: "76%",
  },
  {
    id: 7,
    date: "Feb 18, 2024",
    trucks: "4",
    metal: "21",
    plastic: "13",
    wood: "18",
    paper: "12",
    liquid: "17",
    recycled: "83%",
  },
  {
    id: 8,
    date: "Feb 19, 2024",
    trucks: "2",
    metal: "17",
    plastic: "16",
    wood: "14",
    paper: "16",
    liquid: "16",
    recycled: "77%",
  },
  {
    id: 9,
    date: "Feb 20, 2024",
    trucks: "3",
    metal: "16",
    plastic: "20",
    wood: "15",
    paper: "18",
    liquid: "13",
    recycled: "80%",
  },
];

const CheckboxDateCell = ({ row, onCheckChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    if (onCheckChange) {
      onCheckChange(row.id, e.target.checked);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        style={{ marginRight: 8 }}
      />
      <span>{row.date}</span>
    </div>
  );
};

const RecycledEditableCell = ({ row, onUpdateRecycled }) => {
  const initialValue = row.recycled.replace("%", "");
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const popoverRef = useRef(null);

  const getColor = (val) => {
    const num = parseFloat(val);
    if (num >= 80) return "#ACF781";
    if (num < 40) return "#FAB1B1";
    return "#FCD25E";
  };

  const handleIconClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (onUpdateRecycled) {
      onUpdateRecycled(row.id, `${value}%`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      if (onUpdateRecycled) {
        onUpdateRecycled(row.id, `${value}%`);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <span className="w-[100px] h-[45px] flex items-center justify-center" style={{ background: getColor(value), marginRight: "8px" }}>
        {value}%
      </span>
      <FaEllipsisV onClick={handleIconClick} style={{ cursor: "pointer" }} />
      {isEditing && (
        <div
          ref={popoverRef}
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "4px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            padding: "4px",
            zIndex: 50,
          }}
        >
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{ width: "60px" }}
          />
        </div>
      )}
    </div>
  );
};

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
    if (onUpdateTask) {
      onUpdateTask(row.id, value);
    }
  };

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
      <div className="w-full" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="w-[100px]">{taskValue}</span>
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

export const DriverDataColumns = [
  {
    name: "Date",
    cell: (row) => <CheckboxDateCell row={row} />,
  },
  {
    name: "Trucks",
    selector: (row) => row.trucks,
  },
  {
    name: "Metal",
    selector: (row) => `${row.metal}%`,
  },
  {
    name: "Plastic",
    selector: (row) => `${row.plastic}%`,
  },
  {
    name: "Wood",
    selector: (row) => `${row.wood}%`,
  },
  {
    name: "Paper",
    selector: (row) => `${row.paper}%`,
  },
  {
    name: "Liquid",
    selector: (row) => `${row.liquid}%`,
  },
  {
    name: "Recycled",
    cell: (row) => <RecycledEditableCell row={row} />,
  },
];
