import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  // Set the initial coordinates and zoom level of the map
  const position = [51.505, -0.09];

  // Create a custom icon for the marker (optional)
  const customIcon = new L.Icon({
    iconUrl: "/custom-marker-icon.png", // Add the path to your custom marker icon image
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A marker with a custom icon!
          <br />
          Edit this as per your requirement.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
