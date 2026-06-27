import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Reveal } from "@/components/ui/reveal";
import { GradientText } from "@/components/ui/gradient-text";
import { MapPin, Utensils, Star, Clock, Phone, Search } from "lucide-react";

/* ── Sample dhaba data along major Indian highways ── */
const dhabas: {
  name: string;
  lat: number;
  lng: number;
  highway: string;
  rating: number;
  registered: boolean;
  specialty: string;
  timing: string;
}[] = [
  // NH-44 (Delhi – Chandigarh – Amritsar)
  { name: "Haveli Dhaba", lat: 28.9845, lng: 77.7064, highway: "NH-44", rating: 4.5, registered: true, specialty: "Butter Chicken & Naan", timing: "24 Hours" },
  { name: "Puran Singh Da Dhaba", lat: 29.3919, lng: 76.9685, highway: "NH-44", rating: 4.7, registered: true, specialty: "Dal Makhani & Tandoori Roti", timing: "6 AM – 12 AM" },
  { name: "Amrik Sukhdev", lat: 29.2689, lng: 76.9939, highway: "NH-44", rating: 4.8, registered: true, specialty: "Paranthas & Lassi", timing: "24 Hours" },
  { name: "Gulshan Dhaba", lat: 30.3398, lng: 76.3869, highway: "NH-44", rating: 4.2, registered: false, specialty: "Rajma Chawal", timing: "7 AM – 11 PM" },
  
  // NH-48 (Delhi – Jaipur – Ahmedabad – Mumbai)
  { name: "Highway King", lat: 28.4219, lng: 76.8497, highway: "NH-48", rating: 4.3, registered: true, specialty: "Paneer Tikka & Dal Fry", timing: "24 Hours" },
  { name: "Sharma Dhaba", lat: 27.0238, lng: 75.7885, highway: "NH-48", rating: 4.1, registered: false, specialty: "Kachori & Chai", timing: "5 AM – 11 PM" },
  { name: "Rajasthani Swad", lat: 26.2389, lng: 73.0243, highway: "NH-48", rating: 4.4, registered: true, specialty: "Dal Baati Churma", timing: "6 AM – 11 PM" },
  { name: "Sagar Ratna Highway", lat: 23.0225, lng: 72.5714, highway: "NH-48", rating: 4.6, registered: true, specialty: "Gujarati Thali", timing: "8 AM – 10 PM" },
  { name: "Shree Krishna Dhaba", lat: 19.9975, lng: 73.7898, highway: "NH-48", rating: 4.0, registered: false, specialty: "Vada Pav & Misal", timing: "6 AM – 12 AM" },
  
  // NH-2 (Delhi – Agra – Kanpur – Varanasi)
  { name: "Midway Dhaba", lat: 27.88, lng: 78.08, highway: "NH-2", rating: 4.3, registered: true, specialty: "Chole Bhature", timing: "24 Hours" },
  { name: "Agra Highway Dhaba", lat: 27.18, lng: 78.02, highway: "NH-2", rating: 4.1, registered: false, specialty: "Mughlai Paratha", timing: "7 AM – 11 PM" },
  { name: "Baba ka Dhaba", lat: 26.449, lng: 80.332, highway: "NH-2", rating: 4.5, registered: true, specialty: "Biryani & Kebabs", timing: "6 AM – 12 AM" },
  { name: "Lucknow Express Dhaba", lat: 26.846, lng: 80.946, highway: "NH-2", rating: 4.4, registered: true, specialty: "Tunday Kebabi", timing: "24 Hours" },
  
  // NH-8 (Mumbai – Pune – Bangalore)
  { name: "Kinara Dhaba", lat: 18.762, lng: 73.41, highway: "NH-8", rating: 4.6, registered: true, specialty: "Maharashtrian Thali", timing: "7 AM – 11 PM" },
  { name: "Kamat Restaurant Highway", lat: 17.385, lng: 75.12, highway: "NH-8", rating: 4.3, registered: false, specialty: "South Indian Dosa", timing: "6 AM – 10 PM" },
  { name: "Karnataka Bhavan", lat: 15.35, lng: 75.13, highway: "NH-8", rating: 4.5, registered: true, specialty: "Bisi Bele Bath", timing: "8 AM – 10 PM" },
  { name: "Nandi Upachar", lat: 13.22, lng: 77.56, highway: "NH-8", rating: 4.7, registered: true, specialty: "Ragi Mudde & Saaru", timing: "7 AM – 11 PM" },

  // NH-7 (Varanasi – Nagpur – Hyderabad – Bangalore)
  { name: "Raju Dhaba", lat: 25.32, lng: 82.99, highway: "NH-7", rating: 4.0, registered: false, specialty: "Banarasi Puri Sabzi", timing: "5 AM – 10 PM" },
  { name: "Nagpur Orange Dhaba", lat: 21.15, lng: 79.09, highway: "NH-7", rating: 4.4, registered: true, specialty: "Saoji Chicken", timing: "24 Hours" },
  { name: "Hyderabadi Biryani Stop", lat: 17.385, lng: 78.487, highway: "NH-7", rating: 4.8, registered: true, specialty: "Hyderabadi Biryani", timing: "10 AM – 12 AM" },

  // NH-6 (Kolkata – Raipur)
  { name: "Bengal Tiger Dhaba", lat: 22.57, lng: 88.36, highway: "NH-6", rating: 4.2, registered: false, specialty: "Fish Curry & Rice", timing: "7 AM – 11 PM" },
  { name: "Chhattisgarh Rasoi", lat: 21.25, lng: 81.63, highway: "NH-6", rating: 4.3, registered: true, specialty: "Chana Samosa", timing: "6 AM – 10 PM" },

  // NH-15 (Rajasthan)
  { name: "Jaisalmer Highway Dhaba", lat: 26.91, lng: 70.92, highway: "NH-15", rating: 4.5, registered: true, specialty: "Ker Sangri & Bajra Roti", timing: "6 AM – 11 PM" },

  // Punjab
  { name: "Pind Balluchi Highway", lat: 31.1048, lng: 77.1734, highway: "NH-21", rating: 4.6, registered: true, specialty: "Sarson da Saag", timing: "24 Hours" },
];

