import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-lg bg-slate-950 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              aisona.tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              FAQ
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              Docs
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                Services
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                FAQ
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
                Docs
              </a>
              <div className="pt-4 border-t border-white/10">
                <button className="text-slate-300 hover:text-white transition-colors duration-300 block mb-3 font-medium">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;