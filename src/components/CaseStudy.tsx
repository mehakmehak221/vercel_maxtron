import React from "react";
import { Link } from "react-router-dom";
import CaseStudyCard from "./elementalComponent/CaseStudyCard";
import Robot from "../../public/robot.svg";
import DecentralizedImg from "../../public/decentralized.svg";
import EvotingImg from "../../public/e-voting.svg";
import cryptoImg from "../../public/crypto-game.svg";
import EcommerceImg from "../../public/e-commerce.svg";
import Web3 from "../../public/web3.svg";

const caseStudyData = [
  {
    title: "Crypto Game Development",
    description:
      "A gaming platform that allows gamers to earn cryptocurrency by playing on both mobile apps (iOS and Google) and the website.",
    imageUrl: cryptoImg,
  },
  {
    title: "E-Commerce Marketing",
    description:
      "Learn how we helped an eCommerce business to increase its online sales by 60% by using omnichannel paid search and social media strategies.",
    imageUrl: EcommerceImg,
  },
  {
    title: "Mini-Gaming Platform",
    description:
      "Developed 7+ mini-games, which can be played on one single platform, to enable the quick earning and gaming experience for users",
    imageUrl: EvotingImg,
  },
  {
    title: "Decentralized AI Platform",
    description:
      "A decentralized AI platform designed to address the challenge of ensuring intellectual property rights compliance during data usage and AI training.",
    imageUrl: DecentralizedImg,
  },
  {
    title: "AI-Calling Tool",
    description:
      "A NextGen AI-phone calling tool that has been designed to communicate on calls just like humans do.",
    imageUrl: Robot,
  },
  {
    title: "Web3 Project Marketing",
    description:
      "How we managed to achieve growth for the web3 project using the right strategies, focused communications, KOLs partnerships, and community initiatives.",
    imageUrl: Web3,
  },
  {
    title: "VOTING BLOCK USA",
    description: "VOTE! 2024 Vote for President on the blockchain in 2024",
    imageUrl: Web3,
  },
];

const CaseStudy: React.FC = () => {
  return (
    <section id="Case-studies" className="py-20 text-center ">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-4xl font-bold text-black mb-16">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyData.map((caseStudy, index) => {
            // Wrap the 4th card in a Link component
            return (
              <Link
                to={`/Maxtron/${caseStudy.title.replace(/\s+/g, "-")}/${index}`}
                key={index}
              >
                <CaseStudyCard
                  title={caseStudy.title}
                  description={caseStudy.description}
                  imageUrl={caseStudy.imageUrl}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
