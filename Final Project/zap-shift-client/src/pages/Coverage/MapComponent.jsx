import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ warehouses }) => {
  return (
    <div className="w-full h-96">
      <MapContainer
        className="w-full h-full"
        center={[23.685, 90.3563]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {warehouses.map((district) => (
          <Marker
            key={district.longitude}
            position={[district.latitude, district.longitude]}
          >
            <Popup>
              {district.city}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
