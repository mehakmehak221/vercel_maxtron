import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import ourteamrightimage from "../../assets/case/ourteamrightimage.webp";
import gro8 from "../../assets/case/gro8.webp";
import bitangels from "../../assets/case/bitangels.webp";
import leventiscapital from "../../assets/case/leventiscapital.webp";
import agnix from "../../assets/case/agnix.webp";
import prashant from "../../assets/case/prashant.webp";
import hui from "../../assets/case/hui.webp";
import ridha from "../../assets/case/ridha.webp";
import craig from "../../assets/case/craig.webp";
import riddhi from "../../assets/case/riddhi.webp";
import aman from "../../assets/case/aman.webp";
import vc from "../../assets/case/888vc.webp";
import team from "../../assets/case/team.webp";
import TeamLastComponent from "../elementalComponent/TeamLastComponent";

const items = [
  {
    title: "Gro8 CLUB",
    description: "Investment Platform",
    image: gro8,
  },
  {
    title: "888vc",
    description: "VC Syndicate",
    image: vc,
  },
  {
    title: "BitAngels",
    description: "Angel Network",
    image: bitangels,
  },
  {
    title: "Leventis Captial DIFC",
    description: "Desc",
    image: leventiscapital,
  },
  {
    title: "AgniX Capital",
    description: "Investment Group",
    image: agnix,
  },
];
const teams = [
  {
    title: "Prashant",

    image: prashant,
  },
  {
    title: "Hue H. Nguyen",

    image: hui,
  },
  {
    title: "Ridha Agarwal",

    image: ridha,
  },
  {
    title: "Craig Henderson",

    image: craig,
  },
  {
    title: "Aman Shah",

    image: aman,
  },
  {
    title: "Riddhi Jaiswal",

    image: riddhi,
  },
];

const OurTeam = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto pl-5 sm:pl-6 md:pl-14 xl:pl-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="flex flex-row gap-7">
          <div className="w-[32%] hidden lg:flex flex-col justify-start items-start">
            <img
              src={ourteamrightimage}
              alt="Affiliate team"
              className="w-full h-[25rem] lg:h-[27rem] xl:h-[34rem] object-fit"
            />
          </div>

          <div className="flex-1 flex items-start pr-0">
            <img
              src={affiliaterightlanding}
              alt="Affiliate team"
              className="w-full h-full  lg:h-[27rem] xl:h-[34rem] object-fit filter grayscale"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
          {/* Left Section - Heading and Paragraph */}
          <div className="w-full text-left ">
            <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start">
              Our Partners
            </h1>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-8 justify-start items-start">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-start ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 object-contain rounded-md"
                />
                <p className="text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl font-semibold text-left mt-3">
                  {item.title}
                </p>
                <p className="text-xl lg:text-2xl text-[#363348] text-left mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full  mt-9 md:mt-14 lg:mt-20 xl:mt-24 pr-4 md:pr-6 lg:pr-10 ">
          <img
            src={team}
            alt={"team"}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-5 md:pr-8 lg:pr-14 items-start">
          <div className="w-full text-left ">
            <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl font-bold leading-[140%] text-center">
              About The Founder
            </h1>
          </div>

          <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-10">
            <div className="flex-shrink-0 w-52 h-52 xl:w-72 xl:h-72 lg:w-64 lg:h-64  flex items-center justify-center overflow-hidden">
              <img
                src="/girish.webp"
                alt="Girish Ahirwar"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            <div className="flex-1 ">
              <h2 className="text-4xl font-semibold mb-3 pl-5 text-[#58269A]">
                Girish Ahirwar
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-xl font-normal">
                <li>Partner &amp; Ex- CBO Tagbin</li>
                <li>
                  Pitched, Won &amp; Delivered- Digital &amp; Experiential
                  Projects Worth $500mn+
                </li>
                <li>Fundraising And Partnerships</li>
                <li>IIT Roorkee</li>
                <li>10+ Years Experience in Emerging Tech</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
          {/* Left Section - Heading and Paragraph */}
          <div className="w-full text-left ">
            <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start">
              Our Team
            </h1>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10 justify-start items-start">
            {teams.map((item, index) => (
              <div key={index} className="flex flex-col items-start ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-36 lg:w-44 h-36 lg:h-44 object-contain rounded-md"
                />
                <p className="text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl font-semibold text-left mt-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <TeamLastComponent />
      </div>
    </div>
  );
};

export default OurTeam;
