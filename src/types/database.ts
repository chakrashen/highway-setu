export type UserRole = "driver" | "dhaba" | "mechanic" | "fleet" | "admin";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
  full_name?: string;
  avatar_url?: string;
}

export interface DriverProfile {
  id: string;
  user_id: string;
  license_number: string;
  vehicle_number: string;
  vehicle_type: string;
  experience_years: number;
  contact_number: string;
  emergency_contact: string;
  documents: {
    license_front?: string;
    license_back?: string;
    rc_book?: string;
  };
}

export interface DhabaProfile {
  id: string;
  user_id: string;
  business_name: string;
  owner_name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    highway: string;
  };
  facilities: {
    parking: boolean;
    washroom: boolean;
    rest_area: boolean;
    wifi: boolean;
  };
  documents: {
    fssai_license?: string;
    gst_certificate?: string;
  };
}

export interface MechanicProfile {
  id: string;
  user_id: string;
  workshop_name: string;
  mechanic_name: string;
  services: string[];
  is_available_24_7: boolean;
  location: {
    lat: number;
    lng: number;
    address: string;
    highway: string;
  };
  documents: {
    id_proof?: string;
    certification?: string;
  };
}

export interface FleetProfile {
  id: string;
  user_id: string;
  company_name: string;
  fleet_size: number;
  gst_number: string;
  contact_person: string;
  contact_number: string;
  documents: {
    company_registration?: string;
    gst_certificate?: string;
  };
}
