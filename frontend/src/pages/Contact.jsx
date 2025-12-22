import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = ({ onApplyClick, navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onApplyClick={onApplyClick}
        navigateTo={navigateTo}
        currentPage="contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your loan requirements? Get in touch with our expert team.
          </p>
        </div>

        {/* Contact Information Cards - Clean & Simple */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
          {/* Phone Card */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-gray-400 hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhoneAlt className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Call Us</h3>
              <a
                href="tel:9844208555"
                className="text-xl font-semibold text-gray-800 hover:text-gray-900 transition-colors block mb-2"
              >
                +91 9844208555
              </a>
              <p className="text-sm text-gray-500">Mon-Sat: 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-gray-400 hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email Us</h3>
              <a
                href="mailto:v.avinash@hotmail.com"
                className="text-lg font-semibold text-gray-800 hover:text-gray-900 transition-colors block mb-2 break-all"
              >
                v.avinash@hotmail.com
              </a>
              <p className="text-sm text-gray-500">24/7 Email Support</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-gray-400 hover:shadow-md transition-all duration-300 md:col-span-3 lg:col-span-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Visit Us</h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-900 mb-1">Finntech Business Solutions</p>
                <p>775/A, 4th Floor, 9th A Main</p>
                <p>1st Stage, Indiranagar</p>
                <p>Above Anglo American Opticals</p>
                <p className="font-semibold text-gray-900 mt-2">Bangalore - 560038</p>
                <p>Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Google Map - Takes 3 columns */}
          <div className="lg:col-span-3 bg-white border border-gray-200 p-3 rounded-xl shadow-sm">
            <div className="h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8326742516634!2d77.64087467507587!3d12.978197587339837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x14d10f3a5c9b4e97!2s9th%20A%20Main%20Rd%2C%201st%20Stage%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Finntech Business Solutions Location"
              ></iframe>
            </div>
          </div>

          {/* Why Choose Us - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 leading-relaxed">Free initial consultation with expert advisors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 leading-relaxed">Partnership with 20+ leading banks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 leading-relaxed">Fast processing and quick approval</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 leading-relaxed">No hidden charges or processing fees</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="ml-3 text-gray-700 leading-relaxed">Dedicated support throughout the process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
