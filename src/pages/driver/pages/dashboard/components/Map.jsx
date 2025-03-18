/* eslint-disable react/prop-types */
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer
} from "react-leaflet";

import emptyBin from "../../../../../assets/images/dashboard/map-green-bin.png";
import fullBin from "../../../../../assets/images/dashboard/map-red-bin.png";
import halfBin from "../../../../../assets/images/dashboard/map-yellow-bin.png";

import truckIconImg from "../../../../../assets/images/dashboard/map-green-truck.png";

import { TiMinus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import binBg from "../../../../../assets/images/dashboard/bins-map.png";
import Button, { SmallButton } from "../../../../../components/shared/small/Button";

// Custom icons for bins
const emptyBinIcon = L.icon({
  iconUrl: emptyBin,
  iconSize: [25, 40],
  iconAnchor: [12, 40],
  popupAnchor: [1, -34],
});
const halfBinIcon = L.icon({
  iconUrl: halfBin,
  iconSize: [25, 40],
  iconAnchor: [12, 40],
  popupAnchor: [1, -34],
});
const fullBinIcon = L.icon({
  iconUrl: fullBin,
  iconSize: [25, 40],
  iconAnchor: [12, 40],
  popupAnchor: [1, -34],
});

// Truck icon
const greenTruckIcon = L.icon({
  iconUrl: truckIconImg,
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [1, -34],
});

const Map = () => {
  // Center somewhere near your actual area
  const position = [40.875, -74.64];

  // Toggle bins vs trucks vs both:
  const [selectedTab, setSelectedTab] = useState("both");

  // Example markers
  const markers = [
    {
      id: 1,
      type: "bin",
      status: "full",
      position: [40.876, -74.648],
      popup: "Full Bin #1",
    },
    {
      id: 2,
      type: "bin",
      status: "empty",
      position: [40.875, -74.646],
      popup: "Empty Bin #2",
    },
    {
      id: 3,
      type: "bin",
      status: "half",
      position: [40.874, -74.643],
      popup: "Half Bin #3",
    },
    {
      id: 4,
      type: "bin",
      status: "full",
      position: [40.873, -74.641],
      popup: "Full Bin #4",
    },
    {
      id: 5,
      type: "bin",
      status: "half",
      position: [40.873, -74.638],
      popup: "Half Bin #5",
    },
    {
      id: 6,
      type: "bin",
      status: "empty",
      position: [40.874, -74.636],
      popup: "Empty Bin #6",
    },
    {
      id: 7,
      type: "truck",
      status: "any",
      position: [40.875, -74.634],
      popup: "Truck Location",
    },
  ];

  // Filter markers for tab functionality
  const filteredMarkers = markers.filter(
    (marker) => selectedTab === "both" || marker.type === selectedTab
  );

  // Route coordinates
  const routeCoordinates = [
    [40.876, -74.648],
    [40.875, -74.646],
    [40.874, -74.643],
    [40.873, -74.641],
    [40.873, -74.638],
    [40.874, -74.636],
    [40.875, -74.634],
  ];

  // Decide which icon to use based on type/status
  const getIcon = (marker) => {
    if (marker.type === "bin") {
      switch (marker.status) {
        case "empty":
          return emptyBinIcon;
        case "half":
          return halfBinIcon;
        case "full":
          return fullBinIcon;
        default:
          return emptyBinIcon;
      }
    } else if (marker.type === "truck") {
      return greenTruckIcon;
    }
    return emptyBinIcon;
  };

  const navigate = useNavigate()
  // const truckDetailHandle = ((id) => {
  //     navigate(`/truck-detail/${id}`)
  // })
  const viewMapHandle = () => {
    navigate(`/drivers/view-map`)

  }
  return (
    <div className="rounded-xl">
      {/* Top bar */}
      <div className="bg-white shadow-lg p-3 border-[1px] rounded-t-xl">
        <div className="flex items-center justify-between flex-wrap">
          <h3 className="text-sm font-[600]">Map View</h3>

          {/* Legend + toggle buttons */}
          <div className="flex gap-2 flex-wrap items-center">
            <MapLegends color="text-gray-700" legend="Empty" />
            <MapLegends color="text-[#BA2222]" legend="Full" />
            <MapLegends color="text-[#F4AB58]" legend="Half" />

            <button
              className={`px-4 py-2 rounded-md text-sm ${selectedTab === "both"
                ? "bg-primary text-white"
                : "bg-[#92AB8F33] text-[#000]"
                }`}
              onClick={() => setSelectedTab("both")}
            >
              Bins & Trucks
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${selectedTab === "bin"
                ? "bg-primary text-white"
                : "bg-[#92AB8F33] text-[#000]"
                }`}
              onClick={() => setSelectedTab("bin")}
            >
              Bins
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${selectedTab === "truck"
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

      {/* 
        Wrap the map in a relative container so we can absolutely-position the button on top of it.
      */}
      <div className="relative" style={{ height: "400px" }}>
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
          />

          {/* Polyline showing the route */}
          <Polyline
            positions={routeCoordinates}
            pathOptions={{ color: "green", weight: 4 }}
          />

          {/* Markers */}
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
                      style={{ width: 60, height: "auto" }}
                    />
                  </div>
                  <div className="px-3">
                    <div className="p-2 shadow-lg w-fit border-[1px] text-left">
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

        {/* Absolutely-positioned "Start Route" button */}
        <div className="absolute bottom-4  left-4 z-[400]">
          <SmallButton onClick={viewMapHandle} className=" text-white !p-2">
          Start Route
          </SmallButton>
          
        </div>
      </div>
    </div>
  );
};

export default Map;

// A small component for the colored legend dashes
const MapLegends = ({ color, legend }) => {
  return (
    <div className="flex items-center gap-1">
      <TiMinus className={`${color} font-bold text-2xl`} />
      <p className="text-xs">{legend}</p>
    </div>
  );
};
