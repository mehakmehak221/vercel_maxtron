import study1 from "../assets/study/study1.webp";
import study2 from "../assets/study/study2.webp";
import study3 from "../assets/study/study3.webp";
import study4 from "../assets/study/study4.webp";

export const ArrowUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="23"
    height="52"
    viewBox="0 0 23 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.3105 49.5961C13.3126 50.4245 12.6427 51.0978 11.8143 51.0998C10.9859 51.1019 10.3126 50.4321 10.3106 49.6036L13.3105 49.5961ZM10.6264 0.542016C11.2107 -0.0452409 12.1605 -0.0476309 12.7477 0.536678L22.3177 10.0586C22.9049 10.6429 22.9073 11.5926 22.323 12.1799C21.7387 12.7671 20.789 12.7695 20.2017 12.1852L11.6951 3.72132L3.23119 12.2279C2.64688 12.8152 1.69714 12.8176 1.10988 12.2333C0.522622 11.649 0.520232 10.6992 1.10454 10.112L10.6264 0.542016ZM11.8105 49.5999L10.3106 49.6036L10.1898 1.60378L11.6898 1.60001L13.1898 1.59623L13.3105 49.5961L11.8105 49.5999Z"
      fill="#5E28A0"
    />
  </svg>
);

export const ArrowDownIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="23"
    height="52"
    viewBox="0 0 23 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      id="Arrow 1"
      d="M13.3105 1.60363C13.3126 0.775204 12.6427 0.101943 11.8143 0.0998583C10.9859 0.0977736 10.3126 0.767654 10.3106 1.59608L13.3105 1.60363ZM10.6264 50.6577C11.2107 51.2449 12.1605 51.2473 12.7477 50.663L22.3177 41.1411C22.9049 40.5568 22.9073 39.6071 22.323 39.0198C21.7387 38.4326 20.789 38.4302 20.2017 39.0145L11.6951 47.4784L3.23119 38.9718C2.64688 38.3845 1.69714 38.3821 1.10988 38.9664C0.522622 39.5508 0.520232 40.5005 1.10454 41.0878L10.6264 50.6577ZM11.8105 1.59985L10.3106 1.59608L10.1898 49.5959L11.6898 49.5997L13.1898 49.6035L13.3105 1.60363L11.8105 1.59985Z"
      fill="#7A35C1"
    />
  </svg>
);

export const ArrowRightIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

interface CaseStudyItem {
  id: string;
  image: string;
  title: string;
  tags: string[];
  description: string;
  learnMoreLink: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "ai-calling",
    image: study1,
    title: "Ai - Calling",
    tags: ["WEB DEVELOPMENT", "UX/UI", "CHAT BOT"],
    description:
      "A NextGen AI-phone calling tool that has been designed to communicate on calls just like humans do.",
    learnMoreLink: "/Maxtron.ai/case-study/AI-Calling-Tool",
  },
  {
    id: "Token Launch",
    image: study2,
    title: "Token Launch",
    tags: ["Web APPLICATION", "UX/UI ", " MARKETING", "GRAPHIC DESIGN"],
    description:
      "Maxtron successfully helped a blockchain client launch a new cryptocurrency token - covering every aspect of the process: smart contract creation, liquidity deployment, influencer marketing, market making, and web design. The result was a well-orchestrated launch that stood out in a saturated Web3 landscape and gained immediate traction across crypto platforms.",
    learnMoreLink: "/Maxtron.ai/case-study/Token-Launch",
  },
  {
    id: "Tawuniya",
    image: study3,
    title: "Tawuniya",
    tags: ["EVENT", "MANAGEMENT"],
    description:
      "Our recent digital activation project done for Tawuniya, an official sponsor of نادي الهلال السعودي - Al-Hilal Saudi Club during the Al-Hilal vs Al-Nassr match in the #Saudi Pro League on 4th April in Riyadh.",
    learnMoreLink: "/Maxtron.ai/case-study/Tawuniya",
  },
  {
    id: "ICCA",
    image: study4,
    title: "ICCA",
    tags: ["UX/UI", "CHAT BOT"],
    description:
      "A world-class culinary school shaping the future of hospitality through award-winning training. Based in the heart of Dubai, ICCA empowers aspiring chefs and industry professionals with globally recognized programs, state-of-the-art facilities",
    learnMoreLink: "/Maxtron.ai/case-study/ICCA",
  },
];
