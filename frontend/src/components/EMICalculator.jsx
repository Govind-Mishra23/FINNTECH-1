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
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            Loan EMI Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">Plan your finances with precision</p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left: Input Controls */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 shadow-2xl">
            {/* Loan Amount */}
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <label className="text-sm sm:text-base font-medium text-slate-300">
                  Loan Amount
                </label>
                <span className="text-lg sm:text-2xl font-bold text-emerald-400">
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
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-emerald"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>₹1L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <label className="text-sm sm:text-base font-medium text-slate-300">
                  Interest Rate (p.a.)
                </label>
                <span className="text-lg sm:text-2xl font-bold text-amber-400">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-amber"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <label className="text-sm sm:text-base font-medium text-slate-300">
                  Loan Tenure
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-2xl font-bold text-cyan-400">
                    {loanTenure}
                  </span>
                  <select
                    value={tenureType}
                    onChange={(e) => setTenureType(e.target.value)}
                    className="text-sm font-medium text-cyan-400 bg-slate-700/50 border border-slate-600 rounded-lg px-2 py-1 cursor-pointer focus:ring-2 focus:ring-cyan-500 focus:outline-none"
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
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-cyan"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>{tenureType === "years" ? "1 Yr" : "12 Mo"}</span>
                <span>{tenureType === "years" ? "30 Yrs" : "360 Mo"}</span>
              </div>
            </div>

            {/* Number Inputs for Precision - Hidden on mobile */}
            <div className="hidden sm:grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Principal (₹)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(
                      Math.max(100000, Math.min(50000000, e.target.value))
                    )
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Rate (%)
                </label>
                <input
                  type="number"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(Math.max(5, Math.min(20, e.target.value)))
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Tenure
                </label>
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right: Results & Breakdown */}
          <div className="space-y-4 sm:space-y-5">
            {/* EMI Card - Hero style */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-100 font-medium text-sm sm:text-base">
                    Monthly EMI
                  </span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    {tenureType === "years" ? loanTenure + " Years" : loanTenure + " Months"}
                  </span>
                </div>
                <div className="text-3xl sm:text-5xl font-bold text-white mb-1">
                  {formatCurrency(emi)}
                </div>
                <div className="text-emerald-100/80 text-sm">
                  payable monthly
                </div>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-emerald-500/30 hover:border-emerald-400/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">Principal</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {formatCurrency(loanAmount)}
                </div>
                <div className="text-xs text-emerald-400 mt-1">{principalPercentage}%</div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-amber-500/30 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">Total Interest</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {formatCurrency(totalInterest)}
                </div>
                <div className="text-xs text-amber-400 mt-1">{interestPercentage}%</div>
              </div>
            </div>

            {/* Total Payment Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-600">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Total Payment</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {formatCurrency(totalAmount)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 mb-1">Interest Cost</div>
                  <div className="text-lg sm:text-xl font-semibold text-amber-400">
                    +{formatCurrency(totalInterest)}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700">
              <div className="text-xs text-slate-400 mb-3">Payment Breakdown</div>
              <div className="h-4 w-full bg-slate-700 rounded-full overflow-hidden flex">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full transition-all duration-500"
                  style={{ width: `${principalPercentage}%` }}
                ></div>
                <div
                  className="bg-gradient-to-r from-amber-500 to-amber-400 h-full transition-all duration-500"
                  style={{ width: `${interestPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-sm"></div>
                  <span className="text-xs text-slate-300">Principal {principalPercentage}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-400 rounded-sm"></div>
                  <span className="text-xs text-slate-300">Interest {interestPercentage}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider-emerald::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #10b981, #059669);
          border: 3px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
          transition: all 0.2s;
        }
        .slider-emerald::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5);
        }
        .slider-amber::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border: 3px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
          transition: all 0.2s;
        }
        .slider-amber::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(245, 158, 11, 0.5);
        }
        .slider-cyan::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          border: 3px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
          transition: all 0.2s;
        }
        .slider-cyan::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(6, 182, 212, 0.5);
        }
        
        /* Firefox */
        .slider-emerald::-moz-range-thumb {
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #10b981, #059669);
          border: 3px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }
        .slider-amber::-moz-range-thumb {
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border: 3px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }
        .slider-cyan::-moz-range-thumb {
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          border: 3px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
        }
      `}</style>
    </section>
  );
};

export default EMICalculator;
