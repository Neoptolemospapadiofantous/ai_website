import React from 'react';
import { Differentiator } from '../../types/about';

interface DifferentiatorsProps {
  differentiators: Differentiator[];
}

const Differentiators: React.FC<DifferentiatorsProps> = ({ differentiators }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Unique advantages that make us the preferred enterprise AI transformation partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((differentiator, index) => (
            <div 
              key={differentiator.id}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {differentiator.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {differentiator.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {differentiator.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Discover how our unique approach to enterprise AI transformation can accelerate 
              your competitive advantage and deliver measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                Explore Our Services
              </a>
              <a 
                href="/contact"
                className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
