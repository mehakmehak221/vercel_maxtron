import whyus1 from "../../assets/case/whyus1.webp";
import whyus2 from "../../assets/case/whyus2.webp";
import whyus3 from "../../assets/case/whyus3.webp";
import whyus4 from "../../assets/case/whyus4.webp";

const items = [
  {
    image: whyus1,
    title: "We tokenize any asset",
    desc: "Whether you need tokenization for a small or large portfolio, we can design a solution that meets your requirements and delivers the results you need.",
  },
  {
    image: whyus2,
    title: "Hassle-free token management tools",
    desc: "Onboard investors, manage tokens, automate vesting schedules and transfers, end-to-end.",
  },
  {
    image: whyus3,
    title: "Access both retail and accredited investors",
    desc: "We provide secure and compliant way for issuers and fund managers to raise capital through both security and utility tokens.",
  },
  {
    image: whyus4,
    title: "Team with a track record",
    desc: "Collaborate with a team of experts from, who has a deep understanding of the legal, technical, and operational aspects of the tokenization process.",
  },
];

const WhyWithUs = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-5 md:py-7 lg:py-10">
      <p className="w-full text-center text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl mb-5 font-black leading-[160%] tracking-tight">
        Why tokenize with <span className="text-[#7A35C1]">Maxtron?</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative p-4 md:p-5 lg:p-6 self-stretch bg-[#F7F7F7] rounded-3xl flex flex-col gap-4 lg:gap-5"
          >
            <h1 className="text-[#2A2A2A] font-[Switzer] text-lg lg:text-2xl font-semibold leading-4 lg:leading-[30px] tracking-[-0.48px]">
              {item.title}
            </h1>
            <p className="text-[#2A2A2A] font-openSansHebrew text-base font-normal leading-5 lg:leading-6 tracking-[-0.16px]">
              {item.desc}
            </p>
            <img
              src={item.image}
              alt="image"
              className="w-full object-contain h-36 md:h-44 lg:h-64"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWithUs;
