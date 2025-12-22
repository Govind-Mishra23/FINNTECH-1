import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Avinash V",
      role: "Founder",
      bio: "18 years of rich experience in the banking and lending sector with a proven track record in credit evaluation, structuring, and delivering end-to-end financial solutions for individuals, SMEs, and corporate clients. Known for leadership and strategic approach that drives teams to achieve excellence.",
      expertise: "Secured lending products across diverse segments"
    },
    {
      name: "Sunny Chaurasiya",
      role: "Co-Founder",
      bio: "12 years of dedicated experience in the financial services industry with a strong reputation for delivering well-structured, efficient, and client-focused financial solutions across diverse segments.",
      expertise: "Sales distribution, customer service, and relationship management"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to finding the best financial solutions for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-10 text-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-700 to-gray-800"></div>

                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-700 font-semibold text-xl">{member.role}</p>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6">{member.bio}</p>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Area of Expertise</p>
                  <p className="text-sm text-gray-700 font-medium">{member.expertise}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
