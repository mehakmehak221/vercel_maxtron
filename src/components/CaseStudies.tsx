import { useState, useEffect } from "react";
import {
  caseStudiesData,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "./caseStudyData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | null
  >(null);

  const currentStudy = caseStudiesData[currentIndex];
  const totalStudies = caseStudiesData.length;

  const isPrevDisabled = currentIndex === 0 || totalStudies <= 1;
  const isNextDisabled = currentIndex === totalStudies - 1 || totalStudies <= 1;

  const handleNext = () => {
    if (!isNextDisabled) {
      setAnimationDirection("right");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isPrevDisabled) {
      setAnimationDirection("left");
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (animationDirection) {
      const timer = setTimeout(() => setAnimationDirection(null), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, animationDirection]);

  const contentAnimationClass = animationDirection
    ? animationDirection === "left"
      ? "animate-slide-in-left-content"
      : "animate-slide-in-right-content"
    : "animate-fade-in";
  const imageAnimationClass = animationDirection
    ? animationDirection === "left"
      ? "animate-slide-in-left"
      : "animate-slide-in-right"
    : "animate-fade-in";

  return (
    <section
      id="case-studies"
      className="relative py-5 md:py-24 bg-brand-bg-dark text-brand-text-light overflow-hidden "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold mb-4 sm:mb-0 text-left text-brand-text-light">
            Case Studies
          </h2>
          <a
            href="/case-studies"
            className="px-5 py-2.5 text-white bg-[#7A35C1] text-sm font-medium rounded-md transition-colors duration-200 shadow-lg hover:bg-[#F3EBFC] hover:text-[#7A35C1]"
          >
            View All Cases
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-2 md:gap-12 lg:gap-16 items-center ">
          <div className="relative w-full aspect-[4/3]  rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <img
              key={`case-study-image-${currentStudy.id}`}
              src={currentStudy.image}
              alt={currentStudy.title}
              className={`absolute inset-0 w-full h-full object-cover duration-500 ${imageAnimationClass}`}
            />
          </div>

          <div className="flex flex-row md:flex-col items-center text-center relative  md:min-h-[400px] justify-between py-6 md:py-0 w-full ">
            <button
              onClick={handlePrev}
              aria-label={`Previous case study: ${
                caseStudiesData[
                  (currentIndex - 1 + totalStudies) % totalStudies
                ].title
              }`}
              disabled={isPrevDisabled}
              className={`p-3 transition-colors duration-200 z-10
                          ${
                            isPrevDisabled
                              ? "text-[#79748A] opacity-50 cursor-not-allowed"
                              : "text-[#5E28A0] hover:text-[#5E28A0]"
                          }`}
            >
              <ArrowUpIcon className={`hidden md:block `} />
              <FaArrowLeftLong className={`md:hidden w-6 h-6`} />
            </button>

            <div className="flex flex-col justify-center items-center flex-grow px-2 md:px-0">
              <div
                key={`case-study-content-${currentStudy.id}`}
                className={`w-full max-w-md px-2 md:px-4 ${contentAnimationClass} duration-300`}
              >
                <h3 className="sm:text-3xl  md:text-4xl lg:text-[32px] font-bold text-[#2A2A2A] mb-3">
                  {currentStudy.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 mb-4">
                  {currentStudy.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[14px] sm:text-[14px] font-semibold text-[#7A35C1] font-[switzer] tracking-wider"
                    >
                      {tag}
                      {index < currentStudy.tags.length - 1 && (
                        <span className="text-brand-text-medium mx-0.5">|</span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-brand-text-medium text-xs sm:text-sm lg:text-base leading-relaxed mb-6 text-[#79748A] line-clamp-2 ">
                  {currentStudy.description}
                </p>
              </div>
              <a
                href={currentStudy.learnMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit flex gap-1 items-center px-4 py-2.5 sm:px-7 sm:py-3 md:py-3 border border-[#7A35C1] text-[#7A35C1] font-semibold rounded-xl hover:bg-[#7A35C1] hover:text-white transition-all duration-300 group text-sm sm:text-base md:text-lg shadow-md text-center"
              >
                Learn More
                <ArrowRightIcon className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" />{" "}
              </a>
            </div>

            <button
              onClick={handleNext}
              aria-label={`Next case study: ${
                caseStudiesData[(currentIndex + 1) % totalStudies].title
              }`}
              disabled={isNextDisabled}
              className={`p-3 transition-colors duration-200 z-10
                          ${
                            isNextDisabled
                              ? "text-[#79748A] opacity-50 cursor-not-allowed"
                              : "text-[#5E28A0] hover:text-[#5E28A0]"
                          }`}
            >
              <ArrowDownIcon className={`hidden md:block `} />
              <FaArrowRightLong className={`md:hidden w-6 h-6`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
