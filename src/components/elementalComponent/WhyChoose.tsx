import React, { useState } from "react";

type DotColorKey = keyof typeof dotColors;

interface DotConfig {
  type: "dot";
  colorKey: DotColorKey;
}

interface ComparisonRowData {
  feature: string;
  inHouse: string | DotConfig;
  freelancers: string | DotConfig;
  maxtron: string | DotConfig;
  isSpecialFeatureCell?: boolean;
}

const comparisonData: ComparisonRowData[] = [
  {
    feature: "Time to Onboard",
    inHouse: "4-12 weeks",
    freelancers: "2-3 weeks",
    maxtron: "24-72 hours",
    isSpecialFeatureCell: true,
  },
  {
    feature: "Flexibility",
    inHouse: "Low",
    freelancers: "Medium",
    maxtron: "High",
  },
  {
    feature: "Reliability",
    inHouse: "High",
    freelancers: "Low",
    maxtron: "High",
  },
  {
    feature: "Cost-Effective",
    inHouse: { type: "dot", colorKey: "red" },
    freelancers: { type: "dot", colorKey: "yellow" },
    maxtron: { type: "dot", colorKey: "green" },
  },
  {
    feature: "Empanelment Ready",
    inHouse: { type: "dot", colorKey: "red" },
    freelancers: { type: "dot", colorKey: "yellow" },
    maxtron: { type: "dot", colorKey: "green" },
  },
  {
    feature: "Bench Strength",
    inHouse: "Low",
    freelancers: "Low",
    maxtron: "High",
  },
];

const dotColors = {
  red: "bg-[#F43131]",
  yellow: "bg-[#E7B10E]",
  green: "bg-[#139820]",
};

interface DotProps {
  colorKey: DotColorKey;
}

