import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-blue-400 mb-3">
              Finntech Business Solutions
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Expert financial consultancy services tied up with all leading
              banks.
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:info@finntechbs.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Email Us"
              >
                <FaEnvelope className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://finntechbs.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
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
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Mortgage Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Debt Consolidation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Structured Finance
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
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
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
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0 text-xs" />
                <span>Indiranagar, Bangalore - 560038</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-400 flex-shrink-0 text-xs" />
                <a
                  href="mailto:info@finntechbs.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@finntechbs.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-blue-400 flex-shrink-0 text-xs" />
                <a
                  href="tel:9844208555"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 9844208555
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="text-gray-400">
            © 2025 Finntech Business Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
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
