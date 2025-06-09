
import React from 'react';

interface ActionButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
  disabled?: boolean;
  count: number;
  maxCount: number;
  bgColorClass?: string;
  hoverBgColorClass?: string;
  textColorClass?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
  disabled = false,
  count,
  maxCount,
  bgColorClass = "bg-blue-500",
  hoverBgColorClass = "hover:bg-blue-600",
  textColorClass = "text-white"
}) => {
  const isMaxReached = count >= maxCount;
  return (
    <button
      onClick={onClick}
      disabled={disabled || isMaxReached}
      className={`w-full flex items-center justify-center px-4 py-3 rounded-lg shadow-md font-semibold transition-colors duration-150 ease-in-out
                  ${isMaxReached || disabled ? 'bg-gray-400 cursor-not-allowed' : `${bgColorClass} ${hoverBgColorClass} ${textColorClass}`}
                  focus:outline-none focus:ring-2 focus:ring-offset-2 ${isMaxReached || disabled ? 'focus:ring-gray-500' : 'focus:ring-blue-500'}`}
    >
      <span className="text-2xl mr-2">{icon}</span>
      <span>{label} ({count}/{maxCount})</span>
    </button>
  );
};

export default ActionButton;
