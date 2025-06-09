
export enum AirQualityLevel {
  Good = "Bueno",
  Moderate = "Moderado",
  UnhealthySensitive = "Insalubre para Grupos Sensibles",
  Unhealthy = "Insalubre",
  VeryUnhealthy = "Muy Insalubre",
  Hazardous = "Peligroso"
}

export interface AQICategory {
  level: AirQualityLevel;
  minAQI: number;
  maxAQI: number;
  meterColor: string;
  textColor: string;
  skyColorClass: string;
  hazeStyle: { backgroundColor: string; opacity: number };
  description: string;
}

export enum PollutionSource {
  Factory = "factory",
  Car = "car",
}

export enum SolutionSource {
  Tree = "tree",
  Renewable = "renewable",
}

export interface ItemCounts {
  factories: number;
  cars: number;
  trees: number;
  renewables: number;
}
