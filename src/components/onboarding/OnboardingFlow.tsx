import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  User, 
  Building, 
  Target, 
  Sparkles, 
  Play, 
  BookOpen, 
  MessageSquare, 
  Phone,
  X,
  Info,
  Lightbulb,
  Zap,
  Shield,
  BarChart3,
  Users,
  Settings,
} from 'lucide-react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<OnboardingStepProps>;
  optional?: boolean;
  estimatedTime?: string;
}

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

interface OnboardingFlowProps {
  onComplete: (userData: UserData) => void;
  onSkip: () => void;
}

interface OnboardingStepProps {
  userData: UserData;
  updateUserData: (updates: Partial<UserData>) => void;
  onNext: () => void;
  onPrev: () => void;
  showTooltip: string | null;
  setShowTooltip: (tooltip: string | null) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepInfo: OnboardingStep;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    teamSize: '',
    goals: [],
    preferences: {
      notifications: true,
      newsletter: true,
      tips: true
    }
  });
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  // Save progress to localStorage
  useEffect(() => {
    const progress = {
      currentStep,
      userData,
      completedSteps: Array.from(completedSteps),
      timestamp: Date.now()
    };
    localStorage.setItem('onboarding_progress', JSON.stringify(progress));
  }, [currentStep, userData, completedSteps]);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('onboarding_progress');
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        // Only restore if less than 24 hours old
        if (Date.now() - progress.timestamp < 24 * 60 * 60 * 1000) {
          setCurrentStep(progress.currentStep);
          setUserData(progress.userData);
          setCompletedSteps(new Set(progress.completedSteps));
        }
      } catch (error) {
        console.error('Failed to restore onboarding progress:', error);
      }
    }
  }, []);

  const steps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to aisona.tech',
      description: 'Let\'s get you set up with AI-powered customer service in just a few minutes',
      component: WelcomeStep,
      estimatedTime: '1 min'
    },
    {
      id: 'account',
      title: 'Create Your Account',
      description: 'Set up your account with basic information',
      component: AccountStep,
      estimatedTime: '2 min'
    },
    {
      id: 'personalization',
      title: 'Tell Us About Your Business',
      description: 'Help us customize your experience',
      component: PersonalizationStep,
      estimatedTime: '2 min'
    },
    {
      id: 'features',
      title: 'Discover Key Features',
      description: 'Learn about the core capabilities that will transform your customer service',
      component: FeaturesStep,
      estimatedTime: '3 min'
    },
    {
      id: 'quickstart',
      title: 'Quick Win Demo',
      description: 'See your first AI agent in action',
      component: QuickStartStep,
      estimatedTime: '2 min'
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      description: 'Get familiar with documentation and support channels',
      component: ResourcesStep,
      optional: true,
      estimatedTime: '1 min'
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
      
      // Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'onboarding_step_completed', {
          step_number: currentStep + 1,
          step_name: steps[currentStep].id
        });
      }
    } else {
      handleComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex <= currentStep || completedSteps.has(stepIndex - 1)) {
      setCurrentStep(stepIndex);
    }
  };

  const handleComplete = () => {
    // Clear saved progress
    localStorage.removeItem('onboarding_progress');
    
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'onboarding_completed', {
        user_role: userData.role,
        use_case: userData.useCase,
        team_size: userData.teamSize
      });
    }
    
    onComplete(userData);
  };

  const handleSkip = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'onboarding_skipped', {
        step_number: currentStep + 1,
        step_name: steps[currentStep].id
      });
    }
    
    onSkip();
  };

  const updateUserData = (updates: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...updates }));
  };

  const CurrentStepComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Header with Progress */}
      <div className="relative z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white">aisona.tech</span>
            </div>
            
            <button
              onClick={handleSkip}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              Skip Setup
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-300">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-slate-400">
                {steps[currentStep].estimatedTime} remaining
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                disabled={index > currentStep && !completedSteps.has(index - 1)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  index === currentStep
                    ? 'bg-blue-500 text-white'
                    : completedSteps.has(index)
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    : index < currentStep
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {completedSteps.has(index) ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <span className="w-3 h-3 rounded-full bg-current opacity-50" />
                )}
                {step.title}
                {step.optional && <span className="text-xs opacity-60">(Optional)</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <CurrentStepComponent
            userData={userData}
            updateUserData={updateUserData}
            onNext={nextStep}
            onPrev={prevStep}
            showTooltip={showTooltip}
            setShowTooltip={setShowTooltip}
            isFirstStep={currentStep === 0}
            isLastStep={currentStep === steps.length - 1}
            stepInfo={steps[currentStep]}
          />
        </div>
      </div>
    </div>
  );
};

