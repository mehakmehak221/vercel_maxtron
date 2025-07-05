import Antony from "../../public/customer/anthony-perkins.svg";
import Grant from "../../public/customer/grant.svg";
import Joyce from "../../public/customer/joice.svg";
import Michel from "../../public/customer/michel.svg";
import Sambhav from "../../public/customer/sambhavJain.svg";
import Lalit from "../../public/customer/lalit.svg";

export interface Testimonial {
  id: string;
  image: string;
  name: string;
  title: string;
  tag: string;
  tagColor?: string;
  testimonial: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "Antony",
    image: Antony,
    name: "Anthony Perkins",
    title: "Founder and Editor - Cryptonite",
    testimonial:
      "The founders and the core team at Maxtron were exceptionally helpful throughout our collaboration. Their support and expertise enabled us to navigate multiple hurdles seamlessly.",
    tag: "Media Publication",
  },
  {
    id: "Joyce Chow",
    image: Joyce,
    name: "Joyce Chow",
    title: "Producer | Actress | Writer - Hollywood",
    testimonial:
      "Maxtron's capacity to interplay with design, content and technology and cater the user in a unique way is all what you need.",
    tag: "Movies & Film",
  },
  {
    id: "Michael Terpin",
    image: Michel,
    name: "Michael Terpin",
    title: '"Godfather of Crypto" by CNBC',
    testimonial:
      "The Maxtron team is exceptionally skilled in dealing with advanced technology. They have delivered high-quality solutions and are completely equipped to tackle complex problems.",
    tag: "Technology",
  },
  {
    id: "Lalit Mangal",
    image: Lalit,
    name: "Lalit Mangal",
    title: "Co-founder - Airmeet",
    testimonial:
      "I commend Maxtron for their exceptional services. Their expertise enhances experiences, aligning perfectly with our mission of fostering genuine connections in the digital space.",
    tag: "Events SaaS Tech",
  },
  {
    id: "Sambhav Jain",
    image: Sambhav,
    name: "Sambhav Jain",
    title: "Co-founder - FamPay (YC-backed)",
    testimonial:
      "Maxtron has been instrumental from our early stage period. It's rare to find a team with such a passion in tech & marketing",
    tag: "Fintech",
  },
  {
    id: "Grant Gunderson",
    image: Grant,
    name: "Grant Gunderson",
    title: "Founder & CEO - Quantum Agency X",
    testimonial:
      "Maxtron has an outstanding work culture and process-based engagement model that helped us evolve from idea to execution. Their expertise is truly commendable.",
    tag: "Private Equity & Venture Capital",
  },
];
