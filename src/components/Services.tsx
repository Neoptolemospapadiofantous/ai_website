import { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  MessageSquare, 
  Ticket, 
  Target, 
  Zap, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Settings
} from 'lucide-react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Brain,
      title: "AI Agents",
      description: "Deploy intelligent conversational agents that understand context and provide personalized responses 24/7.",
      features: ["Natural Language Processing", "Context Awareness", "Multi-language Support"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: MessageSquare,
      title: "Support Automation",
      description: "Automate customer support workflows with AI agents that resolve issues and maintain satisfaction.",
      features: ["Issue Resolution", "Smart Escalation", "Sentiment Analysis"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Ticket,
      title: "Ticketing System",
      description: "Streamline support operations with intelligent ticket routing and automated priority management.",
      features: ["Smart Routing", "Priority Detection", "SLA Management"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Identify and nurture high-quality leads through AI-powered qualification and engagement.",
      features: ["Lead Scoring", "Qualification Bot", "Conversion Tracking"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Connect AI agents with existing systems through robust APIs and seamless workflow automation.",
      features: ["RESTful APIs", "Webhook Support", "Real-time Sync"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-500/30"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Comprehensive AI Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful AI Services
            </span>
            <br />
            <span className="text-white">Built for Scale</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From intelligent automation to advanced analytics, our comprehensive suite of AI services 
            empowers businesses to innovate, optimize, and grow in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleItems.includes(index);
            const isActive = activeService === index;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative p-8 rounded-2xl border transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isActive 
                    ? `bg-gradient-to-br ${service.bgColor} ${service.borderColor} border-2` 
                    : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveService(index)}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5 mb-6 ${isActive ? 'animate-pulse-glow' : ''}`}>
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="group-hover:text-slate-300 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors hover:underline">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Service Indicators */}
        <div className="flex justify-center gap-2 mb-16">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Select service ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-12 border border-slate-700 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Join thousands of companies already using our AI services to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Free Trial
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
