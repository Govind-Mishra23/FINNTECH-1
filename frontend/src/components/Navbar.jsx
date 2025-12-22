import { useState } from "react";
import {
  FaHome,
  FaBriefcase,
  FaInfoCircle,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../assets/logo1.png";

const Navbar = ({ onApplyClick, navigateTo, currentPage = "home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Company Logo (Mobile Only) */}
        <div className="md:hidden border-b border-gray-100 py-2 flex justify-center items-center gap-2">
          <img src={Logo} alt="Finntech Business Solutions" className="h-10" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 leading-tight">
              Finntech
            </span>
            <span className="text-xs font-semibold text-slate-500 leading-tight">
              BUSINESS SOLUTION
            </span>
          </div>
        </div>

        {/* Second Row - Main Navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-center gap-2">
            <img
              src={Logo}
              alt="Finntech Business Solutions"
              className="h-20"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800 leading-tight">
                Finntech
              </span>
              <span className="text-sm font-semibold text-slate-500 leading-tight">
                BUSINESS SOLUTION
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => {
                  console.log("🔗 Navigating to Home page");
                  if (navigateTo) {
                    navigateTo("home");
                  }
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === "home"
                    ? "text-slate-900 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  console.log("🔗 Navigating to Loan Services page");
                  if (navigateTo) {
                    navigateTo("loanservices");
                  }
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === "loanservices"
                    ? "text-slate-900 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                Loan Services
              </button>
              <button
                onClick={() => {
                  console.log("🔗 Navigating to About page");
                  if (navigateTo) {
                    navigateTo("about");
                  }
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === "about"
                    ? "text-slate-900 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  console.log("🔗 Navigating to Contact page");
                  if (navigateTo) {
                    navigateTo("contact");
                  }
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${currentPage === "contact"
                    ? "text-slate-900 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:9844208555"
              className="flex items-center space-x-2 text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              <FaPhoneAlt className="w-5 h-5" />
              <span>9844208555</span>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (onApplyClick) {
                  onApplyClick();
                }
              }}
              className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl border border-slate-700"
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile menu button and phone */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a
              href="tel:9844208555"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
            >
              <FaPhoneAlt className="w-4 h-4" />
              9844208555
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-gray-500 hover:text-gray-600 focus:outline-none transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gradient-to-b from-blue-50 to-white border-t border-gray-200 absolute top-24 left-0 right-0 shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-1">
          <button
            onClick={() => {
              console.log("📱 Mobile navigating to Home page");
              if (navigateTo) {
                navigateTo("home");
              }
              setIsMenuOpen(false);
            }}
            className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-200 flex items-center gap-2 ${currentPage === "home"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
          >
            <FaHome className="w-5 h-5" />
            <span>Home</span>
          </button>
          <button
            onClick={() => {
              console.log("📱 Mobile navigating to Loan Services page");
              if (navigateTo) {
                navigateTo("loanservices");
              }
              setIsMenuOpen(false);
            }}
            className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-200 flex items-center gap-2 ${currentPage === "loanservices"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
          >
            <FaBriefcase className="w-5 h-5" />
            <span>Loan Services</span>
          </button>
          <button
            onClick={() => {
              console.log("📱 Mobile navigating to About page");
              if (navigateTo) {
                navigateTo("about");
              }
              setIsMenuOpen(false);
            }}
            className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-200 flex items-center gap-2 ${currentPage === "about"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
          >
            <FaInfoCircle className="w-5 h-5" />
            <span>About</span>
          </button>
          <button
            onClick={() => {
              console.log("📱 Mobile navigating to Contact page");
              if (navigateTo) {
                navigateTo("contact");
              }
              setIsMenuOpen(false);
            }}
            className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-200 flex items-center gap-2 ${currentPage === "contact"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
          >
            <FaPhone className="w-5 h-5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
