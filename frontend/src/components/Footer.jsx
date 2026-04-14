import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

const Footer = () => {
  const developerContactUrl = "https://mukundawebs.com";

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-gray-300 mb-3">
              Finntech Business Solutions
            </div>
            <div className="flex space-x-3">
              <a
                href="mailto:avinash@finntechbs.com"
                className="text-gray-400 hover:text-white transition-colors"
                title="Email Us"
              >
                <FaEnvelope className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                title="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://finntechbs.com"
                className="text-gray-400 hover:text-white transition-colors"
                title="Website"
              >
                <FaGlobe className="text-lg" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mortgage Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Debt Consolidation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Structured Finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Construction Finance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-gray-300 mt-1 flex-shrink-0 text-xs" />
                <div className="leading-relaxed">
                  <span className="block">775/A, 4th Floor, 9th A Main,</span>
                  <span className="block">1st Stage, Indiranagar</span>
                  <span className="block">Above Anglo American Opticals.</span>
                  <span className="block">Bangalore - 560038</span>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-300 flex-shrink-0 text-xs" />
                <a
                  href="mailto:avinash@finntechbs.com"
                  className="hover:text-white transition-colors"
                >
                  ⁠info@finntechbs.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-300 flex-shrink-0 text-xs" />
                <a
                  href="tel:080 - 49775014"
                  className="hover:text-white transition-colors"
                >
                  080 - 49775014
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Marketing Strip */}
        <div className="border-y border-gray-800 bg-gray-800/40">
          <div className="px-4 py-4 sm:px-0">
            <div className="mx-auto flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center md:w-1/2">
              <a
                href={developerContactUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-gray-700/40 px-5 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-gray-500 hover:bg-gray-700 hover:text-white"
              >
                Contact Developer
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
              </a>
              <p className="text-right text-sm text-gray-400">
                Marketing partner and digital growth contact
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="text-gray-400">
            © 2020 Finntech Business Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
