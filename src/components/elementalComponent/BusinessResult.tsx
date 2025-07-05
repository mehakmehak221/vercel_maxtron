type Props = {
  points?: string[];
  results?: string[];
  industryInfo: string;
  projectDuration: string;
  afterHeroSection: string;
  clientSatisfaction: number;
  bussinessNeeds?: {
    title?: string;
    description?: string[];
  };
  resultsData?: {
    title?: string;
    description?: string[];
  };
};

const BusinessResult: React.FC<Props> = ({
  points,
  results,
  industryInfo,
  projectDuration,
  afterHeroSection,
  clientSatisfaction,
  bussinessNeeds,
  resultsData,
}) => {
  const hasBusinessNeedsAndResults = bussinessNeeds && resultsData;

  return (
    <div className="flex flex-col w-full xl:mx-auto max-w-[88rem] items-start  py-4 md:py-6 lg:py-8 px-6 lg:px-10 xl:px-8">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 w-full   flex flex-col items-center  bg-[rgba(217,217,217,0.20)] justify-start">
          <div className="w-full flex  items-center self-stretch bg-[#8941C4] md:py-8 py-2 px-4 ">
            <p className="text-white [font-family:Switzer] text-3xl md:text-4xl lg:text-5xl font-bold leading-[120%]">
              BUSINESS NEED
            </p>
          </div>
          <div className="w-full flex justify-center items-center self-stretch   py-8 px-4 ">
            {hasBusinessNeedsAndResults ? (
              <div className="flex-[1_0_0] text-black font-openSansHebrew text-base font-normal leading-[160%]">
                <p className="mb-4">{bussinessNeeds.title}</p>
                {bussinessNeeds.description && (
                  <ul className="list-disc pl-6 space-y-2">
                    {bussinessNeeds.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="flex-[1_0_0] text-black font-openSansHebrew text-base font-normal leading-[160%]">
                {points?.join(" ")}
              </p>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 w-full  flex flex-col items-center bg-[rgba(217,217,217,0.20)] justify-start">
          <div className="w-full flex  items-center self-stretch bg-[#8941C4] md:py-8 py-2 px-4  border-l-[rgba(0,0,0,0.20)] border-l border-solid">
            <p className="text-white [font-family:Switzer] text-3xl md:text-4xl lg:text-5xl font-bold leading-[120%]">
              RESULT
            </p>
          </div>
          <div className="w-full flex justify-center items-center self-stretch   py-8 px-4 border-l-[rgba(0,0,0,0.20)] border-l border-solid">
            {hasBusinessNeedsAndResults ? (
              <div className="flex-[1_0_0] text-black font-openSansHebrew text-base font-normal leading-[160%]">
                {resultsData.title && <p className="mb-4">{resultsData.title}</p>}
                {resultsData.description && (
                  <ul className="list-disc pl-6 space-y-2">
                    {resultsData.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="flex-[1_0_0] text-black font-openSansHebrew text-base font-normal leading-[160%]">
                {results?.join(" ")}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full border-b border-solid border-[rgba(0,0,0,0.20)]">
        <div className="lg:w-1/2 w-full  flex flex-row items-center justify-start lg:border-r border-b lg:border-b-0 border-solid border-[rgba(0,0,0,0.20)]">
          <div className="w-1/2 p-5  flex flex-col justify-center items-center border-r border-solid border-[rgba(0,0,0,0.20)]">
            <img
              src={afterHeroSection}
              alt="Hero section"
              className="md:w-32 w-20"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center p-4 ">
            <p className=" text-[#B1B1B1] [font-family:Switzer] text-lg md:text-xl font-medium leading-[160%] uppercase">
              INDUSTRY
            </p>
            <p className="text-black font-openSansHebrew text-base md:text-lg font-medium leading-[120%] mt-4">
              {industryInfo}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full relative  flex items-center justify-center">
          <div className="border-l absolute left-1/2   h-full border-solid border-[rgba(0,0,0,0.20)]"></div>
          <div className="w-1/2 flex flex-col justify-center items-center p-4">
            <p className=" text-[#B1B1B1] [font-family:Switzer] text-center  font-medium text-lg md:text-xl leading-[160%] uppercase">
              PROJECT DURATION
            </p>
            <p className="text-black font-openSansHebrew text-base md:text-lg font-medium leading-[120%] mt-4">
              {projectDuration}
            </p>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center p-4">
            <p className=" text-[#B1B1B1] [font-family:Switzer] text-center text-lg md:text-xl font-medium leading-[160%] uppercase">
              CLIENT SATISFACTION
            </p>
            <div className="text-black font-openSansHebrew flex flex-col items-center  text-base md:text-lg font-medium leading-[120%] mt-4">
              <p>
                {[...Array(5)].map((_, i) => (
                  <span
                    className="text-2xl"
                    key={i}
                    style={{
                      color: i < Math.floor(clientSatisfaction)
                        ? '#7A35C1'
                        : 'rgba(122, 53, 193, 0.3)',
                    }}
                  >
                    ★
                  </span>
                ))}
              </p>
              <p>{clientSatisfaction.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessResult;
