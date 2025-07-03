import React from 'react';
import { MessageSquare, Ticket, Users, Zap, Code } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "Deploy intelligent conversational agents that understand context, learn from interactions, and provide personalized responses 24/7.",
    features: ["Natural Language Processing", "Context Awareness", "Multi-language Support", "Continuous Learning"],
    color: "teal"
  },
  {
    icon: Users,
    title: "Support Automation",
    description: "Automate customer support workflows with AI agents that can resolve common issues, escalate complex problems, and maintain customer satisfaction.",
    features: ["Issue Resolution", "Smart Escalation", "Sentiment Analysis", "Performance Analytics"],
    color: "cyan"
  },
  {
    icon: Ticket,
    title: "Ticketing System",
    description: "Streamline your support operations with intelligent ticket routing, automated responses, and priority management driven by AI.",
    features: ["Smart Routing", "Priority Detection", "Automated Responses", "SLA Management"],
    color: "purple"
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "Identify and nurture high-quality leads through AI-powered qualification, scoring, and personalized engagement strategies.",
    features: ["Lead Scoring", "Qualification Bot", "Nurture Campaigns", "Conversion Tracking"],
    color: "teal"
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Connect your AI agents with existing systems through robust APIs, enabling seamless data flow and workflow automation.",
    features: ["RESTful APIs", "Webhook Support", "Real-time Sync", "Custom Integrations"],
    color: "cyan"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-950/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-glow-teal hover:transform hover:scale-105"
            >
              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${service.color}-500/10 via-transparent to-${service.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-${service.color}-500/10 border border-${service.color}-400/30 flex items-center justify-center group-hover:shadow-${service.color} transition-all duration-300`}>
                    <service.icon className={`w-7 h-7 text-${service.color}-400 group-hover:text-${service.color}-300 transition-colors duration-300`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;