import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Mail, Phone, MapPin, ArrowRight, Sparkles, Brain, Zap, Shield, Globe, TrendingUp, Heart, Lightbulb, CheckCircle } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher at Google with 12+ years in machine learning and enterprise solutions. Led teams that deployed AI systems serving millions of users.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Microsoft Principal Engineer specializing in scalable AI infrastructure. Built systems processing 100M+ daily transactions with 99.99% uptime.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Computer Science from Stanford. Published 50+ papers on conversational AI and natural language processing. Former OpenAI research scientist.",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "David Kim",
      role: "VP of Engineering",
      bio: "15+ years building enterprise software at scale. Led engineering teams at Uber and Airbnb, specializing in real-time systems and microservices architecture.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const companyValues: CompanyValue[] = [
    {
      id: 1,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "Human-Centered AI",
      description: "Our AI solutions are designed to augment human capabilities, not replace them. We believe in technology that empowers people and organizations.",
      icon: Heart
    },
    {
      id: 3,
      title: "Ethical Excellence",
      description: "We maintain the highest standards of ethics in AI development, ensuring our solutions are fair, transparent, and beneficial to society.",
      icon: Shield
    },
    {
      id: 4,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering measurable value and building long-term partnerships with our clients.",
      icon: TrendingUp
    }
  ];

  const milestones: Milestone[] = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize AI for businesses of all sizes"
    },
    {
      year: "2020",
      title: "First Enterprise Client",
      description: "Deployed our first AI agent solution, achieving 40% reduction in support costs"
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $15M to accelerate product development and team expansion"
    },
    {
      year: "2022",
      title: "100+ Enterprise Clients",
      description: "Reached milestone of serving over 100 enterprise customers globally"
    },
    {
      year: "2023",
      title: "AI Innovation Award",
      description: "Recognized as 'Most Innovative AI Company' by TechCrunch Disrupt"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in London, Singapore, and São Paulo"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "50M+", label: "Conversations Processed", icon: Brain },
    { number: "15+", label: "Countries Served", icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - aisona.tech | Leading AI Solutions Company</title>
        <meta name="description" content="Learn about aisona.tech's mission to transform businesses with AI. Meet our team of experts and discover our journey in revolutionizing customer experiences." />
        <meta name="keywords" content="AI company, artificial intelligence, team, mission, values, about us" />
        <link rel="canonical" href="https://aisona.tech/about" />
        
        <meta property="og:title" content="About aisona.tech - AI Innovation Leaders" />
        <meta property="og:description" content="Discover the team and vision behind aisona.tech's revolutionary AI solutions for enterprise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aisona.tech/about" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About aisona.tech - AI Innovation Leaders" />
        <meta name="twitter:description" content="Meet the team revolutionizing business with AI solutions." />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">About aisona.tech</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Pioneering the Future
                </span>
                <br />
                <span className="text-white">of AI-Powered Business</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                We're on a mission to democratize artificial intelligence, making advanced AI solutions 
                accessible to businesses of all sizes while maintaining the highest standards of ethics and innovation.
              </p>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 mb-6">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  To transform how businesses interact with their customers through intelligent, 
                  ethical AI solutions that drive measurable results while maintaining human connection and trust.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Democratize access to enterprise-grade AI technology",
                    "Maintain the highest standards of ethical AI development",
                    "Deliver measurable ROI for every client engagement",
                    "Foster innovation through continuous research and development"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <Brain className="w-8 h-8 text-blue-400 mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">AI Innovation</h3>
                        <p className="text-sm text-slate-300">Cutting-edge research and development</p>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <Zap className="w-8 h-8 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                        <p className="text-sm text-slate-300">Quick implementation and scaling</p>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <Shield className="w-8 h-8 text-green-400 mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                        <p className="text-sm text-slate-300">Bank-grade security and compliance</p>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <Globe className="w-8 h-8 text-cyan-400 mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Global Scale</h3>
                        <p className="text-sm text-slate-300">Worldwide deployment capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Meet Our Team
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                World-class experts in AI, machine learning, and enterprise software development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`group bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 hover:transform hover:-translate-y-2 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-700 group-hover:border-blue-500/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="flex justify-center gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <span className="text-xs font-bold">in</span>
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="w-8 h-8 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-300"
                          aria-label={`${member.name}'s Twitter profile`}
                        >
                          <span className="text-xs font-bold">@</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.id}
                    className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Journey
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From startup to industry leader - the milestones that shaped our company
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-950 z-10"></div>

                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                        <p className="text-slate-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join the hundreds of companies already leveraging our AI solutions to drive growth and innovation.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:hello@aisona.tech" className="text-slate-300 hover:text-blue-400 transition-colors">
                  hello@aisona.tech
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+1-555-0123" className="text-slate-300 hover:text-blue-400 transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                Download Company Profile
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
