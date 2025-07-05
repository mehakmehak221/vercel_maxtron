import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import darkFullLogo from "../assets/darkFullLogo.png"; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// This is for the DESKTOP dropdown header, not mobile.
const CustomArrowIcon = () => (
  <div className="flex-shrink-0 w-6 h-6 bg-[#7A35C1] rounded flex items-center justify-center ml-2">
    <svg
      width="10"
      height="10"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L6 6L1 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const dropdownContentData = {
  industries: {
    head: "Who We Help",
    title: "Industries",
    link: "/industries",
    liTags: [
      { name: "Gaming", link: "/industries" },
      {
        name: "Banking & Financial Services",
        link: "/industries",
      },
      { name: "Food & Beverages", link: "/industries" },
      { name: "Retail & E-Commerce", link: "/industries" },
      {
        name: "Supply Chain & Logistics",
        link: "/industries",
      },
      {
        name: "Sustainable Industry",
        link: "/industries",
      },
      { name: "Construction", link: "/industries" },
      { name: "Healthcare", link: "/industries" },
    ],
  },
  services: {
    head: "What We Do",
    title: "Services",
    link: "/services",
    liTags: [
      { name: "Web3", link: "/services" },
      { name: "Artificial Intelligence", link: "/services" },
      {
        name: "Experiential Development",
        link: "https://experiences.maxtron.ai/",
      },
      { name: "Business Enhancement", link: "/services" },
      { name: "Staff Augmentation", link: "/staff-augmentation" },
      { name: "Fund Raising", link: "/fund-raising" },
      { name: "Affiliate Program", link: "/affiliate" },
      { name: "Our Team", link: "/our-team" },
    ],
  },
  caseStudies: {
    head: "Our Work",
    title: "Projects",
    link: "/case-studies",
    liTags: [
      {
        name: "Blockchain Game Development",
        link: "/Maxtron.ai/case-study/Blockchain-Game-Development",
      },
      {
        name: "E-commerce Marketing",
        link: "/Maxtron.ai/case-study/ECommerce-Marketing",
      },
      {
        name: "Mini-Gaming Platform",
        link: "/Maxtron.ai/case-study/Mini-Gaming-Platform",
      },
      {
        name: "AI-Calling Tool",
        link: "/Maxtron.ai/case-study/AI-Calling-Tool",
      },
      {
        name: "Crypto Project Marketing",
        link: "/Maxtron.ai/case-study/Crypto-Project-Marketing",
      },
      {
        name: "Blockchain Based E-Voting System",
        link: "/Maxtron.ai/case-study/Blockchain-Based-EVoting-System",
      },
      { name: "Good Standing", link: "/Maxtron.ai/case-study/Good-Standing" },
      { name: "GRO8", link: "/Maxtron.ai/case-study/Gro8" },
      { name: "Token Launch", link: "/Maxtron.ai/case-study/Token-Launch" },
      { name: "ICCA", link: "/Maxtron.ai/case-study/ICCA" },
      { name: "Tawuniya", link: "/Maxtron.ai/case-study/Tawuniya" },
      { name: "ULALO", link: "/Maxtron.ai/case-study/ULALO" },
    ],
  },
  tokenization: {
    head: "Explore Tokenization",
    title: "Tokenization",
    link: "/tokenization",
    liTags: [
      { name: "Asset Tokenization", link: "/tokenization/asset" },
      { name: "Real World Assets (RWA)", link: "/tokenization/rwa" },
      { name: "Security Tokens (STO)", link: "/tokenization/security-tokens" },
      { name: "Utility Tokens", link: "/tokenization/utility-tokens" },
    ],
  },
  about: {
    head: "Learn About Us",
    title: "About Maxtron",
    link: "/about",
    liTags: [
      { name: "Our Mission & Vision", link: "/about/mission" },
      { name: "Meet The Team", link: "/about/team" },
      { name: "Our Journey", link: "/about/history" },
    ],
  },
  careers: {
    head: "Join Our Team",
    title: "Careers at Maxtron",
    link: "/careers",
    liTags: [
      { name: "Current Openings", link: "/careers/openings" },
      { name: "Life at Maxtron", link: "/careers/life-at-maxtron" },
      { name: "Employee Benefits", link: "/careers/benefits" },
    ],
  },
};
type DropdownKey = keyof typeof dropdownContentData;

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);

  const [activeDropdownKey, setActiveDropdownKey] =
    useState<DropdownKey | null>(null);
  const [openMobileDropdownKey, setOpenMobileDropdownKey] =
    useState<DropdownKey | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveDropdownKey(null);
    if (isMobileMenuOpen) {
      setOpenMobileDropdownKey(null);
    }
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdownKey(null);
  };

  const handleMobileDropdownToggle = (key: DropdownKey) => {
    setOpenMobileDropdownKey((prevKey) => (prevKey === key ? null : key));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveDropdownKey(null);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdownKey(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdownKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavButtonClick = (key: DropdownKey) => {
    setActiveDropdownKey((prevKey) => (prevKey === key ? null : key));
  };

  const closeDesktopDropdown = () => {
    setActiveDropdownKey(null);
  };

  const navLinksConfig = [
    {
      label: "Industries",
      key: "industries" as DropdownKey,
    },
    { label: "Services", key: "services" as DropdownKey },
    {
      label: "Our Work",
      key: "caseStudies" as DropdownKey,
    },
  ];

  const currentDropdownContent = activeDropdownKey
    ? dropdownContentData[activeDropdownKey]
    : null;

  return (
    <nav
      ref={navRef}
      className={`shadow-lg ${
        activeDropdownKey ? "rounded-t-3xl" : "rounded-3xl"
      } 
        ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-white  backdrop-blur-sm transform transition-all duration-300 ease-in-out mx-4 sm:mx-2 md:mx-6 lg:mx-8  mt-4 sm:mt-6"
            : "relative mx-4 sm:mx-2 md:mx-6 lg:mx-8 mt-4 sm:mt-6"
        }
      `}
    >
      <div className="max-w-screen mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {" "}
          <div className="max-w-7xl mx-auto flex xl:gap-10 justify-between w-full">
            <div className="flex-shrink-0">
              <Link to="/" onClick={closeDesktopDropdown}>
                <img
                  className="h-10 w-auto sm:h-12"
                  src={darkFullLogo}
                  alt="Maxtron Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="flex items-baseline space-x-1 xl:space-x-2">
                {navLinksConfig.map(({ label, key }) => (
                  <div key={key} className="relative">
                    {" "}
                    <button
                      onClick={() => handleNavButtonClick(key)}
                      className={`flex items-center px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium focus:outline-none transition-colors duration-150 ease-in-out
                                ${
                                  activeDropdownKey === key
                                    ? "text-purple-900 bg-purple-100"
                                    : "text-[#2A2A2A] hover:text-purple-800 font-openSansHebrew hover:bg-purple-50"
                                }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdownKey === key}
                    >
                      {label}
                      {key && (
                        <span className="ml-1">
                          {activeDropdownKey === key ? (
                            <FiChevronUp size={16} />
                          ) : (
                            <FiChevronDown size={16} />
                          )}
                        </span>
                      )}
                    </button>
                  </div>
                ))}
                <NavLink
                  to="/tokenization"
                  onClick={closeDesktopDropdown}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-[#2A2A2A] font-openSansHebrew"
                    } hover:bg-purple-50 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  Tokenization
                </NavLink>
                <NavLink
                  to="/careers"
                  onClick={closeDesktopDropdown}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-[#2A2A2A] font-openSansHebrew"
                    } hover:bg-purple-50 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={closeDesktopDropdown}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-[#2A2A2A] font-openSansHebrew"
                    } hover:bg-purple-50 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  About Us
                </NavLink>
              </div>

              <div className="flex items-center space-x-1 xl:space-x-4 ml-4 xl:ml-6">
                <Link
                  to="/contact"
                  onClick={closeDesktopDropdown}
                  className="text-white bg-[#7A35C1] hover:bg-purple-800 px-5 py-2.5 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-colors duration-150 font-SegoeUISymbol"
                >
                  Contact Us
                </Link>
                <button
                  onClick={() => {
                    window.open(
                      "https://calendly.com/business-maxtron/30min",
                      "_blank"
                    );
                    closeDesktopDropdown();
                  }}
                  className="text-white bg-gradient-to-r bg-[#7A35C1] hover:from-purple-700 hover:to-indigo-700 px-5 py-2.5 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-150 shadow-md hover:shadow-lg font-SegoeUISymbol"
                >
                  Book a Call
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-purple-600 hover:text-purple-800 focus:outline-none focus:text-purple-800 p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeDropdownKey && currentDropdownContent && (
        <div
          className={`
      absolute left-0 right-0 z-40 top-full
      ${
        activeDropdownKey
          ? "dropdown-animation-open"
          : "dropdown-animation-close"
      }
    `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto">
            {" "}
            <div className="bg-gray-50 rounded-b-xl p-6 ring-1 ring-black ring-opacity-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <Link
                to={currentDropdownContent.link}
                onClick={closeDesktopDropdown}
                className="flex items-center mb-5"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {currentDropdownContent.head}
                </h3>
                <CustomArrowIcon />
              </Link>
              <Link
                to={currentDropdownContent.link}
                onClick={closeDesktopDropdown}
                className="block text-[18px] font-semibold text-[#9693A6] mb-5"
              >
                {currentDropdownContent.title}
              </Link>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 font-openSansHebrew text-[20px] text-[#2A2A2A]">
                {currentDropdownContent.liTags.map((item, index) => {
                  const itemName = typeof item === "string" ? item : item.name;
                  let itemLink = "#";
                  if (typeof item === "object" && item.link) {
                    itemLink = item.link;
                  } else if (typeof item === "string") {
                    itemLink = `${currentDropdownContent.link}/${itemName
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&/g, "and")}`;
                  }
                  return (
                    <Link
                      key={`${activeDropdownKey}-item-${index}`}
                      to={itemLink}
                      onClick={closeDesktopDropdown}
                      className="text-gray-700 hover:text-purple-700 hover:font-medium py-1 text-sm rounded-md transition-colors duration-150 ease-in-out"
                    >
                      {itemName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div
          className="lg:hidden shadow-lg rounded-b-3xl z-30 overflow-y-auto max-h-[calc(100vh-6rem)] bg-white"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-1 space-y-1 sm:px-3">
            {navLinksConfig.map(({ label, key }) => {
              const content = dropdownContentData[key];
              const isMobileDropdownOpen = openMobileDropdownKey === key;
              return (
                <div key={`mobile-dropdown-${key}`}>
                  <button
                    onClick={() => handleMobileDropdownToggle(key)}
                    className={`w-full flex justify-between items-center text-left px-3 py-2.5 rounded-md text-base font-medium
                      ${
                        isMobileDropdownOpen
                          ? "bg-purple-100 text-purple-700"
                          : "text-[#2A2A2A] hover:bg-purple-50 hover:text-purple-800"
                      }`}
                  >
                    <span>{label}</span>
                    {isMobileDropdownOpen ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </button>
                  {isMobileDropdownOpen && content && (
                    <div className="py-2 pl-5 pr-2 space-y-1 bg-purple-50/40 rounded-b-md">
                      <div className="px-3 pt-2 pb-1">
                        <Link
                          to={content.link}
                          onClick={handleMobileNavClick}
                          className="text-sm font-semibold text-purple-700 hover:text-purple-900 hover:underline"
                        >
                          {content.title}
                        </Link>
                      </div>
                      {content.liTags.map((item, index) => {
                        const itemName =
                          typeof item === "string" ? item : item.name;
                        let itemLink = "#";
                        if (typeof item === "object" && item.link) {
                          itemLink = item.link;
                        } else if (typeof item === "string") {
                          itemLink = `${content.link}/${itemName
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/&/g, "and")}`;
                        }
                        return (
                          <NavLink
                            key={`mobile-sub-${key}-${index}`}
                            to={itemLink}
                            onClick={handleMobileNavClick}
                            className={({ isActive }) =>
                              `block ${
                                isActive
                                  ? "text-purple-700 font-semibold"
                                  : "text-gray-700"
                              } hover:text-purple-600 hover:font-medium py-1.5 px-3 rounded-md text-sm transition-colors duration-150 ease-in-out`
                            }
                          >
                            {itemName}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <NavLink
              to="/tokenization"
              onClick={handleMobileNavClick}
              className={({ isActive }) =>
                `block ${
                  isActive ? "bg-purple-100 text-purple-700" : "text-[#2A2A2A]"
                } hover:bg-purple-50 hover:text-purple-800 px-3 py-2.5 rounded-md text-base font-medium`
              }
            >
              Tokenization
            </NavLink>
            <NavLink
              to="/careers"
              onClick={handleMobileNavClick}
              className={({ isActive }) =>
                `block ${
                  isActive ? "bg-purple-100 text-purple-700" : "text-[#2A2A2A]"
                } hover:bg-purple-50 hover:text-purple-800 px-3 py-2.5 rounded-md text-base font-medium`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleMobileNavClick}
              className={({ isActive }) =>
                `block ${
                  isActive ? "bg-purple-100 text-purple-700" : "text-[#2A2A2A]"
                } hover:bg-purple-50 hover:text-purple-800 px-3 py-2.5 rounded-md text-base font-medium`
              }
            >
              About Us
            </NavLink>
          </div>

          <div className="flex flex-row justify-between pt-3 p-10 pb-4 space-y-3 border-gray-200 mt-2">
            <div className="flex flex-grow space-x-2">
              <Link
                to="/contact"
                onClick={handleMobileNavClick}
                className="flex-1 text-white text-center bg-[#7A35C1]  hover:bg-purple-800 px-3 py-2.5 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  window.open(
                    "https://calendly.com/business-maxtron/30min",
                    "_blank"
                  );
                  handleMobileNavClick();
                }}
                className="flex-1 text-white bg-gradient-to-r bg-[#7A35C1] hover:from-purple-700 hover:to-indigo-700 px-3 py-2.5 rounded-md text-base font-medium"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
