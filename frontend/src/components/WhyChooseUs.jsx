import React from 'react';
import { FaHandshake, FaClock, FaPercent, FaUserShield } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaHandshake className="w-8 h-8 text-blue-600" />,
            title: "Trusted Partners",
            description: "Official partners with 25+ leading banks and NBFCs ensuring you get the best deals."
        },
        {
            icon: <FaClock className="w-8 h-8 text-blue-600" />,
            title: "Quick Approval",
            description: "Streamlined process with minimal documentation for fastest loan sanctions."
        },
        {
            icon: <FaPercent className="w-8 h-8 text-blue-600" />,
            title: "Lowest Interest Rates",
            description: "We negotiate with banks to get you the most competitive interest rates in the market."
        },
        {
            icon: <FaUserShield className="w-8 h-8 text-blue-600" />,
            title: "100% Transparency",
            description: "No hidden charges or surprise fees. We believe in complete honesty with our clients."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Finntech?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We don't just process loans; we build financial futures. Here is why thousands trust us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
