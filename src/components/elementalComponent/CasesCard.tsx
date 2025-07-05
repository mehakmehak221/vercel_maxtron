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
import caseulalo from "../../assets/case/caseulalo.webp";
import iccaCase from "../../assets/case/iccaCase.webp";
import Tawuniyacase from "../../assets/case/Tawuniyacase.webp";
import tokencase from "../../assets/case/tokencase.webp";
import { useState } from "react";

const caseStudyData = [
  {
    img: img1,
    heading:
      "A gaming platform that allows gamers to earn cryptocurrency by playing on both mobile apps (iOS and Google)...",
    subheading: "Blockchain Game Development",
    type: ["Mobile App"],
    industry: "Gaming",
  },
  {
    img: img5,
    heading:
      "Learn how we helped an eCommerce company successfully achieve fast growth...",
    subheading: "ECommerce Marketing",
    type: ["Web Application"],
    industry: "E-Commerce",
  },
  {
    img: img4,
    heading:
      "Developed 7+ mini-games, which can be played on one single plateform, to enable the quick earning and gaming experience for users",

    subheading: "Mini Gaming Platform",
    type: ["Mobile App", "Web 3.0"],
    industry: "AI",
  },
  {
    img: img8,
    heading:
      "A decentralized AI platform designed to address IP rights compliance...",
    subheading: "Decentralized AI Platform",
    type: ["Web Application"],
    industry: "Web3",
  },
  {
    img: img6,
    heading: "A NextGen AI-phone calling tool...",
    subheading: "AI Calling Tool",
    type: ["Web Application"],
    industry: "AI",
  },
  {
    img: img3,
    heading: "How we managed to achieve growth for a web3 project...",
    subheading: "Crypto Project Marketing",
    type: ["Web Application"],
    industry: "Web3",
  },
  {
    img: img2,
    heading:
      "A blockchain solution to ensure anonymity and verifiability in voting...",
    subheading: "Blockchain Based EVoting System",
    type: ["Web Application"],
    industry: "Government",
  },
  {
    img: img9,
    heading:
      "Good Standing connects organizations and volunteers through tasks and rewards...",
    subheading: "Good Standing",
    type: ["Web Application"],
    industry: "Social",
  },
  {
    img: img10,
    heading:
      "Gro8 is a platform connecting investors, mentors, and startup founders...",
    subheading: "Gro8",
    type: ["Web Application"],
    industry: "Startup",
  },
  {
    img: tokencase,
    heading:
      "Maxtron successfully helped a blockchain client launch a new cryptocurrency token - covering every aspect of the process: smart contract creation, liquidity ",
    subheading: "Token Launch",
    type: ["Web Application", "UX/UI", "Marketing", "Graphic Design"],
    industry: "Web3",
  },
  {
    img: iccaCase,
    heading:
      "A world-class culinary school shaping the future of hospitality through award-winning training. Based in the heart of Dubai, ICCA empowers aspiring chefs and industry professionals with globally recognized programs, state-of-the-art facilities",
    subheading: "ICCA",
    type: ["Chat Bot", "UX/UI"],
    industry: "Culinary",
  },
  {
    img: Tawuniyacase,
    heading:
      "Our recent digital activation project done for Tawuniya, an official sponsor of نادي الهلال السعودي - Al-Hilal Saudi Club during the Al-Hilal vs Al-Nassr match in the #Saudi Pro League on 4th April in Riyadh.",
    subheading: "Tawuniya",
    type: ["Event", "Management"],
    industry: "Sports",
  },
  {
    img: caseulalo,
    heading:
      "AI and blockchain-powered health-tech protocol revolutionizing how patients manage their medical data. With a secure Smart Patient Wallet, ULALO empowers users to store, share, and visualize health records, receive personalized health insights, and take control of their well-being",
    subheading: "ULALO",
    type: [
      "Marketing",
      "UX/UI",
      "Web Development",
      "Web3 Development",
      "Video Editing",
    ],
    industry: "Healthcare",
  },
];

interface CasesCardProps {
  selectedProjectType: string;
  selectedIndustry: string;
}

const CasesCard = ({
  selectedProjectType,
  selectedIndustry,
}: CasesCardProps) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  // Filter case studies based on selected type and industry
  const filteredCaseStudies = caseStudyData.filter((item) => {
    const matchesType =
      selectedProjectType === "All" ||
      item.type.some((type) =>
        type.toLowerCase().includes(selectedProjectType.toLowerCase())
      );
    const matchesIndustry =
      selectedIndustry === "All" ||
      item.industry.toLowerCase().includes(selectedIndustry.toLowerCase());

    return matchesType && matchesIndustry;
  });

  // Get the case studies to display based on showAll state
  const displayedCaseStudies = showAll
    ? filteredCaseStudies
    : filteredCaseStudies.slice(0, 6);

  return (
    <div className="flex flex-col gap-4 md:gap-12">
      {filteredCaseStudies.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {displayedCaseStudies.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-[32px] aspect-[4/3] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(
                    `/Maxtron.ai/case-study/${encodeURIComponent(
                      item.subheading.replace(/\s+/g, "-")
                    )}`
                  );
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.subheading}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Type Label */}
                <div className="absolute top-3 md:top-5 left-4 md:left-5 md:flex hidden flex-wrap gap-2 z-20">
                  {item.type.map((t, i) => (
                    <span
                      key={i}
                      className="bg-[#8952b6] text-white text-sm md:text-base font-semibold px-3 py-1 rounded-2xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute md:hidden top-3 md:top-5 left-4 md:left-5 flex flex-wrap gap-2 z-20">
                  {item.type.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="bg-[#8952b6] text-white text-sm md:text-base font-semibold px-3 py-1 rounded-2xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-row justify-between items-end p-3 md:p-6 gap-2 md:gap-4 z-10">
                  <div className="text-white">
                    <p className="text-lg md:text-2xl font-['Switzer'] font-semibold mb-1 md:mb-2">
                      {item.subheading}
                    </p>
                    <h3 className="text-sm md:text-lg font-['Open_Sans_Hebrew'] mb-2 md:mb-4 line-clamp-2">
                      {item.heading}
                    </h3>
                  </div>

                  <button
                    className="bg-[#6B2F9C] md:bg-transparent aspect-square relative -top-6 hover:bg-[#6B2F9C] text-white text-2xl font-extrabold px-4 py-2 rounded-full font-['Switzer'] border-2 border-white transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(
                        `/Maxtron.ai/case-study/${encodeURIComponent(
                          item.subheading.replace(/\s+/g, "-")
                        )}`
                      );
                    }}
                  >
                    <p>&#8599;</p>
                  </button>
                </div>

                {/* Always-visible subheading */}
                <div className="absolute bottom-0 hidden md:block left-0 right-0 group-hover:opacity-0 p-6 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 z-0">
                  <h3 className="text-white text-xl md:text-2xl font-['Switzer'] font-semibold line-clamp-2">
                    {item.subheading}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length > 6 && (
            <button
              className="text-white px-5 py-3 rounded-2xl font-['Switzer'] border-2 self-center border-white font-medium transition-all duration-300 bg-[#6B2F9C] hover:shadow-lg hover:scale-105"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-['Switzer'] font-semibold text-[#1E1E1E] mb-4">
            No Projects Available
          </h3>
          <p className="text-lg text-gray-600 max-w-md">
            We couldn't find any projects matching your selected filters. Please
            try different combinations of project type and industry.
          </p>
        </div>
      )}
    </div>
  );
};

export default CasesCard;
