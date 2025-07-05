import { Tokenize1 } from "../VectorImage";
import tokenize2 from "../../assets/case/tokenize2.png";
import WhyTokenize from "../elementalComponent/WhyTokenize";
import AllCrpto from "../elementalComponent/AllCrpto";
import GlobalPresence from "../elementalComponent/GlobalPresence";
import Tokenized from "../elementalComponent/Tokenized";
import WhyWithUs from "../elementalComponent/WhyWithUs";
import WhoisworkingwithUs from "../elementalComponent/WhoisworkingwithUs";
import Faqs from "../elementalComponent/Faqs";
import LastComponent from "../elementalComponent/LastComponent";

const TokenizePage = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-2 mb-4 relative">
      <div className='flex w-full max-w-[96rem] mx-auto flex-col h-[25rem] sm:h-[29rem] md:h-[32rem] lg:h-[38rem] xl:h-[40rem] justify-center items-start [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/tokenize.webp")_lightgray_50%_/_cover_no-repeat]'>
        <div className="w-full px-10 lg:px-16 xl:px-40 flex flex-col gap-4 md:gap-6 lg:gap-9">
          <div className="w-full max-w-[88rem] flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-3 items-start">
            <div className="flex justify-between items-center gap-2 lg:gap-3 shrink-0 bg-[#FFF] backdrop-blur-[3.1999998092651367px] py-2 pl-4 pr-6 rounded-[30.72px]">
              <Tokenize1 />
              <div className="flex flex-col gap-1">
                <p className='text-[12px] lg:text-base font-["Switzer"]'>
                  U.S. Securities and Exchange
                </p>
                <p className='text-[12px] lg:text-base font-["Switzer"]'>
                  Commission (SEC) Compliant
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-1 md:gap-2 lg:gap-3 shrink-0 bg-[#FFF] backdrop-blur-[3.1999998092651367px] py-2 pl-4 pr-6 rounded-[30.72px]">
              <img
                src={tokenize2}
                alt="us security"
                className="w-[28px] md:w-[45px] h-[28px] md:h-[45px]"
              />
              <div className="flex flex-col gap-1">
                <p className='text-[12px] lg:text-base font-["Switzer"]'>
                  Dubai International Financial
                </p>
                <p className='text-[12px] lg:text-base font-["Switzer"]'>
                  Centre (DIFC) Compliant
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  flex flex-col items-start leading-9 md:leading-10 lg:leading-[64px]">
            <p className="text-[#FFF] font-[Switzer] text-[36px] md:text-[44px] lg:text-[60px] xl:text-[64px] font-black  tracking-[-1.4px] lg:tracking-[-2.72px]">
              Tokenize
            </p>
            <p className="text-[#FFF] font-[Switzer] text-[36px] md:text-[44px] lg:text-[60px] xl:text-[64px] font-black  tracking-[-1.4px] lg:tracking-[-2.72px]">
              Anything
            </p>
          </div>
          <div className="w-full md:w-[75%] lg:w-[50%] ">
            <p className=" text-[#FFF] font-[Switzer] text-base md:text-lg lg:text-xl font-normal leading-5 ">
              Design, launch, and manage any tokenized asset with our expert
              team and best-in-industry token management tools.
            </p>
          </div>
          <div className="flex w-full md:w-1/3 lg:w-1/4  justify-center items-center [background:var(--White,#FFF)] shadow-[0px_0px_0px_1px_#C7C7C7_inset] py-[8px] md:py-[10px] lg:py-[13px] px-6 rounded-lg">
            <p
              className="text-black text-center font-[Switzer] text-lg font-semibold leading-[21.6px] hover:text-blue-800 hover:cursor-pointer"
              onClick={() =>
                window.open("https://calendly.com/business-maxtron/30min")
              }
            >
              Schedule Introduction
            </p>
          </div>
        </div>
      </div>
      <AllCrpto />
      <WhyTokenize />
      <GlobalPresence />
      <Tokenized />
      <WhyWithUs />
      <WhoisworkingwithUs />
      <Faqs />
      <LastComponent />
      {/* <ContactAndSubscribe /> */}
    </div>
  );
};

export default TokenizePage;
