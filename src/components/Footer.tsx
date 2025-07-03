import React from 'react';
import { Twitter, Linkedin, Github, Mail, ArrowRight, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Zap className="w-8 h-8 text-teal-400" />
                <div className="absolute inset-0 w-8 h-8 text-teal-400 animate-pulse opacity-50">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI Platform
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Building the future of intelligent automation with AI-powered agent systems that transform how businesses operate and engage with customers.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">GDPR</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
              <p className="text-gray-400">Get the latest news and updates about AI automation</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400/50 backdrop-blur-sm"
              />
              <button className="btn-primary text-white px-6 py-3 rounded-r-lg flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400">
            © 2024 AI Platform. All rights reserved. Built with intelligence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;