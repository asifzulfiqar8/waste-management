import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import redBin from "../../../assets/images/dashboard/map-red-bin.png";

const binIcon = L.icon({
  iconUrl: redBin,
  iconSize: [25, null],
  iconAnchor: [19, 95],
  popupAnchor: [0, -76],
});

const Map = () => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={3}
      style={{ height: "430px", width: "100%", borderRadius: "0 0 10px 10px" }}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={binIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
