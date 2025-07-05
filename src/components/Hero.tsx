import React from "react";
// import video from "../assets/hero.mp4";
import hdnewvideo from "../assets/hero_video.mp4";
// import newherovideo from "../assets/newherovideo.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative top-0">
      {/* <Link
  to="https://experiences.maxtron.ai/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-700 absolute  -top-[100px] md:-top-[114px] xl:-top-[120px] left-8 md:left-[14%] xl:left-[18%]"
>
  <span className="underline">our experiences website</span>{' '}
  <span className="no-underline">&#x2192;</span>
</Link> */}
      <div className="mx-4 mt-4 sm:mx-6 lg:mx-8 ">
        {" "}
        <div className="relative h-screen w-full overflow-hidden rounded-3xl">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={hdnewvideo} type="video/mp4" />
            {/* <source src={video} type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-purple-900 bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center sm:items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl hidden sm:block sm:text-xl md:text-6xl font-bold text-center mb-4">
              Creating Winning Products, Ensuring Their Success
            </h1>
            <h1 className=" sm:hidden text-3xl md:text-6xl font-bold text-center mb-3">
              Creating Winning Products, Ensuring Their Success
            </h1>

            <p className="text-xl  sm:text-2xl md:text-3xl text-center mb-3">
              Transform Your Business and Growth with 360° Cutting-Edge Tech
              Solutions
            </p>

            <div className=" flex flex-row sm:flex-row justify-center items-center space-x-4">
              <Link to="/services">
                <button
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold md:py-3 md:px-6 rounded-full transition duration-300 w-full sm:w-auto py-2 px-3"
                  aria-label="Learn more about our services"
                >
                  Learn More
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="bg-white hover:bg-gray-100 text-purple-700 font-bold md:py-3 md:px-6 rounded-full transition duration-300 w-full sm:w-auto py-2 px-3"
                  aria-label="Contact us to get in touch"
                >
                  Get In Touch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
