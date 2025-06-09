
import React, { useState, useEffect, useCallback } from 'react';
import CityDisplay from './components/CityDisplay';
import AirQualityMeter from './components/AirQualityMeter';
import ControlPanel from './components/ControlPanel';
import { PollutionSource, SolutionSource, ItemCounts, AQICategory } from './types';
import {
  INITIAL_AQI, MIN_AQI, MAX_AQI,
  FACTORY_IMPACT, CAR_IMPACT, TREE_IMPACT, RENEWABLE_IMPACT,
  MAX_FACTORIES, MAX_CARS, MAX_TREES, MAX_RENEWABLES,
  getAQICategory
} from './constants';

const App: React.FC = () => {
  const [itemCounts, setItemCounts] = useState<ItemCounts>({
    factories: 0,
    cars: 0,
    trees: 0,
    renewables: 0,
  });
  const [aqi, setAqi] = useState<number>(INITIAL_AQI);
  const [aqiCategory, setAqiCategory] = useState<AQICategory>(getAQICategory(INITIAL_AQI));

  const calculateAndUpdateAQI = useCallback(() => {
    let currentAQI = INITIAL_AQI;
    currentAQI += itemCounts.factories * FACTORY_IMPACT;
    currentAQI += itemCounts.cars * CAR_IMPACT;
    currentAQI -= itemCounts.trees * TREE_IMPACT;
    currentAQI -= itemCounts.renewables * RENEWABLE_IMPACT;

    const newAqiValue = Math.max(MIN_AQI, Math.min(currentAQI, MAX_AQI));
    setAqi(newAqiValue);
    setAqiCategory(getAQICategory(newAqiValue));
  }, [itemCounts]);

  useEffect(() => {
    calculateAndUpdateAQI();
  }, [itemCounts, calculateAndUpdateAQI]);

  const handleAddItem = (type: PollutionSource | SolutionSource) => {
    setItemCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      switch (type) {
        case PollutionSource.Factory:
          if (newCounts.factories < MAX_FACTORIES) newCounts.factories++;
          break;
        case PollutionSource.Car:
          if (newCounts.cars < MAX_CARS) newCounts.cars++;
          break;
        case SolutionSource.Tree:
          if (newCounts.trees < MAX_TREES) newCounts.trees++;
          break;
        case SolutionSource.Renewable:
          if (newCounts.renewables < MAX_RENEWABLES) newCounts.renewables++;
          break;
      }
      return newCounts;
    });
  };

  const handleResetSimulation = () => {
    setItemCounts({
      factories: 0,
      cars: 0,
      trees: 0,
      renewables: 0,
    });
    // AQI and category will update via the useEffect hook watching itemCounts
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 py-8 px-4 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-700 tracking-tight">
          Simulador de Contaminación del Aire
        </h1>
        <p className="text-slate-600 mt-2 text-sm md:text-base">
          Observa cómo tus acciones cambian la calidad del aire en la ciudad virtual.
        </p>
        <p className="text-slate-600 mt-2 text-base md:text-lg font-semibold">
          Proyecto Feria de la Ciencia 2025
        </p>
        <p className="text-slate-500 mt-1 text-xs md:text-sm">
          por Maria Juliana Valencia Moreno y Nicole Álvarez Casas
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <CityDisplay category={aqiCategory} items={itemCounts} />
        </div>
        <div className="space-y-6">
          <AirQualityMeter aqi={aqi} category={aqiCategory} />
          <ControlPanel
            onAddItem={handleAddItem}
            itemCounts={itemCounts}
            onReset={handleResetSimulation}
          />
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Experimento Interactivo. Creado con fines educativos.</p>
        <p>Inspirado en ideas para enseñar sobre el medio ambiente.</p>
      </footer>
    </div>
  );
};

export default App;
