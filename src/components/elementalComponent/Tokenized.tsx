import tokenized1 from "../../assets/case/tokenized1.png";
import tokenized2 from "../../assets/case/tokenized2.webp";
import tokenized3 from "../../assets/case/tokenized3.webp";
import tokenized4 from "../../assets/case/tokenized4.webp";
import tokenized5 from "../../assets/case/tokenized5.webp";
import tokenized6 from "../../assets/case/tokenized6.webp";
const cards = [
  {
    img: tokenized1,
    title: "GOLD TOKENIZATION",
    desc: "We helped transform the gold and other precious metals' tokenization projects for global RWA opportunities.",
  },
  {
    img: tokenized2,
    title: "YACHT TOKENIZATION",
    desc: "We pioneered a new era of tokenized investing with a revenue-sharing, community-driven digital asset.",
  },
  {
    img: tokenized3,
    title: "REAL ESTATE TOKENIZATION",
    desc: "We helped tokenize and secure initial listings on the most Tier-1 exchanges in history.",
  },
  {
    img: tokenized4,
    title: "VOTING TOKENIZATION",
    desc: "We helped transform the play-and-earn token economy for a global gaming phenomenon.",
  },
  {
    img: tokenized5,
    title: "METAVERSE TOKENIZATION",
    desc: "We pioneered a new era of tokenized investing with a revenue-sharing, community-driven digital asset.",
  },
  {
    img: tokenized6,
    title: "HEALTHCARE TOKENIZATION",
    desc: "We helped tokenize and secure initial listings on the most Tier-1 exchanges in history.",
  },
];

const Tokenized = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-5 md:py-7 lg:py-10">
      <div className="w-full flex flex-col gap-1 lg:gap-5">
        <p className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto text-center text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl mb-5 font-black leading-[100%]  lg:leading-[160%] tracking-tight">
          We tokenized and launched over{" "}
          <span className="text-[#7A35C1]">15+</span> assets
        </p>
        <p className="w-[80%] md:w-[65%] lg:w-[55%] mx-auto shrink-0 self-stretch text-[#2A2A2A] text-center font-openSansHebrew text-lg font-normal leading-[20px] lg:leading-[26px]  tracking-[-0.36px]">
          For founders to reimagine finance and ownership using blockchain
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10  w-[85%] mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden min-h-[350px] flex flex-col justify-end shadow-lg"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
            {/* Card Content */}
            <div className="relative z-10 p-5 flex flex-col gap-2">
              <span className="inline-block bg-[#FFF] text-[#2A2A2A] text-xs font-semibold rounded-full px-4 py-1 mb-2 w-fit">
                {card.title}
              </span>
              <p className="text-[#FFF] font-openSansHebrew text-base font-normal leading-6 tracking-[-0.16px]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-[85%]  max-w-[96rem] mx-auto flex-col h-[14rem] sm:h-[17rem] md:h-[21rem] lg:h-[23rem] xl:h-[28rem] justify-center items-center [background:linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),url("./assets/case/tokenize.webp")_lightgray_50%_/_cover_no-repeat] rounded-lg lg:rounded-xl'>
        <div className="w-full  flex flex-col gap-4 md:gap-6 lg:gap-9">
          <div className="w-[75%]  mx-auto">
            <p className=" text-[#FFF] text-center font-[Switzer] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-7 lg:leading-[48px] tracking-[-0.5px] lg:tracking-[-1.44px]">
              250K+ Cumulative token holders
            </p>
          </div>
          <div className="flex w-full max-w-56 md:max-w-72 mx-auto md:w-1/3 lg:w-1/3  justify-center items-center [background:var(--White,#FFF)] shadow-[0px_0px_0px_1px_#C7C7C7_inset] py-[8px] md:py-[10px] lg:py-[13px] px-6 rounded-lg">
            <p
              className="text-black text-center font-[Switzer] text-md lg:text-lg font-semibold leading-5 lg:leading-[21.6px] hover:text-blue-800 hover:cursor-pointer"
              onClick={() =>
                window.open("https://calendly.com/business-maxtron/30min")
              }
            >
              Schedule Introduction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenized;
