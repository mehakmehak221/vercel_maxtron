import {
  whylogo1,
  whylogo2,
  whylogo3,
  whylogo4,
  whylogo5,
  whylogo6,
} from "../VectorImage";

const items = [
  {
    icon: whylogo1,
    title: "Programable terms",
    desc: "Program the transfer-restrictions and investment terms that are required between different asset and investor (KYC) classifications.",
  },
  {
    icon: whylogo2,
    title: "Increased accessibility",
    desc: "Tokenization broadens investment opportunities, including retail investors previously excluded from traditional investment structures.",
  },
  {
    icon: whylogo3,
    title: "Global reach",
    desc: "Tokenization enables investors from around the world to invest in the fund, providing greater access to international capital.",
  },
  {
    icon: whylogo4,
    title: "Lower costs",
    desc: "Tokenization reduces costs such as custody, transfer, and administration, resulting in lower fees for investors and increased returns for fund managers.",
  },
  {
    icon: whylogo5,
    title: "Faster settlement times",
    desc: "Tokenization speeds up trade settlements, enabling investors to receive their funds faster after selling their shares in the fund.",
  },
  {
    icon: whylogo6,
    title: "Greater transparency",
    desc: "Investors can track their token ownership and access real-time information on fund performance and holdings.",
  },
];

const WhyTokenize = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-5 md:py-7 lg:py-10">
      <p className="w-full text-center text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl mb-5 font-black leading-[160%] tracking-tight">
        Why tokenize?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-2 md:gap-3 lg:gap-4"
          >
            {item.icon()}
            <h3 className="self-stretch text-[#2A2A2A] font-[Switzer] text-xl lg:text-2xl font-semibold leading-[160%] tracking-[-0.48px]">
              {item.title}
            </h3>
            <p className="self-stretch text-[#2A2A2A] font-openSansHebrew text-sm lg:text-base font-normal leading-6 tracking-[-0.16px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTokenize;
