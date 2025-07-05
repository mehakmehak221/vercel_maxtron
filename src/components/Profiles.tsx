import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "React Developer",
    status: "Immediately Available",
    experience: "5 Years Exp.",
    timings: "4–6 Hours EST",
    skills: [
      "Next.js, Redux, Tailwind, GraphQL",
      "Previously worked with US Fintech Product",
    ],
  },
  {
    id: 2,
    title: "Blockchain Developer",
    status: "Available in 2 Days",
    experience: "4 Years Exp.",
    timings: "4–6 Hours EST",
    skills: [
      "Solidity, Hardhat, Web3.js, IPFS",
      "Experience with DeFi protocols",
      "Can lead smart contract audits",
    ],
  },
  {
    id: 3,
    title: "Game Developer",
    status: "Available after 1 Week",
    experience: "6 Years Exp.",
    timings: "4–6 Hours EST",
    skills: [
      "Unity, Photon, Multiplayer Networking",
      "Portfolio includes 3 shipped games on Play Store",
    ],
  },
];

const LeftArrowIcon = () => (
  <svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 6L1.5 6M1.5 6L5.625 10.125M1.5 6L5.625 1.875"
      stroke="#2A2A2A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 5H12.5M12.5 5L8.375 1M12.5 5L8.375 9"
      stroke="#2A2A2A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Profiles: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCard = cardsData[activeIndex];

  return (
    <div className=" text-[#2A2A2A] p-5 md:p-16 lg:p-16 xl:p-16 font-[Switzer] max-w-[96rem] mx-auto">
      {" "}
      <h1 className=" text-xl md:text-[32px] text-center font-bold mb-8 md:mb-12">
        {" "}
        Sample Developer Profiles from Our Bench
      </h1>
      <div className="md:hidden flex flex-col items-center ">
        {cardsData.length > 0 && currentCard && (
          <div className="w-full max-w-sm mb-6">
            {" "}
            <Card
              key={currentCard.id}
              title={currentCard.title}
              status={currentCard.status}
              experience={currentCard.experience}
              timings={currentCard.timings}
              skills={currentCard.skills}
              isMobileView={true}
            />
          </div>
        )}
        {cardsData.length > 1 && (
          <div className="w-full max-w-sm flex justify-end items-center gap-3">
            {" "}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#BEBCCA] flex items-center justify-center text-[#2A2A2A] hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Previous profile"
            >
              <LeftArrowIcon />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#BEBCCA] flex items-center justify-center text-[#2A2A2A] hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Next profile"
            >
              <RightArrowIcon />
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex  md:justify-center md:gap-6 lg:gap-8">
        {" "}
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            status={card.status}
            experience={card.experience}
            timings={card.timings}
            skills={card.skills}
            isMobileView={false}
          />
        ))}
      </div>
      <div className="relative z-10 text-center mt-10 md:mt-12 ">
        {" "}
        <Link to="/contact">
          <button className="bg-[#7A35C1] text-[15px] md:text-[16px] px-6 py-3 sm:px-8 rounded-lg sm:rounded-xl text-white font-openSansHebrew font-medium hover:bg-[#682BAF] transition-colors">
            {" "}
            Request for a profile you need
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profiles;
