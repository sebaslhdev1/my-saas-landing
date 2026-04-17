export default function CTABanner() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-indigo-600 rounded-3xl px-8 py-20 text-center overflow-hidden">

          {/* Background decoration */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-500 rounded-full opacity-30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-400 rounded-full opacity-30 blur-3xl pointer-events-none" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to transform how your team works?
            </h2>
            <p className="text-lg text-indigo-200 leading-relaxed">
              Join 5,000+ teams already using TaskAI to ship faster, stress less, and stay in sync — starting today, for free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#pricing"
                className="bg-white text-indigo-600 text-base font-bold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="#how-it-works"
                className="border border-indigo-400 text-white text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-500 transition-colors"
              >
                See How it Works
              </a>
            </div>

            <p className="text-indigo-300 text-sm">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
