import React from "react";

interface CardProps {
  status: string;
  title: string;
  experience: string;
  timings: string;
  skills: string[];
  isMobileView?: boolean;
}



const Card: React.FC<CardProps> = ({
  status,
  title,
  experience,
  timings,
  skills,
  isMobileView = false,
}) => {
  

  const cardContainerBaseClasses = "w-full ";

  const cardContainerViewClasses = isMobileView
    ? " rounded-xl border border-[#DFDEE7] p-4 text-white font-[Switzer]"
    : "border border-[#DFDEE7] rounded-[16px] p-4 bg-white";

  const titleClasses = isMobileView
    ? "text-xl font-bold text-[#2A2A2A]"
    : "text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold font-[Switzer] text-[#2A2A2A]";

  const experienceClasses = isMobileView
    ? "text-xs font-semibold text-[#7A35C1]"
    : "text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-[#7A35C1]";

  const timingsClasses = isMobileView
    ? "text-[14px] text-[#7A7A7A]"
    : "text-xs md:text-sm lg:text-sm xl:text-sm text-[#7A7A7A]";

  const skillsListClasses = isMobileView
    ? "list-disc  space-y-1.5 text-sm font-bold font-openSansHebrew text-[#2A2A2A] p-4"
    : "list-disc p-4 space-y-1 text-sm text-[#2A2A2A] md:text-[16px] font-openSansHebrew font-bold";

  const titleSectionMargin = isMobileView
    ? "mb-1 pt-2"
    : "mb-1 md:pt-8 lg:pt-8 xl:pt-8 pt-5";
  const timingsMargin = isMobileView ? "mb-6" : "md:mb-8 lg:mb-8 xl:mb-8 mb-5";

  return (
    <div className={`${cardContainerBaseClasses} ${cardContainerViewClasses}`}>
      <div
        className={`inline-block mb-4 px-4 py-2 text-[16px] font-normal font-[Switzer] rounded`}
        style={{
          backgroundColor: "rgba(19, 152, 32, 0.15)", // Increased opacity
          color: "#0B6B16", // Darker green for better contrast
        }}
      >
        {status}
      </div>

      <div className={`flex gap-2 items-baseline ${titleSectionMargin}`}>
        <h3 className={titleClasses}>{title}</h3>
        <span className={experienceClasses}>{experience}</span>
      </div>

      <p className={`${timingsClasses} ${timingsMargin}`}>{timings}</p>

      <ul className={skillsListClasses}>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
