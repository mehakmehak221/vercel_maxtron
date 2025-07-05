import { CaseStudy } from "../elementalComponent/types";
import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../ContactForm";
import Problem from "../elementalComponent/Problem";
import ImageSection from "../elementalComponent/ImageSection";
import Solution from "../elementalComponent/Solution";
import BusinessResult from "../elementalComponent/BusinessResult";
import Technology from "../elementalComponent/Technology";
import Process from "../elementalComponent/Process";
import KeyFeature from "../elementalComponent/KeyFeature";

interface InternalPageProps {
  caseStudies: CaseStudy[];
}

const InternalPageDetails: React.FC<InternalPageProps> = ({ caseStudies }) => {
  const { casestudyName } = useParams<{ casestudyName: string }>();
  const caseStudyName = casestudyName?.replace(/-/g, " ");
  const caseStudy = caseStudies.find((study) => study.name === caseStudyName);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-8">Case study not found</div>
    );
  }
  const {
    title,
    subtitle,
    heroImage,
    type,
    industryInfo,
    bussinessNeeds,
    results,
    projectDuration,
    clientSatisfaction,
    problemSolutionResult,
    techs,
    afterHeroSection,
    keyFeatures,
    description,
    keyFeaturesImage,
    bgImage,
  } = caseStudy;
  console.log("image internal ", bgImage);
  return (
    <div className="w-full flex flex-col gap-3 md:gap-5 lg:gap-6 xl:gap-7 mt-2 mb-4 relative">
      <div
        className="w-full flex flex-col lg:flex-row max-w-[130rem] mx-auto justify-between items-center p-4 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-10 "
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,0.80), rgba(0,0,0,0.80)), url(${bgImage}) center/cover no-repeat`,
        }}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 max-w-[88rem] px-4 sm:px-6 md:px-8 py-4 flex flex-col gap-2 md:gap-4">
          <div className="flex flex-wrap gap-2">
            {type.map((tag, index) => (
              <div
                key={index}
                className="px-4 py-2 border border-transparent rounded-3xl bg-white/20 flex items-center"
              >
                <p className="text-white text-xs md:text-sm font-bold font-openSansHebrew leading-none">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          {/* Main heading (h1) */}
          <h1 className="text-white font-['Switzer'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug">
            {title}
          </h1>
          <p className="text-white font-openSansHebrew text-base sm:text-lg md:text-xl font-normal">
            {subtitle}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 max-w-[88rem] flex justify-center items-center mt-6 md:mt-0">
          <img
            src={heroImage}
            alt="Case Study"
            className="w-full h-auto max-h-[500px] object-contain rounded-xl"
          />
        </div>
      </div>
      {description && (
        <div className="flex flex-col md:flex-row w-full mx-auto max-w-[88rem] items-center gap-20 md:gap-24 lg:gap-32 px-[20px] md:px-[30px] lg:px-[50px] py-7 md:py-10 lg:py-12">
          <div className="w-48 md:w-[14%]">
            <img src={afterHeroSection} alt="Hero section" />
          </div>
          <div className="flex-1 ">
            {/* Subheadings should be h2 */}
            <h2 className="text-black font-openSansHebrew text-lg md:text-2xl font-normal leading-[160%]">
              {description}
            </h2>
          </div>
        </div>
      )}
      <Problem
        heading={problemSolutionResult[0].heading}
        subheading={problemSolutionResult[0].subheading}
        points={problemSolutionResult[0].points}
      />
      <ImageSection keyFeaturesImage={keyFeaturesImage} />
      <Solution
        heading={problemSolutionResult[1].heading}
        subheading={problemSolutionResult[1].subheading}
        points={problemSolutionResult[1].points}
      />
      <BusinessResult
        points={problemSolutionResult[0].points}
        results={problemSolutionResult[1].points}
        industryInfo={industryInfo}
        projectDuration={projectDuration}
        clientSatisfaction={clientSatisfaction}
        afterHeroSection={afterHeroSection}
        bussinessNeeds={bussinessNeeds}
        resultsData={results}
      />
      {techs.length > 0 && <Technology techs={techs} />}
      <Process processSteps={caseStudy.processSteps} />
      <KeyFeature keyFeatures={keyFeatures} />
      <ContactForm />
      {/* <ContactAndSubscribe /> */}
    </div>
  );
};

export default InternalPageDetails;
