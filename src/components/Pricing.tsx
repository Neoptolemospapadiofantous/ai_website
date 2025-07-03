import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Up to 1,000 conversations/month",
      "Basic AI agent deployment",
      "Email support",
      "Standard integrations",
      "Basic analytics"
    ],
    popular: false,
    color: "teal"
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 10,000 conversations/month",
      "Advanced AI agents",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Multi-language support",
      "API access"
    ],
    popular: true,
    color: "cyan"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with specific requirements",
    features: [
      "Unlimited conversations",
      "Custom AI model training",
      "Dedicated support team",
      "White-label solutions",
      "Advanced security",
      "SLA guarantees",
      "On-premise deployment"
    ],
    popular: false,
    color: "purple"
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Simple <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-glow-cyan' 
                  : 'border-gray-800/50 hover:border-teal-400/50 hover:shadow-glow-teal'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan icon */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${plan.color}-500/10 border border-${plan.color}-400/30 flex items-center justify-center`}>
                  <Zap className={`w-6 h-6 text-${plan.color}-400`} />
                </div>
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-2 text-white">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                    <div className={`w-5 h-5 rounded-full bg-${plan.color}-500/20 border border-${plan.color}-400/50 flex items-center justify-center flex-shrink-0`}>
                      <Check className={`w-3 h-3 text-${plan.color}-400`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                plan.popular
                  ? 'btn-primary text-white'
                  : 'btn-secondary text-teal-400 hover:text-white'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;