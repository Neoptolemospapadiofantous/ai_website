import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

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

    const section = document.getElementById('faq-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is aisona.tech and how does it work?",
      answer: "aisona.tech is a comprehensive AI platform that provides advanced artificial intelligence services through easy-to-use APIs. Our platform leverages cutting-edge machine learning models to help businesses automate processes, generate insights, and build intelligent applications. Simply integrate our APIs into your existing systems and start leveraging AI capabilities immediately."
    },
    {
      question: "How do I get started with your AI services?",
      answer: "Getting started is simple! Sign up for a free account, choose your plan, and you'll receive API keys instantly. We provide comprehensive documentation, code examples, and SDKs for popular programming languages. Our onboarding process includes guided tutorials and sample projects to help you integrate AI into your applications quickly."
    },
    {
      question: "What types of AI models do you support?",
      answer: "We support a wide range of AI models including natural language processing, computer vision, predictive analytics, conversational AI, code generation, and custom machine learning models. Our platform is continuously updated with the latest AI technologies, and enterprise customers can also deploy custom-trained models specific to their use cases."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with major privacy regulations like GDPR and CCPA. Your data is never used to train our models without explicit consent, and we offer on-premise deployment options for maximum security control."
    },
    {
      question: "What are the pricing plans and usage limits?",
      answer: "We offer flexible pricing plans starting from $29/month for individuals and small projects, up to enterprise solutions. Each plan includes different API call limits, model access, and support levels. We also provide pay-as-you-go options for variable usage patterns. Check our pricing page for detailed comparisons and current rates."
    },
    {
      question: "Do you provide technical support and documentation?",
      answer: "Yes! We provide comprehensive technical support including detailed API documentation, code examples, SDKs, video tutorials, and community forums. Paid plans include email support, while Professional and Enterprise plans get priority support with faster response times and dedicated account managers."
    },
    {
      question: "Can I integrate your AI services with my existing applications?",
      answer: "Definitely! Our APIs are designed to integrate seamlessly with any application or platform. We provide SDKs for popular programming languages including Python, JavaScript, Java, and more. Our RESTful APIs follow industry standards, making integration straightforward regardless of your tech stack."
    },
    {
      question: "What happens if I exceed my plan's usage limits?",
      answer: "If you approach your usage limits, we'll notify you in advance. You can either upgrade your plan or purchase additional API calls. We never cut off service abruptly - instead, we'll work with you to find the best solution for your needs. Enterprise customers can set up automatic scaling to handle usage spikes."
    },
    {
      question: "Do you offer custom AI model training?",
      answer: "Yes, our Enterprise plan includes custom model training services. Our AI experts can work with your data to create specialized models tailored to your specific use cases. This includes data preparation, model architecture design, training, validation, and deployment support."
    },
    {
      question: "What is your uptime guarantee and SLA?",
      answer: "We maintain a 99.9% uptime SLA across all our services, backed by redundant infrastructure and global CDN. Our systems are monitored 24/7, and we provide real-time status updates. Enterprise customers receive enhanced SLA options with faster incident response and dedicated support channels."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="text-white">We Have Answers</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our AI services, pricing, integration, 
            and support. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className={`bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-500 hover:border-slate-600 ${
                  isOpen ? 'border-blue-500/30' : ''
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
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

        {/* Contact Support CTA */}
        <div className={`text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Our support team is here to help you get the most out of our AI platform. 
              Reach out anytime for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Support
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
