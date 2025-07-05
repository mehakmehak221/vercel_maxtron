import React, { FormEvent } from "react";

interface MoreCaseStudiesProps {
  setShowMoreCaseStudies: React.Dispatch<React.SetStateAction<boolean>>;
}

const MoreCaseStudies: React.FC<MoreCaseStudiesProps> = ({
  setShowMoreCaseStudies,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMoreCaseStudies(false);
  };

  return (
    <div className="md:px-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold pb-8 text-black mb-6">
          Get A Specific Use-Case Study From Us
        </h2>
        <div className="w-full lg:w-2/5 bg-white p-8 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="text-start">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border items-start border-gray-300 rounded-lg placeholder-bg"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Company Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="useCase"
                className="block text-gray-700 font-bold mb-2"
              >
                On Which Use-Case Would You Like To Have A Case Study?
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black bg-white hover:bg-black hover:text-white transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MoreCaseStudies;
