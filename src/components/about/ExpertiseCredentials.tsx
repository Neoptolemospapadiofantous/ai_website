import React from 'react';
import { ExpertiseArea } from '../../types/about';

interface ExpertiseCredentialsProps {
  expertiseAreas: ExpertiseArea[];
}

const ExpertiseCredentials: React.FC<ExpertiseCredentialsProps> = ({ expertiseAreas }) => {
  return (
    <section className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Enterprise AI Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Deep technical capabilities and industry specialization that drive transformation
          </p>
        </div>

        {/* Expertise Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area) => (
            <div 
              key={area.id}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-2xl">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{area.description}</p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Partnerships */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications & Partnerships
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Strategic Technology Partners</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Microsoft Azure AI, Google Cloud AI Platform, AWS Machine Learning, NVIDIA AI Enterprise, Databricks
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Industry Certifications</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                ISO 27001, SOC 2 Type II, HIPAA Compliance, FedRAMP Authorization, PCI DSS Level 1
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Thought Leadership</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                50+ peer-reviewed publications, keynote speakers at NeurIPS, ICML, and enterprise AI conferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCredentials;
