/* eslint-disable react/prop-types */
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import redBin from "../../../../../assets/images/dashboard/map-red-bin.png";
import yellowBin from "../../../../../assets/images/dashboard/map-yellow-bin.png";
import greenBin from "../../../../../assets/images/dashboard/map-green-bin.png";

import redTruck from "../../../../../assets/images/dashboard/map-red-truck.png";
import yellowTruck from "../../../../../assets/images/dashboard/map-yellow-truck.png";
import greenTruck from "../../../../../assets/images/dashboard/map-green-truck.png";

import binBg from "../../../../../assets/images/dashboard/bins-map.png";
import { TiMinus } from "react-icons/ti";
import Button from "../../../../../components/shared/small/Button";

// Custom icons for the markers
const redBinIcon = L.icon({
  iconUrl: redBin,
  iconSize: [25, null],
  iconAnchor: [19, 95],
  popupAnchor: [0, -76],
});
const yellowBinIcon = L.icon({
  iconUrl: yellowBin,
  iconSize: [25, null],
  iconAnchor: [19, 95],
  popupAnchor: [0, -76],
});
const greenBinIcon = L.icon({
  iconUrl: greenBin,
  iconSize: [25, null],
  iconAnchor: [19, 95],
  popupAnchor: [0, -76],
});
const redTruckIcon = L.icon({
  iconUrl: redTruck,
  iconSize: [25, null],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const yellowTruckIcon = L.icon({
  iconUrl: yellowTruck,
  iconSize: [25, null],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const greenTruckIcon = L.icon({
  iconUrl: greenTruck,
  iconSize: [25, null],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const AdminMap = () => {
  const position = [51.505, -0.09];

  const [selectedTab, setSelectedTab] = useState("both");

  const markers = [
    {
      id: 1,
      type: "truck",
      position: [51.505, -0.09],
      status: "full",
      popup: "Bin Marker: London",
    },
    {
      id: 2,
      type: "truck",
      position: [51.51, -0.1],
      status: "empty",
      popup: "Empty Truck Marker",
    },
    {
      id: 3,
      type: "bin",
      position: [51.51, -0.12],
      status: "half",
      popup: "Another Bin Marker",
    },
    {
      id: 4,
      type: "truck",
      position: [51.507, -0.08],
      status: "half",
      popup: "Half-Filled Truck Marker",
    },
    {
      id: 5,
      type: "bin",
      position: [51.508, -0.07],
      status: "full",
      popup: "Full Truck Marker",
    },
    {
      id: 6,
      type: "bin",
      position: [51.509, -0.06],
      status: "empty",
      popup: "Empty Bin Marker",
    },
  ];

  const filteredMarkers = markers.filter(
    (marker) => selectedTab === "both" || marker.type === selectedTab
  );

  const getIcon = (marker) => {
    if (marker.type === "bin") {
      switch (marker.status) {
        case "empty":
          return greenBinIcon;
        case "half":
          return yellowBinIcon;
        case "full":
          return redBinIcon;
        default:
          return greenBinIcon;
      }
    } else if (marker.type === "truck") {
      switch (marker.status) {
        case "empty":
          return greenTruckIcon;
        case "half":
          return yellowTruckIcon;
        case "full":
          return redTruckIcon;
        default:
          return greenTruckIcon;
      }
    }
    // return redBinIcon;
  };

  return (
    <div className="rounded-xl">
      <div className="bg-white shadow-lg p-3 border-[1px] rounded-t-xl">
        <div className="flex items-center justify-between flex-wrap">
          <h3 className="text-sm font-[600]">Map View</h3>

          <div className="flex gap-2 flex-wrap">
            <MapLegends color="text-[#AAF0E2]" legend="Empty" />
            <MapLegends color="text-[#BA2222]" legend="Full" />
            <MapLegends color="text-[#F4AB58]" legend="Half" />

            {/* Buttons to toggle between bins, trucks, or both */}
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                selectedTab === "both"
                  ? "bg-primary text-white"
                  : "bg-[#92AB8F33] text-[#000]"
              }`}
              onClick={() => setSelectedTab("both")}
            >
              Bins & Trucks
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                selectedTab === "bin"
                  ? "bg-primary text-white"
                  : "bg-[#92AB8F33] text-[#000]"
              }`}
              onClick={() => setSelectedTab("bin")}
            >
              Bins
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                selectedTab === "truck"
                  ? "bg-primary text-white"
                  : "bg-[#92AB8F33] text-[#000]"
              }`}
              onClick={() => setSelectedTab("truck")}
            >
              Trucks
            </button>
          </div>
        </div>
      </div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        />

        {filteredMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={getIcon(marker)}
          >
            <Popup>
              <div style={{ fontSize: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={binBg}
                    alt="location"
                    className="rounded-t-[10px]"
                  />
                </div>

                <div className="px-3">
                  <div className="p-2 shadow-lg w-fit border-[1px] text-left ">
                    <p className="text-xs text-[#00000050]">Location</p>
                    <p style={{ margin: 0 }}>
                      <strong>{marker.popup}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <Button
                    text="View All"
                    bg="bg-primary text-white hover:text-primary hover:bg-white"
                    width="w-[80px]"
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AdminMap;

const MapLegends = ({ color, legend }) => {
  return (
    <div className="flex items-center gap-1">
      <TiMinus className={`${color} font-bold`} />
      <p className="text-xs">{legend}</p>
    </div>
  );
};
