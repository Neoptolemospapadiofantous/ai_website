import { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Home, 
  Settings, 
  HelpCircle, 
  FileText, 
  User, 
  LogIn,
  Sparkles,
  Shield,
  Zap as ZapIcon,
  Globe,
  Mail
} from 'lucide-react';

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuSections = [
    {
      title: "Main Navigation",
      description: "Core pages and features",
      items: [
        {
          name: "Home",
          href: "/",
          icon: Home,
          description: "Return to homepage with hero section and overview"
        },
        {
          name: "Services",
          href: "#services",
          icon: Settings,
          description: "Explore our AI-powered solutions and capabilities"
        },
        {
          name: "Pricing",
          href: "#pricing",
          icon: Sparkles,
          description: "View pricing plans and subscription options"
        },
        {
          name: "FAQ",
          href: "#faq",
          icon: HelpCircle,
          description: "Frequently asked questions and support"
        }
      ]
    },
    {
      title: "Resources & Documentation",
      description: "Learn and get support",
      items: [
        {
          name: "Documentation",
          href: "#docs",
          icon: FileText,
          description: "Complete API documentation and guides"
        },
        {
          name: "API Reference",
          href: "#api",
          icon: ZapIcon,
          description: "Technical API endpoints and integration guides"
        },
        {
          name: "Tutorials",
          href: "#tutorials",
          icon: Globe,
          description: "Step-by-step tutorials and best practices"
        },
        {
          name: "Community",
          href: "#community",
          icon: Shield,
          description: "Join our developer community and forums"
        }
      ]
    },
    {
      title: "Account & Support",
      description: "Manage your account and get help",
      items: [
        {
          name: "Sign In",
          href: "#signin",
          icon: LogIn,
          description: "Access your account dashboard"
        },
        {
          name: "Create Account",
          href: "#signup",
          icon: User,
          description: "Get started with a new account"
        },
        {
          name: "Support Center",
          href: "#support",
          icon: HelpCircle,
          description: "Get help and contact our support team"
        },
        {
          name: "Contact Us",
          href: "#contact",
          icon: Mail,
          description: "Reach out to our team directly"
        }
      ]
    },
    {
      title: "Company Information",
      description: "Learn more about aisona.tech",
      items: [
        {
          name: "About Us",
          href: "#about",
          icon: Globe,
          description: "Our mission, vision, and team"
        },
        {
          name: "Careers",
          href: "#careers",
          icon: Sparkles,
          description: "Join our growing team"
        },
        {
          name: "Privacy Policy",
          href: "#privacy",
          icon: Shield,
          description: "How we protect your data"
        },
        {
          name: "Terms of Service",
          href: "#terms",
          icon: FileText,
          description: "Legal terms and conditions"
        }
      ]
    }
  ];

  const quickActions = [
    {
      name: "Get Started",
      href: "#get-started",
      description: "Begin your AI journey today",
      primary: true
    },
    {
      name: "Schedule Demo",
      href: "#demo",
      description: "See our platform in action",
      primary: false
    },
    {
      name: "Contact Sales",
      href: "#sales",
      description: "Speak with our sales team",
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
          <a href="/" className="hover:text-white transition-colors duration-300">
            Home
          </a>
          <ArrowRight className="w-4 h-4" />
          <span className="text-white">Site Menu</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Site Navigation
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore all available pages, features, and resources on aisona.tech. 
            Find exactly what you're looking for with our comprehensive site menu.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <a
                key={action.name}
                href={action.href}
                className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  action.primary
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent hover:from-blue-500 hover:to-purple-500'
                    : 'bg-slate-900/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                  {action.name}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {action.description}
                </p>
                <ArrowRight className="w-5 h-5 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(sectionIndex + 3) * 200}ms` }}
            >
              {/* Section Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="text-slate-400">
                  {section.description}
                </p>
              </div>

              {/* Menu Items */}
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]"
                      role="menuitem"
                      aria-describedby={`menu-item-${sectionIndex}-${itemIndex}-desc`}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">
                          {item.name}
                        </h3>
                        <p 
                          id={`menu-item-${sectionIndex}-${itemIndex}-desc`}
                          className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed"
                        >
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses already using aisona.tech to power their AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
