import schedule from "../../assets/augmentation/schedulefooter.svg";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 sm:ml-3 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);

const ScheduleFooter = () => {
  return (
    <div className="md:p-16 xl:p-16 lg:p-16 p-5 max-w-[96rem] mx-auto">
      <div
        className="bg-[#7A35C1] text-white py-12 sm:py-16 md:py-20 rounded-3xl"
        style={{
          backgroundImage: `url(${schedule})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:p-0 p-5">
          <h2 className="text-[24px] md:text-[48px]  lg:text-[48px]  xl:text-[48px] font-bold mb-4 font-[Switzer]">
            Ready to Augment Your Tech Team?
          </h2>
          <p className="text-[14px] md:text-[16px]  lg:text-[16px]  xl:text-[16px] text-[#FFF] mb-8 sm:mb-10 md:mb-12 max-w-xl">
            Let's help you build faster, smarter, and more cost-efficiently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <button
              onClick={() => {
                window.open("https://calendly.com/business-maxtron/30min");
              }}
              className="group  hover:bg-[#682BAF] border-2 border-white rounded-full 
                       py-3 px-6 sm:px-8 
                       text-sm sm:text-base font-normal 
                       text-[#FFF]
                       flex items-center justify-center 
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75
                       w-full sm:w-auto"
            >
              Schedule a Free Strategy Call
              <ArrowRightIcon />
            </button>

            {/* <button
              className="group hover:bg-violet-400 border-2 border-white rounded-full 
                       py-3 px-6 sm:px-8 
                       text-sm sm:text-base font-normal
                        text-[#FFF]
                       flex items-center justify-center 
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75
                       w-full sm:w-auto"
            >
              Chat With Talent Advisor
              <ArrowRightIcon />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFooter;
