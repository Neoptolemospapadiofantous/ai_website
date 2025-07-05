import { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can I deploy an AI agent?",
    answer: "Most AI agents can be deployed within 24-48 hours using our pre-built templates and intuitive configuration tools. Our platform provides guided setup wizards that help you customize your agent's behavior, integrate with existing systems, and start handling customer interactions immediately."
  },
  {
    question: "What types of integrations do you support?",
    answer: "We support 100+ integrations including popular CRM systems (Salesforce, HubSpot), help desk platforms (Zendesk, Freshdesk), messaging apps (Slack, Microsoft Teams), e-commerce platforms (Shopify, WooCommerce), and custom API integrations for your specific needs."
  },
  {
    question: "Can AI agents learn from our business data?",
    answer: "Yes, our AI agents can be trained on your specific business data including knowledge bases, past customer interactions, product information, and company policies. This ensures responses are accurate, contextual, and aligned with your brand voice and business requirements."
  },
  {
    question: "What languages does the platform support?",
    answer: "Our platform supports over 50 languages with advanced natural language processing capabilities. AI agents can automatically detect customer language preferences and respond accordingly, ensuring global accessibility for your business operations."
  },
  {
    question: "How secure is the platform?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, SOC 2 Type II compliance, GDPR compliance, regular security audits, and offer on-premise deployment options for organizations requiring maximum data control and security."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 live chat, email support, extensive documentation, video tutorials, and community forums. Enterprise customers receive dedicated account managers, priority support with guaranteed response times, and personalized onboarding."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm mb-6">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Got <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-xl text-slate-300">
            Find answers to common questions about our AI platform and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-emerald-400/50 shadow-lg shadow-emerald-500/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'text-emerald-400' : 'text-slate-400'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-white/10">
                  <p className="text-slate-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-slate-300 mb-6">Our team is here to help you get started with AI automation</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;