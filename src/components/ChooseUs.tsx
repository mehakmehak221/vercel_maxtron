import React from "react";
import Card from "./elementalComponent/Card";
import QuickImg from "../../public/quick.svg";
import GeneratingImg from "../../public/gnerating.svg";
import SmileImg from "../../public/smile.svg";
import CuttingImg from "../../public/cutting.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "Quick Turnaround Of Situation",
    subtitle: "Title",
    description:
      "We develop deep into your challenges, pinpointing the pains that can hinder growth. Then we tailor solutions are designed to tackle these head-on, paving the way for rapid business acceleration.",
    // icon: <FaMedal className="text-purple-500" />,
    imageUrl: QuickImg,
  },
  {
    title: "Generating Concrete Value",
    subtitle: "Title",
    description:
      "At every business touchpoint, we deliver tangible value through tailored solutions that address specific use cases comprehensively, leaving no gap unaddressed.",
    // icon: <FaLightbulb className="text-purple-500"
    imageUrl: GeneratingImg,
  },
  {
    title: "Approachable And Responsive",
    subtitle: "Title",
    description:
      "We prioritize clear communication to ensure great results, making us accessible, responsive, and always available. Think of us as an extension of your team, committed to keeping the dialogue open and creating something extraordinary together.",
    // icon: <FaUsers className="text-purple-500" />,
    imageUrl: SmileImg,
  },
  {
    title: "Cutting-Edge Products and Passionate Experts",
    subtitle: "Title",
    description:
      "We innovate and build products using cutting-edge tools, techniques, and platforms to propel your growth, with a dedicated team passionately refining their skills. Our commitment ensures tailored, expertly crafted solutions for your needs.",
    // icon: <FaUsers className="text-purple-500" />,
    imageUrl: CuttingImg,
  },
];

const ChooseUs: React.FC = () => {
  AOS.init();
  return (
    <section
      id="about-us"
      // style={{ backgroundImage: "url(/gradient-bg.svg)" }}
      className="relative py-20 inset-0  text-center"
    >
      <div
      // style={{ backgroundImage: "url(/gradient-bg.svg)" }}
      // className=" absolute inset-0 z-30 bg-cover bg-center "
      >
        <div className="p-4 ">
          <h2 className="text-4xl font-bold text-black mb-4">Why Maxtron</h2>
          <p className="mb-16 font-OpenSans text-[#757575]">
            We go beyond simply serving the industry; we forge enduring
            relationships built on trust and mutual success.
          </p>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                // icon={card.icon}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
          {/* <div className="mt-8">
          <Link to="/posts" className="text-blackunderline">
            View All Posts &gt;
          </Link>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ChooseUs);
