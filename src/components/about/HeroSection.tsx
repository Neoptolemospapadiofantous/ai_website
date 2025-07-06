import React from 'react';
import { CompanyMetrics } from '../../types/about';

interface HeroSectionProps {
  headline: string;
  tagline: string;
  description: string;
  metrics: CompanyMetrics;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, tagline, description, metrics }) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-950/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-4xl mx-auto font-medium">
            {tagline}
          </p>
          <p className="text-lg text-slate-300 max-w-5xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Key Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {metrics.yearsInBusiness}+
            </div>
            <div className="text-slate-400 text-sm md:text-base font-medium">
              Years Enterprise Focus
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {metrics.clientsServed}+
            </div>
            <div className="text-slate-400 text-sm md:text-base font-medium">
              Fortune 1000 Clients
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {metrics.averageROI}%
            </div>
            <div className="text-slate-400 text-sm md:text-base font-medium">
              Average ROI Delivered
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {metrics.successRate}%
            </div>
            <div className="text-slate-400 text-sm md:text-base font-medium">
              Project Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
