import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 border border-teal-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border border-cyan-400/30 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 border border-purple-400/30 rotate-12 animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-teal-400/20 rounded-full animate-float delay-3000"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center">
              <Bot className="w-10 h-10 text-teal-400" />
            </div>
            <Sparkles className="w-6 h-6 text-cyan-400 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Intelligent Agent
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent text-glow">
            Systems
          </span>
        </h1>

        {/* Value proposition */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your business with AI-powered automation. Build intelligent agents that handle customer support, 
          generate leads, and integrate seamlessly with your existing systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group btn-primary text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Launch Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group btn-secondary text-teal-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Talk to Sales
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;