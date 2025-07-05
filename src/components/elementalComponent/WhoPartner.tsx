import React, { useState } from "react";
import { partnerItems, DoubleArrowIcon } from "./PartnerData";
import logo from "../../assets/augmentation/EmpanelmentSection/logo.svg";

interface ItemData {
  id: number;
  tabLabel: string;
  description: string;
  bgColor: string;
  textColor: string;
  arrowColor: string;
}

const SelectableItem: React.FC<{
  itemData: ItemData;
  isActive: boolean;
  isAnyActive: boolean;
  onSelect: () => void;
}> = ({ itemData, isActive, onSelect }) => {
  const desktopBaseClasses = isActive ? "md:w-full" : "md:flex-1 md:basis-0";

  return (
    <div
      className={`
        ${itemData.bgColor}
        ${itemData.textColor}
        w-full 
        md:h-full
        overflow-hidden 
        cursor-pointer
        transition-all duration-300 ease-in-out
        ${desktopBaseClasses}
      `}
      onClick={() => {
        const isDesktop = window.innerWidth >= 768;
        if (isActive && isDesktop) {
          return;
        }
        onSelect();
      }}
    >
      <div className="md:hidden">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-xl font-bold [font-family:Switzer]">
            {itemData.tabLabel}
          </h3>

          <span
            className={`transform transition-transform duration-300 ${
              isActive ? "rotate-90" : "rotate-0"
            }`}
          >
            <DoubleArrowIcon colorClass={itemData.arrowColor} />
          </span>
        </div>

        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} 
            `}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          <div className="px-4 pb-4 pt-1">
            <p className="text-sm leading-relaxed [font-family:Switzer,sans-serif]">
              {itemData.description}
            </p>
          </div>
        </div>
      </div>

      <div className={`hidden md:flex md:flex-col md:h-full`}>
        {isActive ? (
          <div
            className={`p-6 sm:p-8 text-left h-full flex flex-col relative ${itemData.textColor}`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1"
              aria-label="Close tab"
            >
              <span className="transform -rotate-180 inline-block">
                {" "}
                <DoubleArrowIcon colorClass={itemData.arrowColor} />
              </span>
            </button>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 [font-family:Switzer,sans-serif]">
              {itemData.tabLabel}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed [font-family:Switzer,sans-serif]">
              {itemData.description}
            </p>
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-between h-full py-4 px-1 sm:py-6 ${itemData.textColor}`}
          >
            <div className="flex-grow flex items-center justify-center w-full overflow-hidden">
              <h3 className="text-sm sm:text-xl font-bold whitespace-nowrap transform rotate-90 origin-center [font-family:Switzer]">
                {itemData.tabLabel}
              </h3>
            </div>
            <div className="mt-2 sm:mt-4">
              <DoubleArrowIcon colorClass={itemData.arrowColor} />{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const WhoPartner = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleSelect = (itemId: number) => {
    setActiveItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const resetView = () => {
    setActiveItemId(null);
  };

  const activeItem =
    activeItemId !== null
      ? partnerItems.find((item) => item.id === activeItemId)
      : null;

  return (
    <section className="p-5 md:px-32 lg:px-32 xl:px-32 md:py-16 lg:py-16 xl:py-16  ">
      {" "}
      <div className="">
        <div className="flex flex-col md:flex-row rounded-t-2xl overflow-hidden shadow-xl bg-[#F5F5F5]">
          <div
            className="bg-[#7A35C1] text-white md:w-[40%] lg:w-[50%] w-full p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center rounded-t-[32px]   cursor-pointer order-first h-auto md:min-h-[28rem] lg:min-h-[30rem]"
            onClick={resetView}
          >
            <img src={logo} alt="Maxtron Logo"></img>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold mt-4 [font-family:Switzer,sans-serif]">
              Who should partner with us?
            </h2>
          </div>

          <div className="flex-1 flex flex-col md:flex-row order-last md:rounded-bl-none overflow-hidden md:min-h-[28rem] lg:min-h-[30rem]">
            <div className="hidden md:flex md:flex-row w-full h-full">
              {activeItem ? (
                <SelectableItem
                  key={activeItem.id}
                  itemData={activeItem}
                  isActive={true}
                  isAnyActive={true}
                  onSelect={() => handleSelect(activeItem.id)}
                />
              ) : (
                partnerItems.map((item) => (
                  <SelectableItem
                    key={item.id}
                    itemData={item}
                    isActive={false}
                    isAnyActive={false}
                    onSelect={() => handleSelect(item.id)}
                  />
                ))
              )}
            </div>

            <div className="md:hidden flex flex-col w-full">
              {activeItem ? (
                <SelectableItem
                  key={activeItem.id}
                  itemData={activeItem}
                  isActive={true}
                  isAnyActive={true}
                  onSelect={() => handleSelect(activeItem.id)}
                />
              ) : (
                partnerItems.map((item) => (
                  <SelectableItem
                    key={item.id}
                    itemData={item}
                    isActive={false}
                    isAnyActive={false}
                    onSelect={() => handleSelect(item.id)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoPartner;
