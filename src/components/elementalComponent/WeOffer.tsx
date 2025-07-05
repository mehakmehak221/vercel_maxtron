import React from "react";
import { icon1 } from "../../components/VectorImage";
import { icon2 } from "../../components/VectorImage";
import { icon3 } from "../../components/VectorImage";
import { icon4 } from "../../components/VectorImage";
import { icon5 } from "../../components/VectorImage";
import { icon6 } from "../../components/VectorImage";
import { icon7 } from "../../components/VectorImage";

interface CardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="border border-[#DFDEE7] rounded-[24px] flex flex-col  justify-start p-4">
      <div className=" mb-8  bg-[#F5F5F5] flex items-start justify-start  h-12 w-12 rounded-lg">
        <Icon />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold mb-4 text-[#2A2A2A] [font-family:Switzer] items-start text-start ">
          {title}
        </h3>
        <p className="text-sm text-[#595465] font-openSansHebrew items-start text-start">
          {description}
        </p>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    icon: icon1,
    title: "Blockchain & Web3",
    description: "Solidity, Ethereum, Smart Contracts, NFTs, DeFi, Layer-2s",
  },
  {
    id: 2,
    icon: icon2,
    title: "Web Development",
    description: "MERN, MEAN, JAMstack, Headless CMS, SEO-optimized builds.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Mobile App Development",
    description: "iOS, Android, Flutter, React Native",
  },
  {
    id: 4,
    icon: icon4,
    title: "Game Development",
    description: "Unity, Unreal, WebGL, Multiplayer Infra, AR/VR",
  },
  {
    id: 5,
    icon: icon5,
    title: "Full Stack Teams",
    description:
      "Combine Frontend + Backend + DevOps + QA for full delivery units",
  },
  {
    id: 6,
    icon: icon6,
    title: "Cloud & DevOps",
    description: "CI/CD, Kubernetes, AWS, Terraform, Infrastructure as Code",
  },
  {
    id: 7,
    icon: icon7,
    title: "AI/ML & Data",
    description:
      "Python, TensorFlow, LLM Integrations, RAG, LangChain, Data Pipelines",
  },
];

const WeOffer = () => {
  return (
    <div className="relative p-5 md:p-8 lg:p-11 xl:p-16 inset-0  text-center max-w-[96rem] mx-auto">
      <h1
        className="text-[#2A2A2A] justify-center [font-family: Switzer]  text-xl md:text-3xl
        lg:text-3xl xl:text-3xl text-center font-bold mb-2"
      >
        What We Offer
      </h1>
      <p className="text-[#595465] font-openSansHebrew lg:text-lg md:text-lg xl:text-lg sm:text-[14px] text-center font-normal mb-12">
        We provide <strong>scalable, on-demand tech resources</strong> across
        all major stacks and domains. Whether you're a product company, digital
        agency, SI partner, or enterprise, our flexible staff augmentation model
        ensures <strong>zero downtime</strong> in your delivery roadmap.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WeOffer;
