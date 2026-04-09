import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const About = ({ onApplyClick }) => {
  const services = [
    "Home Loans",
    "Mortgages",
    "Debt Consolidation",
    "Structured Finance",
    "Project Finance",
    "Infrastructure Funding",
    "Rental Discounting",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us | Finntech Business Solutions"
        description="Learn about Finntech, a leading financial consultancy in Bangalore with over a decade of experience in Home Loans, Mortgages, and Corporate Finance."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="text-gray-700">Finntech Business Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Finntech Business Solutions is a rising leader in financial
              solutions, offering a comprehensive range of services designed for
              individuals, businesses, and corporates.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Client Content Section - Empowering Financial Futures */}
      <section className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Finntech Business Solutions –{" "}
                <span className="text-gray-700">
                  Empowering Financial Futures
                </span>
              </h2>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Finntech Business Solutions is a{" "}
                  <span className="font-semibold text-gray-900">
                    rising leader in financial solutions
                  </span>
                  , offering a comprehensive range of services designed for
                  individuals, businesses, and corporates. Our areas of
                  expertise includes:
                </p>

                <div className="bg-gray-100 border-l-4 border-gray-700 p-3 sm:p-4 rounded-r-xl">
                  <p className="font-semibold text-gray-900 text-center leading-relaxed text-sm sm:text-base">
                    Home Loans • Mortgages • Debt Consolidation • Structured
                    Finance • Project Finance • Infrastructure Funding • Rental
                    Discounting
                  </p>
                </div>

                <p>
                  With a{" "}
                  <span className="font-semibold text-gray-900">
                    decade of collective experience
                  </span>
                  , we deliver transparent, personalized, and strategic guidance
                  tailored to each client's unique goals. Our proven track
                  record reflects our ability to navigate complex financial
                  landscapes with clarity, professionalism, and confidence.
                </p>

                <p>
                  At Finntech Business Solutions, we are{" "}
                  <span className="font-semibold text-gray-900">
                    passionate about empowering clients
                  </span>
                  —by simplifying complex financial choices into clear,
                  actionable steps. Our team works with commitment and
                  accountability to ensure every recommendation supports real,
                  measurable progress.
                </p>

                <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4 sm:p-6 rounded-xl mt-4 sm:mt-6">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center">
                    Whether you are looking to{" "}
                    <span className="font-bold">secure your dream home</span>,{" "}
                    <span className="font-bold">
                      optimize business financing
                    </span>
                    , or{" "}
                    <span className="font-bold">
                      plan for long-term financial success
                    </span>
                    , Finntech Business Solutions is your trusted partner at
                    every step of the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Decades of Experience, Trusted Expertise
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our advisory approach combines market insight with practical
                execution, helping clients choose the right financial products
                and structure decisions with confidence.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                From first consultation to final disbursal, we focus on clear
                communication, timely support, and solutions aligned with your
                short-term needs and long-term plans.
              </p>
              <div className="bg-gray-700 h-1 w-20 rounded"></div>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  10+
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  Years of Expertise
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  7
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  Service Categories
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  Transparency
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  20+
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  Banking Partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Empowering clients to achieve their financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Empowerment */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FaLightbulb className="text-xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Empowering Clients
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We equip clients with clear comparisons, practical guidance, and
                timely insights so they can make confident financial decisions
                at every stage.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FaChartLine className="text-xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Continuous Growth
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We strengthen our banking partnerships and advisory capabilities
                to offer faster turnarounds, better structuring options, and
                more value for every client engagement.
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FaHandshake className="text-xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Trusted Partnership
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We build lasting relationships through responsive guidance,
                ethical advice, and reliable support across every stage of your
                financial journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Your Financial Success Is Our Priority
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-5 sm:mb-6 leading-relaxed px-2">
            Share your goal with us, and our team will craft a practical,
            transparent roadmap to help you move forward with confidence.
          </p>
          <button
            onClick={onApplyClick}
            className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
