import tech1 from "../../assets/case/tech1.webp";
import tech2 from "../../assets/case/tech2.webp";
import tech3 from "../../assets/case/tech3.webp";
import tech4 from "../../assets/case/tech4.webp";

const cardData = [
  {
    title: "AI",
    desc: "Built to Go Viral",
    // link: "https://experiences.maxtron.ai/",
    tag: "Coming Soon",
    image: tech1,
    linktitle: "Meet AI",
  },
  {
    title: "Tokenization",
    desc: "Own Everything, Digitally",
    link: "/tokenization",
    tag: "New",
    image: tech2,
    linktitle: "Start Tokenizing",
  },

  {
    title: "Experiential Tech",
    desc: "Beyond Screens, Into Senses",
    link: "https://experiences.maxtron.ai/",
    tag: "New",
    image: tech3,
    linktitle: "Explore The Experience ",
  },
  {
    title: "Quantum Technologies",
    desc: "Feel the Flow",
    // link: "https://experiences.maxtron.ai/",
    tag: "Coming Soon",
    image: tech4,
    linktitle: "Enter The Quantum Rea ",
  },
];

const TechnologyUsed = () => {
  return (
    <section
      id=""
      className="relative py-4 md:py-8 lg:py-11 xl:py-12 inset-0  text-center"
    >
      <div>
        <div className="p-5 md:p-4 lg:p-4 xl:p-4 ">
          <h2 className="text-3xl lg:text-3xl font-bold text-[#2A2A2A] mb-8 text-[Switzer]">
            Trends We Are Building
          </h2>

          <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-3 xl:gap-8">
            {cardData.map((card, index) => (
              <div key={index} className="relative rounded-lg ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="flex absolute top-2 right-2 justify-center items-center gap-2.5 [background:var(--Primary-0,#F3EBFC)] p-2 rounded-lg">
                  <p className="text-[#7A35C1] font-[Switzer] text-sm font-normal leading-[120%]">
                    {card.tag}
                  </p>
                </div>
                <div className="py-4 flex flex-row justify-between">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-[#79748A] text-base">{card.desc}</p>
                  </div>
                  <div className="flex mt-4 items-center">
                    <a
                      href={card.link}
                      className="text-[#7A35C1] hover:text-purple-800"
                    >
                      <div className="hover:bg-[#F3EBFC] hover:text-[#7A35C1] md:border border-[#7A35C1] flex items-center gap-2 px-4 py-3 rounded-md">
                        <p className="hidden md:block">{card.linktitle}</p>

                        <svg
                          className="block md:hidden"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.2928 4.29299C13.6828 3.90299 14.3158 3.90299 14.7073 4.29299L21.7048 11.295C21.8923 11.4826 21.9977 11.737 21.9977 12.0022C21.9977 12.2675 21.8923 12.5219 21.7048 12.7095L14.7058 19.7085C14.516 19.8837 14.2658 19.9786 14.0075 19.9735C13.7493 19.9684 13.503 19.8636 13.3202 19.681C13.1375 19.4985 13.0324 19.2523 13.0271 18.9941C13.0217 18.7358 13.1164 18.4855 13.2913 18.2955L19.5853 12L13.2928 5.70749C13.1053 5.51988 13 5.26548 13 5.00024C13 4.73499 13.1053 4.4806 13.2928 4.29299Z"
                            fill="#7A35C1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 11.9997C3 11.4477 3.447 11.0008 4.0005 11.0008H21C21.1345 10.9955 21.2688 11.0175 21.3946 11.0654C21.5204 11.1133 21.6353 11.1861 21.7324 11.2795C21.8294 11.3728 21.9066 11.4848 21.9593 11.6087C22.0121 11.7326 22.0392 11.8659 22.0392 12.0005C22.0392 12.1351 22.0121 12.2684 21.9593 12.3923C21.9066 12.5162 21.8294 12.6282 21.7324 12.7215C21.6353 12.8149 21.5204 12.8877 21.3946 12.9356C21.2688 12.9835 21.1345 13.0055 21 13.0002H4.0005C3.73515 13.0002 3.48067 12.8948 3.29304 12.7072C3.10541 12.5196 3 12.2651 3 11.9997Z"
                            fill="#7A35C1"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-10">
            <button
              className="bg-[#7A35C1] p-2 text-white rounded-md hover:bg-[#F3EBFC] hover:text-[#7A35C1]"
              aria-label="View all offerings"
            >
              <p>View All Offerings</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;
