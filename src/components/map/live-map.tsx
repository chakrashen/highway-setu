import { useEffect, useState } from "react";
import { MapContainer, TileLayer, ZoomControl, Polyline, useMap, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { POIMarkers } from "./poi-markers";
import { MapSidebar } from "./map-sidebar";
import { SOSModal } from "./sos-modal";
import { mockPOIs, POI, POICategory } from "@/lib/mock-data/pois";
import { LatLngExpression, divIcon } from "leaflet";
import { geocode, getRoute, RouteInfo } from "@/lib/services/routing";
import { toast } from "sonner";
import { LocateFixed, Search } from "lucide-react";

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

// Component to fly to a searched location
function SearchFlyTo({ location }: { location: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo(location, 14, { animate: true, duration: 1.5 });
    }
  }, [location, map]);
  return null;
}

// Button to trigger map flyTo user location
function LocateControl({ userLocation, requestLocation }: { userLocation: [number, number] | null, requestLocation: () => void }) {
  const map = useMap();

  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 14, { animate: true, duration: 1.5 });
    }
  }, [userLocation, map]);

  return (
    <button
      onClick={() => {
        if (userLocation) {
          map.flyTo(userLocation, 14, { animate: true, duration: 1.5 });
        } else {
          requestLocation();
        }
      }}
      className="absolute bottom-6 right-6 z-[1000] p-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-50 transition-all border border-black/10"
      title="Locate Me"
    >
      <LocateFixed className="w-5 h-5" />
    </button>
  );
}

