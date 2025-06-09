
import React from 'react';
import ActionButton from './ActionButton';
import { PollutionSource, SolutionSource, ItemCounts } from '../types';
import {
  MAX_FACTORIES, MAX_CARS, MAX_TREES, MAX_RENEWABLES,
  FACTORY_ICON, CAR_ICON, TREE_ICON, RENEWABLE_ICON, RESET_ICON
} from '../constants';

interface ControlPanelProps {
  onAddItem: (type: PollutionSource | SolutionSource) => void;
  itemCounts: ItemCounts;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onAddItem, itemCounts, onReset }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Fuentes de Contaminación</h3>
        <div className="space-y-3">
          <ActionButton
            label="Agregar Fábrica"
            icon={FACTORY_ICON}
            onClick={() => onAddItem(PollutionSource.Factory)}
            count={itemCounts.factories}
            maxCount={MAX_FACTORIES}
            bgColorClass="bg-red-500"
            hoverBgColorClass="hover:bg-red-600"
          />
          <ActionButton
            label="Agregar Auto"
            icon={CAR_ICON}
            onClick={() => onAddItem(PollutionSource.Car)}
            count={itemCounts.cars}
            maxCount={MAX_CARS}
            bgColorClass="bg-orange-500"
            hoverBgColorClass="hover:bg-orange-600"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Soluciones Limpias</h3>
        <div className="space-y-3">
          <ActionButton
            label="Plantar Árbol"
            icon={TREE_ICON}
            onClick={() => onAddItem(SolutionSource.Tree)}
            count={itemCounts.trees}
            maxCount={MAX_TREES}
            bgColorClass="bg-green-500"
            hoverBgColorClass="hover:bg-green-600"
          />
          <ActionButton
            label="Energía Renovable"
            icon={RENEWABLE_ICON}
            onClick={() => onAddItem(SolutionSource.Renewable)}
            count={itemCounts.renewables}
            maxCount={MAX_RENEWABLES}
            bgColorClass="bg-teal-500"
            hoverBgColorClass="hover:bg-teal-600"
          />
        </div>
      </div>
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={onReset}
          aria-label="Reiniciar simulación"
          className="w-full flex items-center justify-center px-4 py-3 rounded-lg shadow-md font-semibold transition-colors duration-150 ease-in-out
                     bg-gray-500 hover:bg-gray-600 text-white
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <span className="text-2xl mr-2" aria-hidden="true">{RESET_ICON}</span>
          <span>Reiniciar Simulación</span>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
