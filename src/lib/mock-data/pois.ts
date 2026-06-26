export type POICategory = 
  | 'dhaba' 
  | 'mechanic' 
  | 'fuel' 
  | 'hospital' 
  | 'police' 
  | 'toll' 
  | 'rest_area' 
  | 'parking' 
  | 'hotel' 
  | 'warehouse' 
  | 'ev_charging';

export interface POI {
  id: string;
  name: string;
  category: POICategory;
  lat: number;
  lng: number;
  rating?: number;
  reviews?: number;
  address: string;
  highway: string;
  contact?: string;
  isOpen24x7?: boolean;
  facilities?: string[];
  imageUrl?: string;
  description?: string;
  // Specific fields
  fuelTypes?: ('Petrol' | 'Diesel' | 'CNG' | 'LNG' | 'EV')[];
  foodType?: 'Veg' | 'Non-Veg' | 'Both';
  specialization?: string[]; // For mechanics
  tollCharges?: { type: string; amount: number }[];
}

export const mockPOIs: POI[] = [
  // DHABAS
  {
    id: "dhaba_1",
    name: "Sher-e-Punjab Dhaba",
    category: "dhaba",
    lat: 18.6811,
    lng: 73.5323,
    rating: 4.5,
    reviews: 1240,
    address: "NH-48, Near Lonavala Exit",
    highway: "NH-48",
    contact: "+91 9876543210",
    isOpen24x7: true,
    foodType: "Both",
    facilities: ["Truck Parking", "Family Room", "Clean Washrooms", "Charpai"],
    description: "Famous for authentic Punjabi food and safe overnight parking.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "dhaba_2",
    name: "Shree Ganesh Pure Veg",
    category: "dhaba",
    lat: 18.7512,
    lng: 73.4912,
    rating: 4.2,
    reviews: 856,
    address: "NH-48, Khandala Ghat",
    highway: "NH-48",
    contact: "+91 9876543211",
    isOpen24x7: false,
    foodType: "Veg",
    facilities: ["Car Parking", "Washrooms", "AC Seating"],
    description: "Clean vegetarian food with quick service.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=500"
  },
  // MECHANICS
  {
    id: "mech_1",
    name: "Sharma Auto Works (HCV Specialist)",
    category: "mechanic",
    lat: 18.7011,
    lng: 73.5123,
    rating: 4.8,
    reviews: 432,
    address: "NH-48 Service Road, Khalapur",
    highway: "NH-48",
    contact: "+91 9876543212",
    isOpen24x7: true,
    specialization: ["Engine Repair", "Heavy Vehicles", "Tyre Puncture", "Towing"],
    facilities: ["Roadside Assistance", "Spare Parts", "Welding"],
    description: "Expert mechanic for Tata and Ashok Leyland trucks. 24/7 breakdown service."
  },
  {
    id: "mech_2",
    name: "QuickFix Garage",
    category: "mechanic",
    lat: 18.6500,
    lng: 73.5500,
    rating: 4.1,
    reviews: 120,
    address: "NH-48, Near Toll Plaza",
    highway: "NH-48",
    contact: "+91 9876543213",
    isOpen24x7: false,
    specialization: ["Cars", "LCV", "Electrical", "AC Repair"],
    facilities: ["Waiting Area", "Battery Service"],
  },
  // FUEL STATIONS
  {
    id: "fuel_1",
    name: "IndianOil Petrol Pump",
    category: "fuel",
    lat: 18.6911,
    lng: 73.5223,
    rating: 4.0,
    reviews: 2100,
    address: "NH-48, Khopoli",
    highway: "NH-48",
    isOpen24x7: true,
    fuelTypes: ["Petrol", "Diesel", "CNG"],
    facilities: ["Free Air", "Washroom", "Drinking Water", "Dhaba Nearby"],
  },
  {
    id: "fuel_2",
    name: "Reliance Jio-bp & EV Charging",
    category: "fuel",
    lat: 18.7211,
    lng: 73.5023,
    rating: 4.6,
    reviews: 890,
    address: "NH-48 Highway Plaza",
    highway: "NH-48",
    isOpen24x7: true,
    fuelTypes: ["Petrol", "Diesel", "EV"],
    facilities: ["EV Fast Charging", "Cafeteria", "Clean Washrooms"],
  },
  // HOSPITALS / EMERGENCY
  {
    id: "hosp_1",
    name: "Sanjeevani Highway Hospital",
    category: "hospital",
    lat: 18.7300,
    lng: 73.4800,
    rating: 4.4,
    address: "NH-48, Khandala",
    highway: "NH-48",
    contact: "108",
    isOpen24x7: true,
    facilities: ["Ambulance", "Trauma Center", "Pharmacy"],
    description: "24/7 trauma care center for highway accidents."
  },
  // POLICE
  {
    id: "pol_1",
    name: "Highway Patrol Outpost",
    category: "police",
    lat: 18.6850,
    lng: 73.5250,
    address: "NH-48, Khopoli Exit",
    highway: "NH-48",
    contact: "100",
    isOpen24x7: true,
  },
  // TOLL PLAZA
  {
    id: "toll_1",
    name: "Khalapur Toll Plaza",
    category: "toll",
    lat: 18.7612,
    lng: 73.4712,
    address: "Mumbai-Pune Expressway / NH-48",
    highway: "NH-48",
    isOpen24x7: true,
    tollCharges: [
      { type: "Car/Jeep", amount: 320 },
      { type: "LCV", amount: 495 },
      { type: "Truck/Bus", amount: 940 },
      { type: "Multi-Axle", amount: 2000 }
    ],
    facilities: ["FASTag", "Cash Lane", "Rest Area"],
  }
];

// Helper to simulate current driver route
export const mockRouteCoordinates = [
  [18.5204, 73.8567], // Pune
  [18.6811, 73.5323], // Midpoint
  [19.0760, 72.8777], // Mumbai
];
