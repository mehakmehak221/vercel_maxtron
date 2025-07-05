import React from "react";
import { FaSquareFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#1D1B33] text-white">
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Navigation Links */}
        <div className="flex flex-col md:items-center md:space-y-10 md:mb-0 w-full md:w-auto">
          <div className="flex justify-between gap-12">
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] md:w-auto">
              <Link to="/" className="mx-2 hover:text-white">
                Home
              </Link>
              <Link to="/services" className="mx-2 hover:text-white">
                Services
              </Link>
              <Link to="/case-studies" className="mx-2 hover:text-white">
                Case Studies
              </Link>
            </nav>
            <nav className="flex flex-col space-y-4 md:items-left text-[#FFFFFF] md:w-auto">
              <Link to="/industries" className="mx-2 hover:text-white">
                Industries
              </Link>
              <Link to="/about" className="mx-2 hover:text-white">
                About Us
              </Link>
              <Link to="/Contact" className="mx-2 hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-10 justify-center lg:items-end">
          <div className="flex-1">
            <p className="text-[#FFFFFF] mb-5 md:w-[400px] text-[14px] mt-10 md:mt-0">
              Get Latest Insights on tech trends, Industry news, event updates
              and more in your inbox
            </p>
          </div>
          <div className="flex flex-row gap-4 overflow-hidden">
            <Link to="/Contact">
              <button
                className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-[#55308D] hover:text-white hover:bg-transparent border-2 border-white font-bold transition shadow-md"
                aria-label="Contact us for inquiries"
                title="Contact Us"
              >
                Contact Us
              </button>
            </Link>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/business-maxtron/30min",
                  "_blank"
                )
              }
              className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-[#55308D] hover:text-white hover:bg-transparent border-2 border-white font-bold transition shadow-md"
              aria-label="Schedule a 30-minute call with us"
              title="Book a Call"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#1D1B33] py-4 mt-8 mx-14 border-t border-[#FFFFFF33]">
        <div className="container mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#FFFFFF] mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} by Maxtron Innovations
          </p>
          <div className="flex mb-4 md:mb-0 space-x-6">
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Privacy Policies
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Security
            </a>
            <a href="#" className="text-[#FFFFFF] text-sm hover:text-white">
              Terms of Conditions
            </a>
          </div>

          {/* Social Buttons with aria-labels */}
          <div className="flex space-x-4">
            <button
              onClick={() =>
                window.open("https://www.facebook.com/maxtroninnovations/")
              }
              className="px-2 text-white rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Visit Maxtron's Facebook Page"
              title="Facebook"
            >
              <FaSquareFacebook className="h-6 w-6" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://in.linkedin.com/company/maxtron-innovations"
                )
              }
              className="px-2 text-white rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Visit Maxtron's LinkedIn Page"
              title="LinkedIn"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
