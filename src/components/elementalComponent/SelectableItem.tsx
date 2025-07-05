// SelectableItem.jsx
import React from "react";
import { DoubleArrowIcon } from "./PartnerData"; // Adjust path as needed

interface SelectableItemProps {
  itemData: {
    id: number; // Ensure this matches your data structure
    tabLabel: string;
    description: string;
    bgColor: string;
    textColor: string;
    arrowColor: string;
  };
  isActive: boolean;
  isAnyActive: boolean;
  onSelect: () => void; // Explicitly define the type for onSelect
}

const SelectableItem: React.FC<SelectableItemProps> = ({
  itemData,
  isActive,
  isAnyActive,
  onSelect,
}) => {
  const isStripMode = !isAnyActive;
  const showContent = isActive && isAnyActive; // This item is active AND some item is active (content view)

  let outerDivClasses = `
    ${itemData.bgColor} 
    ${itemData.textColor} 
    relative 
    group 
    transition-all duration-500 ease-in-out 
    overflow-hidden
    rounded-tr-xl rounded-br-xl 
    cursor-pointer
  `;

  if (isStripMode) {
    // In strip mode, items have a fixed height and centered content (header)
    outerDivClasses += " h-[70px] sm:h-[80px] flex items-center";
  } else if (showContent) {
    // Active item expands to fill available space and arranges header & content vertically
    outerDivClasses += " flex-grow flex flex-ro";
  } else {
    // Inactive item (when another is active) collapses completely
    outerDivClasses += " h-0 opacity-0 p-0 m-0 border-0 pointer-events-none";
  }

  return (
    <div className={outerDivClasses} onClick={onSelect}>
      {/* Header Section (Tab Label + Arrow) */}
      <div
        className={`
          flex justify-between items-center p-4 sm:p-5 w-full
          transition-opacity duration-300 ease-in-out
          ${isStripMode ? "h-full" : "h-[70px] sm:h-[80px] flex-shrink-0"} 
          ${
            isStripMode || showContent
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <h3 className="text-lg sm:text-xl font-semibold font-[Switzer]">
          {itemData.tabLabel}
        </h3>
        {isStripMode && ( // Show arrow only in strip mode
          <div className="shrink-0 ml-4">
            <DoubleArrowIcon colorClass={itemData.arrowColor} />
          </div>
        )}
      </div>

      {/* Content Section (Description) */}
      <div
        className={`
          px-4 sm:px-5 pb-4 sm:pb-5
          transition-all duration-300 ease-in-out
          overflow-y-auto 
          ${
            showContent
              ? "flex-grow opacity-100 delay-200"
              : "opacity-0 max-h-0 pointer-events-none"
          }
        `}
      >
        {/* Content is only effectively rendered and visible when showContent is true */}
        {showContent && (
          <p className="text-base md:text-lg leading-relaxed font-['Open_Sans_Hebrew']">
            {itemData.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectableItem;
