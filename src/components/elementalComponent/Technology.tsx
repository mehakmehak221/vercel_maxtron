"use client";
import React from "react";

interface TechnologyProps {
  techs: Array<{
    name: string;
    icon: React.ComponentType | string;
  }>;
}

const Technology: React.FC<TechnologyProps> = ({ techs }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mx-auto max-w-[88rem] items-start gap-5 md:gap-8 px-4 sm:px-6 md:px-8 py-7 md:py-10 lg:py-12">
      {/* Header */}
      <div className="lg:w-1/4 w-full">
        <p className="text-[#B1B1B1] [font-family:Switzer] text-lg md:text-2xl font-medium leading-[160%] uppercase">
          Technology used
        </p>
      </div>

      {/* Tech Stack Container */}
      <div className="lg:w-3/4 w-full ">
        {/* Desktop Row Layout */}
        <div className="w-full relative overflow-hidden px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 py-2 lg:py-3 px-4 lg:px-6 rounded-xl border border-gray-100"
              >
                {tech.icon && (
                  <div className="w-8 h-8 flex items-center justify-center bg-[#8941C4]/10 rounded-lg">
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 h-5 object-contain"
                      />
                    ) : (
                      <tech.icon />
                    )}
                  </div>
                )}
                <span className="text-gray-800 font-[Inter] font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
