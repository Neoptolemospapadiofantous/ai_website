import React from 'react';
import { CoreValue } from '../../types/about';

interface MissionVisionValuesProps {
  mission: string | { statement: string };
  vision: string | { statement: string };
  values: CoreValue[];
}

const MissionVisionValues: React.FC<MissionVisionValuesProps> = ({ mission, vision, values }) => {
  // Helper function to extract string from mission/vision
  const extractText = (text: string | { statement: string }): string => {
    return typeof text === 'string' ? text : text.statement;
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Foundation
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The principles that guide our enterprise partnerships and drive our innovation
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              {extractText(mission)}
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🚀
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              {extractText(vision)}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Values</h3>
          <div className="space-y-6">
            {values.map((value) => (
              <div 
                key={value.id} 
                className="flex items-start gap-6 p-6 bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
