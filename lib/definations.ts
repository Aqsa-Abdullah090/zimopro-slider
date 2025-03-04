import { TicketPricing } from "./types";

export interface Location {
  latitude: string;
  longitude: string;
}

export interface CardTypes {
  id: number;
  src: string;
  name: string;
  logo: string;
  flag: string;
}

export interface AgentTypes {
  id: number;
  name: string;
  image: string;
  amount: string;
  agent_logo: string;
  address: string;
}

export interface reelsDataType {
  id: number;
  thumbnails: string[];
  images: string[];
  amount: string;
  agent_logo: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  postal_code: string;
  region_state: string;
  country_name: string;
  flag_url: string;
  ticket_price: string;
  expiry_date: string;
  ticket_pricing: TicketPricing;
  currency: string;
}
