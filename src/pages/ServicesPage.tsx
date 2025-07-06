import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  MessageSquare, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Star,
  Users,
  Shield,
  Zap
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Brain | typeof MessageSquare | typeof Globe;
  features: string[];
  benefits: string[];
  color: string;
  bgColor: string;
}

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<string>('ai-intelligence');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      id: 'ai-intelligence',
      title: 'AI Intelligence',
      description: 'Advanced artificial intelligence systems that understand context, learn from interactions, and provide intelligent responses with human-like comprehension.',
      icon: Brain,
      features: [
        'Natural Language Processing with 98% accuracy',
        'Context-aware conversation management',
        'Machine learning optimization',
        'Sentiment analysis and emotional intelligence',
        'Multi-language support (60+ languages)',
        'Custom knowledge base integration'
      ],
      benefits: [
        'Reduce response time by 85%',
        'Improve customer satisfaction scores',
        'Handle complex queries intelligently',
        'Scale operations without limits'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 'conversational-ai',
      title: 'Conversational AI',
      description: 'Sophisticated dialogue systems that engage customers in natural, meaningful conversations while maintaining context and personality throughout interactions.',
      icon: MessageSquare,
      features: [
        'Dynamic conversation flow management',
        'Personality customization and brand voice',
        'Multi-turn conversation handling',
        'Intent recognition and slot filling',
        'Conversation analytics and insights',
        'Seamless human handoff capabilities'
      ],
      benefits: [
        'Increase engagement rates by 70%',
        'Maintain consistent brand experience',
        'Handle multiple conversations simultaneously',
        'Provide 24/7 customer interaction'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 'global-deployment',
      title: 'Global Deployment',
      description: 'Enterprise-grade deployment solutions that scale across multiple regions, languages, and platforms with robust infrastructure and compliance.',
      icon: Globe,
      features: [
        'Multi-region cloud deployment',
        'CDN optimization for global reach',
        'Compliance with international regulations',
        'Real-time performance monitoring',
        'Auto-scaling infrastructure',
        'Enterprise security protocols'
      ],
      benefits: [
        'Serve customers worldwide instantly',
        'Ensure 99.9% uptime guarantee',
        'Meet regulatory compliance requirements',
        'Scale automatically with demand'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService) || services[0];
  const ActiveIcon = activeServiceData.icon;

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "50ms", label: "Response Time", icon: Zap },
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "95%", label: "Satisfaction Rate", icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Intelligent Solutions for Modern Business | aisona.tech</title>
        <meta name="description" content="Comprehensive AI services including intelligent agents, conversational AI, and global deployment solutions. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, conversational AI, global deployment, business automation, intelligent agents" />
        <link rel="canonical" href="https://aisona.tech/services" />
        
        <meta property="og:title" content="AI Services - Transform Your Business with Intelligence" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses. From intelligent agents to global deployment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aisona.tech/services" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">AI-Powered Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent Services
                </span>
                <br />
                <span className="text-white">for Every Business</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive suite of AI services designed to transform your business operations 
                and deliver exceptional customer experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
          </div>
        </section>

        {/* Interactive Services Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Core Services
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose a service to explore its capabilities and see how it can transform your business operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Service Selection Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Select a Service</h3>
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  const isActive = activeService === service.id;
                  
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-105 transform ${
                        isActive 
                          ? `bg-gradient-to-r ${service.bgColor} border-blue-500 shadow-lg shadow-blue-500/20` 
                          : 'bg-slate-900/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                      }`}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-0.5 flex-shrink-0`}>
                          <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? 'text-blue-400 rotate-90' : 'text-slate-500'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Service Details */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sticky top-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${activeServiceData.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                      <ActiveIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeServiceData.title}</h3>
                    <p className="text-slate-400">Advanced AI Solution</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed">{activeServiceData.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {activeServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-3">
                      {activeServiceData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${activeServiceData.color} hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                  Learn More About {activeServiceData.title}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Discover how our AI services can revolutionize your operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
