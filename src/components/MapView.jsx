import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const activeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const inactiveIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


const selectedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 50],
  iconAnchor: [15, 50],
});

export default function MapView({ data, selected, onSelect }) {
  return (
    <div className="h-full w-full">
      <MapContainer center={[23, 78]} zoom={5} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.map((item) => (
          <Marker
            key={item.id}
            position={[item.lat, item.lng]}
            icon={
              selected?.id === item.id
                ? selectedIcon
                : item.status === "Active"
                ? activeIcon
                : inactiveIcon
            }
            eventHandlers={{
              click: () => onSelect(item),
            }}
          >
            <Popup>
              <b>{item.name}</b>
              <br />
              Status: {item.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
