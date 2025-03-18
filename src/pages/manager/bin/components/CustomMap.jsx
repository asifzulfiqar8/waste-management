
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import Button from "../../../../components/shared/small/Button";

// Custom icon for the marker
const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your custom icon if needed
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Component to force map resize
function ForceMapResize() {
  const map = useMap();
  map.invalidateSize();
  return null;
}

function CustomMap({ longitude, latitude }) {
  const position = [latitude, longitude]; // Center position of the map

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
      />

      {/* Single Marker */}
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div style={{ fontSize: "12px" }}>
            <div className="px-3">
              <div className="p-2 shadow-lg border text-left">
                <p className="text-xs text-gray-500">Location</p>
                <p style={{ margin: 0 }}>
                  <strong>Longitude: {longitude}</strong>
                  <br />
                  <strong>Latitude: {latitude}</strong>
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

      <ForceMapResize />
    </MapContainer>
  );
}

export default CustomMap;
