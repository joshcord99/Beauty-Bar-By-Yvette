import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; 

// Fix for missing marker icons in Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41], 
  iconAnchor: [12, 41],
});


const MapComponent = () => {
  const position: [number, number] = [39.342301, -74.470276];
  return (
    <MapContainer center={position} zoom={13} className="leaflet-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          YMI So Lashy <br /> Ventnor City, NJ.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
