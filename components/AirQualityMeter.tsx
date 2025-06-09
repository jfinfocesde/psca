
import React from 'react';
import { AQICategory } from '../types';

interface AirQualityMeterProps {
  aqi: number;
  category: AQICategory;
}

const AirQualityMeter: React.FC<AirQualityMeterProps> = ({ aqi, category }) => {
  const percentage = Math.min(Math.max((aqi / 500) * 100, 0), 100); // Max AQI is 500 for percentage calculation

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">Calidad del Aire</h3>
      <div className="w-full bg-gray-200 rounded-full h-8 mb-2 overflow-hidden border-2 border-gray-300">
        <div
          className={`h-full rounded-full ${category.meterColor} transition-all duration-500 ease-in-out flex items-center justify-center`}
          style={{ width: `${percentage}%` }}
        >
          <span className={`text-sm font-medium ${percentage > 30 ? 'text-white' : category.textColor}`}>{aqi}</span>
        </div>
      </div>
      <p className={`text-center font-medium text-lg ${category.textColor}`}>{category.level}</p>
      <p className="text-center text-xs text-gray-500 mt-1 px-2">{category.description}</p>
    </div>
  );
};

export default AirQualityMeter;
