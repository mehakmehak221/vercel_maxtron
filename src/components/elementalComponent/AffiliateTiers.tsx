const tiers = [
  {
    name: "Starter",
    bg: "#A16EDA",
    commission: "Up to 20% per deal",
    referrals: "1–4",
    perks: ["Access to affiliate toolkit"],
  },
  {
    name: "Pro",
    bg: "#8E52CA",
    commission: "Up to 25% per deal",
    referrals: "5–9",
    perks: ["Co-branded content", "Optimization tips"],
  },
  {
    name: "Elite",
    bg: "#7A35C1",
    commission: "Up to 30% per deal",
    referrals: "10+",
    perks: [
      "Dedicated manager",
      "Exclusive bonuses",
      "Early access to new products",
    ],
  },
];
const firstrow = [
  { title: "empty", bg: "#fffff" },
  { title: "Starter", bg: "#A16EDA" },
  { title: "Pro", bg: "#8E52CA" },
  { title: "Elite", bg: "#7A35C1" },
];
const secondrow = [
  "Commission Rate",
  "Upto 20% per deal",
  "Upto 25% per deal",
  "Upto 30% per deal",
];
const thirdrow = ["Monthly Referrals", "1–4", "5–9", "10+"];
const fourthrow = [
  { points: ["Bonus Perks"] },
  { points: ["Access to affiliate toolkit"] },
  { points: ["Co-branded content", "Optimization tips"] },
  {
    points: [
      "Dedicated manager",
      "Exclusive bonuses",
      "Early access to new products",
    ],
  },
];

const AffiliateTiers = () => {
  return (
    <section className="w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8">
      <div className="w-full text-center">
        <h2 className="text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] mb-2 mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          Affiliate Tiers
        </h2>
        <p className="text-[#2A2A2A] font-openSansHebrew text-lg lg:text-xl font-normal leading-8">
          We believe you should always have room to grow.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12 lg:hidden">
        {tiers.map((tier, idx) => (
          <article
            key={idx}
            className="flex flex-col gap-6 rounded-2xl shadow-md border border-[#DFDEE7]  bg-white overflow-hidden"
            aria-label={`Affiliate tier: ${tier.name}`}
          >
            <header
              className="flex justify-center items-center p-4 rounded-t-2xl"
              style={{ background: tier.bg }}
            >
              <h3 className="text-white text-center font-[Switzer] text-2xl font-semibold leading-[140%]">
                {tier.name}
              </h3>
            </header>
            <div className="flex flex-row gap-4 justify-start px-4">
              <span className="flex-1 font-semibold text-[#2A2A2A] font-[Switzer]">
                Commission Rate
              </span>
              <span className="flex-1 text-right font-[Switzer]">
                {tier.commission}
              </span>
            </div>
            <div className="flex flex-row gap-4 justify-start px-4">
              <span className="flex-1 font-semibold text-[#2A2A2A]  font-[Switzer]">
                Monthly Referrals
              </span>
              <span className="flex-1 text-right font-[Switzer]">
                {tier.referrals}
              </span>
            </div>
            <div className="flex flex-row gap-4 justify-start px-4 pb-4">
              <span className="flex-1 font-semibold text-[#2A2A2A]  font-[Switzer]">
                Bonus Perks
              </span>
              <ul className="list-disc list-inside space-y-1">
                {tier.perks.map((perk, i) => (
                  <li
                    key={i}
                    className="text-[#2A2A2A] text-base font-normal leading-[140%] font-[Switzer]"
                  >
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="flex flex-col gap-2 px-4 pb-4">
              <span className="font-semibold text-[#2A2A2A]  font-[Switzer]">Bonus Perks</span>
              <ul className="list-disc list-inside space-y-1">
                {tier.perks.map((perk, i) => (
                  <li key={i} className="text-[#2A2A2A] text-base font-normal leading-[140%] font-[Switzer]">
                    {perk}
                  </li>
                ))}
              </ul>
            </div> */}
          </article>
        ))}
      </div>

      {/* First Row */}
      <div className="hidden lg:flex flex-row gap-5 mt-16">
        {firstrow.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${
              index === 0 ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: item.bg }}
          >
            <p className="text-white text-center font-[Switzer] text-2xl font-semibold leading-[140%]">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="hidden lg:flex flex-row gap-5 mt-7">
        {secondrow.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${
              index === 0
                ? "bg-[rgba(223,222,231,0.40)]"
                : "border border-solid border-[#DFDEE7]"
            }`}
          >
            <p
              className={`text-[#2A2A2A] text-center font-[Switzer] text-2xl ${
                index === 0 ? "font-semibold" : "font-normal"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Third Row */}
      <div className="hidden lg:flex flex-row gap-5 mt-7">
        {thirdrow.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${
              index === 0
                ? "bg-[rgba(223,222,231,0.40)]"
                : "border border-solid border-[#DFDEE7]"
            }`}
          >
            <p
              className={`text-[#2A2A2A] text-center font-[Switzer] text-2xl ${
                index === 0 ? "font-semibold" : "font-normal"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex flex-row gap-5 mt-7">
        {fourthrow.map((item, index) => (
          <div
            key={index}
            className={`flex items-start justify-center gap-2.5 flex-[1_0_0] p-4 rounded-xl ${
              index === 0
                ? "bg-[rgba(223,222,231,0.40)]"
                : "border border-solid border-[#DFDEE7]"
            }`}
          >
            {index === 0 ? (
              <p className="text-[#2A2A2A] text-center font-[Switzer] text-2xl font-semibold">
                {item.points[0]}
              </p>
            ) : (
              <ul className="list-disc pl-5 text-left space-y-1">
                {item.points.map((perk, i) => (
                  <li
                    key={i}
                    className="text-[#2A2A2A] font-[Switzer] text-2xl font-normal leading-snug break-words"
                  >
                    {perk}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AffiliateTiers;
