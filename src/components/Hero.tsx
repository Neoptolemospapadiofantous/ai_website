import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Sparkles, Play, Zap, Star, MessageCircle, User, CheckCircle, Clock } from 'lucide-react';

// Chat conversation data
const chatConversations = [
  {
    id: 1,
    messages: [
      { type: 'user', text: 'Hi, I need help with my order', time: '2:34 PM' },
      { type: 'ai', text: 'Hello! I\'d be happy to help you with your order. Could you please provide your order number?', time: '2:34 PM' },
      { type: 'user', text: 'It\'s #ORD-12345', time: '2:35 PM' },
      { type: 'ai', text: 'Perfect! I found your order. It was shipped yesterday and should arrive tomorrow by 3 PM. Would you like tracking details?', time: '2:35 PM' },
      { type: 'user', text: 'Yes please!', time: '2:36 PM' },
      { type: 'ai', text: 'Here\'s your tracking link: track.example.com/12345. You\'ll receive SMS updates automatically. Anything else I can help with?', time: '2:36 PM' }
    ],
    position: { top: '15%', left: '8%' },
    delay: 0
  },
  {
    id: 2,
    messages: [
      { type: 'user', text: 'What are your business hours?', time: '3:15 PM' },
      { type: 'ai', text: 'We\'re available 24/7! Our AI agents are always here to help, and human support is available Mon-Fri 9AM-6PM EST.', time: '3:15 PM' },
      { type: 'user', text: 'Can you help me choose a plan?', time: '3:16 PM' },
      { type: 'ai', text: 'Absolutely! Based on your needs, I\'d recommend our Professional plan. It includes advanced AI agents and priority support. Would you like a demo?', time: '3:16 PM' },
      { type: 'user', text: 'That sounds perfect!', time: '3:17 PM' }
    ],
    position: { top: '25%', right: '10%' },
    delay: 2000
  },
  {
    id: 3,
    messages: [
      { type: 'user', text: 'How secure is your platform?', time: '4:22 PM' },
      { type: 'ai', text: 'Security is our top priority! We use enterprise-grade encryption, SOC 2 compliance, and offer on-premise deployment options.', time: '4:22 PM' },
      { type: 'user', text: 'What about data privacy?', time: '4:23 PM' },
      { type: 'ai', text: 'We\'re GDPR compliant and never share your data. You maintain full control with options for data residency and deletion.', time: '4:23 PM' }
    ],
    position: { bottom: '20%', left: '12%' },
    delay: 4000
  }
];

const ChatBubble = ({ message, isAi, isTyping = false }) => (
  <div className={`flex items-start gap-3 mb-4 ${isAi ? '' : 'flex-row-reverse'}`}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
      isAi 
        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
        : 'bg-gradient-to-r from-gray-600 to-gray-700'
    }`}>
      {isAi ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
    </div>
    <div className={`max-w-xs px-4 py-3 rounded-2xl ${
      isAi 
        ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white' 
        : 'bg-blue-500 text-white'
    } ${isAi ? 'rounded-bl-md' : 'rounded-br-md'}`}>
      {isTyping ? (
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
        </div>
      ) : (
        <>
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p className="text-xs opacity-60 mt-1">{message.time}</p>
        </>
      )}
    </div>
  </div>
);

const AnimatedChatWindow = ({ conversation, delay }) => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentMessageIndex < conversation.messages.length) {
          setIsTyping(true);
          
          setTimeout(() => {
            setVisibleMessages(prev => [...prev, conversation.messages[currentMessageIndex]]);
            setIsTyping(false);
            setCurrentMessageIndex(prev => prev + 1);
          }, 1500);
        } else {
          // Reset animation after showing all messages
          setTimeout(() => {
            setVisibleMessages([]);
            setCurrentMessageIndex(0);
          }, 3000);
        }
      }, 3000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, conversation.messages, delay]);

  return (
    <div 
      className="absolute w-80 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-2xl animate-fade-in-up"
      style={conversation.position}
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white font-medium text-sm">aisona AI</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Clock className="w-3 h-3" />
          <span>Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-3 max-h-64 overflow-hidden">
        {visibleMessages.map((message, index) => (
          <ChatBubble 
            key={index} 
            message={message} 
            isAi={message.type === 'ai'} 
          />
        ))}
        {isTyping && (
          <ChatBubble 
            message={{ text: '', time: '' }} 
            isAi={true} 
            isTyping={true} 
          />
        )}
      </div>

      {/* Status Indicator */}
      <div className="flex items-center justify-center mt-4 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs text-green-400">
          <CheckCircle className="w-3 h-3" />
          <span>Powered by aisona.tech</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 border border-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border border-purple-400/30 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 border border-cyan-400/30 rotate-12 animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400/20 rounded-full animate-float delay-3000"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-4000"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 border border-cyan-400/20 rotate-45 animate-float delay-5000"></div>
      </div>

      {/* Animated Chat Windows */}
      {chatConversations.map((conversation) => (
        <AnimatedChatWindow 
          key={conversation.id} 
          conversation={conversation} 
          delay={conversation.delay}
        />
      ))}

      {/* Floating AI indicators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 animate-float delay-1000">
          <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-300 font-medium">AI Active</span>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/5 animate-float delay-3000">
          <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 py-1">
            <MessageCircle className="w-3 h-3 text-blue-400" />
            <span className="text-xs text-blue-300 font-medium">24/7 Support</span>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/5 animate-float delay-2000">
          <div className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1">
            <Zap className="w-3 h-3 text-purple-400" />
            <span className="text-xs text-purple-300 font-medium">Instant Response</span>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge with animation */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm text-blue-300 font-medium">AI-Powered Automation Platform</span>
            <Star className="w-4 h-4 text-yellow-400 animate-pulse delay-500" />
          </div>
        </div>

        {/* Headline with staggered animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in-up delay-200">
            Deploy Smart
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up delay-400">
            AI Agents
          </span>
        </h1>

        {/* Subtitle with animation */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-600">
          Watch your AI agents in action! Deploy intelligent conversational bots that handle customer support, 
          generate leads, and automate workflows with human-like precision.
        </p>

        {/* CTA Buttons with animation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-800">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 animate-pulse-glow">
            <span className="flex items-center gap-2">
              Start Building Agents
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group flex items-center gap-3 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-xl border border-slate-600 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Play className="w-4 h-4 ml-0.5" />
            </div>
            Watch Live Demo
          </button>
        </div>

        {/* Stats with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-1000 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2 animate-count-up">99.9%</div>
            <div className="text-slate-400">Response Accuracy</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-1200 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2 animate-count-up">24/7</div>
            <div className="text-slate-400">AI Availability</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-1400 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2 animate-count-up">2.5s</div>
            <div className="text-slate-400">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;