/* Custom marker icons */
const registeredIcon = new L.DivIcon({
  html: `<div style="background: linear-gradient(135deg, #f97316, #ea580c); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
  </div>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const unregisteredIcon = new L.DivIcon({
  html: `<div style="background: linear-gradient(135deg, #94a3b8, #64748b); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.25); opacity: 0.85;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
  </div>`,
  className: "",
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

/* Animate to a location */
function FlyTo({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

/* Filter pills */
const highways = ["All", ...Array.from(new Set(dhabas.map((d) => d.highway)))];

export function DhabaMap() {
  const [filter, setFilter] = useState("All");
  const [showRegistered, setShowRegistered] = useState<"all" | "registered" | "unregistered">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const mapRef = useRef<L.Map | null>(null);

  const filtered = dhabas.filter((d) => {
    const matchHighway = filter === "All" || d.highway === filter;
    const matchStatus =
      showRegistered === "all" ||
      (showRegistered === "registered" && d.registered) ||
      (showRegistered === "unregistered" && !d.registered);
    const matchSearch =
      searchQuery === "" ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.highway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchHighway && matchStatus && matchSearch;
  });

  const registeredCount = dhabas.filter((d) => d.registered).length;
  const totalCount = dhabas.length;

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              <MapPin className="mr-1 inline-block h-4 w-4" />
              Dhaba Network
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
              Discover dhabas across{" "}
              <GradientText>India's highways.</GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base dark:text-foreground/60 text-foreground light:text-slate-500">
              Explore all dhabas on the network — registered partners are highlighted in orange.
            </p>
          </div>
        </Reveal>



        {/* Search and Filter controls */}
        <Reveal delay={0.15}>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {/* Status filter */}
            <div className="flex rounded-full border dark:border-foreground/10 border-foreground light:border-slate-200 bg-foreground/5 light:bg-white p-1">
              {(["all", "registered", "unregistered"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setShowRegistered(s)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-all ${
                    showRegistered === s
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                      : "dark:text-foreground/60 text-foreground light:text-slate-500 hover:text-foreground light:hover:text-slate-900"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Highway pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {highways.map((h) => (
              <button
                key={h}
                onClick={() => setFilter(h)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === h
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-foreground/5 light:bg-slate-100 dark:text-foreground/60 text-foreground light:text-slate-500 ring-1 ring-white/10 light:ring-slate-200 hover:bg-foreground/10 light:hover:bg-slate-200"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Map */}
        <Reveal delay={0.2}>
          {/* Search bar positioned top-left above map */}
          <div className="mb-4 max-w-sm mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search dhabas by name, highway or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border dark:border-foreground/10 border-foreground light:border-slate-200 bg-foreground/5 light:bg-white py-2.5 pl-10 pr-4 text-sm text-foreground light:text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 shadow-sm"
              />
            </div>
          </div>

          <div className="relative z-10 overflow-hidden rounded-3xl border dark:border-foreground/10 border-foreground light:border-slate-200 shadow-2xl shadow-orange-500/10">
            <div className="h-[500px] md:h-[600px] w-full">
              <MapContainer
                center={[22.5, 78.5]}
                zoom={5}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                className="h-full w-full"
                ref={mapRef}
                style={{ background: "#f8fafc" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {filtered.map((d, i) => (
                  <Marker
                    key={`${d.name}-${i}`}
                    position={[d.lat, d.lng]}
                    icon={d.registered ? registeredIcon : unregisteredIcon}
                  >
                    <Popup>
                      <div className="min-w-[220px] p-1">
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-orange-500" />
                          <span className="font-bold text-sm text-slate-900">{d.name}</span>
                        </div>
                        <div className="mt-2 space-y-1.5 text-xs text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" /> {d.highway}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Star className="h-3 w-3 text-yellow-500" /> {d.rating} / 5
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Utensils className="h-3 w-3" /> {d.specialty}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3" /> {d.timing}
                          </div>
                        </div>
                        <div className="mt-2">
                          {d.registered ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-semibold text-orange-700">
                              ✓ Registered Partner
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                              Not Registered
                            </span>
                          )}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Showing count overlay */}
            <div className="absolute bottom-4 left-4 z-[1000] rounded-full bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
              Showing {filtered.length} of {totalCount} dhabas
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
