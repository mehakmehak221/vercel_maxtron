import career from "../../../src/assets/career.webp";

import FormTalent from "../FormTalent";
import { changer, connection, rightIcon } from "../VectorImage";

const items = [
  {
    icon: rightIcon(),
    title: "Always Updated",
    description: "You'll be the first to know about new job openings",
  },
  {
    icon: connection(),
    title: "Make your connections",
    description: "You'll build your professional network",
  },
  {
    icon: changer(),
    title: "Game changer",
    description: "You'll stand out from other applicants",
  },
];

const Careers = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-5 md:mt-6 lg:mt-8 xl:mt-10 px-5 md:px-8 xl:px-6">
        <div className="flex w-full flex-col-reverse lg:flex-row gap-[14px] md:gap-[32px] lg:gap-[44px]  ">
          <div className="flex-1 ">
            <img
              src={career}
              alt={"Career Image"}
              className="w-full h-[430px] lg:h-[500px] object-contain rounded-xl px-3 md:px-4 lg:px-7 lg:py-4"
            />
          </div>
          <div className="flex-1 lg:py-6 lg:pt-12">
            <div className="flex flex-col gap-5  lg:gap-9 xl:gap-10 px-3 md:px-4 lg:px-7 xl:px-10">
              <h1
                className={`self-stretch text-[#2A2A2A] font-openSansHebrew text-2xl md:text-3xl lg:text-5xl font-bold leading-[120%]`}
              >
                Stay Connected with Maxtron
              </h1>
              <p
                className={`self-stretch text-[#3B3C4A] font-openSansHebrew text-lg md:text-xl lg:text-3xl font-normal leading-[160%] pr-8`}
              >
                By joining our talent community, we will notify you about
                relevant positions, and keep you in mind whenever we have
                interesting opportunities.
              </p>
            </div>
          </div>
        </div>
        <div>
          <FormTalent />
        </div>
        <div className="w-full mt-5 md:mt-9 lg:mt-12 xl:mt-16 mb-6 lg:mb-10">
          <h1 className="self-stretch text-[#3B3C4A] mx-auto w-[90%] md:w-[80%] lg:w-[75%]  text-center font-openSansHebrew text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-[120%]">
            Take your job search to the next level
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-8 lg:mt-11 xl:mt-14">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-4 md:p-6 lg:p-8 gap-4 items-center text-center border-b md:border-b-0 border-[#C9C2C3]"
              >
                <div>{item.icon}</div>
                <h1 className="text-[#2A2A2A] font-openSansHebrew text-lg md:text-xl lg:text-2xl font-bold leading-[120%]">
                  {item.title}
                </h1>

                <p className="text-[#3B3C4A] font-openSansHebrew text-base md:text-lg lg:text-xl font-normal leading-[160%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <ContactAndSubscribe/> */}
    </div>
  );
};

export default Careers;
