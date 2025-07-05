export const CIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 text-white"
  >
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,1,1,20,12,8,8,0,0,1,12,20ZM12,6A6,6,0,0,0,6,12H8A4,4,0,0,1,12,8Z" />
  </svg>
);

export const DoubleArrowIcon = ({ colorClass = "text-black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClass}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const partnerItems = [
  {
    id: 1,
    tabLabel: "Digital Agencies",
    description: "Digital Agencies looking to expand without hiring",
    bgColor: "bg-[#F5F5F5]",
    textColor: "text-black",
    arrowColor: "text-neutral-800",
  },
  {
    id: 2,
    tabLabel: "Product Teams",
    description: "Product Teams needing to ramp up dev velocity",
    bgColor: "bg-[#E0E0E0]",
    textColor: "text-black",
    arrowColor: "text-neutral-800",
  },
  {
    id: 3,
    tabLabel: "CTOs",
    description: "CTOs backfilling talent gaps post resignations",
    bgColor: "bg-[#CCCCCC]",
    textColor: "text-black",
    arrowColor: "text-neutral-800",
  },
  {
    id: 4,
    tabLabel: "System Integrators",
    description: "System Integrators seeking vetted offshore delivery",
    bgColor: "bg-[#B8B8B8]",
    textColor: "text-black",
    arrowColor: "text-neutral-800",
  },
  {
    id: 5,
    tabLabel: "Startup MVPs",
    description: "Startups building MVPs with lean budgets",
    bgColor: "bg-[#A3A3A3]",
    textColor: "text-black",
    arrowColor: "text-neutral-800",
  },
];
