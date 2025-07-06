import { useState, useEffect } from 'react';
import { 
  Check, 
  Zap, 
  Crown, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  Calendar,
  TrendingUp,
  Shield,
  Users,
  Clock
} from 'lucide-react';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "Professional",
      icon: Zap,
      description: "Perfect for growing businesses ready to scale with AI",
      price: "Custom",
      subtitle: "Starting from $5,000/month",
      features: [
        "Up to 50,000 AI interactions/month",
        "5 AI agents with custom training",
        "Basic analytics and reporting",
        "Email support (24-hour response)",
        "Standard integrations (CRM, helpdesk)",
        "Basic customization options",
        "Monthly strategy sessions",
        "Implementation support"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/5 to-cyan-500/5",
      borderColor: "border-blue-500/20",
      popular: false,
      roi: "300% average ROI in first year"
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Comprehensive AI solutions for large organizations",
      price: "Custom",
      subtitle: "Starting from $15,000/month",
      features: [
        "Unlimited AI interactions",
        "Unlimited AI agents with advanced training",
        "Advanced analytics and business intelligence",
        "Priority support (4-hour response)",
        "Custom integrations and APIs",
        "White-label solutions available",
        "Dedicated customer success manager",
        "Advanced security and compliance",
        "Custom workflow automation",
        "Quarterly business reviews"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/5 to-pink-500/5",
      borderColor: "border-purple-500/20",
      popular: true,
      roi: "500% average ROI in first year"
    },
    {
      name: "Enterprise Plus",
      icon: Rocket,
      description: "Ultimate AI transformation for industry leaders",
      price: "Custom",
      subtitle: "Starting from $50,000/month",
      features: [
        "Everything in Enterprise",
        "Custom AI model development",
        "On-premise deployment options",
        "24/7 dedicated support team",
        "Advanced machine learning capabilities",
        "Multi-language and multi-region support",
        "Custom compliance and security features",
        "Executive-level strategic consulting",
        "Advanced predictive analytics",
        "Custom training and workshops",
        "SLA guarantees up to 99.99%"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/5 to-red-500/5",
      borderColor: "border-orange-500/20",
      popular: false,
      roi: "800% average ROI in first year"
    }
  ];

  const roiMetrics = [
    {
      metric: "Cost Reduction",
      value: "60-80%",
      description: "in customer support costs",
      icon: TrendingUp
    },
    {
      metric: "Response Time",
      value: "90%",
      description: "faster customer responses",
      icon: Clock
    },
    {
      metric: "Satisfaction",
      value: "95%+",
      description: "customer satisfaction rate",
      icon: Users
    },
    {
      metric: "Uptime",
      value: "99.9%",
      description: "guaranteed service availability",
      icon: Shield
    }
  ];

  const comparisonFeatures = [
    "AI Agent Deployment",
    "Custom Training & Optimization",
    "Advanced Analytics Dashboard",
    "Multi-channel Integration",
    "Real-time Performance Monitoring",
    "Custom Workflow Automation",
    "Dedicated Account Management",
    "Priority Technical Support",
    "Security & Compliance Features",
    "Custom API Development",
    "On-premise Deployment",
    "Executive Strategic Consulting"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Enterprise AI Investment</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing That Scales
              </span>
              <br />
              <span className="text-white">With Your Success</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Invest in AI solutions that deliver measurable ROI. Our enterprise pricing is designed 
              to grow with your business and maximize your return on investment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Speak with Sales
              </button>
            </div>
          </div>

          {/* ROI Metrics */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            {roiMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center bg-slate-900/30 p-6 rounded-xl border border-slate-700">
                  <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {metric.value}
                  </div>
                  <div className="text-white font-medium mb-1">{metric.metric}</div>
                  <div className="text-slate-400 text-sm">{metric.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              All plans are customized to your specific needs and include dedicated support, 
              implementation assistance, and ongoing optimization.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              
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
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                    </div>
                    <div className="text-sm text-slate-400 mb-4">{plan.subtitle}</div>
                    <div className="text-sm text-green-400 font-medium">{plan.roi}</div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
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
                    Contact Sales
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Feature Comparison */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Feature Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-300">Features</th>
                    <th className="text-center py-4 px-4 text-white">Professional</th>
                    <th className="text-center py-4 px-4 text-white">Enterprise</th>
                    <th className="text-center py-4 px-4 text-white">Enterprise Plus</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-slate-800">
                      <td className="py-3 px-4 text-slate-300">{feature}</td>
                      <td className="text-center py-3 px-4">
                        {index < 6 ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {index < 10 ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sales CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Discuss Your AI Investment?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our enterprise sales team will work with you to create a custom solution that fits your budget and delivers maximum ROI.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Sales</h3>
              <p className="text-slate-400 text-sm mb-3">Speak directly with our enterprise team</p>
              <p className="text-blue-400 font-medium">+1 (555) 123-4567</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Sales</h3>
              <p className="text-slate-400 text-sm mb-3">Get a detailed proposal via email</p>
              <p className="text-blue-400 font-medium">sales@aisona.tech</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Schedule Meeting</h3>
              <p className="text-slate-400 text-sm mb-3">Book a consultation at your convenience</p>
              <p className="text-blue-400 font-medium">calendly.com/aisona</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
            Contact Sales Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
