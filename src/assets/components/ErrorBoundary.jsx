import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // TODO: Replace with real monitoring service integration (Sentry, LogRocket, etc.)
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      const componentName = this.props.componentName || "this section";
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
          <div className="w-full max-w-2xl rounded-[32px] border border-red-200 bg-white p-8 shadow-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">Unable to load {componentName}</h2>
            <p className="mt-4 text-slate-600">
              We&apos;re sorry, but something went wrong while loading this part of the academy website.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Refresh the screen or try again in a few moments.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="mt-6 inline-flex rounded-3xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Reload section
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
