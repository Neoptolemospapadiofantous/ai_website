import React from 'react';
import { TeamMember } from '../../types/about';
import { ExternalLink } from 'lucide-react';

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Leadership Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proven executives combining deep AI expertise with enterprise transformation experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-blue-500/30 hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
              
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold hidden"
                  >
                    {member.initials || member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-blue-400 font-semibold mb-4">{member.role}</div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              
              {member.credentials && (
                <p className="text-slate-400 text-xs italic mb-4">
                  {member.credentials}
                </p>
              )}

              {/* Expertise Tags */}
              {member.expertise && member.expertise.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.expertise.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* LinkedIn Link */}
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Company Culture Highlights */}
        <div className="mt-16 bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Team & Culture
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-slate-300 font-medium mb-2">AI Specialists</div>
              <p className="text-slate-400 text-sm">
                Top 1% of global AI talent with advanced degrees and industry experience
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
              <div className="text-slate-300 font-medium mb-2">Retention Rate</div>
              <p className="text-slate-400 text-sm">
                Industry-leading retention through continuous learning and growth opportunities
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-slate-300 font-medium mb-2">Countries</div>
              <p className="text-slate-400 text-sm">
                Global diversity with 40% women in technical roles, above industry average
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
