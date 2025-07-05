import { Link } from "react-router-dom";

import process from "../assets/augmentation/process.svg";

const processStepsData = [
  {
    number: "1",
    title: "Discovery Call",
    description: "Understand your tech, team, and timelines",
  },
  {
    number: "2",
    title: "Share Bench Profiles",
    description: "Within 24-48 hours",
  },
  {
    number: "3",
    title: "Tech Evaluation",
    description: "You interview & test them",
  },
  {
    number: "4",
    title: "Trial Period",
    description: "1-2 week free/reduced cost trial",
  },
  {
    number: "5",
    title: "Deploy & Scale",
    description: "Scale as per sprint load",
  },
];

const Process = () => {
  return (
    <div className="max-w-[96rem]  mx-auto p-5 md:p-16 lg:p-16 xl:p-16 text-white flex flex-col md:flex-row w-full md:gap-28 gap-5">
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8">
        <h1 className="text-[20px] sm:text-[32px] lg:text-[32px] xl:text-[32px] font-bold text-[#2A2A2A] leading-tight">
          Our Staff Augmentation Process
        </h1>

        <Link
          to="/contact"
          className="bg-[#7030A0] hover:bg-[#682BAF] text-white font-normal py-3 px-8 rounded-lg text-lg self-center md:self-start transition-colors duration-200"
        >
          Request Talent
        </Link>

        <div className="w-full flex justify-center items-center  ">
          <div className="w-full max-w-xs sm:max-w-xs flex justify-center items-center ">
            <img
              src={process}
              alt="Staff Augmentation Process Diagram"
              className="w-full h-auto m-0 p-0"
            />
          </div>
        </div>
      </div>

      <div
        className="md:w-1/2 w-full flex flex-col 
                      space-y-5 sm:space-y-5 lg:space-y-5 
                     "
      >
        {" "}
        {processStepsData.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 ">
            <div className="bg-[#F5F5F5] text-[#1D1B33]  w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-xl flex-shrink-0 mt-1">
              {step.number}
            </div>
            <div className="flex-grow">
              <h2 className="text-sm lg:text-lg md:text-lg xl:text-lg text-[#2A2A2A] mb-1 font-semibold lg:mb-2 font-lexendDeca">
                {step.title}
              </h2>
              <p className="text-[#2A2A2A] text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
