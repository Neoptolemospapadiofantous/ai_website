import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Star,
  MessageSquare,
  Brain,
  Target,
  Settings,
  Sparkles,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const GetStartedPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI agent setup',
        'Email support',
        'Standard integrations',
        '24/7 availability'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with higher volume needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI customization',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard',
        'Multi-language support'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited conversations',
        'Dedicated AI specialists',
        '24/7 phone support',
        'Custom development',
        'Advanced security',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Choose Your Plan',
      description: 'Select the plan that best fits your business needs and volume requirements.',
      icon: Target
    },
    {
      number: 2,
      title: 'Setup & Configuration',
      description: 'Our team will configure your AI agent and integrate it with your existing systems.',
      icon: Settings
    },
    {
      number: 3,
      title: 'Training & Testing',
      description: 'We train your AI agent on your specific use cases and conduct thorough testing.',
      icon: Brain
    },
    {
      number: 4,
      title: 'Go Live',
      description: 'Launch your AI agent and start transforming your customer interactions.',
      icon: Sparkles
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Get Started - Deploy Your AI Agent Today | aisona.tech</title>
        <meta name="description" content="Start your AI transformation journey today. Choose your plan, get expert setup, and deploy intelligent AI agents in just days. Free consultation available." />
        <meta name="keywords" content="get started, AI agent setup, pricing plans, AI deployment, customer service automation" />
        <link rel="canonical" href="https://aisona.tech/get-started" />
        
        <meta property="og:title" content="Get Started with AI Agents - aisona.tech" />
        <meta property="og:description" content="Transform your customer service with AI agents. Choose your plan and get started today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aisona.tech/get-started" />
      </Helmet>

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
                <span className="text-sm text-slate-300">Get Started Today</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Deploy Your AI Agent
                </span>
                <br />
                <span className="text-white">In Just Days</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your customer service with intelligent AI agents. Choose your plan, 
                get expert setup, and start seeing results immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                </button>
                <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">How It Works</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our proven 4-step process gets you from signup to success in record time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-blue-400 font-semibold mb-2">Step {step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Choose Your Plan</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    plan.popular 
                      ? 'border-blue-500 bg-gradient-to-b from-blue-500/10 to-purple-500/10' 
                      : 'border-slate-700 hover:border-slate-600'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''} ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                      : 'border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}>
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-slate-300 mb-2">
                      Primary Use Case *
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      required
                      value={formData.useCase}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select your primary use case</option>
                      <option value="customer-support">Customer Support Automation</option>
                      <option value="lead-generation">Lead Generation & Qualification</option>
                      <option value="sales-assistance">Sales Assistance</option>
                      <option value="internal-support">Internal Employee Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us more about your specific needs and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-slate-300">+1 (555) 012-3456</p>
                        <p className="text-sm text-slate-400">Mon-Fri 9AM-6PM PST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-slate-300">hello@aisona.tech</p>
                        <p className="text-sm text-slate-400">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Live Chat</h4>
                        <p className="text-slate-300">Available on our website</p>
                        <p className="text-sm text-slate-400">Instant responses during business hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-4">What Happens Next?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">We'll contact you within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">Schedule a discovery call with our experts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">Receive a custom proposal and demo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetStartedPage;
