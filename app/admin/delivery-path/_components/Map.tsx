"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  CircleMarker,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";
import { useMap } from "react-leaflet";
import { GeoJSON } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import "leaflet-polylinedecorator";

const driverPaths = [
  {
    driver: "أحمد",
    path: [
      [33.3152, 44.3661],
      [33.317, 44.368],
      [33.32, 44.37],
    ],
  },
  {
    driver: "سعيد",
    path: [
      [33.325, 44.375],
      [33.327, 44.378],
      [33.33, 44.38],
    ],
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

const ArrowDecorator = ({
  positions,
  color,
}: {
  positions: L.LatLngExpression[];
  color: string;
}) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // @ts-ignore
    const arrow = L.Symbol.arrowHead({
      pixelSize: 12,
      polygon: false,
      pathOptions: { stroke: true, color: color, weight: 1 },
    });

    // @ts-ignore
    const decorator = L.polylineDecorator(positions, {
      patterns: [
        {
          offset: "10%",
          repeat: "20%",
          symbol: arrow,
        },
      ],
    });

    decorator.addTo(map);

    return () => {
      map.removeLayer(decorator);
    };
  }, [map, positions, color]);

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

  const geoJsonData: FeatureCollection = {
    type: "FeatureCollection",
    features: driverPaths.map((driverPath) => ({
      type: "Feature",
      properties: {
        driver: driverPath.driver,
      },
      geometry: {
        type: "LineString",
        // Swap [lat, lng] to [lng, lat] for GeoJSON
        coordinates: driverPath.path.map((point) => [point[1], point[0]]),
      },
    })),
  };

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

      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={(e) => {
            console.log("Created: ", e);
          }}
          draw={{
            rectangle: true,
            circle: true,
            polygon: true,
            polyline: true,
            circlemarker: true,
            marker: true,
          }}
        />
      </FeatureGroup>

      <GeoJSON
        data={geoJsonData}
        style={() => ({
          color: "red",
          weight: 1,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
        })}
      />
      {driverPaths.map((driverPath, driverIndex) =>
        driverPath.path.map((point, pointIndex) => {
          return (
            <CircleMarker
              key={`${driverIndex}-${pointIndex}`}
              center={[point[0], point[1]]}
              radius={5}
              color="red"
              fillColor="white"
              fillOpacity={1}
            ></CircleMarker>
          );
        })
      )}
      <FullscreenControl />

      {driverPaths.map((driverPath, index) => (
        <ArrowDecorator
          key={`arrow-${index}`}
          positions={driverPath.path as L.LatLngExpression[]}
          color="red"
        />
      ))}
    </MapContainer>
  );
}
