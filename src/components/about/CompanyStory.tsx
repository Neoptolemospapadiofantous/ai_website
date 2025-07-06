import React from 'react';

interface CompanyStoryProps {
  title: string;
  content: string[];
}

const CompanyStory: React.FC<CompanyStoryProps> = ({ title, content }) => {
  return (
    <section className="py-20 px-4 bg-slate-900/30 backdrop-blur-sm border-y border-slate-700/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h2>
        </div>
        
        <div className="space-y-8">
          {content.map((paragraph, index) => (
            <div key={index} className="relative">
              <p className="text-lg text-slate-300 leading-relaxed">
                {paragraph}
              </p>
              {index === 0 && (
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">2019</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Founded</h3>
            <p className="text-slate-400">Identified enterprise AI gap and assembled world-class team</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">2021</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Breakthrough</h3>
            <p className="text-slate-400">$50M savings for Fortune 100 client established our reputation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">2024</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Industry Leader</h3>
            <p className="text-slate-400">200+ Fortune 1000 clients and industry-standard framework</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