// Welcome Step Component
const WelcomeStep: React.FC<OnboardingStepProps> = ({ onNext, stepInfo }) => {
  return (
    <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Sparkles className="w-10 h-10 text-white" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to the Future
        </span>
        <br />
        <span className="text-white">of Customer Service</span>
      </h1>
      
      <p className="text-xl text-slate-300 mb-8 leading-relaxed">
        You're about to transform how your business handles customer interactions. 
        Our AI agents will help you provide instant, personalized support 24/7 while reducing costs by up to 90%.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
          <Zap className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
          <h3 className="font-semibold text-white mb-2">Instant Setup</h3>
          <p className="text-sm text-slate-400">Get your AI agent running in under 10 minutes</p>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
          <Shield className="w-8 h-8 text-green-400 mb-3 mx-auto" />
          <h3 className="font-semibold text-white mb-2">Enterprise Security</h3>
          <p className="text-sm text-slate-400">Bank-grade security and compliance built-in</p>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
          <BarChart3 className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
          <h3 className="font-semibold text-white mb-2">Proven Results</h3>
          <p className="text-sm text-slate-400">Join 500+ companies already seeing success</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          Let's Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-sm text-slate-400 mt-6">
        ⏱️ This setup takes about {stepInfo.estimatedTime} • No credit card required
      </p>
    </div>
  );
};

