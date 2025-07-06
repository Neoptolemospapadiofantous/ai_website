import { useState, useEffect } from 'react';
import { 
  Bot, 
  Headphones, 
  Ticket, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Shield,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Bot,
      title: "AI Agents",
      subtitle: "Intelligent Conversational Agents",
      description: "Deploy sophisticated AI agents that provide 24/7 personalized customer interactions with human-like understanding and response capabilities.",
      features: [
        "Natural Language Processing with 95%+ accuracy",
        "Context-aware conversations across sessions",
        "Multi-language support (50+ languages)",
        "Sentiment analysis and emotional intelligence",
        "Custom personality and brand voice training",
        "Seamless human handoff capabilities"
      ],
      benefits: [
        "Reduce response time by 90%",
        "Handle 10x more customer inquiries",
        "24/7 availability without breaks",
        "Consistent brand experience"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Headphones,
      title: "Support Automation",
      subtitle: "Intelligent Customer Support",
      description: "Automate your customer support workflows while maintaining high satisfaction rates through intelligent issue resolution and smart escalation.",
      features: [
        "Automated issue resolution for common problems",
        "Smart escalation based on complexity and urgency",
        "Real-time sentiment analysis and mood detection",
        "Integration with existing helpdesk systems",
        "Performance analytics and optimization insights",
        "Custom workflow automation rules"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "Improve resolution time by 75%",
        "Increase customer satisfaction scores",
        "Free up agents for complex issues"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Ticket,
      title: "Ticketing System",
      subtitle: "Smart Ticket Management",
      description: "Streamline your operations with intelligent ticket routing, priority management, and automated workflow optimization.",
      features: [
        "AI-powered smart routing to appropriate agents",
        "Automatic priority detection and assignment",
        "SLA management with proactive alerts",
        "Duplicate ticket detection and merging",
        "Automated status updates and notifications",
        "Advanced reporting and analytics dashboard"
      ],
      benefits: [
        "Improve first-contact resolution by 40%",
        "Reduce ticket backlog by 50%",
        "Ensure SLA compliance",
        "Optimize agent workload distribution"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      subtitle: "AI-Powered Lead Qualification",
      description: "Maximize your sales potential with intelligent lead qualification, engagement, and conversion optimization powered by advanced AI.",
      features: [
        "Intelligent lead scoring and qualification",
        "Automated lead nurturing campaigns",
        "Conversion tracking and optimization",
        "CRM integration and data synchronization",
        "Behavioral analysis and insights",
        "A/B testing for engagement strategies"
      ],
      benefits: [
        "Increase qualified leads by 200%",
        "Improve conversion rates by 35%",
        "Reduce sales cycle length",
        "Better lead quality and scoring"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Zap,
      title: "API Integration",
      subtitle: "Seamless System Connectivity",
      description: "Connect your AI agents with existing business systems through robust, scalable APIs designed for enterprise-grade reliability.",
      features: [
        "RESTful APIs with comprehensive documentation",
        "Webhook support for real-time notifications",
        "Real-time data synchronization",
        "Enterprise-grade security and authentication",
        "Rate limiting and usage analytics",
        "Custom integration development support"
      ],
      benefits: [
        "Seamless data flow between systems",
        "Reduced integration complexity",
        "Real-time business insights",
        "Scalable architecture"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "50ms", label: "Average Response Time", icon: Clock },
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "95%", label: "Customer Satisfaction", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Enterprise AI Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Services
              </span>
              <br />
              <span className="text-white">for Modern Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with our comprehensive suite of AI services. 
              From intelligent agents to automated workflows, we deliver measurable ROI and operational excellence.
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

          {/* Stats */}
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

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to optimize your business operations and drive measurable results.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-lg text-blue-400 mb-4 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-slate-300">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Business Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-slate-300">
                              <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className={`group bg-gradient-to-r ${service.color} hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2`}>
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.bgColor} border border-slate-700`}>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 backdrop-blur-sm"
                          >
                            <div className="text-sm text-slate-300">{feature}</div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-4 right-4">
                        <IconComponent className="w-12 h-12 text-white opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of enterprises already leveraging our AI solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
              Request Custom Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
