const CTA = ({ onApplyClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Your Loan Approved?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who got their loans approved
          through our expert consultation and bank partnerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("🚀 CTA Apply for Loan Now clicked!");
              if (onApplyClick) {
                onApplyClick();
              } else {
                console.error("❌ onApplyClick prop not provided to CTA");
              }
            }}
            className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg"
          >
            Apply for Loan Now
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("🚀 CTA Free Consultation clicked!");
              if (onApplyClick) {
                onApplyClick();
              } else {
                console.error("❌ onApplyClick prop not provided to CTA");
              }
            }}
            className="border border-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors"
          >
            Get Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