const Dot: React.FC<DotProps> = ({ colorKey }) => {
  const svgIcons = {
    red: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0.859375C12.8355 0.859375 9.74207 1.79776 7.11088 3.55586C4.4797 5.31396 2.42894 7.81282 1.21793 10.7364C0.0069327 13.6601 -0.309921 16.8771 0.307443 19.9808C0.924806 23.0845 2.44866 25.9354 4.6863 28.1731C6.92394 30.4107 9.77487 31.9346 12.8786 32.5519C15.9823 33.1693 19.1993 32.8525 22.1229 31.6414C25.0466 30.4304 27.5454 28.3797 29.3035 25.7485C31.0616 23.1173 32 20.0239 32 16.8594C31.9952 12.6174 30.308 8.55051 27.3084 5.55097C24.3089 2.55143 20.242 0.864174 16 0.859375ZM22.4107 22.5161C22.4612 22.5654 22.5015 22.6243 22.5291 22.6892C22.5568 22.7542 22.5712 22.824 22.5717 22.8946C22.5721 22.9652 22.5586 23.0352 22.5317 23.1005C22.5049 23.1658 22.4654 23.2252 22.4155 23.2751C22.3656 23.325 22.3062 23.3646 22.2409 23.3914C22.1756 23.4182 22.1056 23.4318 22.035 23.4313C21.9644 23.4309 21.8946 23.4164 21.8296 23.3888C21.7646 23.3611 21.7058 23.3209 21.6565 23.2703L16 17.6136L10.3433 23.2703C10.2942 23.3217 10.2353 23.3627 10.1701 23.391C10.1049 23.4193 10.0348 23.4343 9.9637 23.4351C9.89265 23.4359 9.82216 23.4224 9.75636 23.3956C9.69057 23.3688 9.63079 23.3291 9.58056 23.2788C9.53032 23.2286 9.49064 23.1688 9.46383 23.103C9.43702 23.0372 9.42363 22.9667 9.42445 22.8956C9.42527 22.8246 9.44028 22.7544 9.46859 22.6892C9.49691 22.6241 9.53796 22.5652 9.58934 22.5161L15.2458 16.8594L9.58934 11.2026C9.49418 11.1017 9.44209 10.9676 9.44413 10.8289C9.44618 10.6902 9.50219 10.5577 9.60029 10.4597C9.69838 10.3616 9.83084 10.3055 9.96955 10.3035C10.1083 10.3015 10.2423 10.3535 10.3433 10.4487L16 16.1052L21.6568 10.4487C21.706 10.3982 21.7649 10.3579 21.8299 10.3302C21.8948 10.3026 21.9646 10.2881 22.0352 10.2877C22.1059 10.2873 22.1758 10.3008 22.2412 10.3276C22.3065 10.3545 22.3658 10.394 22.4158 10.4439C22.4657 10.4938 22.5052 10.5532 22.532 10.6185C22.5588 10.6838 22.5724 10.7538 22.572 10.8244C22.5715 10.895 22.557 10.9648 22.5294 11.0298C22.5018 11.0948 22.4615 11.1536 22.4109 11.2029L16.7542 16.8594L22.4107 22.5161Z"
          fill="#F43131"
        />
      </svg>
    ),
    yellow: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0.859375C7.17997 0.859375 0 8.03935 0 16.8594C0 25.6794 7.17997 32.8594 16 32.8594C24.82 32.8594 32 25.6794 32 16.8594C32 8.03935 24.82 0.859375 16 0.859375ZM16.6656 25.7742H15.3323V23.1075H16.6656V25.7742ZM16.6656 19.9588H15.3323V7.94413H16.6656V19.9588Z"
          fill="#E7B10E"
        />
      </svg>
    ),
    green: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1438_4632_static_maxtron_no_hover)">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 0.859375C11.7565 0.859375 7.68687 2.54508 4.68629 5.54567C1.68571 8.54625 0 12.6159 0 16.8594C0 21.1028 1.68571 25.1725 4.68629 28.1731C7.68687 31.1737 11.7565 32.8594 16 32.8594C20.2435 32.8594 24.3131 31.1737 27.3137 28.1731C30.3143 25.1725 32 21.1028 32 16.8594C32 12.6159 30.3143 8.54625 27.3137 5.54567C24.3131 2.54508 20.2435 0.859375 16 0.859375ZM22.7742 12.3351C22.9036 12.3343 23.0301 12.3744 23.1354 12.4496C23.2408 12.5248 23.3198 12.6314 23.3611 12.7541C23.4024 12.8768 23.4039 13.0094 23.3655 13.1331C23.3271 13.2567 23.2507 13.3651 23.1471 13.4428L12.8554 21.3837L8.76431 16.3166C8.70816 16.2545 8.66528 16.1816 8.63829 16.1024C8.61129 16.0231 8.60075 15.9392 8.6073 15.8557C8.61386 15.7723 8.63738 15.691 8.67642 15.617C8.71546 15.5429 8.76919 15.4776 8.83435 15.425C8.8995 15.3724 8.97469 15.3337 9.05533 15.3112C9.13596 15.2887 9.22034 15.2829 9.3033 15.2941C9.38627 15.3053 9.46607 15.3333 9.53782 15.3765C9.60958 15.4196 9.67178 15.4769 9.72062 15.5449L13.0572 19.6717L22.3914 12.4705C22.4997 12.3836 22.6353 12.3359 22.7742 12.3351Z"
            fill="#139820"
          />
        </g>
        <defs>
          <clipPath id="clip0_1438_4632_static_maxtron_no_hover">
            {" "}
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0 0.859375)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return (
    <div
      className={`w-2.5 h-2.5 sm:w-3 md:w-3.5 lg:w-4 sm:h-3 md:h-3.5 lg:h-4`}
    >
      {svgIcons[colorKey]}
    </div>
  );
};

