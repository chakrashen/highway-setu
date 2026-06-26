import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { POI, POICategory } from "@/lib/mock-data/pois";
import { Star, Phone, Navigation, ShieldAlert, Ambulance, Wrench, Fuel, IndianRupee, MapPin, UtensilsCrossed, Hotel, Zap } from "lucide-react";
import { renderToString } from "react-dom/server";

const getCategoryIcon = (category: POICategory) => {
  switch (category) {
    case 'dhaba': return <UtensilsCrossed size={16} className="text-orange" />;
    case 'mechanic': return <Wrench size={16} className="text-purple" />;
    case 'fuel': return <Fuel size={16} className="text-blue" />;
    case 'hospital': return <Ambulance size={16} className="text-red-500" />;
    case 'police': return <ShieldAlert size={16} className="text-blue" />;
    case 'toll': return <IndianRupee size={16} className="text-emerald-500" />;
    case 'hotel': return <Hotel size={16} className="text-yellow-500" />;
    case 'ev_charging': return <Zap size={16} className="text-emerald-400" />;
    default: return <MapPin size={16} className="text-foreground" />;
  }
};

const getCategoryColor = (category: POICategory) => {
  switch (category) {
    case 'dhaba': return 'bg-orange/20 border-orange';
    case 'mechanic': return 'bg-purple/20 border-purple';
    case 'fuel': return 'bg-blue/20 border-blue';
    case 'hospital': return 'bg-red-500/20 border-red-500';
    case 'police': return 'bg-blue/20 border-blue';
    case 'toll': return 'bg-emerald-500/20 border-emerald-500';
    case 'hotel': return 'bg-yellow-500/20 border-yellow-500';
    case 'ev_charging': return 'bg-emerald-400/20 border-emerald-400';
    default: return 'bg-foreground/20 border-white';
  }
};

const createCustomIcon = (category: POICategory) => {
  const iconHtml = renderToString(
    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-lg ${getCategoryColor(category)}`}>
      {getCategoryIcon(category)}
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: 'custom-leaflet-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

interface POIMarkersProps {
  pois: POI[];
}

export function POIMarkers({ pois }: POIMarkersProps) {
  return (
    <>
      {pois.map((poi) => (
        <Marker 
          key={poi.id} 
          position={[poi.lat, poi.lng]} 
          icon={createCustomIcon(poi.category)}
        >
          <Popup className="custom-popup">
            <div className="p-3 w-64">
              {poi.imageUrl && (
                <img src={poi.imageUrl} alt={poi.name} className="w-full h-32 object-cover rounded-lg mb-3" />
              )}
              
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{poi.name}</h3>
                {poi.rating && (
                  <div className="flex items-center gap-1 bg-orange/10 px-1.5 py-0.5 rounded text-orange font-bold text-xs shrink-0">
                    <Star className="w-3 h-3 fill-orange text-orange" />
                    {poi.rating}
                  </div>
                )}
              </div>
              
              <p className="text-xs text-gray-500 mb-3 leading-snug">{poi.address}</p>
              
              {poi.description && (
                <p className="text-sm text-gray-700 mb-3">{poi.description}</p>
              )}

              {poi.facilities && poi.facilities.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {poi.facilities.slice(0, 3).map(f => (
                    <span key={f} className="text-[10px] px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 border border-gray-200">
                      {f}
                    </span>
                  ))}
                  {poi.facilities.length > 3 && <span className="text-[10px] px-1 text-gray-400">+{poi.facilities.length - 3}</span>}
                </div>
              )}

              <div className="flex gap-2 mt-4">
                {poi.contact && (
                  <a href={`tel:${poi.contact}`} className="flex-1 flex justify-center items-center gap-1 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors text-gray-800">
                    <Phone className="w-3 h-3" /> Call
                  </a>
                )}
                <button className="flex-1 flex justify-center items-center gap-1 py-1.5 bg-blue hover:bg-blue/90 text-white rounded-md text-sm font-medium transition-colors">
                  <Navigation className="w-3 h-3" /> Route
                </button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
