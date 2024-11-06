import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import redBin from "../../../../assets/images/dashboard/red-bin-map.png";
import binBg from "../../../../assets/images/dashboard/bins-map.png";

// Custom icon for the marker
const myIcon = L.icon({
  iconUrl: redBin,
  iconSize: [15, null],
  iconAnchor: [19, 95],
  popupAnchor: [0, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

const Map = () => {
  const position = [51.505, -0.09];

  const markers = [
    { id: 1, position: [51.505, -0.09], popup: "Marker 1: London" },
  ];

  return (
    <div className="rounded-xl">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        {/* Using CartoDB Positron for Grayscale Map */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        />

        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={myIcon}>
            <Popup>
              {/* Custom Popup Content */}
              <div style={{ fontSize: "12px" }}>
                {/* Image Section */}
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

                <div style={{ textAlign: "left", color: "#333" }}>
                  <p className="text-xs text-[#00000050]">Oslo</p>
                  <p style={{ margin: 0 }}>
                    <strong>Torshov 0476</strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Address:</strong> Al Duwayh
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Area (sq ft/m):</strong> 1500sqm
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Building type:</strong> Commercial
                  </p>
                </div>

                {/* Button Section */}
                <div className="flex justify-center mt-3">
                  {/* <Button
                    text="View All"
                    bg="bg-primary text-white hover:text-primary hover:bg-white"
                    width="w-[80px]"
                  /> */}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
