import React from 'react';
import { MessageSquare, Ticket, Users, Zap, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "Deploy intelligent conversational agents that understand context and provide personalized responses 24/7.",
    features: ["Natural Language Processing", "Context Awareness", "Multi-language Support"],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Support Automation",
    description: "Automate customer support workflows with AI agents that resolve issues and maintain satisfaction.",
    features: ["Issue Resolution", "Smart Escalation", "Sentiment Analysis"],
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Ticket,
    title: "Ticketing System",
    description: "Streamline support operations with intelligent ticket routing and automated priority management.",
    features: ["Smart Routing", "Priority Detection", "SLA Management"],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "Identify and nurture high-quality leads through AI-powered qualification and engagement.",
    features: ["Lead Scoring", "Qualification Bot", "Conversion Tracking"],
    color: "orange",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Connect AI agents with existing systems through robust APIs and seamless workflow automation.",
    features: ["RESTful APIs", "Webhook Support", "Real-time Sync"],
    color: "indigo",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-300 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your business operations with our suite of intelligent automation tools
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-slate-400 flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="group/btn flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;