import { ExternalLink } from 'lucide-react';

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Blank page ready for external documentation service */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive developer documentation and guides coming soon.
          </p>

          {/* Placeholder for external documentation link */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-12 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 text-slate-400 mb-4">
              <ExternalLink className="w-6 h-6" />
              <span className="text-lg">External Documentation Service</span>
            </div>
            <p className="text-slate-500">
              Documentation link will be integrated here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
