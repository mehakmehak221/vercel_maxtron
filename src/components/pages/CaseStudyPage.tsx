import { useNavigate } from "react-router-dom";
import img1 from "../../assets/case/img1.webp";
import img3 from "../../assets/case/img3.webp";
import img2 from "../../assets/case/img2.webp";
import img4 from "../../assets/case/img4.webp";
import img5 from "../../assets/case/img5.webp";
import img6 from "../../assets/case/img6.webp";
import img8 from "../../assets/case/img8.webp";
import img9 from "../../assets/case/img9.webp";
import img10 from "../../assets/case/img10.webp";

import ContactForm from "../ContactForm";
import MoreCaseStudies from "./MoreCaseStudies";
import { useState } from "react";

const caseStudyData = [
  {
    img: img1,
    heading:
      "A gaming platform that allows gamers to earn cryptocurrency by playing on both mobile apps (iOS and Google) and the website",
    subheading: "Blockchain Game Development",
  },
  {
    img: img5,
    heading:
      " Learn how we helped an eCommerce company successfully achieve fast growth with high margins into a new (Direct-To-Consumers) D2C category with flying colors.",
    subheading: "E-Commerce Marketing",
  },

  {
    img: img4,
    heading:
      "AI-Enabled Social Networking App For Chefs- The world's first AI-enabled App connecting, enabling, and empowering chefs, enthusiasts, and the industry in food.",
    subheading: "AI-Enabled Social Networking App For Chefs",
  },

  // {
  //     img: img7,
  //     heading: 'A mobile app that offers a gamified experience for users to earn rewards while improving their fitness by completing fitness goals.',
  //     subheading: 'AI-Powered Fitness App-',
  // },
  {
    img: img8,
    heading:
      "A decentralized AI platform designed to address the challenge of ensuring intellectual property rights compliance during data usage and AI training.",
    subheading: "Decentralized AI Platform",
  },
  {
    img: img6,
    heading:
      "A NextGen AI-phone calling tool that has been designed to communicate on calls just like humans do.",
    subheading: "AI-Calling Tool",
  },
  {
    img: img3,
    heading:
      "How we managed to achieve growth for the web3 project using the right strategies, focused communications, KOLs partnerships, and community initiatives.",
    subheading: "Crypto Project Marketing",
  },
  {
    img: img2,
    heading:
      "A comprehensive solution that leverages blockchain's inherent characteristics to ensure anonymity, integrity, accuracy, and verifiability in the voting process.",
    subheading: "Blockchain-Based E-Voting System",
  },
  {
    img: img9,
    heading:
      "Good Standing is a volunteer management platform that connects organizations and volunteers through location-based tasks, rewards, and real-time communication. It features a secure blockchain-backed coupon marketplace, a gamified challenge system, and an admin panel for oversight. Built with React, Nest.js, Web3.js, AWS, and Firebase, it ensures a scalable, secure, and engaging experience.",
    subheading: "Good Standing",
  },
  {
    img: img10,
    heading:
      "Gro8 is a dynamic platform connecting investors, mentors, and startup founders in one place. It enables seamless startup funding, mentorship, and collaboration, with an admin dashboard, real-time chat, and secure investment tracking. Built with Nest.js, React, Firebase, AWS, and MongoDB, Gro8 ensures a scalable, efficient, and secure experience for all users.",
    subheading: "Gro8",
  },
];

const CaseStudyList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 md:p-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudyData.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col mb-8 custom_bg_color transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() =>
              navigate(
                `/Maxtron/${industry.subheading.replace(/\s+/g, "-")}/${index}`
              )
            }
          >
            <img
              src={industry.img}
              alt={industry.subheading}
              className="w-full object-cover mb-4 rounded-t-xl"
            />
            <b className="mb-2 text-sm md:text-[16px] w-fit p-2 md:p-4 py-0 rounded-lg">
              {industry.subheading}
            </b>
            <p className="p-2 md:p-4 py-4 md:py-8 text-sm">
              {industry.heading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseStudyPage = () => {
  const [showMoreCaseStudies, setShowMoreCaseStudies] = useState(false);

  const handleButtonClick = () => {
    setShowMoreCaseStudies(!showMoreCaseStudies);
  };

  return (
    <div>
      <div className="relative z-10 text-center mb-8 caseStudy_hero_img px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Case Studies
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Explore our case studies showcasing how we’ve leveraged AI,
          blockchain, and advanced marketing techniques across various
          industries. Our innovative tech solutions have enabled clients to
          achieve groundbreaking results, while our strategic sales and
          marketing efforts have driven substantial success and put projects on
          the fast track to growth. Discover how our expertise in cutting-edge
          technology can transform your business.
        </p>
      </div>

      <div className="relative container pt-20  mx-auto p-2 md:p-4">
        <div className="absolute inset-0 opacity-10 z-0"></div>

        <CaseStudyList />
      </div>

      <div className="relative z-10 text-center my-8">
        {!showMoreCaseStudies && (
          <button
            className="border-black border-[4px] text-sm md:text-[16px] font-bold px-5 py-3 rounded-xl"
            onClick={handleButtonClick}
          >
            Request More Case Studies
          </button>
        )}

        {showMoreCaseStudies && (
          <div>
            <MoreCaseStudies setShowMoreCaseStudies={setShowMoreCaseStudies} />
          </div>
        )}
      </div>

      <ContactForm />
    </div>
  );
};

export default CaseStudyPage;
