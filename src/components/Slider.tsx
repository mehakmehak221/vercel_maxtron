import Slider from "react-slick";
import SliderCard from "./elementalComponent/SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Antony from "../../public/customer/anthony-perkins.svg";
import Grant from "../../public/customer/grant.svg";
import Joyce from "../../public/customer/joice.svg";
import Michel from "../../public/customer/michel.svg";
import Sambhav from "../../public/customer/sambhavJain.svg";
import Lalit from "../../public/customer/lalit.svg";
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";

const cardData = [
  {
    image: Antony,
    name: "Anthony Perkins",
    title: "Founder and Editor - Cryptonite",
    description:
      "The founders and the core team at Maxtron were exceptionally helpful throughout our collaboration. Their support and expertise enabled us to navigate multiple hurdles seamlessly.",
    category: "Media Publication",
  },
  {
    image: Joyce,
    name: "Joyce Chow",
    title: "Producer | Actress | Writer - Hollywood",
    description:
      "Maxtron's capacity to interplay with design, content and technology and cater the user in a unique way is all what you need.",
    category: "Movies & Film",
  },
  {
    image: Michel,
    name: "Michael Terpin",
    title: '"Godfather of Crypto" by CNBC',
    description:
      "The Maxtron team is exceptionally skilled in dealing with advanced technology. They have delivered high-quality solutions and are completely equipped to tackle complex problems.",
    category: "Technology",
  },
  {
    image: Lalit,
    name: "Lalit Mangal",
    title: "Co-founder - Airmeet",
    description:
      "I commend Maxtron for their exceptional services. Their expertise enhances experiences, aligning perfectly with our mission of fostering genuine connections in the digital space.",
    category: "Events SaaS Tech",
  },
  {
    image: Sambhav,
    name: "Sambhav Jain",
    title: "Co-founder - FamPay (YC-backed)",
    description:
      "Maxtron has been instrumental from our early stage period. It’s rare to find a team with such a passion in tech & marketing",
    category: "Fintech",
  },
  {
    image: Grant,
    name: "Grant Gunderson",
    title: "Founder & CEO - Quantum Agency X",
    description:
      "Maxtron has an outstanding work culture and process-based engagement model that helped us evolve from idea to execution. Their expertise is truly commendable.",
    category: "Private Equity & Venture Capital",
  },
];

const CardSlider = () => {
  AOS.init();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="mx-auto py-20 p-4 text-center capitalize">
      <div className="container px-4 space-y-4 md:px-8 mx-auto">
        <h2 className="text-4xl font-bold text-black mb-16 ">
          What our Customers Say
        </h2>
        <div className="container">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="p-4">
                <SliderCard
                  image={card.image}
                  name={card.name}
                  title={card.title}
                  category={card.category}
                  description={card.description}
                  subtitle={""}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardSlider);
