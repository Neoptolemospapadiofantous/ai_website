import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Brain, MessageSquare, Code, BarChart3 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const demoChats = [
    {
      id: 1,
      messages: [
        { type: 'user', text: 'Analyze my sales data for Q3' },
        { type: 'ai', text: 'I\'ve analyzed your Q3 sales data. Revenue increased 23% compared to Q2, with the highest growth in the enterprise segment. Would you like me to create a detailed report?' }
      ],
      position: { top: '20%', left: '10%' }
    },
    {
      id: 2,
      messages: [
        { type: 'user', text: 'Generate a marketing campaign for our new product' },
        { type: 'ai', text: 'I\'ve created a comprehensive marketing campaign including social media content, email sequences, and ad copy. The campaign focuses on your target demographic of tech professionals aged 25-40.' }
      ],
      position: { top: '40%', right: '15%' }
    },
    {
      id: 3,
      messages: [
        { type: 'user', text: 'Help me optimize this code for better performance' },
        { type: 'ai', text: 'I\'ve identified 3 optimization opportunities in your code. By implementing these changes, you can reduce execution time by approximately 40% and memory usage by 25%.' }
      ],
      position: { bottom: '25%', left: '20%' }
    }
  ];

  const features = [
    { icon: Brain, text: 'Advanced AI Models' },
    { icon: MessageSquare, text: 'Natural Conversations' },
    { icon: Code, text: 'Code Generation' },
    { icon: BarChart3, text: 'Data Analysis' }
  ];

  const stats = [
    { number: '10M+', label: 'API Calls Daily' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '150+', label: 'Countries Served' },
    { number: '50ms', label: 'Avg Response Time' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Floating Demo Chat Windows */}
      {demoChats.map((chat, index) => (
        <div
          key={chat.id}
          className={`absolute w-80 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4 shadow-2xl transition-all duration-1000 ${
            currentDemo === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } hidden lg:block`}
          style={chat.position}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400">AI Assistant Active</span>
          </div>
          <div className="space-y-3">
            {chat.messages.map((message, msgIndex) => (
              <div
                key={msgIndex}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          {currentDemo === index && (
            <div className="flex items-center gap-1 mt-3 text-slate-400">
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-typing-dots"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-typing-dots delay-200"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-typing-dots delay-400"></div>
              <span className="text-xs ml-2">AI is thinking...</span>
            </div>
          )}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Main Hero Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Powered by Advanced AI Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent gradient-text">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">with AI Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness the power of cutting-edge artificial intelligence to automate workflows, 
            generate insights, and accelerate your digital transformation journey.
          </p>

          {/* Feature Pills */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-slate-800/30 border border-slate-700 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
              >
                <feature.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover-glow flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              View Live Demo
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-bounce delay-2000' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
