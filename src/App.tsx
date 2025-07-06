import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Import pages
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import GetStartedPage from './pages/GetStartedPage';
import ContactPage from './pages/ContactPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';

// Import individual service pages
import AIAgentsPage from './pages/AIAgentsPage';
import SupportAutomationPage from './pages/SupportAutomationPage';

function HomePage() {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-agents" element={<AIAgentsPage />} />
            <Route path="/services/support-automation" element={<SupportAutomationPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
