import React from 'react';
import { CaseStudy, Testimonial } from '../../types/about';

interface ClientImpactProps {
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
}

const ClientImpact: React.FC<ClientImpactProps> = ({ caseStudies, testimonials }) => {
  return (
    <section className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transformational results across industries and use cases
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                  {caseStudy.icon}
                </div>
                <div>
                  <div className="text-blue-400 font-semibold text-sm">{caseStudy.industry}</div>
                  <div className="text-slate-300 font-medium">{caseStudy.company}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{caseStudy.title}</h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center p-3 bg-blue-500/10 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{result.metric}</div>
                    <div className="text-xs text-slate-400">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-slate-300 text-sm italic mb-2">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="text-slate-400 text-xs font-medium">
                    — {caseStudy.testimonial.author}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="text-blue-400 text-2xl mb-2">"</div>
                  <p className="text-slate-300 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  <div className="text-slate-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact Summary */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Industry Impact
          </h3>
          
          <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
            Our solutions serve clients across Manufacturing (32%), Financial Services (28%), 
            Healthcare (18%), Retail (12%), and Energy (10%) sectors, delivering consistent 
            value across diverse industry challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/case-studies"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View All Case Studies
            </a>
            <a 
              href="/testimonials"
              className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Read Client Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientImpact;
