import feature1 from "../assets/whymaxtron/feature1.webp";
import feature2 from "../assets/whymaxtron/feature2.webp";
import feature3 from "../assets/whymaxtron/feature3.webp";
import feature4 from "../assets/whymaxtron/feature4.webp";

const cardData = [
  { text: "Quick Response", image: feature1 },
  { text: "Generating Value", image: feature2 },
  { text: "Approachable Team", image: feature3 },
  {
    text: "Cutting-Edge Products",
    image: feature4,
  },
];
const WhyMaxtron = () => {
  return (
    <section
      id="about-us"
      className="relative py-4 md:py-8 lg:py-11 xl:py-12 inset-0  text-center "
    >
      <div>
        <div className="p-4 ">
          <h2 className="text-3xl lg:text-3xl font-bold text-[#2A2A2A] mb-4 text-[Switzer]">
            Why Maxtron
          </h2>
          <p className="mb-8 md:mb-10 lg:mb-14 xl:mb-16  text-[#79748A] font-openSansHebrew text-md md:text-lg">
            We go beyond merely serving the industry - we forge enduring
            relationships founded on trust and mutual success.
          </p>
          <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-solid border-[#DFDEE7] rounded-[20px] p-4 flex flex-col items-start gap-5"
              >
                <div className="text-[#2A2A2A] font-[Switzer] font-semibold text-lg lg:text-lg text-start gap-5">
                  {card.text}
                </div>
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-full h-auto rounded-xl text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMaxtron;
