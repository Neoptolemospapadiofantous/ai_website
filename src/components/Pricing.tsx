import React from 'react';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for small businesses getting started with AI automation",
    features: [
      "Up to 1,000 conversations/month",
      "Basic AI agent deployment",
      "Email support",
      "Standard integrations",
      "Basic analytics dashboard"
    ],
    popular: false,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "Ideal for growing businesses with advanced automation needs",
    features: [
      "Up to 10,000 conversations/month",
      "Advanced AI agents with learning",
      "Priority support & onboarding",
      "Custom integrations & APIs",
      "Advanced analytics & insights",
      "Multi-language support",
      "White-label options"
    ],
    popular: true,
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations requiring enterprise-grade solutions",
    features: [
      "Unlimited conversations",
      "Custom AI model training",
      "Dedicated success manager",
      "Enterprise security & compliance",
      "SLA guarantees",
      "On-premise deployment",
      "24/7 phone support"
    ],
    popular: false,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500"
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-purple-300 font-medium">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 ${plan.popular ? 'opacity-5' : 'hover:opacity-5'} transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Plan icon */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-8">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Fixed alignment */}
                <button className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/25`
                    : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-blue-500/25`
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Need a custom solution?</p>
          <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Contact our sales team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;