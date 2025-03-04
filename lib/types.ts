export type Theme = "light" | "dark";

export interface LdpResponce {
  id: number;
  name: string;
  category: string;
  image: string;
  expiry_date: string;
  display_type: string;
  price: string;
  currency: string;
  completion_percentage: string;
  lat: string;
  lng: string;
  address: string;
  region: string;
  country_id: number;
  agent_logo: string;
  flag_url: string;
  description: string;
  images: string[];
  details: listingDetailsFeatues;
  ticket_price: string;
  // address
  address_line_1: string;
  address_line_2: string;
  city: string;
  postal_code: string;
  region_state: string;
  country_name: string;
  ticket_pricing: TicketPricing;

  qr_code: string;
  qr_code_animated: string;
}

export interface TicketPricing {
  id: number;
  price: string;
  default_currency: string;
}

export interface listingDetailsFeatues {
  propertyType: string;
  tenure: string;
  architecture: string;
  yearOfBuild: string;
  property_sqft: string;
  lot_size: string;
  air_conditioning: string;
  gymnasium: string;
  bedrooms: string;
  bathrooms: string;
  receptionRooms: string;
  otherRooms: string;
  numberOfFloors: string;
  flooringType: string;
  amount: string;
  interiorFeatures: string[];
  exteriorFeatures: string[];
  flooringTypes?: string[];
}

export interface SearchListing {
  listing_id: number;
  address_line_1: string;
  address_line_2: string;
  city: string;
  region_state: string;
  postal_code: string;
  country_name: string;
  flag_url: string;
}
