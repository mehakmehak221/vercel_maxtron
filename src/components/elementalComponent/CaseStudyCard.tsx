import React from "react";

interface CaseStudyCardProps {
  // projectName: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  // projectName,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="p-4 rounded-lg md:min-h-[230px] lg:min-h-40 bg-[#F1DFED] border-[#E3C4E1] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg border-[1px] shadow-md">
      {/* <h3 className="text-xl font-bold mb-2">{projectName}</h3> */}
      <div className="flex space-y-4 flex-col items-start">
        <h4 className="text-2xl font-bold">{title}</h4>
        <div className="flex">
          <img
            src={imageUrl}
            alt={title}
            className="w-10 h-10 rounded-full mr-4"
          />

          <p className="text-sm text-left text-black ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
