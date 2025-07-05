// import React from "react";
import contact from "../assets/contactImg.svg";
import React from "react";
const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-16 space-y-4 rounded-3xl border-4 solid border-[#BDBCBC] flex flex-col md:flex-row justify-between items-center z-50 w-full">
      <div className="flex flex-col mb-8 md:mb-0 md:w-1/4">
        <h2 className="text-2xl md:text-3xl font-extrabold font-OpenSans mb-4">
          Let's Talk About Your Project
        </h2>
        <button
          onClick={() => {
            window.open(
              "https://calendly.com/business-maxtron/30min?month=2024-08"
            );
          }}
          className="bg-white max-w-fit text-black py-2 px-4 rounded transition duration-300"
        >
          Schedule A Call
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div>
          <img src={contact} alt="img" className="" />
        </div>
        <div>
          <div className="mb-4">
            <p className="font-bold">
              US | UK | Europe | UAE | India | Singapore
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-bold pr-2">Phone: </span>+918791156224
            </p>
          </div>
          <div>
            <p className="font-bold pr-2">
              <span className="font-bold pr-2"> Email:</span>
              <a
                href="mailto:business@maxtron.ai"
                className="underline font-normal"
              >
                business@maxtron.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactSection);
