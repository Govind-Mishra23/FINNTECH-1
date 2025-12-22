// Import loan service images
import HomeLoanImg from "../assets/homeloan.jpeg";
import MortgageLoanImg from "../assets/mortagageloan.jpeg";
import DebtConsolidationImg from "../assets/debtconsolidation.jpeg";
import StructuredFinanceImg from "../assets/structuredfinance.jpeg";
import InfrastructureImg from "../assets/infrastructure.jpeg";
import RentalDiscountingImg from "../assets/rentaldiscounting.jpeg";
import ConstructionFinanceImg from "../assets/constructionfinance.png";

const Services = ({ onApplyClick }) => {
  const financialServices = [
    {
      image: HomeLoanImg,
      title: "Home Loans",
      subtitle: "Competitive rates, flexible EMIs",
    },
    {
      image: MortgageLoanImg,
      title: "Mortgage Loans",
      subtitle: "Attractive rates, minimal docs",
    },
    {
      image: DebtConsolidationImg,
      title: "Debt Consolidation",
      subtitle: "Simplify payments, better terms",
    },
    {
      image: StructuredFinanceImg,
      title: "Structured Finance",
      subtitle: "Customized business solutions",
    },
    {
      image: InfrastructureImg,
      title: "Infra Funding",
      subtitle: "Large-scale project financing",
    },
    {
      image: RentalDiscountingImg,
      title: "Rental Discounting",
      subtitle: "Immediate liquidity solutions",
    },
    {
      image: ConstructionFinanceImg,
      title: "Construction Finance",
      subtitle: "Build Your Vision with Confidence",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Expert Financial Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial consulting services designed to accelerate
            your growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {financialServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Full Card Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Light Blue shade overlay at bottom like reference image */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-400/70 via-blue-300/40 to-transparent"></div>

                {/* Title Section */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 drop-shadow">
                    {service.subtitle}
                  </p>

                  {/* Frosted Glass Button */}
                  <button
                    onClick={() => {
                      console.log(`🔥 Apply clicked for ${service.title}`);
                      if (onApplyClick) {
                        onApplyClick();
                      } else {
                        console.error(
                          "❌ onApplyClick prop not provided to Services"
                        );
                      }
                    }}
                    className="w-full py-2.5 sm:py-3 px-6 rounded-2xl font-semibold text-white bg-white/25 backdrop-blur-md border border-white/30 hover:bg-white/35 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-sm"
                  >
                    Get Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
