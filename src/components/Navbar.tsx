import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <nav className="fixed bg-custom-gradient p-4   left-0 right-0 z-50">
      <div className="container mx-auto flex   justify-between items-center">
        {/* <div className="flex justify-between items-center"> */}
        <div className=" w-full lg:flex hidden  justify-between ">
          <Link to="/">
            <img src={logo} alt="maxtron logo" className="" />
          </Link>

          {/* </div> */}
          <div
            className={`lg:flex relative  lg:items-center md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-white font-OpenSans capitalize lg:flex md:space-x-4">
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Home
              </NavLink>

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/services"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Services
              </NavLink>

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/industries"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Industries
              </NavLink>

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/case-studies"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Case Studies
              </NavLink>

              {/* <NavLink
                onClick={() => setIsOpen(false)}
                to="/insights"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Insights
              </NavLink> */}

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/about"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                About Us
              </NavLink>

              <button className="block mt-4 text-sm md:inline-block md:mt-0 rounded-lg p-2 bg-[#F5F5F5] text-black">
                <Link to="/Contact">Contact Us</Link>
              </button>

              <button
                onClick={() => {
                  window.open("https://calendly.com/business-maxtron/30min");
                }}
                className="block mt-4 text-sm md:inline-block md:mt-0 capitalize rounded-lg p-2 bg-[#F5F5F5]  text-black"
              >
                book a call
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden  flex justify-between w-full">
          <div className={`flex relative justify-between items-center w-full`}>
            <Link to="/" className={`${isOpen ? "hidden" : "flex"}`}>
              <img src={logo} alt="maxtron logo" className="" />
            </Link>

            <div
              className={`lg:hidden flex ${isOpen ? "hidden" : "flex"}`}
              onClick={toggle}
            >
              <button className="text-white focus:outline-none flex">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "" : "M4 6h16M4 12h16m-7 6h7"}
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className={`text-white font-OpenSans capitalize lg:flex md:space-x-4  ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Home
              </NavLink>

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/services"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Services
              </NavLink>

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/industries"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Industries
              </NavLink>

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/case-studies"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Case Studies
              </NavLink>

              {/* <NavLink
                onClick={() => setIsOpen(false)}
                to="/insights"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                Insights
              </NavLink> */}

              <NavLink
                onClick={() => setIsOpen(false)}
                to="/about"
                className="block mt-4 text-sm md:inline-block md:mt-0 hover:bg-[#F5F5F5] rounded-lg p-2 hover:text-black"
              >
                About Us
              </NavLink>

              <button className="block mt-4 text-sm md:inline-block md:mt-0 rounded-lg p-2 bg-[#F5F5F5] text-black">
                <Link to="/Contact">Contact Us</Link>
              </button>

              <button
                onClick={() => {
                  window.open("https://calendly.com/business-maxtron/30min");
                }}
                className="block mt-4 text-sm md:inline-block md:mt-0 capitalize rounded-lg p-2 bg-[#F5F5F5]  text-black"
              >
                book a call
              </button>
            </div>
          </div>

          <div
            className={` absolute top-6 right-5 ${isOpen ? "flex" : "hidden"}`}
            onClick={toggle}
          >
            <button className="focus:outline-none" style={{ color: "white" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="24px"
                height="24px"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
