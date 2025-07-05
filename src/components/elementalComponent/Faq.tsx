import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
  {
    question: "Who can become an affiliate?",
    answer: "Anyone with a relevant audience or network can apply — no need to be a Maxtron customer."
  },
  {
    question: "Is there a cost to join?",
    answer: " No, it’s completely free."
  },
  {
    question: "How and when do I get paid?",
    answer: "We pay out commissions monthly once the deal is closed and payment is received."
  },
  {
    question: "Can I refer clients from my agency or network?",
    answer: "Absolutely. We welcome agencies, consultants, and advisors to participate."
  }
];

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string, answer: string }, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b  px-6">
    <button
      className="w-full flex justify-between items-center text-left py-4 px-2"
      onClick={onClick}
    >
      <span className="text-[#2A2A2A] font-[Switzer] text-base md:text-lg">{item.question}</span>
      <FiChevronDown
        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-[#7A35C1]`}
        size={20}
      />
    </button>
    <div
      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="pb-4 px-2">
            <p className="text-[#6e6a7b] font-openSansHebrew">{item.answer}</p>
        </div>
      </div>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8">
      <h2 className="self-stretch text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] text-center mb-8 md:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="w-full  mx-auto border rounded-lg">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq; 