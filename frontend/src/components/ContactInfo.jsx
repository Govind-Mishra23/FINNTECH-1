const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Contact Information
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center">
          <span className="text-blue-600 mr-3">📍</span>
          <div>
            <p className="font-medium text-gray-900">Office Address</p>
            <p className="text-gray-600">
              775/A, 4th Floor, 9th A Main, 1st Stage, Indiranagar
            </p>
            <p className="text-gray-600">
              Above Anglo American Opticals, Bangalore - 560038
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-blue-600 mr-3">🕒</span>
          <div>
            <p className="font-medium text-gray-900">Business Hours</p>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-blue-600 mr-3">⚡</span>
          <div>
            <p className="font-medium text-gray-900">Response Time</p>
            <p className="text-gray-600">We respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
