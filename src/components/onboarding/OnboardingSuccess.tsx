import React, { useEffect, useState } from 'react';
import { CheckCircle, Sparkles, Calendar, MessageSquare, BookOpen, ArrowRight, Star } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
  teamSize: string;
  goals: string[];
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    tips: boolean;
  };
}

interface OnboardingSuccessProps {
  userData: UserData;
  onGetStarted: () => void;
}

const OnboardingSuccess: React.FC<OnboardingSuccessProps> = ({ userData, onGetStarted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setConfettiVisible(true);
    
    // Hide confetti after animation
    const timer = setTimeout(() => {
      setConfettiVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      icon: Calendar,
      title: 'Schedule Your Walkthrough',
      description: 'Book a 30-minute session with our AI specialist',
      action: 'Schedule Now',
      priority: 'high'
    },
    {
      icon: MessageSquare,
      title: 'Join Our Community',
      description: 'Connect with other users and share best practices',
      action: 'Join Community',
      priority: 'medium'
    },
    {
      icon: BookOpen,
      title: 'Explore Documentation',
      description: 'Learn advanced features and customization options',
      action: 'View Docs',
      priority: 'low'
    }
  ];

  const getPersonalizedMessage = () => {
    const useCaseMessages = {
      'customer-support': 'Your AI agent will help reduce response times and handle common inquiries automatically.',
      'lead-generation': 'Get ready to capture and qualify more leads with intelligent conversation flows.',
      'sales-assistance': 'Your sales team will love having an AI assistant to nurture prospects 24/7.',
      'internal-support': 'Streamline internal processes and give employees instant access to information.'
    };

    return useCaseMessages[userData.useCase as keyof typeof useCaseMessages] || 
           'Your AI agent will transform how you handle customer interactions.';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Confetti Animation */}
      {confettiVisible && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-in">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome Aboard, {userData.name.split(' ')[0]}!
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
            Your AI agent setup is complete and ready to transform your {userData.company} customer experience.
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            {getPersonalizedMessage()}
          </p>

          {/* Setup Summary */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              Your Setup Summary
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-sm text-slate-400 mb-1">Use Case</div>
                <div className="text-white font-medium capitalize">
                  {userData.useCase.replace('-', ' ')}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Team Size</div>
                <div className="text-white font-medium">{userData.teamSize} employees</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Role</div>
                <div className="text-white font-medium capitalize">{userData.role}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Primary Goals</div>
                <div className="text-white font-medium">
                  {userData.goals.length} objectives selected
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">What's Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className={`bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 ${
                      step.priority === 'high' ? 'border-blue-500/50' : 'border-slate-700'
                    } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {step.priority === 'high' && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        Recommended
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      step.priority === 'high' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-slate-800'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 mb-4">{step.description}</p>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                      step.priority === 'high'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                        : 'border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}>
                      {step.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-slate-300 italic mb-4">
              "Setting up our AI agent was incredibly smooth. Within a week, we saw a 60% reduction in support tickets 
              and our customer satisfaction scores improved dramatically."
            </blockquote>
            <div className="text-white font-semibold">Sarah Chen</div>
            <div className="text-slate-400">VP of Customer Success, TechFlow</div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Access Your Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
              Schedule Walkthrough
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-2">
              Need help getting started? Our team is here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:support@aisona.tech" className="text-blue-400 hover:underline">
                support@aisona.tech
              </a>
              <span className="hidden sm:inline text-slate-600">•</span>
              <a href="tel:+1-555-0123" className="text-blue-400 hover:underline">
                +1 (555) 012-3456
              </a>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-slate-400">Mon-Fri 9AM-6PM PST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSuccess;