const WhyChoose: React.FC = () => {
  const [hoveredColumnIndex, setHoveredColumnIndex] = useState<number | null>(
    null
  );

  const maxtronColumnIndex = 3;
  const maxtronStaticBorderColor = "border-[#7A35C1]";
  const maxtronHeaderTextHoverColor = "text-[#7A35C1]";
  const columnHoverHeaderTextColor = "text-[#7A35C1]";
  const rowBottomBorder = "border-[#DFDEE7]";

  const handleColumnEnter = (colIndex: number) => {
    setHoveredColumnIndex(colIndex);
  };

  const handleColumnLeave = () => {
    setHoveredColumnIndex(null);
  };

  const getColumnBorderClasses = (
    colIndex: number,
    isHeader: boolean = false,
    isLastRow: boolean = false
  ): string => {
    let classes = "transition-all duration-200 ease-in-out ";
    const isMaxtronCol = colIndex === maxtronColumnIndex;

    if (colIndex === 0) {
      return isHeader ? `${classes} ` : classes;
    }

    let currentBorderColor: string;

    if (isMaxtronCol) {
      currentBorderColor = maxtronStaticBorderColor;
    } else {
      currentBorderColor = "border-transparent";
    }

    if (isHeader) {
      classes += `border-l border-r border-t ${currentBorderColor} rounded-t-lg `;
    } else {
      classes += `border-l border-r ${currentBorderColor} `;
      if (isLastRow) {
        classes += `border-b ${currentBorderColor} rounded-b-lg `;
      }
    }
    return classes.trim();
  };

  const headers = [
    "Feature",
    "In-House Hiring",
    "Freelancers",
    "Maxtron Staff Aug",
  ];

  const gridColsBase =
    "grid-cols-[minmax(90px,_1.4fr)_minmax(65px,_1fr)_minmax(65px,_1fr)_minmax(90px,_1.2fr)]";
  const gridColsSm =
    "sm:grid-cols-[minmax(120px,_1.5fr)_minmax(80px,_1fr)_minmax(80px,_1fr)_minmax(120px,_1.2fr)]";
  const gridColsMd =
    "md:grid-cols-[minmax(160px,_1.6fr)_1fr_1fr_minmax(160px,_1.3fr)]";

  return (
    <div
      className=" text-[#2A2A2A]  font-normal font-[Switzer]  p-5 md:p-12 lg:p-16 xl:p-16 max-w-[96rem]  mx-auto"
      onMouseLeave={handleColumnLeave}
    >
      <div className="mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#2A2A2A] mb-6 sm:mb-10 md:mb-12 font-[Switzer]">
          Why Choose Us Over Traditional Hiring or Freelancers?
        </h2>

        <div className="comparison-table-container overflow-x-auto">
          <div
            className={`grid ${gridColsBase} ${gridColsSm} ${gridColsMd} text-[11px] sm:text-xs md:text-sm font-medium border-b ${rowBottomBorder}`}
          >
            {headers.map((headerText, colIndex) => (
              <div
                key={headerText}
                onMouseEnter={() => handleColumnEnter(colIndex)}
                className={`
                  py-2 px-1 sm:py-2.5 sm:px-1.5 md:py-3 md:px-3 lg:py-4 lg:px-4 md:text-lg
                  ${colIndex > 0 ? "text-center" : "text-left"}
                  ${
                    hoveredColumnIndex === colIndex
                      ? colIndex === maxtronColumnIndex
                        ? maxtronHeaderTextHoverColor
                        : columnHoverHeaderTextColor
                      : colIndex === maxtronColumnIndex
                      ? "text-[#7A35C1] md:text-xl"
                      : "text-[#2A2A2A] font-[Switzer] md:text-xl "
                  }
                  ${getColumnBorderClasses(colIndex, true)}
                `}
              >
                {headerText}
              </div>
            ))}
          </div>
          {comparisonData.map((row, rowIndex) => (
            <div
              key={row.feature}
              className={`relative border-b ${rowBottomBorder} last:border-b-transparent`}
            >
              <div
                className={`grid ${gridColsBase} ${gridColsSm} ${gridColsMd} items-center font-normal font-[Switzer] text-[#292929]   text-xs sm:text-xs md:text-lg`}
              >
                {[row.feature, row.inHouse, row.freelancers, row.maxtron].map(
                  (cellData, colIndex) => (
                    <div
                      key={`${row.feature}-${colIndex}`}
                      onMouseEnter={() => handleColumnEnter(colIndex)}
                      className={`
                        py-2 px-1 sm:py-2.5 sm:px-1.5 md:py-3 md:px-3  lg:py-4 h-full flex items-center
                        ${
                          colIndex > 0
                            ? "justify-center text-center"
                            : "text-left"
                        }
                        ${
                          row.isSpecialFeatureCell && colIndex === 0
                            ? `font-semibold shadow-sm rounded -mx-px -my-px
                               px-[calc(0.25rem+1px)] py-[calc(0.5rem+1px)]
                               sm:px-[calc(0.375rem+1px)] sm:py-[calc(0.625rem+1px)]
                               md:px-[calc(0.75rem+1px)] md:py-[calc(0.875rem+1px)]
                               lg:px-[calc(1rem+1px)] lg:py-[calc(1.125rem+1px)] z-10 relative`
                            : colIndex === 0
                            ? "text-[#2A2A2A] font-semibold "
                            : "text-[#292929]"
                        }
                        ${getColumnBorderClasses(
                          colIndex,
                          false,
                          rowIndex === comparisonData.length - 1
                        )}
                      `}
                    >
                      {typeof cellData === "string" ? (
                        cellData
                      ) : cellData &&
                        typeof cellData === "object" &&
                        "type" in cellData &&
                        cellData.type === "dot" ? (
                        <Dot colorKey={cellData.colorKey} />
                      ) : null}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