const userLocationIcon = divIcon({
  className: "custom-leaflet-icon",
  html: `<div class="relative flex items-center justify-center w-6 h-6">
          <div class="absolute w-full h-full bg-blue-500 rounded-full opacity-40 animate-ping"></div>
          <div class="relative w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm"></div>
         </div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const searchedLocationIcon = divIcon({
  className: "custom-leaflet-icon",
  html: `<div class="relative flex items-center justify-center w-6 h-6">
          <div class="absolute w-full h-full bg-red-500 rounded-full opacity-20 animate-ping"></div>
          <div class="relative w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
         </div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export function LiveMap() {
  const [activePOIs, setActivePOIs] = useState<POI[]>(mockPOIs);
  const [activeRoute, setActiveRoute] = useState<LatLngExpression[] | null>(null);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [isRouting, setIsRouting] = useState(false);
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [searchedLocation, setSearchedLocation] = useState<[number, number] | null>(null);
  
  const [activeTab, setActiveTab] = useState<'search' | 'route'>('search');
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");

  const requestLocation = (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        toast.info("Requesting location access...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
            setUserLocation(coords);
            toast.success("Location acquired!");
            resolve(coords);
          },
          (error) => {
            console.error(error);
            toast.error("Failed to get location. Please ensure location services are enabled.");
            reject(error);
          },
          { enableHighAccuracy: true }
        );
      } else {
        toast.error("Geolocation is not supported by your browser.");
        reject(new Error("Not supported"));
      }
    });
  };

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

  const handleSearchSubmit = async (query: string) => {
    if (!query) return;
    toast.info("Searching for " + query + "...");
    const coords = await geocode(query);
    if (coords) {
      setSearchedLocation(coords);
      toast.success("Found " + query);
    } else {
      toast.error("Could not find location on map.");
    }
  };

  const handleFilterChange = (filters: POICategory[]) => {
    if (filters.length === 0) {
      setActivePOIs(mockPOIs);
    } else {
      setActivePOIs(mockPOIs.filter(poi => filters.includes(poi.category)));
    }
  };

  const handleRouteStart = async (start: string, end: string) => {
    if (!start || !end) {
      setActiveRoute(null);
      setRouteInfo(null);
      return;
    }

    setIsRouting(true);
    setRouteInfo(null);
    setActiveRoute(null);
    
    try {
      toast.info("Finding coordinates...");
      
      let startCoords: [number, number] | null = null;
      if (start === "Current Location") {
        if (!userLocation) {
          try {
            startCoords = await requestLocation();
          } catch (e) {
            setIsRouting(false);
            return;
          }
        } else {
          startCoords = userLocation;
        }
      } else {
        startCoords = await geocode(start);
      }
      
      const endCoords = await geocode(end);

      if (!startCoords || !endCoords) {
        toast.error("Could not find one or both of the locations. Try being more specific.");
        setIsRouting(false);
        return;
      }

      toast.info("Calculating optimal route...");
      const routeResult = await getRoute(startCoords, endCoords);

      if (routeResult) {
        setRouteInfo(routeResult);
        setActiveRoute(routeResult.coordinates as LatLngExpression[]);
        
        // Dynamically generate POIs along the newly found route based on distance
        const coords = routeResult.coordinates;
        if (coords.length > 10) {
          // Add roughly 1 POI every 40km, capped between 5 and 40 POIs total.
          const numPOIs = Math.min(40, Math.max(5, Math.floor(routeResult.distanceKm / 40)));
          const step = Math.floor(coords.length / (numPOIs + 1));
          
          const dynamicPOIs: POI[] = [];
          const categories: POICategory[] = ['dhaba', 'fuel', 'mechanic', 'toll', 'hospital', 'police'];
          
          for (let i = 1; i <= numPOIs; i++) {
            const pt = coords[i * step];
            if (!pt) continue;
            
            // Cycle through categories to get a good mix
            const cat = categories[i % categories.length];
            let name = "";
            let facilities: string[] = [];
            
            if (cat === 'dhaba') {
              name = `Highway Dhaba ${i}`;
              facilities = ["Parking", "Washroom", "Food"];
            } else if (cat === 'fuel') {
              name = `Highway Fuel Station ${i}`;
              facilities = ["Petrol", "Diesel", "Air", "Washroom"];
            } else if (cat === 'mechanic') {
              name = `Highway Auto Works ${i}`;
              facilities = ["Repairs", "Towing"];
            } else if (cat === 'toll') {
              name = `Toll Plaza ${i}`;
              facilities = ["FASTag", "Cash"];
            } else if (cat === 'hospital') {
              name = `Highway Care Hospital ${i}`;
              facilities = ["Emergency", "Ambulance"];
            } else if (cat === 'police') {
              name = `Patrol Outpost ${i}`;
              facilities = ["Assistance"];
            }

            dynamicPOIs.push({
              id: `dyn_${cat}_${Date.now()}_${i}`,
              name,
              category: cat,
              lat: pt[0],
              lng: pt[1],
              rating: Number((3.5 + Math.random() * 1.4).toFixed(1)), // random rating 3.5 - 4.9
              address: `Highway Route (KM ${Math.floor((i / numPOIs) * routeResult.distanceKm)})`,
              highway: "Highway Route",
              isOpen24x7: true,
              facilities,
            });
          }
          
          setActivePOIs([...mockPOIs, ...dynamicPOIs]);
        }
        
        toast.success("Route found!");
      } else {
        toast.error("Could not calculate a route between these locations.");
      }
    } catch (error) {
      toast.error("An error occurred while finding the route.");
    } finally {
      setIsRouting(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden bg-background">
      
      {/* Map UI overlay styling for popups */}
      <style>{`
        .leaflet-container {
          background: #f8fafc; /* Match light background */
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
        onSearchSubmit={handleSearchSubmit}
        onFilterChange={handleFilterChange}
        onRouteStart={handleRouteStart}
        onSOSClick={() => setIsSOSOpen(true)}
        isRouting={isRouting}
        routeInfo={routeInfo}
        userLocation={userLocation}
        onRequestLocation={requestLocation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        startPoint={startPoint}
        setStartPoint={setStartPoint}
        endPoint={endPoint}
        setEndPoint={setEndPoint}
      />

      {/* SOS Modal */}
      <SOSModal isOpen={isSOSOpen} onClose={() => setIsSOSOpen(false)} />

      {/* Leaflet Map */}
      <div className="flex-1 relative z-0 min-h-0 md:min-h-[auto] md:h-full">
        {/* Mobile Overlays (Search or Route Planner) */}
        <div className="absolute top-4 left-16 right-4 z-[1000] md:hidden">
          {activeTab === 'search' ? (
            <div className="relative shadow-lg rounded-xl overflow-hidden bg-background/95 backdrop-blur">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-foreground/40 text-foreground" />
              <input 
                type="text" 
                placeholder="Search dhabas, mechanics..." 
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit(e.currentTarget.value);
                  }
                }}
                className="w-full bg-transparent border dark:border-foreground/10 border-foreground rounded-xl py-3 pl-10 pr-4 text-foreground focus:ring-2 focus:ring-blue/50 outline-none"
              />
            </div>
          ) : (
            <div className="shadow-lg rounded-xl overflow-hidden bg-background/95 backdrop-blur border dark:border-foreground/10 border-foreground p-3 space-y-2">
              <div className="space-y-2 relative before:absolute before:inset-y-4 before:left-3 before:w-0.5 before:bg-foreground/10">
                <div className="relative z-10 pl-8 pr-8">
                  <div className="absolute left-[9px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue border-2 border-background" />
                  <input 
                    type="text" 
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                    placeholder="Starting point" 
                    className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-lg py-2 px-3 text-foreground focus:ring-1 focus:ring-blue outline-none text-sm"
                  />
                  <button 
                    onClick={() => {
                      setStartPoint("Current Location");
                      requestLocation();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-blue hover:text-blue-600 transition-colors"
                  >
                    <LocateFixed className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative z-10 pl-8">
                  <div className="absolute left-[9px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-background" />
                  <input 
                    type="text" 
                    value={endPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                    placeholder="Destination" 
                    className="w-full bg-foreground/5 border dark:border-foreground/10 border-foreground rounded-lg py-2 px-3 text-foreground focus:ring-1 focus:ring-red-500 outline-none text-sm"
                  />
                </div>
              </div>
              <button 
                onClick={() => handleRouteStart(startPoint, endPoint)}
                disabled={isRouting || !startPoint || !endPoint}
                className="w-full py-2 bg-blue hover:bg-blue/90 text-white rounded-lg font-medium shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {isRouting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : null}
                {isRouting ? "Calculating..." : "Find Route"}
              </button>
            </div>
          )}
        </div>
        <MapContainer 
          center={center} 
          zoom={11} 
          scrollWheelZoom={false} 
          zoomControl={false}
          className="w-full h-full"
        >
          {/* Custom Light Theme TileLayer using CartoDB Positron */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          
          {/* Zoom controls positioned as requested */}
          <ZoomControl position="topleft" />
          
          <LocateControl userLocation={userLocation} requestLocation={requestLocation} />
          
          {userLocation && (
            <Marker position={userLocation} icon={userLocationIcon} />
          )}

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

          <SearchFlyTo location={searchedLocation} />
          
          {searchedLocation && (
            <Marker position={searchedLocation} icon={searchedLocationIcon} />
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
