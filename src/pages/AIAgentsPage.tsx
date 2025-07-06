import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Brain, Clock, Users, TrendingUp, CheckCircle, ArrowRight, Star, Quote, Play, ChevronRight } from 'lucide-react';

const AIAgentsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock intelligent responses"
    },
    {
      icon: TrendingUp,
      title: "90% Cost Reduction",
      description: "Dramatically reduce customer service costs while improving response quality"
    },
    {
      icon: Users,
      title: "Unlimited Scalability",
      description: "Handle thousands of simultaneous conversations without additional staffing"
    },
    {
      icon: Brain,
      title: "Human-like Intelligence",
      description: "Advanced NLP provides contextual, empathetic customer interactions"
    }
  ];

  const features = [
    {
      category: "Natural Language Processing",
      items: [
        "95%+ accuracy in intent recognition",
        "Multi-language support (50+ languages)",
        "Sentiment analysis and emotion detection",
        "Context retention across conversations"
      ]
    },
    {
      category: "Integration Capabilities",
      items: [
        "CRM and helpdesk system integration",
        "Real-time data synchronization",
        "API-first architecture",
        "Custom workflow automation"
      ]
    },
    {
      category: "Intelligence Features",
      items: [
        "Machine learning optimization",
        "Personalized response generation",
        "Predictive customer needs analysis",
        "Continuous learning from interactions"
      ]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "Customer Support Automation",
      description: "Handle order inquiries, returns, and product questions instantly",
      results: "85% reduction in support tickets, 40% increase in customer satisfaction"
    },
    {
      industry: "Financial Services",
      title: "Account Management Assistant",
      description: "Provide account information, transaction history, and basic financial guidance",
      results: "60% faster query resolution, 99.9% accuracy in account information"
    },
    {
      industry: "Healthcare",
      title: "Patient Engagement Platform",
      description: "Schedule appointments, provide health information, and medication reminders",
      results: "50% reduction in no-shows, 70% improvement in patient engagement"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Customer Experience",
      company: "TechFlow Solutions",
      content: "Our AI agent handles 80% of customer inquiries automatically. Customer satisfaction scores increased by 35% while our support costs dropped by 60%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Retail Corp",
      content: "Implementation was seamless, and the results were immediate. Our customers love the instant responses, and our team can focus on complex issues.",
      rating: 5
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We analyze your current customer interactions and identify automation opportunities",
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Custom Training",
      description: "Train the AI agent on your specific business knowledge and brand voice",
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Integration & Testing",
      description: "Seamlessly integrate with your existing systems and conduct thorough testing",
      duration: "1-2 weeks"
    },
    {
      step: 4,
      title: "Launch & Optimization",
      description: "Go live with continuous monitoring and performance optimization",
      duration: "Ongoing"
    }
  ];

  const faqs = [
    {
      question: "How quickly can an AI agent be deployed?",
      answer: "Most implementations are completed within 4-6 weeks, depending on complexity and integration requirements. We provide a detailed timeline during the initial consultation."
    },
    {
      question: "Can the AI agent handle complex customer inquiries?",
      answer: "Our AI agents are designed to handle 80-90% of common inquiries automatically. For complex issues, they seamlessly escalate to human agents with full context."
    },
    {
      question: "What happens if the AI doesn't understand a customer's question?",
      answer: "The system includes intelligent fallback mechanisms and will gracefully transfer to human agents when needed, ensuring no customer is left without assistance."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR adherence. All data is processed securely with full audit trails."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agents - Intelligent Customer Service Automation | aisona.tech</title>
        <meta name="description" content="Deploy sophisticated AI agents that provide 24/7 personalized customer interactions. Reduce costs by 90% while improving customer satisfaction with human-like AI conversations." />
        <meta name="keywords" content="AI agents, customer service automation, chatbots, conversational AI, customer support, artificial intelligence" />
        <link rel="canonical" href="https://aisona.tech/services/ai-agents" />
        
        <meta property="og:title" content="AI Agents - Transform Customer Service with Intelligent Automation" />
        <meta property="og:description" content="Sophisticated AI agents providing 24/7 customer support with 95% accuracy and human-like interactions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aisona.tech/services/ai-agents" />
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
                <Bot className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300">AI Agents</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent AI Agents
                </span>
                <br />
                <span className="text-white">That Never Sleep</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Deploy sophisticated AI agents that provide 24/7 personalized customer interactions with human-like understanding. 
                Reduce support costs by 90% while delivering exceptional customer experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                  Schedule Consultation
                </button>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {keyBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-sm text-slate-400">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Customer Service Challenges Are Costing You Revenue
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Long Response Times</h3>
                      <p className="text-slate-300">Customers wait hours or days for responses, leading to frustration and churn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Escalating Support Costs</h3>
                      <p className="text-slate-300">Growing customer base requires proportional increase in support staff</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Inconsistent Service Quality</h3>
                      <p className="text-slate-300">Human agents provide varying levels of service quality and knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Limited Availability</h3>
                      <p className="text-slate-300">Support teams can't provide 24/7 coverage across all time zones</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">The Cost of Poor Customer Service</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Customer Churn Rate</span>
                    <span className="text-2xl font-bold text-red-400">32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average Response Time</span>
                    <span className="text-2xl font-bold text-red-400">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Support Cost per Ticket</span>
                    <span className="text-2xl font-bold text-red-400">$15-25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-red-400">68%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  The AI Agent Solution
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transform your customer service with intelligent AI agents that understand context, 
                provide personalized responses, and seamlessly integrate with your existing systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{feature.category}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Results Comparison */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-3xl font-bold text-center text-white mb-8">Before vs After AI Agents</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-red-400 mb-4">Before: Traditional Support</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300">24-48 hour response times</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300">$15-25 cost per ticket</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300">Limited to business hours</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300">Inconsistent service quality</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">After: AI Agents</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400"></CheckCircle>
                      <span className="text-slate-300">Instant responses 24/7</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400"></CheckCircle>
                      <span className="text-slate-300">$1-3 cost per interaction</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400"></CheckCircle>
                      <span className="text-slate-300">Always available globally</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400"></CheckCircle>
                      <span className="text-slate-300">Consistent, high-quality responses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Industry Applications</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how AI agents transform customer service across different industries
              </p>
            </div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <div className="text-sm text-blue-400 font-semibold mb-2">{useCase.industry}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                      <p className="text-slate-300">{useCase.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-slate-700">
                        <h4 className="text-lg font-semibold text-white mb-2">Results Achieved</h4>
                        <p className="text-slate-300">{useCase.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Implementation Process</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our proven methodology ensures smooth deployment and optimal performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-400 font-semibold">{step.duration}</div>
                  </div>
                  {index < implementationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-slate-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Client Success Stories</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how our AI agents have transformed customer service for leading companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400">{testimonial.role}</div>
                    <div className="text-slate-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-300">
                Get answers to common questions about AI agent implementation
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Deploy Your AI Agent?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join hundreds of companies already transforming their customer service with intelligent AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAgentsPage;
