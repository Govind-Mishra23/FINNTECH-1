import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const FloatingForm = ({ isOpen, onClose }) => {
  const [applicantType, setApplicantType] = useState("individual");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState("");

  const loanTypes = [
    "Home Loans",
    "Mortgage Loans",
    "Debt Consolidation",
    "Structured Finance",
    "Infra Funding",
    "Rental Discounting",
    "Construction Finance",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Force lowercase for email
    const finalValue = name === "email" ? value.toLowerCase() : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please fill out this field.";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.loanType) {
      newErrors.loanType = "Please select a loan type.";
    }

    if (applicantType === "company" && !formData.company.trim()) {
      newErrors.company = "Please enter your company name.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send data to backend API
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(
        `${API_URL}/api/send-consultation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            applicantType,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Show success message
        setSubmitStatus("success");
        setSubmitMessage(
          data.message ||
          "Consultation request submitted successfully! Our team will contact you within 24 hours."
        );

        // Reset form immediately
        setFormData({
          name: "",
          phone: "",
          email: "",
          loanType: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to submit");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error.message ||
        "There was an error submitting your request. Please try again."
      );

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-3 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl animate-in slide-in-from-bottom-8 duration-300 my-auto flex flex-col max-h-[85vh] sm:max-h-[90vh] relative">

        {/* Success/Error Modal Overlay */}
        {submitStatus && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 rounded-2xl sm:rounded-3xl flex items-center justify-center p-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center max-w-md">
              {submitStatus === "success" ? (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in-95 duration-500">
                    <FaCheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Success!</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{submitMessage}</p>
                  <button
                    onClick={() => {
                      setSubmitStatus(null);
                      onClose();
                    }}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in-95 duration-500">
                    <FaTimesCircle className="w-12 h-12 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Oops!</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{submitMessage}</p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Try Again
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-t-2xl sm:rounded-t-3xl flex-shrink-0">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                Loan Application
              </h2>
              <p className="text-white/80 text-xs hidden sm:block">
                Quick & Secure Process
              </p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (onClose) onClose();
              }}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 flex-1 overflow-y-auto custom-scrollbar"
        >
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-2 bg-gray-100 p-1 rounded-full relative">
            <button
              type="button"
              onClick={() => setApplicantType("individual")}
              className={`flex-1 py-1.5 px-3 sm:px-5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ease-in-out relative z-10 ${applicantType === "individual"
                ? "text-gray-900 font-bold"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setApplicantType("company")}
              className={`flex-1 py-1.5 px-3 sm:px-5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ease-in-out relative z-10 ${applicantType === "company"
                ? "text-gray-900 font-bold"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              Company
            </button>
            {/* Sliding background */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${applicantType === "individual"
                ? "left-1"
                : "left-[calc(50%+4px)]"
                }`}
            />
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
              {applicantType === "individual" ? "Full Name" : "Enter Your Name"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl border transition-all duration-200 ${errors.name
                ? "border-red-500 bg-red-50 focus:ring-red-500/20"
                : "border-gray-200 focus:border-gray-500 focus:ring-4 focus:ring-gray-500/10"
                } outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                <span>⚠</span> {errors.name}
              </p>
            )}
          </div>

          {/* Company Name (only for company applicants) */}
          {applicantType === "company" && (
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl border transition-all duration-200 ${errors.company
                  ? "border-red-500 bg-red-50 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-gray-500 focus:ring-4 focus:ring-gray-500/10"
                  } outline-none`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.company}
                </p>
              )}
            </div>
          )}

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Phone Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl border transition-all duration-200 ${errors.phone
                  ? "border-red-500 bg-red-50 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-gray-500 focus:ring-4 focus:ring-gray-500/10"
                  } outline-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.phone}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl border transition-all duration-200 ${errors.email
                  ? "border-red-500 bg-red-50 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-gray-500 focus:ring-4 focus:ring-gray-500/10"
                  } outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Loan Type Selection */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
              Loan Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleInputChange}
                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl border transition-all duration-200 appearance-none cursor-pointer ${errors.loanType
                  ? "border-red-500 bg-red-50 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-gray-500 focus:ring-4 focus:ring-gray-500/10"
                  } outline-none`}
              >
                <option value="">Select loan type</option>
                {loanTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.loanType && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                <span>⚠</span> {errors.loanType}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
              Additional Information{" "}
              <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={2}
              className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg sm:rounded-xl border transition-all duration-200 resize-none ${errors.message
                ? "border-red-500 bg-red-50 focus:ring-red-500/20"
                : "border-gray-200 focus:border-gray-500 focus:ring-4 focus:ring-gray-500/10"
                } outline-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                <span>⚠</span> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 sm:py-2.5 px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 ${isSubmitting
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FloatingForm;
