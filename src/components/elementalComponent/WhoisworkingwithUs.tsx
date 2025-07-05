const categories = [
  {
    title: "Asset managers",
    items: [
      "Funds",
      "Private equity & VC",
      "Investment banking",
      "Real estate",
      "Art & collectibles",
    ],
  },
  {
    title: "Issuers",
    items: ["Start-up founders", "Non-profits", "Enterprise", "Corporations"],
  },
  {
    title: "Industry",
    items: ["Music", "Film", "Tech", "Finance", "Gaming"],
  },
  {
    title: "Crypto",
    items: [
      "Blockchains",
      "Decentralized Finance",
      "Infrastructure",
      "Decentralized Apps",
      "NFTs",
    ],
  },
];

const WhoisworkingwithUs = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-6 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-8 md:py-12 lg:py-16">
      <h2 className="text-center text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight">
        Who we’re working with
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="shrink-0 self-stretch text-[#2A2A2A] font-[Switzer] text-lg lg:text-2xl font-semibold leading-[30px] tracking-[-0.48px] mb-4">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {category.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-[#F3EBFC] text-sm lg:text-base font-openSansHebrew text-[#2A2A2A] rounded-lg px-2 lg:px-3 py-1.5 font-medium w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoisworkingwithUs;
