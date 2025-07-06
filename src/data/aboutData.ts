import { AboutUsData, TeamMember, CompanyMetrics, Testimonial, CaseStudy, CoreValue, ExpertiseArea, Differentiator } from '../types/about';

export const companyMetrics: CompanyMetrics[] = [
  { metric: "5+", label: "Years in Business" },
  { metric: "200+", label: "Enterprise Clients" },
  { metric: "340%", label: "Average ROI" },
  { metric: "98%", label: "Success Rate" }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former McKinsey Principal and Google AI Research Scientist with 15+ years driving enterprise digital transformation. Led $2B+ in AI implementation projects across Fortune 100 companies. Recognized thought leader in responsible AI governance.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    linkedin: "https://linkedin.com/in/sarahchen-ai",
    expertise: ["AI Strategy", "Digital Transformation", "Executive Leadership", "Responsible AI"],
    credentials: "PhD Computer Science, Stanford • MBA, Wharton • Former McKinsey & Company",
    initials: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "Former Principal Engineer at OpenAI and Microsoft Research, specializing in large-scale ML systems and enterprise AI architecture. Holds 12 patents in distributed computing and has architected AI solutions processing 100B+ daily transactions.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    linkedin: "https://linkedin.com/in/marcusrodriguez-cto",
    expertise: ["Machine Learning", "System Architecture", "AI Infrastructure", "Technical Innovation"],
    credentials: "MS Computer Science, MIT • Former OpenAI, Microsoft Research • 12 AI Patents",
    initials: "MR"
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    role: "Chief Strategy Officer",
    bio: "Former Bain & Company Partner and IBM Watson General Manager with expertise in enterprise AI strategy and digital transformation. Led 200+ AI implementations across healthcare, financial services, and manufacturing sectors.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    linkedin: "https://linkedin.com/in/aishapatel-strategy",
    expertise: ["Business Strategy", "AI Implementation", "Change Management", "Industry Expertise"],
    credentials: "PhD Operations Research, Carnegie Mellon • Former Bain & Company, IBM Watson",
    initials: "AP"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Chief Revenue Officer",
    bio: "Former Salesforce EVP and Accenture Managing Director with 20+ years in enterprise software and consulting. Built and scaled $500M+ revenue organizations, specializing in complex, multi-year enterprise transformations.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    linkedin: "https://linkedin.com/in/jamesthompson-cro",
    expertise: ["Revenue Growth", "Enterprise Sales", "Client Relations", "Market Expansion"],
    credentials: "MBA, Kellogg • Former Salesforce EVP, Accenture MD • $500M+ Revenue Leadership",
    initials: "JT"
  },
  {
    id: 5,
    name: "Dr. Elena Vasquez",
    role: "Chief AI Ethics Officer",
    bio: "Former Stanford AI Ethics Lab Director and Google AI Principles Lead. Pioneer in responsible AI frameworks and algorithmic fairness. Advises Fortune 500 boards on AI governance and regulatory compliance strategies.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    linkedin: "https://linkedin.com/in/elenavasquez-ethics",
    expertise: ["AI Ethics", "Regulatory Compliance", "Risk Management", "Governance Frameworks"],
    credentials: "PhD Philosophy, Stanford • Former Google AI Ethics • 30+ Ethics Publications",
    initials: "EV"
  }
];

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Enterprise-First Thinking",
    description: "We understand the unique challenges of large-scale organizations—from regulatory compliance to change management. Every solution is designed with enterprise realities in mind, ensuring seamless integration with existing systems and processes.",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Measurable Impact",
    description: "We're committed to delivering quantifiable business value, not just technological innovation. Our success is measured by your ROI, operational efficiency gains, and competitive advantages achieved through AI implementation.",
    icon: "📊"
  },
  {
    id: 3,
    title: "Responsible AI Leadership",
    description: "We pioneer ethical AI practices, ensuring transparency, fairness, and accountability in every solution. Our governance frameworks help enterprises navigate AI risks while maximizing opportunities for positive impact.",
    icon: "🛡️"
  },
  {
    id: 4,
    title: "Strategic Partnership",
    description: "We're not just vendors—we're strategic partners invested in your long-term success. Our collaborative approach ensures knowledge transfer, capability building, and sustainable AI transformation that extends beyond individual projects.",
    icon: "🤝"
  },
  {
    id: 5,
    title: "Innovation Excellence",
    description: "We maintain our competitive edge through continuous research, strategic partnerships with leading technology providers, and investment in emerging AI capabilities. Our clients benefit from access to cutting-edge solutions before they become mainstream.",
    icon: "🚀"
  }
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    description: "Custom ML models, deep learning architectures, and neural network optimization for enterprise-scale data processing and predictive analytics.",
    technologies: ["TensorFlow", "PyTorch", "Kubernetes", "MLOps"],
    icon: "🧠"
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Enterprise-grade conversational AI, document intelligence, and language understanding systems that transform unstructured data into actionable insights.",
    technologies: ["GPT-4", "BERT", "Transformers", "LangChain"],
    icon: "💬"
  },
  {
    id: 3,
    title: "Computer Vision",
    description: "Industrial-strength image recognition, video analytics, and visual inspection systems for manufacturing, healthcare, and security applications.",
    technologies: ["OpenCV", "YOLO", "ResNet", "Edge AI"],
    icon: "👁️"
  },
  {
    id: 4,
    title: "Manufacturing & Supply Chain",
    description: "Predictive maintenance, quality control automation, demand forecasting, and supply chain optimization for global manufacturing operations.",
    technologies: ["IoT Integration", "Digital Twins", "Predictive Analytics"],
    icon: "🏭"
  },
  {
    id: 5,
    title: "Financial Services",
    description: "Risk management, fraud detection, algorithmic trading, and regulatory compliance solutions for banks, insurance companies, and investment firms.",
    technologies: ["Risk Modeling", "Compliance AI", "Fraud Detection"],
    icon: "🏦"
  },
  {
    id: 6,
    title: "Healthcare & Life Sciences",
    description: "Medical imaging analysis, drug discovery acceleration, clinical decision support, and population health management for healthcare organizations.",
    technologies: ["HIPAA Compliant", "Medical AI", "Clinical NLP"],
    icon: "🏥"
  }
];

