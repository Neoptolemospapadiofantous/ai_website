import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Headphones, TrendingUp, Clock, Shield, CheckCircle, ArrowRight, Star, Quote, BarChart3, Target, MessageSquare, Brain } from 'lucide-react';

const SupportAutomationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyMetrics = [
    { metric: "75%", label: "Faster Resolution", icon: Clock },
    { metric: "60%", label: "Cost Reduction", icon: TrendingUp },
    { metric: "95%", label: "Customer Satisfaction", icon: Star },
    { metric: "24/7", label: "Availability", icon: Shield }
  ];

  const automationFeatures = [
    {
      category: "Intelligent Routing",
      description: "Smart ticket distribution based on complexity, urgency, and agent expertise",
      features: [
        "AI-powered priority detection",
        "Skill-based agent matching",
        "Workload balancing",
        "Escalation path optimization"
      ]
    },
    {
      category: "Auto-Resolution",
      description: "Automatically resolve common issues without human intervention",
      features: [
        "Knowledge base integration",
        "Solution recommendation engine",
        "Self-service portal automation",
        "Proactive issue prevention"
      ]
    },
    {
      category: "Workflow Automation",
      description: "Streamline repetitive tasks and standardize processes",
      features: [
        "Custom workflow builder",
        "Automated status updates",
        "SLA monitoring and alerts",
        "Performance analytics"
      ]
    }
  ];

  const industryApplications = [
    {
      industry: "SaaS Companies",
      challenge: "High volume of technical support requests overwhelming support teams",
      solution: "Automated troubleshooting guides and intelligent ticket routing",
      results: "70% reduction in Level 1 tickets, 50% faster resolution times"
    },
    {
      industry: "E-commerce",
      challenge: "Order inquiries and return requests consuming agent time",
      solution: "Automated order status updates and return processing workflows",
      results: "80% of order inquiries resolved automatically, 40% cost savings"
    },
    {
      industry: "Financial Services",
      challenge: "Compliance requirements and complex customer inquiries",
      solution: "Automated compliance checks and intelligent case management",
      results: "100% compliance adherence, 45% improvement in case resolution"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Head of Customer Success",
      company: "CloudTech Solutions",
      content: "Support automation transformed our operations. We now handle 3x more tickets with the same team size, and our customers are happier than ever.",
      rating: 5
    },
    {
      name: "Robert Kim",
      role: "VP of Operations",
      company: "RetailMax",
      content: "The ROI was immediate. Within 30 days, we saw a 60% reduction in support costs while improving our customer satisfaction scores.",
      rating: 5
    }
  ];

  const implementationPhases = [
    {
      phase: "Assessment",
      duration: "1 week",
      description: "Analyze current support processes and identify automation opportunities",
      deliverables: ["Process audit report", "Automation roadmap", "ROI projections"]
    },
    {
      phase: "Configuration",
      duration: "2-3 weeks",
      description: "Set up automation rules, workflows, and integration with existing systems",
      deliverables: ["Configured workflows", "Integration setup", "Testing environment"]
    },
    {
      phase: "Training & Launch",
      duration: "1 week",
      description: "Train your team and gradually roll out automation features",
      deliverables: ["Team training", "Go-live support", "Performance monitoring"]
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring and optimization based on performance data",
      deliverables: ["Performance reports", "Optimization recommendations", "Feature updates"]
    }
  ];

  const faqs = [
    {
      question: "Will automation replace our support agents?",
      answer: "No, automation enhances your agents' capabilities by handling routine tasks, allowing them to focus on complex issues that require human expertise and empathy."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see immediate improvements in response times and efficiency within the first week of implementation, with full ROI typically achieved within 2-3 months."
    },
    {
      question: "Can the system integrate with our existing helpdesk?",
      answer: "Yes, our platform integrates with all major helpdesk systems including Zendesk, Freshdesk, ServiceNow, and custom solutions through our API."
    },
    {
      question: "What happens if the automation makes a mistake?",
      answer: "Our system includes multiple safeguards and human oversight checkpoints. All automated actions are logged and can be reviewed or reversed if needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support Automation - Intelligent Customer Support Solutions | aisona.tech</title>
        <meta name="description" content="Automate your customer support workflows with intelligent routing, auto-resolution, and workflow automation. Reduce costs by 60% while improving customer satisfaction." />
        <meta name="keywords" content="support automation, customer support, helpdesk automation, ticket routing, workflow automation, customer service" />
        <link rel="canonical" href="https://aisona.tech/services/support-automation" />
        
        <meta property="og:title" content="Support Automation - Transform Customer Support Operations" />
        <meta property="og:description" content="Intelligent support automation that reduces costs by 60% while improving customer satisfaction and agent productivity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aisona.tech/services/support-automation" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Headphones className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-300">Support Automation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Intelligent Support
                </span>
                <br />
                <span className="text-white">Automation Platform</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your customer support operations with intelligent automation that routes tickets, 
                resolves issues, and optimizes workflows while maintaining exceptional customer satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                  View Demo
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {keyMetrics.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        {item.metric}
                      </div>
                      <div className="text-slate-400 text-sm">{item.label}</div>
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
                  Support Teams Are Drowning in Repetitive Tasks
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Manual Ticket Routing</h3>
                      <p className="text-slate-300">Agents waste time manually categorizing and routing tickets to appropriate teams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Repetitive Issue Resolution</h3>
                      <p className="text-slate-300">Same questions answered repeatedly, consuming valuable agent time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Inconsistent Processes</h3>
                      <p className="text-slate-300">Lack of standardized workflows leads to varying service quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reactive Support Model</h3>
                      <p className="text-slate-300">Always playing catch-up instead of preventing issues proactively</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">The Hidden Costs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Agent Productivity Loss</span>
                    <span className="text-2xl font-bold text-red-400">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Repetitive Task Time</span>
                    <span className="text-2xl font-bold text-red-400">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Customer Wait Time</span>
                    <span className="text-2xl font-bold text-red-400">4+ hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Resolution Accuracy</span>
                    <span className="text-2xl font-bold text-red-400">72%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Features */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Comprehensive Automation Suite
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our intelligent platform automates every aspect of customer support, 
                from initial contact to resolution and follow-up.
              </p>
            </div>

            <div className="space-y-16">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <h3 className="text-3xl font-bold text-white mb-4">{feature.category}</h3>
                    <p className="text-lg text-slate-300 mb-8">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-slate-700">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                          <BarChart3 className="w-8 h-8 text-purple-400 mb-2" />
                          <div className="text-sm text-slate-300">Performance Analytics</div>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                          <Target className="w-8 h-8 text-pink-400 mb-2" />
                          <div className="text-sm text-slate-300">Smart Routing</div>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                          <MessageSquare className="w-8 h-8 text-purple-400 mb-2" />
                          <div className="text-sm text-slate-300">Auto-Response</div>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                          <Brain className="w-8 h-8 text-pink-400 mb-2" />
                          <div className="text-sm text-slate-300">AI Learning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Industry Success Stories</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how support automation delivers results across different industries
              </p>
            </div>

            <div className="space-y-8">
              {industryApplications.map((app, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <div className="text-sm text-purple-400 font-semibold mb-2">{app.industry}</div>
                      <h3 className="text-xl font-bold text-white mb-4">Challenge</h3>
                      <p className="text-slate-300">{app.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Solution</h3>
                      <p className="text-slate-300">{app.solution}</p>
                    </div>
                    <div>
                      <div className="bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-xl p-6 border border-slate-700">
                        <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                        <p className="text-slate-300">{app.results}</p>
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
              <h2 className="text-4xl font-bold mb-6 text-white">Implementation Roadmap</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our structured approach ensures smooth deployment and maximum ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.phase}</h3>
                  <div className="text-sm text-purple-400 font-semibold mb-4">{phase.duration}</div>
                  <p className="text-slate-300 mb-4">{phase.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="text-xs text-slate-400">• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400">{testimonial.role}</div>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Support Operations Today
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join leading companies that have automated their support and achieved remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Automation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                Book Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportAutomationPage;
