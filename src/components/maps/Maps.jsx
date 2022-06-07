import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./Maps.scss";

const Maps = () => {
  const position = [50.4501, 30.5234];
  return (
    <MapContainer className="map-container" center={position} zoom={5}>
      <div>
        <TileLayer
          opacity={0.8}
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.osm.org/{z}/{x}/{y}.png`}
        />
        
        <TileLayer
          opacity={1}
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=fcd02eb8abb66b38ec530d74cda61191`}
        />

        <Marker position={position}></Marker>
      </div>
    </MapContainer>
  );
};

export default Maps;