export const differentiators: Differentiator[] = [
  {
    id: 1,
    title: "Enterprise AI Maturity Framework™",
    description: "Our proprietary assessment and implementation methodology reduces time-to-value by 60% compared to traditional approaches. This proven framework guides enterprises through strategic AI adoption with measurable milestones and risk mitigation at every stage.",
    icon: "⚡"
  },
  {
    id: 2,
    title: "Platform-Agnostic Architecture",
    description: "Unlike vendor-locked solutions, our technology-agnostic approach ensures optimal tool selection for each use case. We integrate seamlessly with existing enterprise infrastructure while maintaining flexibility for future technology evolution.",
    icon: "🏗️"
  },
  {
    id: 3,
    title: "Guaranteed ROI Methodology",
    description: "We're the only enterprise AI firm offering ROI guarantees backed by our proprietary value measurement framework. Our clients achieve an average 340% ROI within 18 months, with detailed tracking and optimization throughout the engagement.",
    icon: "📈"
  },
  {
    id: 4,
    title: "Enterprise-Grade Security & Compliance",
    description: "Built-in compliance for GDPR, HIPAA, SOX, and industry-specific regulations. Our security-first architecture includes advanced encryption, audit trails, and governance controls that meet the most stringent enterprise requirements.",
    icon: "🔒"
  },
  {
    id: 5,
    title: "Knowledge Transfer & Capability Building",
    description: "Beyond implementation, we build internal AI capabilities through comprehensive training programs, documentation, and ongoing support. Our clients become self-sufficient in AI innovation while maintaining strategic partnership for advanced initiatives.",
    icon: "🎓"
  },
  {
    id: 6,
    title: "Continuous Innovation Pipeline",
    description: "Access to cutting-edge AI research through our partnerships with leading universities and technology companies. Our clients benefit from early access to breakthrough technologies and methodologies before they become commercially available.",
    icon: "🔬"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Predictive Maintenance Revolution",
    industry: "Manufacturing",
    company: "Fortune 50 Automotive Manufacturer",
    description: "Implemented AI-powered predictive maintenance across 47 global manufacturing facilities, transforming reactive maintenance into proactive optimization. Our solution processes real-time sensor data from 10,000+ machines to predict failures before they occur.",
    results: [
      { metric: "$85M", label: "Annual Savings" },
      { metric: "73%", label: "Downtime Reduction" },
      { metric: "12 Months", label: "Full ROI" }
    ],
    testimonial: {
      quote: "aisona.tech didn't just deliver technology—they transformed our entire approach to manufacturing operations. The predictive insights have revolutionized our maintenance strategy and significantly improved our competitive position.",
      author: "Chief Operations Officer"
    },
    icon: "🏭"
  },
  {
    id: 2,
    title: "Intelligent Document Processing at Scale",
    industry: "Financial Services",
    company: "Top 10 Global Investment Bank",
    description: "Deployed enterprise-wide document intelligence platform processing 2M+ financial documents monthly. Our NLP solution extracts, validates, and routes critical information while ensuring regulatory compliance and audit trail integrity.",
    results: [
      { metric: "$50M", label: "Annual Cost Reduction" },
      { metric: "89%", label: "Processing Speed Increase" },
      { metric: "99.7%", label: "Accuracy Rate" }
    ],
    testimonial: {
      quote: "The transformation has been remarkable. We've not only achieved massive cost savings but also improved compliance and freed our analysts to focus on high-value strategic work.",
      author: "Chief Technology Officer"
    },
    icon: "🏦"
  },
  {
    id: 3,
    title: "Clinical Decision Support System",
    industry: "Healthcare",
    company: "Leading Health System (500+ Facilities)",
    description: "Developed AI-powered clinical decision support platform integrating with existing EHR systems across 500+ facilities. Our solution provides real-time diagnostic assistance and treatment recommendations while maintaining HIPAA compliance.",
    results: [
      { metric: "23%", label: "Diagnostic Accuracy Improvement" },
      { metric: "31%", label: "Treatment Time Reduction" },
      { metric: "$120M", label: "Annual Value Created" }
    ],
    testimonial: {
      quote: "This AI system has become an indispensable tool for our clinicians. The improvement in patient outcomes and operational efficiency has exceeded our most optimistic projections.",
      author: "Chief Medical Officer"
    },
    icon: "🏥"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    quote: "aisona.tech transformed our entire approach to AI implementation. Their Enterprise AI Maturity Framework provided the roadmap we needed to achieve measurable results across our global operations.",
    author: "Michael Chen",
    role: "Chief Digital Officer",
    company: "Fortune 100 Manufacturing Company"
  },
  {
    id: 2,
    name: "Sarah Williams",
    quote: "The level of expertise and strategic thinking they brought to our AI transformation was exceptional. We achieved 400% ROI in the first year alone.",
    author: "Sarah Williams",
    role: "Head of Innovation",
    company: "Global Financial Services Firm"
  },
  {
    id: 3,
    name: "Dr. James Rodriguez",
    quote: "Their responsible AI approach gave us confidence to deploy at scale while maintaining compliance with healthcare regulations. The results have been transformational for patient care.",
    author: "Dr. James Rodriguez",
    role: "Chief Medical Officer",
    company: "Regional Health System"
  }
];

