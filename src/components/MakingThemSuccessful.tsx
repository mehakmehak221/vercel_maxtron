import React from "react";
import Cards from "./elementalComponent/Cards";
import Fund from "../../public/fund.svg";

import Marketing from "../../public/marketing.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "Marketing & Digital Strategy",
    description: [
        "B2B: AI-Powered Email & LinkedIn Sales Prospecting",
        "B2C: Performance Marketing - PPC, Programmatic, Influencers",
        "AI-Phone Calling Tool For Sales, Marketing & Support",
        "Web3 Projects Marketing & Growth - KOLs, Community, etc",
        "Branding & MarComm - Advisory & Execution",
        "PR Solutions - Tier-1 Media, Tier-2 Media",
        "Go-to-market Strategy For Digital Products",
    ],
    imageUrl: Marketing,
  },
  {
    title: "Fundraising & Partnership",
    description: [
       "Investor Outreach: Online, In-person, Networks",
        "Channel Partnership: VARs, Integrators, MSPs, Whitelabel",
        "Equity Partnership For Emerging Tech Projects"
    ],
    imageUrl: Fund,
  },
];

const MakingThemSuccessful: React.FC = () => {
  AOS.init();
  return (
    <section id="Our-services" className="py-12 text-center ">
      <div className="container px-4 md:px-8 mx-auto animate__backInDown">
        <h2 className="text-4xl font-bold text-black mb-4 animate__backInDown">
             Ensuring Their Success
        </h2>
        <p className="mb-16 lg:mx-40  font-OpenSans font-normal text-[#757575]">
        We build great products and make them successful to the market across a range of verticals & industries. We can help you turn your vision into a successful product together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  border-[#9B9696] gap-8">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default React.memo(MakingThemSuccessful);
