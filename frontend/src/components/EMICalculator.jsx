import { useState, useEffect } from "react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [tenureType, setTenureType] = useState("years");
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate EMI
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure, tenureType]);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate);
    const tenure =
      tenureType === "years" ? parseInt(loanTenure) * 12 : parseInt(loanTenure);

    if (principal > 0 && rateOfInterest > 0 && tenure > 0) {
      const monthlyRate = rateOfInterest / 12 / 100;
      const emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);

      const totalPayment = emiValue * tenure;
      const totalInterestPayable = totalPayment - principal;

      setEmi(Math.round(emiValue));
      setTotalInterest(Math.round(totalInterestPayable));
      setTotalAmount(Math.round(totalPayment));
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getPercentageBreakdown = () => {
    const principalPercentage = ((loanAmount / totalAmount) * 100).toFixed(1);
    const interestPercentage = ((totalInterest / totalAmount) * 100).toFixed(1);
    return { principalPercentage, interestPercentage };
  };

  const { principalPercentage, interestPercentage } = getPercentageBreakdown();

  return (
    <section className="min-h-screen flex flex-col justify-center py-4 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900">
            Loan EMI Calculator
          </h2>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Left: Input Controls */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
            {/* Loan Amount */}
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Loan Amount
                </label>
                <span className="text-sm sm:text-lg font-bold text-blue-600">
                  {formatCurrency(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Interest Rate */}
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Interest Rate (p.a.)
                </label>
                <span className="text-sm sm:text-lg font-bold text-blue-600">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Loan Tenure */}
            <div className="mb-2 sm:mb-6">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Loan Tenure
                </label>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg font-bold text-blue-600">
                    {loanTenure}
                  </span>
                  <select
                    value={tenureType}
                    onChange={(e) => setTenureType(e.target.value)}
                    className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 border-0 rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 cursor-pointer focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>
              <input
                type="range"
                min={tenureType === "years" ? "1" : "12"}
                max={tenureType === "years" ? "30" : "360"}
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Number Inputs for Precision - Hidden on mobile */}
            <div className="hidden sm:grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Principal
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(
                      Math.max(100000, Math.min(50000000, e.target.value))
                    )
                  }
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Rate %
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(Math.max(5, Math.min(20, e.target.value)))
                  }
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Tenure
                </label>
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right: Results & Breakdown */}
          <div className="space-y-3 sm:space-y-4">
            {/* EMI Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-white">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium opacity-90">
                  Monthly EMI
                </span>
              </div>
              <div className="text-2xl sm:text-4xl font-bold mb-1">
                {formatCurrency(emi)}
              </div>
              <div className="text-xs opacity-80">
                per month for{" "}
                {tenureType === "years"
                  ? loanTenure + " years"
                  : loanTenure + " months"}
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-white rounded-lg sm:rounded-xl shadow p-3 sm:p-4 border-l-4 border-blue-500">
                <div className="text-xs text-gray-600 mb-1">
                  Principal Amount
                </div>
                <div className="text-sm sm:text-lg font-bold text-gray-900">
                  {formatCurrency(loanAmount)}
                </div>
              </div>

              <div className="bg-white rounded-lg sm:rounded-xl shadow p-3 sm:p-4 border-l-4 border-indigo-500">
                <div className="text-xs text-gray-600 mb-1">Total Interest</div>
                <div className="text-sm sm:text-lg font-bold text-gray-900">
                  {formatCurrency(totalInterest)}
                </div>
              </div>
            </div>

            {/* Total Payment Card */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow p-3 sm:p-4 border-t-4 border-blue-500 flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-600 mb-1">
                  Total Payment
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">
                  {formatCurrency(totalAmount)}
                </div>
              </div>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow p-3 sm:p-4">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden flex">
                <div
                  className="bg-blue-500 h-full"
                  style={{ width: `${principalPercentage}%` }}
                ></div>
                <div
                  className="bg-indigo-500 h-full"
                  style={{ width: `${interestPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-700">Principal {principalPercentage}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                  <span className="text-gray-700">Interest {interestPercentage}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid #2563eb;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid #2563eb;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default EMICalculator;
