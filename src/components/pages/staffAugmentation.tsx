import React from "react";
import augmentation from "../../assets/augmentation/augmentation.webp";
import WeOffer from "../../components/elementalComponent/WeOffer";
import WhyChoose from "../../components/elementalComponent/WhyChoose";
import EmpanelmentSection from "../../components/elementalComponent/EmpanelmentSection";
import TimeZone from "../../components/elementalComponent/TimeZone";
import WhoPartner from "../../components/elementalComponent/WhoPartner";
import Process from "../Process";
import Profiles from "../Profiles";
import AugmentationFaqs from "../../components/elementalComponent/Augmentationfaqs";
import StaffTestimonials from "../../components/elementalComponent/StaffTestimonials";
import ScheduleFooter from "../../components/elementalComponent/ScheduleFooter";

const StaffAugmentation: React.FC = () => {
  return (
    <>
      <div className="w-full text-white flex flex-col lg:flex-row lg:items-center pt-5 px-6 sm:px-10 md:px-16 lg:pl-12 xl:pl-20 2xl:pl-32 lg:pr-8 xl:pr-12 max-w-[96rem] mx-auto">
        <div className="w-full lg:w-[58%] xl:w-[60%] 2xl:w-[55%] flex flex-col justify-center  md:py-0 py-5 pt-5 ">
          <h1
            className="text-transparent bg-clip-text font-openSansHebrew text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[110%] pb-2"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #2A2A2A 0%, #7A35C1 54.42%)",
            }}
          >
            Plug-and-Play
          </h1>

          <h1 className="text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-[#2A2A2A]  mb-3 sm:mb-3">
            Tech Talent From India's Deepest Bench of Developers
          </h1>

          <p className="text-[#2A2A2A] md:text-[20px] xl:text-[20px] lg:text-[20px] sm:text-[14px] leading-relaxed mb-8 sm:mb-12 font-openSansHebrew font-normal">
            Onboard pre-vetted, project-ready developers in 48 hours. No hiring
            bottlenecks. No overheads. Just pure development power, on-demand.
          </p>

          <div className="flex flex-col sm:flex-row md:items-start xl:items-start lg:items-start  gap-3 md:gap-4 items-center">
            <a
              href="/contact"
              className="bg-[#7A35C1]  text-[#FFFFFF] font-medium 
                         py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-base 
                         transition-colors duration-300 shadow-lg hover:shadow-purple-500/50 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:bg-[#682BAF]"
            >
              Request Talent
            </a>
            <div className="flex flex-row sm:flex-row md:gap-2 gap-5 justify-center items-center ">
              <p className="text-[#000] font-openSansHebrew sm:text-[16px] md:text-lg lg:text-lg xl:text-lg font-normal">
                Looking for a job?
              </p>
              <a
                href="/careers"
                className="text-[#7A35C1] hover:text-purple-400 font-medium sm:text-[16px] md:text-lg lg:text-lg xl:text-lg underline
                         focus:outline-none  rounded-sm"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            src={augmentation}
            alt="Developer coding on a laptop with a coffee cup nearby"
            className="w-full h-full object-cover"
            style={{
              clipPath: "ellipse(140% 75% at 110% 50%)",
              filter: "grayscale(100%)",
            }}
          />
        </div>
      </div>

      <WeOffer />
      <WhyChoose />
      <EmpanelmentSection />
      <Profiles />
      <TimeZone />
      <WhoPartner />
      <Process />
      <AugmentationFaqs />
      <StaffTestimonials />
      <ScheduleFooter />
    </>
  );
};

export default StaffAugmentation;
