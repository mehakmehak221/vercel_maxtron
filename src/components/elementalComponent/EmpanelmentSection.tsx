"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Banking from "../../assets/augmentation/EmpanelmentSection/Banking.webp";
import Retail from "../../assets/augmentation/EmpanelmentSection/Retail.webp";
import Gaming from "../../assets/augmentation/EmpanelmentSection/Gaming.webp";
import SaaS from "../../assets/augmentation/EmpanelmentSection/SaaS.webp";
import Healthcare from "../../assets/augmentation/EmpanelmentSection/healthcare.webp";

interface Industry {
  id: number;
  title: string;
  image: string;
  altText: string;
}

const industryData: Industry[] = [
  {
    id: 1,
    title: "Banking, Financial Services & Insurance",
    image: Banking,
    altText: "Banking",
  },
  { id: 2, title: "Retail & E-commerce", image: Retail, altText: "Retail" },
  { id: 3, title: "Gaming Studios", image: Gaming, altText: "Gaming" },
  { id: 4, title: "SaaS & Startups", image: SaaS, altText: "SaaS" },
  {
    id: 5,
    title: "Healthcare & MedTech",
    image: Healthcare,
    altText: "Healthcare & MedTech",
  },
];

const CircleIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div
    className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4 transition-colors duration-300
      ${
        isActive
          ? "border-[#7A35C1]"
          : "border-[#BEBCCA] group-hover:border-[#7A35C1]"
      }`}
  >
    <span
      className={`text-sm font-semibold transition-colors duration-300
        ${
          isActive
            ? "text-[#7A35C1]"
            : "text-[#2A2A2A] group-hover:text-[#7A35C1]"
        }`}
    >
      {isActive ? "−" : "+"}
    </span>
  </div>
);

const EmpanelmentSection = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<number | null>(null);

  const handleIndustryClick = (id: number) => {
    setActiveIndustryId((prevId) => (prevId === id ? null : id));
  };

  const imageContainerVariants: Variants = {
    hidden: { opacity: 0, height: 0, marginTop: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
      overflow: "visible",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className=" text-white p-5 md:p-12 lg:p-16 xl:p-16">
      <div className="max-w-[96rem]  mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl text-[#2A2A2A] font-[Switzer] mb-6 font-bold">
            Fast-Track Empanelment & Onboarding
          </h2>
          <p className="mb-4 font-openSansHebrew text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg font-normal">
            We're already empaneled or in the procurement pipeline of major
            clients across
          </p>
          <p className="font-openSansHebrew text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg font-normal">
            We support{" "}
            <strong className="text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg ">
              MSA, SoW, NDA, SLA agreements
            </strong>{" "}
            and are{" "}
            <strong className="text-[#2A2A2A] text-sm md:text-lg lg:text-lg xl:text-lg">
              ISO-compliant, GDPR-aligned.
            </strong>
          </p>
        </div>

        <div>
          <ul className="mb-6">
            {industryData.map((industry) => {
              const isActive = activeIndustryId === industry.id;
              return (
                <li
                  key={industry.id}
                  className={`group transition-colors duration-300 ${
                    !isActive ? "border-b border-[#BEBCCA]" : ""
                  }`}
                >
                  <div
                    onClick={() => handleIndustryClick(industry.id)}
                    className={`flex items-center py-3 cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? "text-[#7A35C1]"
                        : "text-[#79748A] hover:text-[#7A35C1]"
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                    aria-controls={`image-content-${industry.id}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        handleIndustryClick(industry.id);
                    }}
                  >
                    <CircleIcon isActive={isActive} />
                    <span
                      className={`text-base 
                        font-normal font-openSansHebrew md:text-xl lg:text-xl xl:text-xl ${
                          isActive ? "text-[#7A35C1]" : "text-[#595465]"
                        }`}
                    >
                      {industry.title}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`image-content-${industry.id}`}
                        id={`image-content-${industry.id}`}
                        variants={imageContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={industry.image}
                            alt={industry.altText}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmpanelmentSection;
