import React from "react";

interface CardsProps {
  title: string;
  description: string[];
  imageUrl: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Cards: React.FC<CardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" text-[#4E009C] bg-cover bg-[#FFEFFC] bg-center p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
      <div className="flex flex-col items-">
        <div className="mb-2">
          <img
            src={imageUrl}
            alt={title}
            className="w-8 h-8 rounded-full shadow-md"
          />
        </div>

        <h3 className="text-xl text-[#4E009C] font-OpenSans md:h-14 text-left font-bold">
          {title}
        </h3>

        <ul className="list-disc text-left px-7 py-4 mt-2 bg-[#FFFFFF] md:min-h-[200px]  bg-opacity-90 text-[#4E009C] rounded-xl font-normal text-sm space-y-1">
          {description.map((item, index) => (
            <li key={index} className="pl-[2px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Cards);
