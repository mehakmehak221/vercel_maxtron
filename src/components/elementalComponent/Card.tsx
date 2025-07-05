import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;

  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" text-[#1E1E1E] bg-cover bg-[#FFEFFC] bg-center p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
      <div className="flex flex-col items-start pl-2 pt-1">
        <div className="text-xl mb-2 ">
          <img src={imageUrl} alt={title} className="w-7 h-7 rounded-full " />
        </div>

        <h3 className="text-xl text-[#4E009C] font-OpenSans text-left font-bold">
          {title}
        </h3>

        <p className="bg-[#FFFFFF]  bg-opacity-90 text-[#4E009C] mt-4 sm:min-h-[150px]  mb-1 p-3 flex text-left justify-stretch font-normal text-sm rounded-xl font-OpenSans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
