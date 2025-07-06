import React from 'react';

const SocialResponsibility: React.FC = () => {
  const responsibilityAreas = [
    {
      id: 'ai-ethics',
      title: 'Responsible AI Framework',
      description: 'Our comprehensive AI Ethics Framework guides every project, ensuring fairness, transparency, and accountability. We conduct algorithmic audits, bias testing, and impact assessments as standard practice.',
      icon: '🛡️'
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy & Security',
      description: 'We implement privacy-by-design principles with advanced encryption, federated learning, and differential privacy techniques. Our zero-trust security architecture ensures client data remains protected.',
      icon: '🔒'
    },
    {
      id: 'industry-leadership',
      title: 'Industry Leadership',
      description: 'Active participation in AI governance initiatives including the Partnership on AI, IEEE Standards Association, and government advisory committees on responsible AI development.',
      icon: '🏛️'
    },
    {
      id: 'social-impact',
      title: 'AI for Good Initiative',
      description: 'We dedicate 5% of our annual revenue to pro-bono AI projects addressing social challenges in education, healthcare access, and environmental sustainability.',
      icon: '🌍'
    }
  ];

  const impactMetrics = [
    { metric: '25+', label: 'Non-profit Organizations Served' },
    { metric: '5%', label: 'Revenue Dedicated to Social Impact' },
    { metric: '100%', label: 'Projects Include Ethics Review' },
    { metric: '3', label: 'AI Ethics Board Positions' }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            AI Ethics & Responsibility
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Leading the industry in responsible AI development and deployment
          </p>
        </div>

        {/* Responsibility Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {responsibilityAreas.map((area) => (
            <div 
              key={area.id}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-2xl">
                {area.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
              <p className="text-slate-300 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Social Impact
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{metric.metric}</div>
                <div className="text-slate-300 text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🌱
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Environmental Sustainability</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Carbon-neutral operations and AI solutions that help clients reduce their environmental footprint through optimized resource utilization.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🎓
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Education & Accessibility</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Free AI education programs for underserved communities and open-source contributions that democratize access to AI technology.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              ⚖️
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Ethical AI Standards</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Contributing to global AI governance frameworks and maintaining the highest standards of algorithmic fairness and transparency.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Partner with Purpose
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join us in building a future where AI serves humanity's best interests. 
              Let's create solutions that drive business value while making a positive impact on society.
            </p>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 inline-block"
            >
              Start Your Responsible AI Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;
