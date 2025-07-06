import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Sparkles, 
  Search,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Shield,
  Zap,
  Settings,
  Users,
  BarChart3
} from 'lucide-react';

const FAQPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'implementation', name: 'Implementation', icon: Settings },
    { id: 'technical', name: 'Technical', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'support', name: 'Support', icon: Users },
    { id: 'pricing', name: 'Pricing', icon: BarChart3 }
  ];

  const faqs = [
    {
      category: 'implementation',
      question: "How long does it take to implement AI agents in our existing systems?",
      answer: "Implementation typically takes 4-8 weeks depending on complexity. Our process includes: Week 1-2: Discovery and planning, Week 3-4: Initial setup and configuration, Week 5-6: Training and customization, Week 7-8: Testing and deployment. We provide dedicated project management and ensure minimal disruption to your current operations."
    },
    {
      category: 'implementation',
      question: "What is the onboarding process for new enterprise clients?",
      answer: "Our enterprise onboarding follows a structured 6-phase approach: 1) Initial consultation and needs assessment, 2) Technical architecture review, 3) Custom solution design, 4) Pilot program deployment, 5) Full-scale implementation, 6) Ongoing optimization and support. Each phase includes dedicated support and clear milestones."
    },
    {
      category: 'technical',
      question: "What AI models and technologies do you use?",
      answer: "We utilize state-of-the-art language models including GPT-4, Claude, and custom-trained models. Our technology stack includes natural language processing, machine learning, sentiment analysis, and predictive analytics. All models are continuously updated and can be customized for your specific industry and use cases."
    },
    {
      category: 'technical',
      question: "How do your AI agents integrate with existing business systems?",
      answer: "Our AI agents integrate seamlessly through robust APIs, webhooks, and direct database connections. We support popular platforms including Salesforce, HubSpot, Zendesk, Microsoft Teams, Slack, and custom enterprise systems. Our integration team ensures smooth data flow and maintains system integrity."
    },
    {
      category: 'technical',
      question: "What are the technical requirements for deployment?",
      answer: "Minimal technical requirements: Standard web browser access, API endpoints for integrations, and basic network connectivity. For on-premise deployments: Linux/Windows server environment, minimum 16GB RAM, and secure network configuration. Our team handles all technical setup and provides comprehensive documentation."
    },
    {
      category: 'security',
      question: "How do you ensure data security and privacy compliance?",
      answer: "We maintain enterprise-grade security with SOC 2 Type II compliance, GDPR adherence, and ISO 27001 certification. Data is encrypted in transit and at rest using AES-256 encryption. We offer on-premise deployment options and never use client data for model training without explicit consent. Regular security audits ensure ongoing compliance."
    },
    {
      category: 'security',
      question: "What compliance standards do you meet?",
      answer: "We comply with major industry standards including GDPR, CCPA, HIPAA (for healthcare clients), SOX, and PCI DSS. Our platform undergoes regular third-party security assessments and maintains certifications for SOC 2 Type II, ISO 27001, and industry-specific compliance requirements."
    },
    {
      category: 'support',
      question: "What level of support do you provide during and after implementation?",
      answer: "We provide comprehensive support including: 24/7 technical support for Enterprise+ clients, dedicated customer success managers, regular health checks and optimization sessions, training programs for your team, and proactive monitoring with alerts. Support response times range from 4 hours (Enterprise) to 1 hour (Enterprise+)."
    },
    {
      category: 'support',
      question: "Do you provide training for our team?",
      answer: "Yes, we offer comprehensive training programs including: Initial administrator training, end-user workshops, best practices sessions, ongoing education webinars, and custom training materials. Training is included in all enterprise plans and can be delivered on-site or virtually based on your preferences."
    },
    {
      category: 'pricing',
      question: "How is pricing determined for enterprise solutions?",
      answer: "Enterprise pricing is customized based on: Number of AI interactions, complexity of integrations, level of customization required, support tier needed, and deployment preferences (cloud vs. on-premise). We provide transparent pricing with no hidden fees and offer flexible payment terms for enterprise clients."
    },
    {
      category: 'pricing',
      question: "What is included in the implementation cost?",
      answer: "Implementation includes: Initial consultation and planning, custom configuration and setup, data migration assistance, integration development, testing and quality assurance, training programs, and 90 days of post-launch support. Additional customization or complex integrations may incur separate fees, which are clearly outlined upfront."
    },
    {
      category: 'technical',
      question: "Can you handle multiple languages and international deployments?",
      answer: "Yes, our AI agents support 50+ languages with native understanding and cultural context. We offer multi-region deployments with local data residency options to meet international compliance requirements. Our platform can handle time zone differences and regional business practices automatically."
    },
    {
      category: 'implementation',
      question: "What happens if we need to scale up or down after implementation?",
      answer: "Our platform is designed for elastic scaling. You can easily adjust capacity, add new AI agents, or modify features through our management dashboard. Enterprise clients have dedicated account managers who proactively monitor usage and recommend optimizations. Scaling changes typically take effect within 24-48 hours."
    },
    {
      category: 'support',
      question: "What are your SLA guarantees?",
      answer: "We offer tiered SLA guarantees: Professional (99.5% uptime), Enterprise (99.9% uptime), Enterprise+ (99.99% uptime). This includes response time guarantees, resolution time commitments, and performance benchmarks. SLA breaches result in service credits as outlined in our enterprise agreements."
    },
    {
      category: 'security',
      question: "How do you handle data retention and deletion?",
      answer: "We follow strict data governance policies with configurable retention periods (30 days to 7 years based on your requirements). Data deletion is permanent and verified with certificates of destruction. Clients have full control over their data with self-service deletion options and automated retention policy enforcement."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <HelpCircle className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get Answers
              </span>
              <br />
              <span className="text-white">to Your Questions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Find comprehensive answers about our AI solutions, implementation process, 
              security measures, and support services. Can't find what you're looking for? 
              Our team is here to help.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                <p className="text-slate-400">Try adjusting your search or category filter.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openItems.includes(index);
                  
                  return (
                    <div
                      key={index}
                      className={`bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-500 hover:border-slate-600 ${
                        isOpen ? 'border-blue-500/30' : ''
                      } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-300"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-400 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300" />
                          )}
                        </div>
                      </button>
                      
                      <div
                        id={`faq-answer-${index}`}
                        className={`transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-700 pt-4">
                            <p className="text-slate-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Still Have Questions?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Our expert team is ready to provide personalized answers and help you find the perfect AI solution for your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-slate-400 mb-4">Get instant answers from our support team</p>
              <button className="text-blue-400 hover:text-blue-300 font-medium">
                Start Chat →
              </button>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-slate-400 mb-4">Speak directly with our experts</p>
              <p className="text-blue-400 font-medium">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-slate-400 mb-4">Get detailed responses via email</p>
              <p className="text-blue-400 font-medium">support@aisona.tech</p>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700 mb-8">
            <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-slate-300">
              <strong>Support Hours:</strong> Monday - Friday, 9 AM - 6 PM EST<br />
              <strong>Emergency Support:</strong> 24/7 for Enterprise+ clients
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Contact Support
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
