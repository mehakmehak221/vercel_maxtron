import { useState } from "react";

const faqs = [
  {
    question: "What’s the minimum commitment?",
    answer: (
      <>
        <p>
          We offer as low as 40 hours/month per resource. Flexible and scalable.
        </p>
      </>
    ),
  },
  {
    question: "Can we interview and test the developer?",
    answer: (
      <>
        <p> Absolutely. You control who joins your team.</p>
      </>
    ),
  },
  {
    question: "Are the developers on your payroll?",
    answer: (
      <>
        <p>
          {" "}
          Yes — 100% employed, NDA-bound, and work full-time for your project.
        </p>
      </>
    ),
  },
  {
    question: "What if I want to replace a resource?",
    answer: (
      <>
        <p>We offer free replacements within 7 days.</p>
      </>
    ),
  },
  {
    question: "Do you offer white-labeled services for agencies?",
    answer: (
      <>
        <p>
          {" "}
          Yes. Our devs can work under your brand and communication framework.
        </p>
      </>
    ),
  },
];

const AugmentationFaqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" w-full max-w-[96rem] mx-auto flex flex-col gap-6 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 p-5 md:p-16 lg:p-16 xl:p-16">
      <h2 className="text-center  text-[#2A2A2A] font-[Switzer] text-3xl lg:text-3xl xl:text-3xl font-black leading-tight tracking-tight mb-2 ">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col rounded-xl border border-[#DFDEE7] overflow-hidden ">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-2 border-b border-[#DFDEE7]">
            <button
              className="w-full flex items-center justify-between py-5 px-2 text-left focus:outline-none "
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-base md:text-base font-normal  text-[#2A2A2A] font-openSansHebrew">
                {faq.question}
              </span>
              <div
                className={`text-[#8941C4] text-2xl transition-transform duration-300 ease-in-out ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1004 9.43081C16.2566 9.27619 16.4674 9.18945 16.6872 9.18945C16.907 9.18945 17.1178 9.27619 17.274 9.43081C17.3511 9.50674 17.4123 9.59725 17.4541 9.69706C17.4959 9.79687 17.5174 9.904 17.5174 10.0122C17.5174 10.1204 17.4959 10.2276 17.4541 10.3274C17.4123 10.4272 17.3511 10.5177 17.274 10.5936L12.5844 15.1896C12.4279 15.344 12.2169 15.4306 11.997 15.4306C11.7771 15.4306 11.5661 15.344 11.4096 15.1896L6.72 10.5936C6.6429 10.5177 6.58167 10.4272 6.53988 10.3274C6.49808 10.2276 6.47656 10.1204 6.47656 10.0122C6.47656 9.904 6.49808 9.79687 6.53988 9.69706C6.58167 9.59725 6.6429 9.50674 6.72 9.43081C6.87616 9.27619 7.08704 9.18945 7.3068 9.18945C7.52656 9.18945 7.73744 9.27619 7.8936 9.43081L11.9988 13.2L16.1004 9.43081Z"
                    fill="#7A35C1"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === idx
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-2">
                <div className="text-gray-500 text-sm md:text-base font-normal font-[Switzer]">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AugmentationFaqs;
