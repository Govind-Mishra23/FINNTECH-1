import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const FloatingActionButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Desktop Tooltip */}
      {isHovered && (
        <div className="hidden md:block absolute bottom-full right-0 mb-3 px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm rounded-xl whitespace-nowrap z-10 shadow-2xl border border-gray-700">
          <div className="flex items-center space-x-2">
            <FaFileAlt className="text-blue-400" />
            <span className="font-medium">Apply for Loan Now</span>
          </div>
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}

      {/* Main Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick) {
            onClick();
          }
        }}
        className="relative text-white rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af)"
            : "linear-gradient(135deg, #2563eb, #1d4ed8)",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(37, 99, 235, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)"
            : "0 25px 50px -12px rgba(37, 99, 235, 0.25)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mobile View - Compact Button with Text */}
        <div className="flex md:hidden items-center space-x-2 px-4 py-3">
          <FaFileAlt className="w-5 h-5" />
          <span className="text-sm font-bold">Apply Now</span>
        </div>

        {/* Desktop View - Extended Button */}
        <div className="hidden md:flex items-center space-x-3 px-6 py-4">
          <FaFileAlt className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-bold leading-tight">Apply Now</span>
            <span className="text-xs leading-tight text-blue-100">Get Loan</span>
          </div>
          <svg
            className="w-4 h-4 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Shiny Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 rounded-2xl"></div>

        {/* Pulse Animation on Mobile */}
        <div className="absolute inset-0 md:hidden rounded-2xl animate-pulse bg-blue-400/20"></div>
      </button>
    </div>
  );
};

export default FloatingActionButton;
