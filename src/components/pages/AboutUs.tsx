// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstImg from "../../assets/about/first.webp";
// import img1 from '../../assets/about/about1.png'
// import img2 from '../../assets/about/about2.png'
// import img3 from '../../assets/about/about3.png'
// import img4 from '../../assets/about/about4.png'
import { good } from "../../components/VectorImage";
import { cup } from "../../components/VectorImage";
import { handshake } from "../../components/VectorImage";
import { person } from "../../components/VectorImage";
import ContactForm from "../ContactForm";

const AboutUs = () => {
  // const cardData = [

  //   {
  //     image: img1,
  //     name: "Won Cee",

  //   },
  //   {
  //     image: img2,
  //     name: "Jenny Wilson",

  //   },
  //   {
  //     image: img3,
  //     name: "Eleanor Pena",

  //   },
  //   {
  //     image: img4,
  //     name: "Robert Fox",

  //   },
  // ];

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   speed: 100,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //         autoplay: true,
  //         autoplaySpeed: 3000,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoplay: true,
  //         autoplaySpeed: 3000,
  //       },
  //     },
  //   ],
  // };

  return (
    <div>
      <div className="relative z-10 text-center mb-8 about_hero_img px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hello, We're Maxtron
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Our team is an extension of yours. Bringing experience, expertise,
          rigor, problem-solving skills, innovation and user-focused approach
        </p>
      </div>

      <div className="relative container mx-auto p-0 md:p-8">
        <div className="absolute inset-0 opacity-10 z-0"></div>

        <div
          className={`relative z-10 flex flex-col md:flex-row items-center mb-8 rounded-lg `}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={firstImg}
              alt={"firstImg"}
              className="rounded-lg w-full"
            />
          </div>

          <div className={`w-full md:w-1/2 p-4 `}>
            <h2 className="text-2xl font-bold mb-2">
              An Ideal Fusion Of Technical, Marketing And Creative Expertise
            </h2>
            <p className="bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans">
              Our team blends ex-successful startup founders with top talent
              from Blockchain, AI, Product, UX/UI, Software Development, Data
              Analytics & Marketing. We're driven by one goal: to redefine
              product innovation with a deep understanding of your business and
              tech needs. Before we build, we dig in to ensure our solutions are
              perfectly aligned with your goals. Let's turn your vision into
              reality with expertise and a user-first approach. Ready to elevate
              your business? Let's make it happen!
            </p>
          </div>
        </div>
      </div>

      {/* <h3 className="text-2xl font-extrabold text-center">Meet our Team</h3> */}

      {/* <div className="container m-auto py-12 px-8">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="p-4">
              <div className="text-center">
                <img src={card.image} alt={card.name} className="w-full h-auto mb-4 rounded-lg max-h-[425px]" />
                <h3 className="text-2xl font-bold">{card.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}

      <div className="bg-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 p-8 mt-8 py-14">
        <div className=" rounded-sm p-4  m-4 md:m-0 text-center border-2 border-black">
          <div className="mx-auto my-4 w-auto h-20 flex justify-center items-center">
            {good()}
          </div>
          <h3 className="text-xl font-bold mb-2">PROVEN TRACK RECORD</h3>
          <p className="bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans">
            Our deep-tech, product, software development, marketing teams have
            successfully brought 3000+ projects to life.
          </p>
        </div>
        <div className=" rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black">
          <div className="mx-auto my-4 w-auto h-20 flex justify-center items-center">
            {handshake()}
          </div>
          <h3 className="text-xl font-bold mb-2">BUSINESS MINDSET</h3>
          <p className="bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans">
            As ex-startup founders with a corporate background, we have
            experienced many of the struggles on both sides. We know there is
            more to a successful product than technology, so we will always look
            at your product from a business standpoint.
          </p>
        </div>
        <div className=" rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black">
          <div className="mx-auto my-4 w-auto h-20 flex justify-center items-center">
            {cup()}
          </div>
          <h3 className="text-xl font-bold mb-2">TOP TALENT</h3>
          <p className="bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans">
            We work with the best and brightest in tech talent to ensure you get
            high-quality tech architecture.
          </p>
        </div>
        <div className=" rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black">
          <div className="mx-auto my-4 w-auto h-20 flex justify-center items-center">
            {person()}
          </div>
          <h3 className="text-xl font-bold mb-2">USER-CENTRIC APPROACH</h3>
          <p className="bg-[#F7F4F480] my-4 p-2 flex text-left justify-stretch font-normal text-sm rounded-lg font-OpenSans">
            We value our end-user above specifications. We take the time to
            understand our client's needs and desires. The result is a product
            they will actually use.
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default AboutUs;
