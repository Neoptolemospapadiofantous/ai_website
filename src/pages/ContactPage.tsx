import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Calendar,
  Sparkles,
  Users,
  Headphones,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our enterprise sales team",
      details: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9 AM - 6 PM EST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your questions",
      details: "sales@aisona.tech",
      availability: "24-hour response time",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support from our team",
      details: "Available on our website",
      availability: "Mon-Fri, 9 AM - 6 PM EST",
      action: "Start Chat"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personalized consultation",
      details: "calendly.com/aisona-sales",
      availability: "Flexible scheduling available",
      action: "Book Meeting"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@aisona.tech",
      timezone: "PST (UTC-8)"
    },
    {
      city: "New York",
      address: "456 Business Plaza, Floor 25",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@aisona.tech",
      timezone: "EST (UTC-5)"
    },
    {
      city: "London",
      address: "789 Tech Square, Level 12",
      zipCode: "London, UK EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@aisona.tech",
      timezone: "GMT (UTC+0)"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "VP of Sales",
      specialization: "Enterprise Solutions",
      email: "sarah.chen@aisona.tech",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Michael Rodriguez",
      role: "Solutions Architect",
      specialization: "Technical Implementation",
      email: "michael.rodriguez@aisona.tech",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Emily Watson",
      role: "Customer Success Manager",
      specialization: "Client Onboarding",
      email: "emily.watson@aisona.tech",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: "Fast Response Times",
      description: "Average response time under 2 hours for enterprise clients"
    },
    {
      icon: Users,
      title: "Dedicated Account Managers",
      description: "Personal point of contact for all your needs"
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock support for Enterprise+ clients"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SOC 2, GDPR, and industry-specific compliance support"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Our
              </span>
              <br />
              <span className="text-white">Expert Team</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Our team of experts is here to help you 
              find the perfect solution for your unique needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call: (555) 123-4567
              </button>
            </div>
          </div>

          {/* Support Features */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            {supportFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                How to Reach Us
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to help with any questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className={`bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-slate-400 mb-4">{method.description}</p>
                  <p className="text-white font-medium mb-2">{method.details}</p>
                  <p className="text-slate-500 text-sm mb-4">{method.availability}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group">
                    {method.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Acme Corporation"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="demo">Request Demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Offices
              </h2>
              <p className="text-slate-300 mb-8">
                Visit us at one of our global locations or reach out to your nearest office.
              </p>

              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-6 rounded-xl border border-slate-700"
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      {office.city}
                    </h3>
                    <div className="space-y-3 text-slate-300">
                      <p>{office.address}</p>
                      <p>{office.zipCode}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-400" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span>{office.timezone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 border-t border-slate-700">
                    <p className="text-sm text-blue-400">
                      Emergency support available 24/7 for Enterprise+ clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our experienced team is dedicated to helping you succeed with AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 p-6 rounded-xl border border-slate-700 text-center hover:border-slate-600 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-slate-400 mb-4">{member.specialization}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Response Time Guarantee
            </h3>
            <p className="text-slate-300 mb-6">
              We guarantee a response to all inquiries within 24 hours during business days. 
              Enterprise clients receive priority support with faster response times.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">2 hours</div>
                <div className="text-slate-400">Enterprise+ Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">4 hours</div>
                <div className="text-slate-400">Enterprise Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">24 hours</div>
                <div className="text-slate-400">General Inquiries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
