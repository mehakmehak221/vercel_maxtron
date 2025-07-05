import { useState } from "react";
import {
  Experience,
  Countries,
  Partners,
  Projects,
  Awards,
} from "./VectorImage";

interface TabItem {
  id: string;
  label: string;
  icon: (props: { className?: string; isActive?: boolean }) => JSX.Element;
  numberText: string;
  description: string;
}

const prideData: TabItem[] = [
  {
    id: "experience",
    label: "Experience",
    icon: Experience,
    numberText: "12",
    description: "Years Of Experience",
  },
  {
    id: "countries",
    label: "Countries",
    icon: Countries,
    numberText: "20",
    description: "Countries Worldwide",
  },
  {
    id: "partners",
    label: "Partners",
    icon: Partners,
    numberText: "100",
    description: "Business Partners",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Projects,
    numberText: "3K",
    description: "Product Delivered",
  },
  {
    id: "awards",
    label: "Awards",
    icon: Awards,
    numberText: "15",
    description: "Industry Award",
  },
];

const UpArrowSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>
);

const DownArrowSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Pride = () => {
  const [activeTabId, setActiveTabId] = useState<string>("experience");
  const activeTabData = prideData.find((tab) => tab.id === activeTabId);

  return (
    <section
      id="pride-in-numbers"
      className="relative md:py-16 lg:py-20 text-center"
    >
      <div className="max-w-[96rem] mx-auto p-5 md:p-4 lg:p-4 xl:p-4 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] mb-10 md:mb-14">
          We Take Pride In Our Numbers
        </h2>

        <div className="md:hidden max-w-md mx-auto">
          {prideData.map((item) => {
            const isMobileActive = activeTabId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl mb-3 overflow-hidden shadow-lg transition-all duration-300 ease-in-out
                  ${isMobileActive ? "bg-[#7A35C1]" : "border border-[#7A35C1]"}
                `}
              >
                <button
                  onClick={() =>
                    setActiveTabId(item.id === activeTabId ? "" : item.id)
                  }
                  className={`w-full flex items-center justify-between px-4 py-3.5 text-left focus:outline-none transition-colors duration-200
                    ${
                      isMobileActive
                        ? "text-white bg-[#7A35C1]"
                        : "text-[#7A35C1] hover:bg-white/10 "
                    }
                  `}
                  aria-expanded={isMobileActive}
                  aria-controls={`content-${item.id}`}
                >
                  <div className="flex items-center">
                    {isMobileActive && (
                      <div
                        className={`mr-3 flex items-center justify-center 
                          ${
                            item.id === "experience" ? "h-6 w-auto" : "w-6 h-6"
                          } ${isMobileActive ? "opacity-100" : "opacity-0"}
                        `}
                      >
                        <item.icon className="w-full h-full" isActive={true} />
                      </div>
                    )}
                    <span
                      className={`font-medium text-base ${
                        !isMobileActive && !item.icon
                          ? "ml-0"
                          : isMobileActive
                          ? ""
                          : "ml-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {isMobileActive ? (
                    <UpArrowSVG className="w-5 h-5 text-white" />
                  ) : (
                    <DownArrowSVG className="w-5 h-5 text-[#7A35C1]" />
                  )}
                </button>

                {isMobileActive &&
                  activeTabData &&
                  item.id === activeTabData.id && (
                    <div className="bg-[#7A35C1] p-5">
                      <div
                        id={`content-${item.id}`}
                        className="bg-white p-6 text-center rounded-xl"
                      >
                        <div className="flex items-center justify-center">
                          {" "}
                          <div
                            className="text-7xl sm:text-8xl font-extrabold leading-none"
                            style={{
                              background:
                                "linear-gradient(180deg, #BCA1DD 3.43%, #7A35C1 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {activeTabData.numberText}
                          </div>
                          <p
                            className="text-4xl sm:text-5xl font-medium leading-none ml-1 sm:ml-2"
                            style={{
                              background:
                                "linear-gradient(180deg, #BCA1DD 3.43%, #7A35C1 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            +
                          </p>
                        </div>
                        <div className="text-lg text-[#7A35C1] font-medium mt-3">
                          {" "}
                          {activeTabData.description}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex flex-col md:flex-row gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="md:w-[300px] lg:w-[340px] flex-shrink-0 border border-[#7A35C1] rounded-2xl p-3 bg-white shadow-lg">
            <div className="space-y-2">
              {prideData.map((item) => {
                const isDesktopActive = activeTabId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTabId(item.id)}
                    className={`group w-full flex items-center px-4 py-3.5 rounded-xl text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 border
                      ${
                        isDesktopActive
                          ? "bg-[#7A35C1] text-white shadow-md scale-[1.02] border-[#7A35C1] hover:text-white"
                          : "bg-white text-[#7A35C1] border-[#7A35C1] hover:bg-[#7A35C1] hover:border-[#A480CC] hover:text-white"
                      }`}
                  >
                    <div
                      className={`mr-3 flex items-center justify-center transition-transform duration-300 ease-in-out
                        ${item.id === "experience" ? "h-7 w-auto" : "w-7 h-7"}
                        ${isDesktopActive ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      <item.icon
                        className={`transition-all duration-300 ease-in-out transform
                          ${
                            isDesktopActive
                              ? "scale-110 opacity-100 animate-fade-in"
                              : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                          }`}
                        isActive={isDesktopActive}
                      />
                    </div>
                    <span
                      className={`font-medium text-sm lg:text-base transition-colors duration-200
                        ${
                          isDesktopActive
                            ? "text-white"
                            : "text-[#7A35C1] group-hover:text-white"
                        }
                        ${isDesktopActive ? "ml-4" : "ml-0 group-hover:ml-4"}
                      `}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center p-6 sm:p-10 min-h-[300px] md:min-h-full border border-[#6A0DAD] rounded-2xl bg-white shadow-lg transition-all duration-500 ease-in-out">
            {activeTabData && (
              <>
                <div className="flex items-center">
                  <div
                    className="text-7xl sm:text-8xl md:text-[200px] font-bold mb-2 leading-none animate-fade-in "
                    style={{
                      background:
                        "linear-gradient(180deg, #F3EBFC 3.43%, #7A35C1 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {activeTabData.numberText}
                  </div>
                  <p
                    className="text-4xl sm:text-8xl md:text-[150px] font-normal  mb-2 leading-none animate-fade-in "
                    style={{
                      background:
                        "linear-gradient(180deg, #F3EBFC 3.43%, #7A35C1 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    +
                  </p>
                </div>
                <div className="text-lg sm:text-xl lg:text-4xl text-[#7A35C1] font-medium animate-fade-in">
                  {activeTabData.description}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pride;