export const aboutData: AboutUsData = {
  hero: {
    title: "Enterprise AI Transformation Leaders",
    subtitle: "Accelerating Fortune 500 Digital Evolution Through Strategic AI Implementation",
    description: "We partner with enterprise leaders to design, implement, and scale custom AI solutions that drive measurable business transformation. From C-suite strategy to technical execution, we deliver the expertise and proven methodologies that turn AI vision into competitive advantage.",
    metrics: companyMetrics
  },
  mission: "Empowering enterprise leaders to harness AI's transformative potential through strategic implementation, measurable outcomes, and sustainable competitive advantage.",
  vision: "To be the definitive catalyst for enterprise AI transformation, setting the global standard for responsible, scalable AI adoption.",
  story: {
    title: "Our Story: Born from Enterprise Need",
    content: [
      "In 2019, we recognized a critical gap in the enterprise AI landscape: while breakthrough technologies emerged daily, Fortune 500 companies struggled to translate AI potential into practical business value.",
      "Founded by former McKinsey consultants and Google AI researchers, aisona.tech was built specifically to bridge this divide. We understood that enterprise AI success required more than cutting-edge algorithms—it demanded deep business acumen, change management expertise, and the ability to navigate complex organizational structures.",
      "Our breakthrough came in 2021 when we helped a Fortune 100 financial services company achieve $50M in annual savings through intelligent document processing. This success established our reputation for delivering transformational results, not just impressive demos.",
      "Today, we're recognized as the premier enterprise AI implementation partner, having guided over 200 Fortune 1000 companies through successful digital transformations. Our proprietary Enterprise AI Maturity Framework™ has become the industry standard for strategic AI adoption."
    ]
  },
  values: coreValues,
  team: teamMembers,
  expertise: expertiseAreas,
  differentiators: differentiators,
  caseStudies: caseStudies,
  testimonials: testimonials
};