// Account Step Component
const AccountStep: React.FC<OnboardingStepProps> = ({ userData, updateUserData, onNext, onPrev, showTooltip, setShowTooltip }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValidating, setIsValidating] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!userData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!userData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!userData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
    
    // Simulate API validation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (validateForm()) {
      onNext();
    }
    setIsValidating(false);
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
        <p className="text-slate-300">We'll use this information to personalize your experience</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Full Name *
              <button
                type="button"
                onMouseEnter={() => setShowTooltip('name')}
                onMouseLeave={() => setShowTooltip(null)}
                className="ml-1 text-slate-400 hover:text-slate-300"
              >
                <Info className="w-4 h-4 inline" />
              </button>
            </label>
            <input
              type="text"
              id="name"
              value={userData.name}
              onChange={(e) => updateUserData({ name: e.target.value })}
              className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors ${
                errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-blue-500'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            {showTooltip === 'name' && (
              <div className="absolute z-10 bottom-full left-0 mb-2 p-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-300 whitespace-nowrap">
                This will be used for personalized communications
              </div>
            )}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address *
              <button
                type="button"
                onMouseEnter={() => setShowTooltip('email')}
                onMouseLeave={() => setShowTooltip(null)}
                className="ml-1 text-slate-400 hover:text-slate-300"
              >
                <Info className="w-4 h-4 inline" />
              </button>
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(e) => updateUserData({ email: e.target.value })}
              className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-blue-500'
              }`}
              placeholder="john@company.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            {showTooltip === 'email' && (
              <div className="absolute z-10 bottom-full left-0 mb-2 p-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-300 whitespace-nowrap">
                We'll send setup instructions and updates here
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            value={userData.company}
            onChange={(e) => updateUserData({ company: e.target.value })}
            className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors ${
              errors.company ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-blue-500'
            }`}
            placeholder="Your Company Name"
          />
          {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
        </div>

        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white mb-1">Your data is secure</h3>
              <p className="text-sm text-slate-400">
                We use enterprise-grade encryption and never share your information with third parties. 
                Read our <a href="#" className="text-blue-400 hover:underline">privacy policy</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <button
            type="submit"
            disabled={isValidating}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isValidating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Validating...
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

// Personalization Step Component
const PersonalizationStep: React.FC<OnboardingStepProps> = ({ userData, updateUserData, onNext, onPrev }) => {
  const roles = [
    { id: 'ceo', label: 'CEO/Founder', icon: '👑' },
    { id: 'cto', label: 'CTO/Tech Lead', icon: '⚡' },
    { id: 'marketing', label: 'Marketing Manager', icon: '📈' },
    { id: 'support', label: 'Support Manager', icon: '🎧' },
    { id: 'sales', label: 'Sales Manager', icon: '💼' },
    { id: 'other', label: 'Other', icon: '👤' }
  ];

  const useCases = [
    { id: 'customer-support', label: 'Customer Support Automation', description: 'Handle inquiries, tickets, and common questions' },
    { id: 'lead-generation', label: 'Lead Generation & Qualification', description: 'Capture and qualify potential customers' },
    { id: 'sales-assistance', label: 'Sales Process Assistance', description: 'Support sales team with lead nurturing' },
    { id: 'internal-support', label: 'Internal Employee Support', description: 'Help employees with HR, IT, and general questions' }
  ];

  const teamSizes = [
    { id: '1-10', label: '1-10 employees' },
    { id: '11-50', label: '11-50 employees' },
    { id: '51-200', label: '51-200 employees' },
    { id: '201-1000', label: '201-1000 employees' },
    { id: '1000+', label: '1000+ employees' }
  ];

  const goals = [
    { id: 'reduce-costs', label: 'Reduce support costs', icon: '💰' },
    { id: 'improve-response', label: 'Improve response times', icon: '⚡' },
    { id: 'scale-support', label: 'Scale support operations', icon: '📈' },
    { id: 'increase-satisfaction', label: 'Increase customer satisfaction', icon: '😊' },
    { id: 'automate-workflows', label: 'Automate repetitive tasks', icon: '🤖' },
    { id: '24-7-support', label: 'Provide 24/7 support', icon: '🌙' }
  ];

  const toggleGoal = (goalId: string) => {
    const currentGoals = userData.goals || [];
    const newGoals = currentGoals.includes(goalId)
      ? currentGoals.filter(g => g !== goalId)
      : [...currentGoals, goalId];
    updateUserData({ goals: newGoals });
  };

  const canProceed = userData.role && userData.useCase && userData.teamSize;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Tell Us About Your Business</h2>
        <p className="text-slate-300">This helps us customize your AI agent for maximum impact</p>
      </div>

      <div className="space-y-8">
        {/* Role Selection */}
        <div>
          <label className="block text-lg font-semibold text-white mb-4">What's your role? *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => updateUserData({ role: role.id })}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  userData.role === role.id
                    ? 'border-blue-500 bg-blue-500/10 text-white'
                    : 'border-slate-700 bg-slate-900/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
              >
                <div className="text-2xl mb-2">{role.icon}</div>
                <div className="font-medium">{role.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Use Case Selection */}
        <div>
          <label className="block text-lg font-semibold text-white mb-4">Primary use case? *</label>
          <div className="space-y-3">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => updateUserData({ useCase: useCase.id })}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  userData.useCase === useCase.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-700 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
              >
                <div className="font-semibold text-white mb-1">{useCase.label}</div>
                <div className="text-sm text-slate-400">{useCase.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Team Size */}
        <div>
          <label className="block text-lg font-semibold text-white mb-4">Team size? *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {teamSizes.map((size) => (
              <button
                key={size.id}
                onClick={() => updateUserData({ teamSize: size.id })}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  userData.teamSize === size.id
                    ? 'border-blue-500 bg-blue-500/10 text-white'
                    : 'border-slate-700 bg-slate-900/50 text-slate-300 hover:border-slate-600'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Goals Selection */}
        <div>
          <label className="block text-lg font-semibold text-white mb-4">
            What are your main goals? <span className="text-sm text-slate-400">(Select all that apply)</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  userData.goals?.includes(goal.id)
                    ? 'border-blue-500 bg-blue-500/10 text-white'
                    : 'border-slate-700 bg-slate-900/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{goal.icon}</span>
                  <span className="font-medium">{goal.label}</span>
                  {userData.goals?.includes(goal.id) && (
                    <CheckCircle className="w-5 h-5 text-blue-400 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <button
            onClick={onNext}
            disabled={!canProceed}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Features Step Component
const FeaturesStep: React.FC<OnboardingStepProps> = ({ onNext, onPrev }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'ai-agents',
      title: 'Intelligent AI Agents',
      description: 'Deploy conversational AI that understands context and provides personalized responses',
      icon: '🤖',
      benefits: [
        '24/7 availability across all channels',
        '95% accuracy in understanding customer intent',
        'Handles multiple conversations simultaneously',
        'Learns from every interaction to improve responses'
      ],
      demo: 'Watch how an AI agent handles a complex customer inquiry in real-time'
    },
    {
      id: 'automation',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows to free up your team for complex issues',
      icon: '⚡',
      benefits: [
        'Automatic ticket routing and prioritization',
        'Intelligent escalation to human agents',
        'Workflow automation for common processes',
        'Integration with existing tools and systems'
      ],
      demo: 'See how tickets are automatically categorized and routed to the right team'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Get deep insights into customer interactions and team performance',
      icon: '📊',
      benefits: [
        'Real-time performance dashboards',
        'Customer satisfaction tracking',
        'Predictive analytics for issue prevention',
        'Detailed reporting and insights'
      ],
      demo: 'Explore interactive dashboards showing key metrics and trends'
    },
    {
      id: 'integration',
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and systems without disruption',
      icon: '🔗',
      benefits: [
        'Pre-built integrations with popular platforms',
        'RESTful APIs for custom connections',
        'Single sign-on (SSO) support',
        'Real-time data synchronization'
      ],
      demo: 'See how easily we integrate with your current tech stack'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Discover Key Features</h2>
        <p className="text-slate-300">See how these powerful capabilities will transform your customer service</p>
      </div>

      {/* Feature Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 bg-slate-900/50 p-2 rounded-xl border border-slate-700">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Feature Display */}
      <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 mb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-4xl mb-4">{features[activeFeature].icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{features[activeFeature].title}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">{features[activeFeature].description}</p>
            
            <ul className="space-y-3">
              {features[activeFeature].benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Interactive Demo</span>
            </div>
            <p className="text-slate-300 mb-4">{features[activeFeature].demo}</p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Try Interactive Demo
            </button>
          </div>
        </div>
      </div>

      {/* Feature Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeFeature === index ? 'bg-blue-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        
        <button
          onClick={onNext}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
        >
          See It In Action
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Quick Start Step Component
const QuickStartStep: React.FC<OnboardingStepProps> = ({ userData, onNext, onPrev }) => {
  const [demoStep, setDemoStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    {
      title: 'Customer Inquiry Received',
      description: 'A customer asks about their order status',
      message: "Hi, I placed an order last week but haven't received any updates. Can you help?",
      type: 'customer'
    },
    {
      title: 'AI Agent Processing',
      description: 'AI analyzes the message and retrieves relevant information',
      message: 'Analyzing customer inquiry... Retrieving order information...',
      type: 'system'
    },
    {
      title: 'Personalized Response',
      description: 'AI provides a helpful, contextual response',
      message: "Hi! I'd be happy to help with your order. I can see your order #12345 was shipped yesterday and should arrive by tomorrow. Here's your tracking link: [tracking-link]. Is there anything else I can help you with?",
      type: 'agent'
    },
    {
      title: 'Customer Satisfied',
      description: 'Issue resolved instantly without human intervention',
      message: 'Perfect, thank you so much! That was really helpful.',
      type: 'customer'
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setDemoStep(0);
    
    const interval = setInterval(() => {
      setDemoStep(prev => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">See Your AI Agent in Action</h2>
        <p className="text-slate-300">Watch how your AI agent will handle real customer inquiries</p>
      </div>

      {/* Demo Interface */}
      <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Live Demo: {userData.useCase || 'Customer Support'}</h3>
          <button
            onClick={startDemo}
            disabled={isPlaying}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Playing...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Start Demo
              </>
            )}
          </button>
        </div>

        {/* Chat Interface */}
        <div className="bg-slate-800 rounded-xl p-4 h-96 overflow-y-auto">
          {demoSteps.slice(0, demoStep + 1).map((step, index) => (
            <div
              key={index}
              className={`mb-4 animate-fade-in-up ${
                step.type === 'customer' ? 'text-right' : 
                step.type === 'system' ? 'text-center' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  step.type === 'customer' 
                    ? 'bg-blue-500 text-white' 
                    : step.type === 'system'
                    ? 'bg-slate-600 text-slate-300 text-sm'
                    : 'bg-slate-700 text-white'
                }`}
              >
                {step.type === 'system' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    {step.message}
                  </div>
                ) : (
                  step.message
                )}
              </div>
              <div className={`text-xs text-slate-400 mt-1 ${
                step.type === 'customer' ? 'text-right' : 
                step.type === 'system' ? 'text-center' : 'text-left'
              }`}>
                {step.title}
              </div>
            </div>
          ))}
        </div>

        {/* Demo Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Demo Progress</span>
            <span>{demoStep + 1} / {demoSteps.length}</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((demoStep + 1) / demoSteps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">2.3s</div>
          <div className="text-slate-300">Average Response Time</div>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
          <div className="text-slate-300">Customer Satisfaction</div>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
          <div className="text-slate-300">Always Available</div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        
        <button
          onClick={onNext}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
        >
          I'm Ready to Start
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Resources Step Component
const ResourcesStep: React.FC<OnboardingStepProps> = ({ userData, updateUserData, onNext, onPrev, isLastStep }) => {
  const resources = [
    {
      title: 'Quick Start Guide',
      description: 'Step-by-step instructions to get your AI agent running',
      icon: BookOpen,
      type: 'guide',
      time: '5 min read'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch detailed walkthroughs of key features',
      icon: Play,
      type: 'video',
      time: '15 min watch'
    },
    {
      title: 'API Documentation',
      description: 'Complete technical documentation for developers',
      icon: Settings,
      type: 'docs',
      time: 'Reference'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get answers',
      icon: Users,
      type: 'community',
      time: 'Always active'
    },
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageSquare,
      type: 'support',
      time: 'Mon-Fri 9-6 PST'
    },
    {
      title: 'Phone Support',
      description: 'Schedule a call with our specialists',
      icon: Phone,
      type: 'phone',
      time: 'By appointment'
    }
  ];

  const handlePreferenceChange = (key: keyof UserData['preferences'], value: boolean) => {
    updateUserData({
      preferences: {
        ...userData.preferences,
        [key]: value
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Resources & Support</h2>
        <p className="text-slate-300">Everything you need to succeed with your AI agent</p>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          return (
            <div
              key={index}
              className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <IconComponent className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{resource.description}</p>
              <div className="text-xs text-slate-500">{resource.time}</div>
            </div>
          );
        })}
      </div>

      {/* Preferences */}
      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Communication Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={userData.preferences.notifications}
              onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <div>
              <div className="text-white font-medium">Product Updates</div>
              <div className="text-sm text-slate-400">Get notified about new features and improvements</div>
            </div>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={userData.preferences.newsletter}
              onChange={(e) => handlePreferenceChange('newsletter', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <div>
              <div className="text-white font-medium">Newsletter</div>
              <div className="text-sm text-slate-400">Monthly insights and best practices</div>
            </div>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={userData.preferences.tips}
              onChange={(e) => handlePreferenceChange('tips', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <div>
              <div className="text-white font-medium">Tips & Tutorials</div>
              <div className="text-sm text-slate-400">Weekly tips to maximize your AI agent's performance</div>
            </div>
          </label>
        </div>
      </div>

      {/* Next Steps Preview */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/30 mb-8">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">What happens next?</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                We'll set up your AI agent based on your preferences
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                You'll receive login credentials within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Our team will schedule a personalized walkthrough
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Start seeing results within the first week
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        
        <button
          onClick={onNext}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isLastStep ? 'Complete Setup' : 'Continue'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingFlow;
