import { Component, ErrorInfo, ReactNode } from 'react'; // Fixed: removed React

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class AboutUsErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('About Us Error Boundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              ⚠️
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-slate-400 mb-6">
              We're sorry, but there was an error loading this page. Please try refreshing or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Refresh Page
              </button>
              <a 
                href="/contact"
                className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
            {import.meta.env.DEV && this.state.error && ( // Fixed: changed from process.env
              <details className="mt-6 text-left">
                <summary className="text-slate-400 cursor-pointer">Error Details</summary>
                <pre className="mt-2 p-4 bg-slate-900 rounded-lg text-xs text-red-400 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default AboutUsErrorBoundary;
