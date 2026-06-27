import { useEffect, useState } from "react";
import { MapContainer, TileLayer, ZoomControl, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { POIMarkers } from "./poi-markers";
import { MapSidebar } from "./map-sidebar";
import { SOSModal } from "./sos-modal";
import { mockPOIs, POI, POICategory, mockRouteCoordinates } from "@/lib/mock-data/pois";
import { LatLngExpression } from "leaflet";

// A component to automatically zoom to fit the route bounds
function MapBoundsUpdater({ route }: { route: LatLngExpression[] | null }) {
  const map = useMap();
  useEffect(() => {
    if (route && route.length > 0) {
      map.fitBounds(route as any, { padding: [50, 50] });
    }
  }, [route, map]);
  return null;
}

export function LiveMap() {
  const [activePOIs, setActivePOIs] = useState<POI[]>(mockPOIs);
  const [activeRoute, setActiveRoute] = useState<LatLngExpression[] | null>(null);
  const [isSOSOpen, setIsSOSOpen] = useState(false);

  // Default center somewhere between Mumbai and Pune
  const center: LatLngExpression = [18.7311, 73.5023];

  const handleSearch = (query: string) => {
    if (!query) {
      setActivePOIs(mockPOIs);
      return;
    }
    const q = query.toLowerCase();
    setActivePOIs(mockPOIs.filter(poi => 
      poi.name.toLowerCase().includes(q) || 
      poi.address.toLowerCase().includes(q)
    ));
  };

  const handleFilterChange = (filters: POICategory[]) => {
    if (filters.length === 0) {
      setActivePOIs(mockPOIs);
    } else {
      setActivePOIs(mockPOIs.filter(poi => filters.includes(poi.category)));
    }
  };

  const handleRouteStart = (start: string, end: string) => {
    if (start && end) {
      setActiveRoute(mockRouteCoordinates as LatLngExpression[]);
    } else {
      setActiveRoute(null);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden bg-background">
      
      {/* Map UI overlay styling for popups */}
      <style>{`
        .leaflet-container {
          background: #09090b; /* Match app background */
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          border: 1px solid rgba(0,0,0,0.1);
        }
        .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.95);
        }
        .custom-leaflet-icon {
          background: transparent;
          border: none;
        }
      `}</style>

      {/* Sidebar Panel */}
      <MapSidebar 
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onRouteStart={handleRouteStart}
        onSOSClick={() => setIsSOSOpen(true)}
      />

      {/* SOS Modal */}
      <SOSModal isOpen={isSOSOpen} onClose={() => setIsSOSOpen(false)} />

      {/* Leaflet Map */}
      <div className="flex-1 relative z-0 h-full">
        <MapContainer 
          center={center} 
          zoom={11} 
          scrollWheelZoom={true} 
          zoomControl={false}
          className="w-full h-full"
        >
          {/* Custom Dark Theme TileLayer using CartoDB Dark Matter */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          
          {/* Zoom controls positioned to not clash with sidebar */}
          <ZoomControl position="bottomright" />

          {/* Render markers */}
          <POIMarkers pois={activePOIs} />

          {/* Render Route Polyline if active */}
          {activeRoute && (
            <>
              <Polyline 
                positions={activeRoute} 
                color="#3b82f6" // blue
                weight={5} 
                opacity={0.7} 
                lineCap="round" 
                lineJoin="round" 
              />
              <MapBoundsUpdater route={activeRoute} />
            </>
          )}
        </MapContainer>
        
        {/* Top-right overlay stats (mocking live driver GPS) */}
        <div className="absolute top-4 right-4 z-[1000] hidden md:block">
          <div className="glass-strong p-3 rounded-2xl flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Live Tracking</span>
            </div>
            <div className="w-px h-4 bg-foreground/20" />
            <div className="text-sm dark:text-foreground/70 text-foreground">
              User: <span className="text-foreground font-medium">Rajesh K. (MH-14)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
