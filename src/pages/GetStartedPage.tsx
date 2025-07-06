import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Star,
  Zap,
  Settings,
  Rocket,
  Mail,
  Phone
} from 'lucide-react';

// Form data interface for type safety
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  plan: string;
  message: string;
}

// Form validation errors interface
interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  plan?: string;
}

const GetStartedPage = () => {
  // Component state management
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Form state and validation
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: 'professional',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Pricing plans configuration
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 conversations/month',
        'Basic AI setup',
        'Email support',
        'Standard integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 conversations/month',
        'Advanced customization',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true,
      cta: 'Get Started Now'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  // Process steps configuration
  const steps = [
    {
      number: 1,
      title: 'Choose Your Plan',
      description: 'Select the perfect plan for your business needs and budget.',
      icon: Star
    },
    {
      number: 2,
      title: 'Quick Setup',
      description: 'Our team configures your AI agent in under 24 hours.',
      icon: Settings
    },
    {
      number: 3,
      title: 'Go Live',
      description: 'Start transforming customer interactions immediately.',
      icon: Rocket
    }
  ];

  // Form validation logic
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    // Required field validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
    }
    
    if (!formData.plan) {
      errors.plan = 'Please select a plan';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        plan: selectedPlan,
        message: ''
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle plan selection
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setFormData(prev => ({
      ...prev,
      plan: planId
    }));
  };

  // Scroll to form section
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Get Started - Transform Your Business with AI | aisona.tech</title>
        <meta name="description" content="Start your AI transformation today. Choose your plan and deploy intelligent AI agents in minutes. Free setup included." />
        <meta name="keywords" content="AI agents, get started, pricing, customer service automation, business transformation" />
        <link rel="canonical" href="https://aisona.tech/get-started" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section - Conversion-focused with clear value proposition */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Trust indicator */}
              <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-slate-300">Trusted by 500+ Companies</span>
              </div>
              
              {/* Main headline - conversion-focused */}
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Deploy AI Agents
                </span>
                <br />
                <span className="text-white">In 24 Hours</span>
              </h1>
              
              {/* Value proposition */}
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your customer service with intelligent AI agents. 
                <strong className="text-white"> Reduce costs by 90%</strong> and 
                <strong className="text-white"> increase satisfaction by 40%</strong>.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToForm}
                  className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50"
                >
                  View Pricing
                </button>
              </div>

              {/* Key benefits - social proof */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">24hrs</div>
                  <div className="text-sm text-slate-400">Setup Time</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">90%</div>
                  <div className="text-sm text-slate-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
                  <div className="text-sm text-slate-400">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Simple 3-step process */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">How It Works</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get your AI agent up and running in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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

        {/* Pricing Section - Clear plan comparison */}
        <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Choose Your Plan</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. Start free, scale as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    plan.popular 
                      ? 'border-blue-500 bg-gradient-to-b from-blue-500/10 to-purple-500/10 scale-105' 
                      : 'border-slate-700 hover:border-slate-600'
                  } ${selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''} ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => handlePlanSelect(plan.id)}
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

                  <button 
                    onClick={scrollToForm}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                        : 'border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section - Conversion-optimized */}
        <section id="contact-form" className="py-20 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300">
                Fill out the form below and we'll have your AI agent ready in 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                {submitSuccess ? (
                  // Success message
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-slate-300 mb-6">
                      We've received your request and will contact you within 24 hours to get your AI agent set up.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  // Contact form
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
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors ${
                            formErrors.name ? 'border-red-500' : 'border-slate-700'
                          }`}
                          placeholder="John Doe"
                        />
                        {formErrors.name && (
                          <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors ${
                            formErrors.email ? 'border-red-500' : 'border-slate-700'
                          }`}
                          placeholder="john@company.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                        )}
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
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors ${
                            formErrors.company ? 'border-red-500' : 'border-slate-700'
                          }`}
                          placeholder="Your Company"
                        />
                        {formErrors.company && (
                          <p className="text-red-400 text-sm mt-1">{formErrors.company}</p>
                        )}
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
                      <label htmlFor="plan" className="block text-sm font-medium text-slate-300 mb-2">
                        Selected Plan *
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors ${
                          formErrors.plan ? 'border-red-500' : 'border-slate-700'
                        }`}
                      >
                        <option value="starter">Starter - $99/month</option>
                        <option value="professional">Professional - $299/month</option>
                        <option value="enterprise">Enterprise - Custom pricing</option>
                      </select>
                      {formErrors.plan && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.plan}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your specific needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Get Started Now
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">24-Hour Setup</h4>
                        <p className="text-slate-300">Your AI agent will be ready and deployed within 24 hours of signup.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Enterprise Security</h4>
                        <p className="text-slate-300">Bank-grade security with SOC 2 compliance and data encryption.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Expert Support</h4>
                        <p className="text-slate-300">Dedicated success manager and 24/7 technical support included.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Need to Talk?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span className="text-slate-300">+1 (555) 012-3456</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <span className="text-slate-300">hello@aisona.tech</span>
                      </div>
                    </div>
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
