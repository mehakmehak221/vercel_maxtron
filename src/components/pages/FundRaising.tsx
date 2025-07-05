import fund from "../../assets/case/fund.webp";
import { whatwedo1 } from "../../components/VectorImage";
import { whatwedo2 } from "../../components/VectorImage";
import { whatwedo3 } from "../../components/VectorImage";
import { whatwedo4 } from "../../components/VectorImage";
import { whatwedo5 } from "../../components/VectorImage";
import { whatwedo6 } from "../../components/VectorImage";
import { whatwedo7 } from "../../components/VectorImage";
import { whatwedo8 } from "../../components/VectorImage";
import whatwedo9 from "../../assets/case/whatwedo9.svg";
import whatwedo10 from "../../assets/case/whatwedo10.svg";

import { Link } from "react-router-dom";
import RealProject from "../elementalComponent/RealProject";
import Freedom from "../elementalComponent/Freedom";
import Image from "../elementalComponent/Image";
import WhyFounder from "../elementalComponent/WhyFounder";
import StaffTestimonials from "../../components/elementalComponent/StaffTestimonials";
import TooEarly from "../elementalComponent/TooEarly";

const items = [
  {
    icon: whatwedo1,
    title: "Token Fundraising Strategy & Execution",
  },
  {
    icon: whatwedo2,
    title: "NBFC & Line of Credit Support",
  },
  {
    icon: whatwedo3,
    title: "Access to Global VC & Angel Networks",
  },
  {
    icon: whatwedo4,
    title: "Smart Legal Structuring for Web3",
  },
  {
    icon: whatwedo5,
    title: "Valuation Guidance & Strategic Positioning",
  },
  {
    icon: whatwedo6,
    title: "Tokenomics Design",
  },
  {
    icon: whatwedo7,
    title: "Launch Support & Early Believer Campaigns",
  },
  {
    icon: whatwedo8,
    title: "Liquidity Planning & Staking Models",
  },
];

const FundRaising = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-7 md:px-12 xl:px-14 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-7 md:gap-9 lg:gap-10">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-3 md:px-4 lg:px-5 xl:px-7 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h1
                className="text-transparent bg-clip-text font-openSansHebrew text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[110%]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2A2A2A 0%, #7A35C1 54.42%)",
                }}
              >
                Raise Capital
              </h1>
              <h1 className="text-[#2A2A2A] font-openSansHebrew text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[110%]">
                for the Future You're Building
              </h1>
            </div>

            <p className="text-[#2A2A2A] md:text-[20px] xl:text-[20px] lg:text-[20px] sm:text-[14px] leading-relaxed mb-8 sm:mb-12 font-openSansHebrew font-normal">
              We back founders building in{" "}
              <span className="text-[#2A2A2A] font-semibold">
                Web3, AI, Quantum, and Emerging Tech -
              </span>{" "}
              with token fundraising, line of credit, legal support, and a
              global VC network. Now accepting early pitches for Freedom
              Capital, our upcoming founder-first Web3 fund
            </p>
            <div className="flex flex-col justify-center  gap-2 sm:gap-2.5 w-auto ">
              <Link
                to={"/contact"}
                className="flex items-center justify-center w-full sm:w-auto bg-[#7A35C1] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#6a2eb0] transition-colors duration-300"
              >
                <p className="text-[#FFF] text-center font-openSansHebrew text-sm sm:text-base font-normal leading-[160%]">
                  Start Your Fundraise
                </p>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 mt-6 lg:mt-0">
            <img
              src={fund}
              alt="Raise Capital"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="w-full  mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <h2
            className="text-[#2A2A2A] font-[Switzer]  justify-center   text-xl md:text-3xl
        lg:text-3xl  font-semibold text-center mt-8 md:mt-10 lg:mt-12 xl:mt-16"
          >
            What We Offer
          </h2>
          <p className="text-center mt-3 lg:mt-4 xl:mt-5 self-stretch text-[#79748A] font-openSansHebrew  text-base md:text-lg lg:text-xl font-normal leading-[160%]">
            Everything You Need to Go from Vision to Valuation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8 md:mt-10 lg:mt-12 xl:mt-16">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-5 border border-[#DFDEE7] p-4 rounded-3xl border-solid"
              >
                <div className="w-16 h-16 p-2 bg-[#F5F5F5] rounded-lg">
                  <item.icon />
                </div>
                <h3 className="self-stretch text-[#2A2A2A] font-[Switzer] text-xl  font-semibold leading-[140%]">
                  {item.title}
                </h3>
              </div>
            ))}
            <div
              className="flex items-center justify-center gap-2 border border-[#DFDEE7] rounded-3xl border-solid bg-center bg-no-repeat text-center p-4"
              style={{
                background:
                  "radial-gradient(187.13% 114.42% at 50% 50%, #B58AE5 0%, #7A35C1 100%)",
              }}
            >
              <img src={whatwedo9} alt="left" className="h-24" />
              <h3 className="text-white font-[Switzer] text-xl  font-semibold leading-[140%]">
                Trusted by pioneering founders building in 10+ countries.
              </h3>
              <img src={whatwedo10} alt="right" className="h-24" />
            </div>
          </div>
        </div>
        <RealProject />
      </div>
      <Freedom />

      <Image />
      <WhyFounder />
      <div className="">
        <StaffTestimonials />
      </div>
      <TooEarly />

      {/* <ContactAndSubscribe /> */}
    </div>
  );
};

export default FundRaising;
