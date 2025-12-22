import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-white mb-3 tracking-tight">
              Finntech Business Solutions
            </div>
            <div className="flex space-x-3">
              <a
                href="mailto:info@finntechbs.com"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                title="Email Us"
              >
                <FaEnvelope className="text-lg" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                title="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://finntechbs.com"
                className="text-slate-400 hover:text-amber-400 transition-colors"
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
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Home Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Mortgage Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Debt Consolidation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Structured Finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
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
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
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
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0 text-xs" />
                <div className="leading-relaxed">
                  <span className="block text-slate-300">775/A, 4th Floor, 9th A Main,</span>
                  <span className="block text-slate-300">1st Stage, Indiranagar</span>
                  <span className="block text-slate-300">Above Anglo American Opticals.</span>
                  <span className="block text-slate-300">Bangalore - 560038</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-400 flex-shrink-0 text-xs" />
                <a
                  href="mailto:info@finntechbs.com"
                  className="hover:text-amber-400 transition-colors text-slate-300"
                >
                  info@finntechbs.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-amber-400 flex-shrink-0 text-xs" />
                <a
                  href="tel:9844208555"
                  className="hover:text-amber-400 transition-colors text-slate-300"
                >
                  +91 9844208555
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="text-slate-500">
            © 2025 Finntech Business Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
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
