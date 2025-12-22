import hero1Banner from "../assets/hero1.png";
import { FaCheckCircle } from "react-icons/fa";

const Hero = ({ onApplyClick }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen overflow-hidden"
      style={{ backgroundImage: `url(${hero1Banner})` }}
    >
      {/* Subtle gradient overlay on left side only */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent lg:via-slate-900/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content container - left side */}
          <div className="text-center lg:text-left space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-white block" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.5)' }}>
                  Expert Financial
                </span>
                <span className="text-white block text-5xl sm:text-6xl lg:text-7xl" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.5)' }}>
                  Consultancy
                </span>
                <span className="text-white block text-2xl sm:text-3xl lg:text-4xl mt-2 font-semibold" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.5)' }}>
                  for Individuals & Businesses
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-xl" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
              Partnered with leading banks to deliver end-to-end secured loan solutions. We simplify financing by offering optimal loan quantum with clarity, trust, and expertise.
            </p>

            <div className="pt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("🎆 Hero Apply for Loan clicked!");
                  if (onApplyClick) {
                    onApplyClick();
                  } else {
                    console.error("❌ onApplyClick prop not provided to Hero");
                  }
                }}
                className="group relative bg-slate-900 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-2xl hover:shadow-slate-500/50 hover:scale-105 transform border border-slate-700"
              >
                <span className="relative z-10 text-amber-50">Apply for Loan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <FaCheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-white font-medium text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>No processing fees</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <FaCheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-white font-medium text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Quick approvals</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                <FaCheckCircle className="w-5 h-5 text-amber-400 mr-2" />
                <span className="text-white font-medium text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Expert guidance</span>
              </div>
            </div>
          </div>

          {/* Right side - empty to show the background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
