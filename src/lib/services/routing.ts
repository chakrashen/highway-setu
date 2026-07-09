export interface RouteInfo {
  coordinates: [number, number][]; // [lat, lng] for Leaflet
  distanceKm: number;
  durationMinutes: number;
}

/**
 * Geocodes a place name into coordinates [lat, lng].
 * Restricts search to India to improve relevance.
 */
export async function geocode(place: string): Promise<[number, number] | null> {
  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.append("format", "json");
    url.searchParams.append("q", place);
    url.searchParams.append("countrycodes", "in");
    url.searchParams.append("limit", "1");

    const response = await fetch(url.toString(), {
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
        // Nominatim requests a user agent
        "User-Agent": "Highways24/1.0"
      }
    });

    if (!response.ok) throw new Error("Geocoding failed");

    const data = await response.json();
    if (data && data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
}

/**
 * Calculates a driving route between two points using OSRM.
 */
export async function getRoute(start: [number, number], end: [number, number]): Promise<RouteInfo | null> {
  try {
    // OSRM expects coordinates in lng,lat format
    const coords = `${start[1]},${start[0]};${end[1]},${end[0]}`;
    const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Routing failed");

    const data = await response.json();
    
    if (data.code !== "Ok" || !data.routes || data.routes.length === 0) {
      return null;
    }

    const route = data.routes[0];
    
    // Convert GeoJSON [lng, lat] to Leaflet [lat, lng]
    const coordinates = route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
    
    return {
      coordinates,
      distanceKm: route.distance / 1000,
      durationMinutes: route.duration / 60
    };
  } catch (error) {
    console.error("Routing error:", error);
    return null;
  }
}
