import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-teal-400" />
              <div className="absolute inset-0 w-8 h-8 text-teal-400 animate-pulse opacity-50">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">AI Platform</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">Services</a>
            <a href="#pricing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">FAQ</a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Sign In
            </button>
            <button className="btn-primary text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800/50">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">Services</a>
              <a href="#pricing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">FAQ</a>
              <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">Contact</a>
              <div className="pt-4 border-t border-gray-800/50">
                <button className="text-gray-300 hover:text-white transition-colors duration-300 block mb-3 font-medium">
                  Sign In
                </button>
                <button className="btn-primary text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
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