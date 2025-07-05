import img1 from "../../assets/industry/industry1.webp";
import img2 from "../../assets/industry/industry2.webp";
import img3 from "../../assets/industry/industry3.webp";
import img4 from "../../assets/industry/industry4.webp";
import img5 from "../../assets/industry/industry5.webp";
import img6 from "../../assets/industry/industry6.webp";
import img7 from "../../assets/industry/industry7.webp";
import img8 from "../../assets/industry/industry8.webp";

const industryData = [
  {
    img: img1,
    heading: "Gaming & iGaming",
    points: [
      "Mobile Game Development",
      "PC Game Development",
      "HTML5 Game Development",
      "NFT Game Development",
      "Unity Game Development",
      "Crypto Game Development",
      "AR/VR/MR Game Development",
      "Game Marketing",
    ],
  },
  {
    img: img2,
    heading: "Banking, Financial Services & Insurance",
    points: [
      "Fintech Software Development",
      "E-Wallet Development",
      "P2P Payment App Development",
      "Crypto Coin/Token Development",
      "Decentralised Finance (DeFi) Development",
      "Digital & Web3 Wallets",
      "Business Enhancement",
    ],
  },
  {
    img: img3,
    heading: "Food & Beverages",
    points: [
      "IT Consulting",
      "Enterprise Resource Planning (ERP) Software",
      "Supply Chain Management Tool",
      "Customer Relationship Management (CRM) Platform",
      "Custom Product Development & Software Solutions (AI, Blockchain)",
      "AI-Based Analytics",
      "Business Enhancement",
    ],
  },
  {
    img: img5,
    heading: "Retail & E-Commerce",
    points: [
      "Strategy, Marketing, Branding, Advertising, & Communications",
      "Customer Experience Solutions",
      "UI & UX Design Services",
      "Custom Product Development",
      "Application Managed Services",
      "Applied AI Products & Services",
      "Metaverse Development",
      "Business Enhancement",
    ],
  },
  {
    img: img6,
    heading: "Supply Chain & Logistics",
    points: [
      "Technology Consulting Solutions",
      "Fleet Management Systems",
      "Warehouse Management Solutions",
      "Custom App Development",
      "Applied AI Products & Services",
    ],
  },
  {
    img: img7,
    heading: "Sustainable Industry",
    points: [
      "Advanced Data Analytics in Climate Tech",
      "AI-driven Energy Management",
      "Real-time Carbon Footprints Monitoring",
      "Sustainable Digital Transformation",
      "Product Engineering",
      "Business Enhancement",
    ],
  },
  {
    img: img4,
    heading: "Construction",
    points: [
      "Digital Transformation",
      "Modern Platform Building",
      "Managed IT Services",
      "Cloud Services",
      "Experiential Tech Development",
    ],
  },
  {
    img: img8,
    heading: "Healthcare & Pharmaceuticals",
    points: [
      "Healthcare Software Solutions",
      "Telemedicine App Development",
      "Healthcare Analytics",
      "Blockchain in Healthcare",
      "AI-powered Diagnostics",
      "Healthcare Information Systems",
    ],
  },
];

const IndustryList = () => {
  return (
    <div className="p-0 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        {industryData.map((industry, index) => (
          <div key={index} className="flex flex-col p-4">
            <img
              src={industry.img}
              alt={industry.heading}
              style={{ width: "480px", height: "300px" }}
              className="object-cover mb-4"
            />
            <h2 className="md:text-2xl font-bold mb-2">{industry.heading}</h2>
            <ul className="list-disc list-inside text-left text-sm">
              {industry.points.map((point, idx) => (
                <li key={idx} className="text-gray-700 mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Industries = () => {
  return (
    <div>
      <div className="relative z-10  mb-8 text-center industry_hero_img px-4 sm:px-6 lg:px-8 h-[90vh]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Industry Focus
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Stay ahead of disruption and drive growth by partnering with a
          technology expert who understands your industry and speaks your
          business's language. We deliver tailored technology solutions, help
          you avoid costly errors, save you time, and provide a competitive edge
          to position your company for success.
        </p>
      </div>

      <div className="relative container mx-auto ">
        <div className="absolute inset-0 opacity-10 z-0"></div>

        <IndustryList />
      </div>
    </div>
  );
};

export default Industries;
