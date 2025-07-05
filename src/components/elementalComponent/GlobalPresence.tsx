import presence from "../../assets/case/presence.webp";

const items = [
  "KOLs and degen army",
  "Market and trends analysis",
  "Tailor-made solutions",
  "Legal and compliance",
];

const GlobalPresence = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-5 md:py-7 lg:py-10">
      <h1 className="text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl font-black leading-[160%] tracking-[-1.0px] lg:tracking-[-1.44px]">
        Global Presence
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full items-stretch">
        <div className="flex flex-col gap-4 flex-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F3EBFC] border border-solid border-[#7A35C1] rounded-xl p-4  lg:p-5 flex flex-col items-start gap-2"
            >
              <div className="flex items-center font-mono justify-center w-8 h-8 rounded-lg bg-[#CAA8EF] text-[#363348] font-bold text-lg">
                {`0${idx + 1}`}
              </div>
              <div className="text-[#2A2A2A] font-[Switzer] font-medium text-base lg:text-lg">
                {item}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center lg:h-auto">
          <div className="w-full  h-full">
            <img
              src={presence}
              alt="Global presence"
              className="w-full h-[300px] md:h-[400px] lg:h-[490px]  rounded-xl object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
