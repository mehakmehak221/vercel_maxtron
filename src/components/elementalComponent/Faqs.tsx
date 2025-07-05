import { useState } from "react";

const faqs = [
  {
    question: "What is tokenization?",
    answer: (
      <>
        <p>
          Tokenization is the transformation of real-world assets like paper
          contracts, art, and investment funds into a new, highly fractionalized
          and programmable digital form - tokens.
        </p>
        <p className="mt-2">
          Importantly, tokens are internet-based and tokenization removes the
          need for centralized businesses. Trading and settlement of tokenized
          assets can happen globally and at any time.
        </p>
      </>
    ),
  },
  {
    question: "Is tokenization expensive?",
    answer: (
      <>
        <p>The short answer is no.</p>
        <p className="mt-2">
          Tokenization only becomes expensive when you're needing to design new
          technology. Maxtron's technology exists and is configured according to
          your tokenization needs.
        </p>
      </>
    ),
  },
  {
    question: "What assets can be tokenized?",
    answer: (
      <>
        <p>All assets can be tokenized.</p>
        <p className="mt-2">
          Whether equity, real estate, art and collectibles, investment funds,
          or entirely new cryptocurrencies — digital tokens or smart contracts
          can be created to make exchanges and proof of ownership transparent
          and programmable
        </p>
      </>
    ),
  },
  {
    question: "Does tokenizing an asset increase its liquidity?",
    answer: (
      <>
        <p>Yes and no.</p>
        <p className="mt-2">
          Simply tokenizing an asset does not make it more sellable or increase
          demand to buy a token. Tokenization does however makes an asset
          incredibly fractionalized. This helps investors with less money to
          invest still share in the investment opportunity. This increase in
          investors also increases the chances for the asset to be bought and
          sold.
        </p>
      </>
    ),
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-6 md:gap-9 lg:gap-12 px-4 sm:px-6 lg:px-10 py-8 md:py-12 lg:py-16">
      <h2 className="text-start text-[#2A2A2A] font-[Switzer] text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight mb-2">
        Questions? Answers
      </h2>
      <div className="flex flex-col rounded-xl">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-white p-2 ${
              idx !== faqs.length - 1 ? "border-b border-[#DFDEE7]" : ""
            }`}
          >
            <button
              className="w-full flex items-center justify-between py-5 px-2 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-base md:text-lg font-semibold text-[#2A2A2A] font-openSansHebrew">
                {faq.question}
              </span>
              <div
                className={`text-[#8941C4] text-2xl transition-transform duration-300 ease-in-out ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                >
                  <path
                    d="M8.16181 1.51833C-2.58001 6.35469 -2.73274 21.1692 7.90726 26.2092C14.6273 29.4165 22.9764 26.362 26.0309 19.5911C27.3036 16.7911 27.3036 11.0892 26.0309 8.34015C24.9109 5.89651 21.1436 2.33288 18.5473 1.21288C15.9 0.0928764 10.9618 0.245604 8.16181 1.51833ZM19.1582 4.77651C22.0091 6.45651 24.0454 9.86742 24.3509 13.3801C24.6054 17.1474 22.5691 21.0165 19.1582 23.1038C17.0709 24.3765 16.1545 24.6311 13.5582 24.5802C9.07817 24.5292 5.97272 22.5438 3.88544 18.4202C2.86726 16.3329 2.81635 11.5474 3.83453 9.40924C6.58362 3.65651 13.66 1.51833 19.1582 4.77651Z"
                    fill="#7A35C1"
                  />
                  <path
                    d="M6.98906 11.3946C6.78542 11.8528 7.70179 13.2273 9.27997 14.9583C13.3018 19.3364 13.2509 19.3364 17.0691 15.671C20.3782 12.5146 20.9891 11.3437 19.6654 10.8346C19.2582 10.6819 17.9854 11.5983 16.56 13.1255C15.2363 14.551 13.8618 15.7219 13.5563 15.7219C13.2509 15.7219 12.0291 14.551 10.8072 13.1764C8.56724 10.5801 7.44724 10.071 6.98906 11.3946Z"
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
                <div className="text-[#232323] text-sm md:text-base font-normal font-[Switzer]">
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

export default Faqs;
