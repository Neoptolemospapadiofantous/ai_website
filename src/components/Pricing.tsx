import { useState, useEffect } from 'react';
import { Check, Zap, Crown, Rocket, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('pricing-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for individuals and small projects",
      price: { monthly: 29, yearly: 290 },
      features: [
        "10,000 API calls/month",
        "Basic AI models",
        "Email support",
        "Standard documentation",
        "Community access",
        "Basic analytics"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/5 to-cyan-500/5",
      borderColor: "border-blue-500/20",
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing businesses and teams",
      price: { monthly: 99, yearly: 990 },
      features: [
        "100,000 API calls/month",
        "Advanced AI models",
        "Priority support",
        "Advanced documentation",
        "Team collaboration",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/5 to-pink-500/5",
      borderColor: "border-purple-500/20",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large organizations with custom needs",
      price: { monthly: 299, yearly: 2990 },
      features: [
        "Unlimited API calls",
        "All AI models + custom",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced team management",
        "Enterprise analytics",
        "Custom integrations",
        "99.9% SLA guarantee",
        "On-premise deployment",
        "Custom training"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/5 to-red-500/5",
      borderColor: "border-orange-500/20",
      popular: false
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <section id="pricing-section" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Flexible Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features 
            with different usage limits and support levels.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              {savings > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  -{savings}%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const monthlyPrice = plan.price.monthly;
            const yearlyPrice = plan.price.yearly;
            const displayPrice = billingCycle === 'monthly' ? monthlyPrice : Math.floor(yearlyPrice / 12);
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-700 hover:scale-105 ${
                  plan.popular
                    ? `bg-gradient-to-br ${plan.bgColor} ${plan.borderColor} border-2 ring-2 ring-purple-500/20`
                    : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} p-0.5 mx-auto mb-4`}>
                    <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">${displayPrice}</span>
                    <span className="text-slate-400 ml-1">/month</span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-green-400">
                      Save ${(monthlyPrice * 12) - yearlyPrice} annually
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                      : 'border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Global CDN</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>API Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Developer Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Regular Updates</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 mb-4">
                Need a custom solution? Our enterprise team can create a tailored plan for your specific requirements.
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Contact Enterprise Sales →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
