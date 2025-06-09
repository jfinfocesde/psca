
import React from 'react';
import { AQICategory, ItemCounts } from '../types';
import { FACTORY_ICON, TREE_ICON, CAR_ICON, RENEWABLE_ICON } from '../constants';


interface CityDisplayProps {
  category: AQICategory;
  items: ItemCounts;
}

const CityDisplay: React.FC<CityDisplayProps> = ({ category, items }) => {
  const { skyColorClass, hazeStyle } = category;

  const renderItemIcons = (icon: string, count: number, baseSize: number = 2) => {
    // Stagger icons for a bit more visual appeal if count > 0
    return Array.from({ length: Math.min(count, 5) }).map((_, i) => ( // Show max 5 icons for each for simplicity
      <span
        key={`${icon}-${i}`}
        className="text-2xl md:text-3xl lg:text-4xl"
        style={{
          marginLeft: i > 0 ? `${(i % 3) * -0.2}rem` : '0',
          marginBottom: `${(i % 2) * 0.2}rem`,
          transform: `scale(${1 - (i*0.05)})`, // Slightly smaller for those further back
        }}
      >
        {icon}
      </span>
    ));
  };


  return (
    <div className="relative w-full h-72 md:h-96 lg:h-[500px] bg-gray-700 rounded-xl shadow-2xl overflow-hidden select-none">
      {/* Sky */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ease-in-out ${skyColorClass}`}
      />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-700" />
      <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-green-600 border-t-4 border-green-800" />


      {/* Cityscape Elements */}
      <div className="absolute bottom-[18%] left-[10%] w-16 h-32 md:w-20 md:h-40 bg-slate-600 rounded-t-md border-2 border-slate-700 shadow-lg" />
      <div className="absolute bottom-[18%] left-[30%] w-12 h-48 md:w-16 md:h-56 bg-slate-500 rounded-t-lg border-2 border-slate-600 shadow-lg" />
      <div className="absolute bottom-[18%] left-[50%] w-20 h-24 md:w-24 md:h-32 bg-slate-600 rounded-t-sm border-2 border-slate-700 shadow-lg" />
      <div className="absolute bottom-[18%] left-[70%] w-14 h-40 md:w-18 md:h-48 bg-slate-500 rounded-t-md border-2 border-slate-600 shadow-lg" />
      
       {/* Haze Overlay - apply this on top of sky and buildings */}
       <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
        style={{
          backgroundColor: hazeStyle.backgroundColor,
          opacity: hazeStyle.opacity,
        }}
      />

      {/* Display item icons on the cityscape - positioned carefully */}
      <div className="absolute bottom-[26%] left-[12%] flex items-end space-x-1">
        {renderItemIcons(FACTORY_ICON, items.factories)}
      </div>
      <div className="absolute bottom-[27%] right-[10%] flex items-end space-x-1">
         {renderItemIcons(TREE_ICON, items.trees)}
      </div>
       <div className="absolute bottom-[20%] left-[40%] flex items-end space-x-0.5 opacity-80">
        {renderItemIcons(CAR_ICON, items.cars)}
      </div>
      <div className="absolute top-[5%] right-[5%] flex items-start space-x-1 opacity-90">
        {renderItemIcons(RENEWABLE_ICON, items.renewables)}
      </div>

    </div>
  );
};

export default CityDisplay;
