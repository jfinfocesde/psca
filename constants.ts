
import { AirQualityLevel, AQICategory } from './types';

export const INITIAL_AQI = 30;
export const MIN_AQI = 0;
export const MAX_AQI = 500;

export const FACTORY_IMPACT = 25; // AQI points per factory
export const CAR_IMPACT = 5;      // AQI points per car
export const TREE_IMPACT = 8;     // AQI points reduced per tree
export const RENEWABLE_IMPACT = 12; // AQI points reduced per renewable source

export const MAX_FACTORIES = 10;
export const MAX_CARS = 30;
export const MAX_TREES = 20;
export const MAX_RENEWABLES = 15;

export const AQI_CATEGORIES: ReadonlyArray<AQICategory> = [
  {
    level: AirQualityLevel.Good,
    minAQI: 0,
    maxAQI: 50,
    meterColor: "bg-green-500",
    textColor: "text-green-700",
    skyColorClass: "bg-sky-good",
    hazeStyle: { backgroundColor: 'transparent', opacity: 0 },
    description: "La calidad del aire es buena y la contaminación representa poco o ningún riesgo."
  },
  {
    level: AirQualityLevel.Moderate,
    minAQI: 51,
    maxAQI: 100,
    meterColor: "bg-yellow-400",
    textColor: "text-yellow-700",
    skyColorClass: "bg-sky-moderate",
    hazeStyle: { backgroundColor: 'rgba(220, 220, 200, 0.2)', opacity: 0.2 }, // Light gray/yellow haze
    description: "Calidad del aire aceptable. Algunas personas sensibles pueden experimentar efectos."
  },
  {
    level: AirQualityLevel.UnhealthySensitive,
    minAQI: 101,
    maxAQI: 150,
    meterColor: "bg-orange-500",
    textColor: "text-orange-700",
    skyColorClass: "bg-sky-sensitive",
    hazeStyle: { backgroundColor: 'rgba(210, 180, 140, 0.35)', opacity: 0.35 }, // More noticeable brownish haze
    description: "Personas de grupos sensibles pueden experimentar efectos en la salud."
  },
  {
    level: AirQualityLevel.Unhealthy,
    minAQI: 151,
    maxAQI: 200,
    meterColor: "bg-red-500",
    textColor: "text-red-700",
    skyColorClass: "bg-gray-400",
    hazeStyle: { backgroundColor: 'rgba(169, 169, 169, 0.5)', opacity: 0.5 }, // Grayish smog
    description: "Todos pueden comenzar a experimentar efectos en la salud."
  },
  {
    level: AirQualityLevel.VeryUnhealthy,
    minAQI: 201,
    maxAQI: 300,
    meterColor: "bg-purple-600",
    textColor: "text-purple-800",
    skyColorClass: "bg-sky-veryunhealthy",
    hazeStyle: { backgroundColor: 'rgba(128, 128, 128, 0.65)', opacity: 0.65 }, // Darker, denser smog
    description: "Alerta sanitaria: todos pueden experimentar efectos más graves en la salud."
  },
  {
    level: AirQualityLevel.Hazardous,
    minAQI: 301,
    maxAQI: 500, // MAX_AQI defined above
    meterColor: "bg-red-700", // Maroon or very dark red
    textColor: "text-red-900",
    skyColorClass: "bg-sky-hazardous",
    hazeStyle: { backgroundColor: 'rgba(105, 105, 105, 0.8)', opacity: 0.8 }, // Thick, dark smog
    description: "Advertencia sanitaria de condiciones de emergencia. Toda la población tiene más probabilidades de verse afectada."
  }
];

export const getAQICategory = (aqi: number): AQICategory => {
  const adjustedAQI = Math.max(MIN_AQI, Math.min(aqi, MAX_AQI));
  for (const category of AQI_CATEGORIES) {
    if (adjustedAQI >= category.minAQI && adjustedAQI <= category.maxAQI) {
      return category;
    }
  }
  return AQI_CATEGORIES[AQI_CATEGORIES.length - 1]; // Default to hazardous if somehow out of bounds
};

// Unicode icons
export const FACTORY_ICON = "🏭";
export const CAR_ICON = "🚗";
export const TREE_ICON = "🌳";
export const RENEWABLE_ICON = "💡"; // Using lightbulb for renewable energy
export const RESET_ICON = "🔄";
