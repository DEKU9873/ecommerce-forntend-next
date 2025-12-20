"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,

} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";
import { useMap } from "react-leaflet";

import "leaflet-polylinedecorator";

interface Driver {
  id: string;
  name: string;
  position: [number, number];
  status: "active" | "inactive";
}

const distinctDrivers: Driver[] = [
  { id: "1", name: "Ahmed", position: [33.3152, 44.3661], status: "active" },
  {
    id: "2",
    name: "Mohamed",
    position: [33.3252, 44.3761],
    status: "active",
  },
  {
    id: "3",
    name: "Ali",
    position: [33.3052, 44.3561],
    status: "inactive",
  },
  {
    id: "4",
    name: "Hassan",

    position: [33.3152, 44.3861],
    status: "active",
  },
  {
    id: "5",
    name: "Hussein",
    position: [33.3352, 44.3461],
    status: "active",
  },
];

const FullscreenControl = () => {
  const map = useMap();
  useEffect(() => {
    // @ts-ignore
    const control = new L.Control.Fullscreen();
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
};

export default function Map() {
  const position: [number, number] = [33.3152, 44.3661];

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  const driverIcon = L.icon({
    iconUrl: "/delivery-truck.png",
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
  });


  return (
    <MapContainer
      key="unique-map-id"
      center={position}
      zoom={15}
      style={{ height: "88vh", width: "100%", zIndex: 0, borderRadius: "8px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

       <Marker
        position={position}
        draggable
      >
        <Popup>مركز الخريطة</Popup>
      </Marker>
      {/* Drivers */}
      {distinctDrivers.map((driver) => (
        <Marker key={driver.id} position={driver.position} icon={driverIcon}>
          <Popup>
            <div className="flex flex-col gap-1">
              <span className="font-bold">{driver.name}</span>
              <span
                className={
                  driver.status === "active"
                    ? "text-green-600"
                    : "text-gray-500"
                }
              >
                {driver.status === "active" ? "Active" : "Inactive"}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}

      <FullscreenControl />
    </MapContainer>
  );
}
