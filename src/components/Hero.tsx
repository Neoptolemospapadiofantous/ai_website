import React from 'react';
import { ArrowRight, Bot, Sparkles, Play, Zap, Star } from 'lucide-react';

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

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
            Build Intelligent
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up delay-400">
            AI Agents
          </span>
        </h1>

        {/* Subtitle with animation */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-600">
          Transform your business operations with intelligent automation. Deploy AI agents that handle customer support, 
          generate leads, and integrate seamlessly with your existing workflow.
        </p>

        {/* CTA Buttons with animation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-800">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 animate-pulse-glow">
            <span className="flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group flex items-center gap-3 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-xl border border-slate-600 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Play className="w-4 h-4 ml-0.5" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Stats with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-1000 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2 animate-count-up">99.9%</div>
            <div className="text-slate-400">Uptime Guarantee</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-1200 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2 animate-count-up">24/7</div>
            <div className="text-slate-400">AI Support</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-1400 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2 animate-count-up">100+</div>
            <div className="text-slate-400">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;