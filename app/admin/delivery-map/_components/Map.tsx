"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup, CircleMarker } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";
import { useMap } from "react-leaflet";
import { GeoJSON, Polyline } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import "leaflet-polylinedecorator";
import { MoveHorizontal, Trash2 } from "lucide-react";

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

const driverPaths = [
  {
    driver: "أحمد",
    path: [
      [33.3152, 44.3661],
      [33.3170, 44.3680],
      [33.3200, 44.3700],
    ],
  },
  {
    driver: "سعيد",
    path: [
      [33.3250, 44.3750],
      [33.3270, 44.3780],
      [33.3300, 44.3800],
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

const ArrowDecorator = ({ positions, color }: { positions: L.LatLngExpression[], color: string }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // @ts-ignore
    const arrow = L.Symbol.arrowHead({
      pixelSize: 15,
      polygon: false,
      pathOptions: { stroke: true, color: color, weight: 2 },
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



const LINE_STYLES = {
  solid: { color: "blue", weight: 2, opacity: 1, dashArray: "" },
  dashed: { color: "red", weight: 2, opacity: 1, dashArray: "10, 10" },
};

export default function Map() {
  const position: [number, number] = [33.3152, 44.3661];
  const [currentStyle, setCurrentStyle] = useState<keyof typeof LINE_STYLES>("solid");
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurePoints, setMeasurePoints] = useState<[number, number][]>([]);
  const [distance, setDistance] = useState<number | null>(null);

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

  const handleCircleClick = (lat: number, lng: number) => {
    if (!isMeasuring || measurePoints.length >= 2) return;

    const newPoints: [number, number][] = [...measurePoints, [lat, lng]];
    setMeasurePoints(newPoints);

    if (newPoints.length === 2) {
      const p1 = L.latLng(newPoints[0]);
      const p2 = L.latLng(newPoints[1]);
      setDistance(p1.distanceTo(p2));
    }
  };

  const resetMeasurement = () => {
    setMeasurePoints([]);
    setDistance(null);
    setIsMeasuring(false);
  };

  const driverIcon = L.icon({
    iconUrl: "/delivery-truck.png",
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
  });

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
      zoom={30}
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

      {/* Drivers */}
      {distinctDrivers.map((driver) => (
        <Marker key={driver.id} position={driver.position} icon={driverIcon}>
          <Popup>
            <div className="flex flex-col gap-1">
              <span className="font-bold">{driver.name}</span>
              <span className={driver.status === 'active' ? 'text-green-600' : 'text-gray-500'}>
                {driver.status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Render GeoJSON Paths */}
      <GeoJSON
        data={geoJsonData}
        style={() => ({
          ...LINE_STYLES[currentStyle],
          lineCap: "round",
          lineJoin: "round",
        })}

      />
      {driverPaths.map((driverPath, driverIndex) => (
        driverPath.path.map((point, pointIndex) => {
          const isSelected = measurePoints.some(p => p[0] === point[0] && p[1] === point[1]);
          return (
            <CircleMarker
              key={`${driverIndex}-${pointIndex}`}
              center={[point[0], point[1]]}
              radius={isSelected ? 8 : 5}
              color={isSelected ? "green" : "red"}
              fillColor={isSelected ? "green" : "white"}
              fillOpacity={1}
              eventHandlers={{
                click: () => handleCircleClick(point[0], point[1])
              }}
            >

            </CircleMarker>
          )
        })
      ))}
      <FullscreenControl />

      {measurePoints.length === 2 && (
        <Polyline positions={measurePoints} color="black" dashArray="5, 10" />
      )}

      {distance !== null && measurePoints.length === 2 && (
        <Popup position={L.latLng(
          (measurePoints[0][0] + measurePoints[1][0]) / 2,
          (measurePoints[0][1] + measurePoints[1][1]) / 2
        )}>
          <div className="font-bold">
            Distance: {(distance / 1000).toFixed(2)} km
          </div>
        </Popup>
      )}

      {driverPaths.map((driverPath, index) => (
        <ArrowDecorator
          key={`arrow-${index}`}
          positions={driverPath.path as L.LatLngExpression[]}
          color={LINE_STYLES[currentStyle].color}
        />
      ))}

      {/* Style Switcher Control */}
      <div className="absolute bottom-5 left-5 z-[1000] bg-white p-2 rounded shadow-md flex flex-col gap-2">
        <span className="font-bold text-sm">Line Style</span>
        <div className="flex gap-2">
          {(Object.keys(LINE_STYLES) as Array<keyof typeof LINE_STYLES>).map((style) => (
            <button
              key={style}
              onClick={() => setCurrentStyle(style)}
              className={`px-3 py-1 text-xs rounded border ${currentStyle === style
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                }`}
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Measurement Control */}
      <div className="absolute top-32 left-[10px] z-[1000] flex flex-col gap-2">
        <button
          onClick={() => {
            setIsMeasuring(!isMeasuring);
            if (isMeasuring && measurePoints.length < 2) {
              // If we toggle off while not finished, decide if we want to clear.
              // For now, let's just toggle the mode state.
            }
          }}
          className={`p-1.5 rounded shadow-md ${isMeasuring ? "bg-blue-600 text-white" : "bg-white text-black"}`}
          title="Measure Distance"
        >
          <MoveHorizontal size={20} />
        </button>
        {(measurePoints.length > 0) && (
          <button
            onClick={resetMeasurement}
            className="p-2 rounded shadow-md bg-white text-red-600"
            title="Clear Measurement"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>
    </MapContainer>
  );
}
