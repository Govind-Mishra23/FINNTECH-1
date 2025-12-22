import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle, FaChartLine, FaShieldAlt } from "react-icons/fa";
import ServiceBanner from "../assets/ServiceBanner.png";
import EMICalculator from "../components/EMICalculator";

// Import loan service images
import HomeLoanImg from "../assets/homeloan.jpeg";
import MortgageLoanImg from "../assets/mortagageloan.jpeg";
import DebtConsolidationImg from "../assets/debtconsolidation.jpeg";
import StructuredFinanceImg from "../assets/structuredfinance.jpeg";
import InfrastructureImg from "../assets/infrastructure.jpeg";
import RentalDiscountingImg from "../assets/rentaldiscounting.jpeg";
import ConstructionFinanceImg from "../assets/constructionfinance.png";

const LoanServices = ({ onApplyClick, navigateTo }) => {
  const loanServices = [
    {
      image: HomeLoanImg,
      title: "Home Loans",
      subtitle: "Your Dream Home Awaits",
      description:
        "Transform your dream of homeownership into reality with our comprehensive home loan solutions. We partner with leading banks to offer competitive interest rates and flexible repayment options.",
      keyBenefits: [
        "Competitive interest rates and flexible terms",
        "High loan-to-value ratio for maximum financing",
        "Quick processing with minimal paperwork",
      ],
    },
    {
      image: MortgageLoanImg,
      title: "Mortgage Loans",
      subtitle: "Unlock Your Property's Value",
      description:
        "Leverage the equity in your property to meet urgent financial needs without selling your valuable assets. Get immediate liquidity with flexible terms tailored to your requirements.",
      keyBenefits: [
        "Loan against residential and commercial properties",
        "Attractive rates compared to unsecured loans",
        "Minimal processing charges and transparent pricing",
      ],
    },
    {
      image: DebtConsolidationImg,
      title: "Debt Consolidation",
      subtitle: "Simplify Your Financial Life",
      description:
        "Combine all your existing loans into a single, manageable EMI with potentially lower interest rates. Simplify your monthly payments and improve your overall financial health.",
      keyBenefits: [
        "Single EMI instead of multiple payments",
        "Potential for reduced overall interest burden",
        "Improved credit score through timely payments",
      ],
    },
    {
      image: StructuredFinanceImg,
      title: "Structured Finance",
      subtitle: "Customized Corporate Solutions",
      description:
        "Bespoke financial instruments tailored to your business's unique capital structure and strategic objectives. From project financing to acquisition funding, we optimize your financial leverage.",
      keyBenefits: [
        "Customized financial structures for business needs",
        "Access to diverse funding sources",
        "Risk mitigation through innovative structuring",
      ],
    },
    {
      image: InfrastructureImg,
      title: "Infrastructure Funding",
      subtitle: "Building Tomorrow's Foundation",
      description:
        "Long-term capital solutions for infrastructure development. Support for government and private sector projects across transportation, energy, utilities, and social infrastructure.",
      keyBenefits: [
        "Large-ticket project funding capabilities",
        "Flexible disbursement aligned with milestones",
        "Access to government schemes and funding",
      ],
    },
    {
      image: RentalDiscountingImg,
      title: "Rental Discounting",
      subtitle: "Convert Future Income to Immediate Capital",
      description:
        "Convert your future rental receivables into immediate working capital. Access a lump sum upfront by discounting your rental agreements without selling your property.",
      keyBenefits: [
        "Immediate liquidity against future rental income",
        "Competitive discounting rates",
        "Retain property ownership and appreciation",
      ],
    },
    {
      image: ConstructionFinanceImg,
      title: "Construction Finance",
      subtitle: "Build Your Vision with Confidence",
      description:
        "Comprehensive construction financing solutions for residential, commercial, and industrial projects. Get stage-wise disbursement aligned with project milestones and competitive rates.",
      keyBenefits: [
        "Stage-wise disbursement based on construction progress",
        "Financing for residential and commercial projects",
        "Flexible repayment options post-construction",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onApplyClick={onApplyClick}
        navigateTo={navigateTo}
        currentPage="loanservices"
      />

      {/* hero1 Section with Banner Image */}
      <section
        className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${ServiceBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-gray-700/60 z-0"></div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Comprehensive Loan Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-md">
              Tailored financial services partnered with leading banks to make
              your aspirations a reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onApplyClick}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Comprehensive Loan Solutions
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Detailed analysis of our financial services designed to meet your
              unique requirements. Each solution is crafted with transparency,
              expertise, and your financial success in mind.
            </p>
          </div>

          <div className="space-y-8">
            {loanServices.map((service, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < loanServices.length - 1 && (
                  <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-gray-200 transform -translate-x-1/2 z-0"></div>
                )}

                {/* Service Card */}
                <div
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden lg:max-w-4xl ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div
                      className={`lg:col-span-1 relative overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                        }`}
                    >
                      <div className="relative h-64 lg:h-full min-h-[300px]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 to-gray-800/30"></div>

                        {/* Title Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <div className="mb-2">
                            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                              Service {index + 1} of {loanServices.length}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            {service.title}
                          </h3>
                          <p className="text-base text-white/95 drop-shadow-md">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={`lg:col-span-1 p-6 lg:p-7 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                        }`}
                    >
                      {/* Overview */}
                      <div className="mb-5">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <FaChartLine className="text-gray-700 mr-2 text-lg" />
                          Overview
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-5">
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <FaShieldAlt className="text-gray-700 mr-2 text-base" />
                          Key Benefits
                        </h4>
                        <div className="space-y-2">
                          {service.keyBenefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <FaCheckCircle className="text-gray-700 mt-0.5 flex-shrink-0 text-sm" />
                              <span className="text-gray-700 leading-relaxed text-sm">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-gray-200">
                        <button
                          onClick={onApplyClick}
                          className="w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-semibold text-base hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <EMICalculator />

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Finntech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for hassle-free loan approvals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Partnered with All Major Banks
              </h3>
              <p className="text-gray-600">
                Access to 20+ leading financial institutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Approval</h3>
              <p className="text-gray-600">
                Get loan approval in as fast as 48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Minimal Documentation
              </h3>
              <p className="text-gray-600">
                Simple process with reduced paperwork
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Dedicated support throughout the process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experts help you find the perfect loan solution tailored to
            your needs
          </p>
          <button
            onClick={onApplyClick}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanServices;
