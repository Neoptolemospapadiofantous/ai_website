import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can I deploy an AI agent?",
    answer: "Most AI agents can be deployed within 24-48 hours. Our platform provides pre-built templates and easy configuration tools that allow you to customize your agent's behavior, integrate with your existing systems, and start handling customer interactions immediately."
  },
  {
    question: "What types of integrations do you support?",
    answer: "We support over 100+ integrations including CRM systems (Salesforce, HubSpot), help desk platforms (Zendesk, Freshdesk), messaging platforms (Slack, Microsoft Teams), e-commerce platforms (Shopify, WooCommerce), and custom API integrations."
  },
  {
    question: "Can the AI agents learn from our specific business data?",
    answer: "Yes, our AI agents can be trained on your specific business data, including your knowledge base, past customer interactions, product information, and company policies. This ensures responses are accurate and aligned with your brand voice."
  },
  {
    question: "What languages does the platform support?",
    answer: "Our platform supports over 50 languages with native language processing capabilities. The AI agents can detect the customer's preferred language and respond accordingly, ensuring global accessibility for your business."
  },
  {
    question: "How secure is the platform?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, SOC 2 compliance, GDPR compliance, regular security audits, and offer on-premise deployment options for maximum data control and security."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 support through multiple channels including live chat, email, and phone. Enterprise customers get dedicated account managers and priority support with guaranteed response times."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-400/30 flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-teal-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our AI platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-gray-950/60 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-teal-400/50 shadow-glow-teal' 
                  : 'border-gray-800/50 hover:border-teal-400/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'text-teal-400 rotate-180' : 'text-gray-400'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-800/50">
                  <p className="text-gray-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;