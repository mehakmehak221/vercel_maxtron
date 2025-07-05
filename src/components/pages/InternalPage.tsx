import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../ContactForm";
import { CaseStudy } from "../elementalComponent/types";
import create4 from "../../assets/internal/create4.svg";

interface InternalPageProps {
  caseStudies: CaseStudy[];
}

const ProcessSteps: React.FC<{ processSteps: CaseStudy["processSteps"] }> = ({
  processSteps,
}) => (
  <div className="border-l border-[#D9D9D9]">
    {processSteps.map((step, index) => (
      <div key={index} className="mb-12 pl-4 relative">
        <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-[-10px] top-2"></div>
        <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
        {step.description.length > 0 && step.description[0] !== "" && (
          <ul className="list-disc pl-6 mt-4">
            {step.description.map(
              (desc, idx) =>
                desc !== "" && (
                  <li key={idx} className="mb-2 text-sm">
                    {desc}
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const InternalPage: React.FC<InternalPageProps> = ({ caseStudies }) => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies[Number(id)];

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-8">Case study not found</div>
    );
  }

  const {
    title,
    subtitle,
    heroImage,
    industryInfo,
    projectDuration,
    clientSatisfaction,
    problemSolutionResult,
    techs,
    keyFeatures,

    bgImage,
  } = caseStudy;

  return (
    <div>
      <div className="relative z-10 pt-32 lg:pt-16 text-center internal_page_hero_img px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover h-[78%]  bg-center z-1"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#8941C4] to-transparent opacity-80 z-5"></div>

        <h1 className="relative z-15 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="relative z-15 text-base sm:text-lg lg:text-xl mt-2 text-white">
          {subtitle}
        </p>
        <img
          src={heroImage}
          alt="hero"
          className={`
    relative 
    ${Number(id) === 1 ? "lg:w-[64%]" : "lg:w-[50%]"}
    h-[90%]
    ${Number(id) === 2 ? "w-[80%] h-[80%]" : "w-[100%] h-[90%]"}
    
  `}
        />
      </div>

      <div className="container mx-auto mt-8 flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[30%] lg:m-0 p-4 bg-[#F2EEEF] rounded-lg h-fit mx-4 lg:mr-8">
          <div className="py-2 mt-4">
            <h2 className="text-xl font-bold mb-2">INDUSTRY</h2>
            <p className="text-lg">{industryInfo}</p>
          </div>
          <div className="py-2 mt-4">
            <h2 className="text-xl font-bold mb-2">PROJECT DURATION</h2>
            <p className="text-lg">{projectDuration}</p>
          </div>
          <div className="py-2 mt-4">
            <h2 className="text-xl font-bold mb-2">CLIENT SATISFACTION</h2>
            <p className="text-lg flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
              {clientSatisfaction.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[70%] p-4 lg:p-0">
          {title.toUpperCase().includes("DIAL247.AI") && (
            <h2 className="text-xl font-bold mb-6">
              How Maxtron Helped, Build the Revolutionary Dial 247 AI Calling
              Tool
            </h2>
          )}
          {problemSolutionResult.map((section, index) => (
            <div
              key={index}
              className="mb-10 pb-10 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0"
            >
              <h2 className="text-2xl font-bold mb-6">{section.heading}</h2>
              {section.subheading && (
                <h3 className="text-xl font-semibold mb-4">
                  {section.subheading}
                </h3>
              )}
              <ul className="list-disc">
                {section.points.map((point, idx) =>
                  typeof point === "string" ? (
                    <p key={idx} className="mt-4">
                      {point}
                    </p>
                  ) : (
                    // <p key={idx} className="mt-3">
                    //     <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                    //     <p className="list-disc pl-5 mt-2">
                    //         {point.details.map((detail, detailIdx) => (
                    //             <p key={detailIdx} className="mt-2">{detail}</p>
                    //         ))}
                    //     </p>
                    // </p>
                    <p>jhfdb</p>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="flex mx-4 flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="w-full lg:w-2/3">
            {techs.length > 0 && (
              <h2 className="text-3xl font-bold mb-6">Tech used</h2>
            )}
            <div className="flex flex-wrap mb-8">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center mr-2 mb-4 bg-[#D9D9D9] py-1 px-2 rounded-lg"
                >
                  {tech.icon && <tech.icon />}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="container mx-auto py-12">
              <h2 className="text-3xl font-bold mb-8">
                {caseStudy.theprocessText}
              </h2>
              <ProcessSteps processSteps={caseStudy.processSteps} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-4 px-4 lg:px-0 flex flex-wrap lg:flex-nowrap items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-4">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <ul className="list-none">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="mb-4">
                {typeof feature === "string" ? (
                  <p className="text-sm">{feature}</p>
                ) : (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <ul className="list-disc pl-5">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm mb-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {title.toUpperCase().includes("CREATE PROTOCOL") && (
            <img
              src={create4}
              alt="Key Features Diagram"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
      <div className="container mx-auto my-16 px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default InternalPage;
