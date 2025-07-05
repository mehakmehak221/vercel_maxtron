import React from "react"; 
import Cards from "./elementalComponent/Cards";
import Neuro from "../../public/neuro.svg";
import Cloud from "../../public/cloud.svg";
import Topology from "../../public/topology.svg";
import Network from "../../public/network.svg";


const cardData = [
  {
    id: "web3",
    title: "Web3.0 Custom Solutions",
    description: [
      "Native Crypto Token Development & Launch",
      "DApps Development",
      "Crypto Gaming Development",
      "Smart Contract Development",
      "DeFi Development",
      "Metaverse Development",
      "Native Payment Development",
    ],
    imageUrl: Neuro,
  },
  {
    id: "ai",
    title: "Applied AI Products & Services",
    description: [
      "Custom AI App Development",
      "AI Integration",
      "AI Agent/Copilot Development",
      "PoC & MVP Development",
      "GenAI Development & LLM Fine-tuning",
    ],
    imageUrl: Cloud,
  },
  {
    id: "other",
    title: "Other Technology Services",
    description: [
      "Mobile App Development",
      "Web Development",
      "UX/UI Design",
      "IT Staff Augmentation",
      "IT Cousulting",
      "Digital Transformation",
      "Data & Cybersecurity",
    ],
    imageUrl: Topology,
  },
  {
    id: "experiential",
    title: "Experiential Development",
    description: [
      "Kinetic Installation",
      "AR Virtual Try-ons & Immersive Gaming",
      "Nano Mist Hologram & Holo Box",
      "AI Avatar & 3D Models",
      "Transparent Screen",
      "Gesture Based Installation",
      "Projection Mapping",
    ],
    imageUrl: Network,
  },
];

const WhatWeDo: React.FC = () => {

  

  return (
    <section id="Our-services" className="py-12 text-center ">
   
      <div className="container px-4 md:px-8 mx-auto">
        <h2
          className="text-4xl font-bold text-black mb-4"
        
        >
          Creating Winning Products
        </h2>
        <p
          className="mb-16 font-OpenSans font-normal text-[#757575]"
      
        >
          We go beyond simply serving the industry. We forge enduring
          relationships builds on trust and mutual success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[#9B9696] gap-8">
          {cardData.map((card) =>
            card.title === "Experiential Development" ? (
             
              <a
                href="https://experiences.maxtron.ai/"
                target="_blank"
                rel="noopener noreferrer"
                key={card.id}
             
                className="block"
              >
                <Cards
                
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              </a>
            ) : (
             
              <div
                key={card.id} 
               
              >
                <Cards
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                 />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};


export default React.memo(WhatWeDo);