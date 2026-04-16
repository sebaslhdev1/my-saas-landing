import FadeIn from "@/components/FadeIn";

const steps = [
  {
    step: "01",
    title: "Connect your tools",
    description:
      "Link Slack, Jira, GitHub, Notion, and more in one click. TaskAI reads your existing workflows — no migration needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    detail: "50+ integrations available",
  },
  {
    step: "02",
    title: "AI learns your team",
    description:
      "TaskAI analyzes your team's skills, past velocity, and work patterns to build a model that gets smarter every sprint.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M12 21v-1M7.05 16.95l-.707.707M16.95 16.95l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    detail: "Ready after just 1 sprint",
  },
  {
    step: "03",
    title: "Ship faster, together",
    description:
      "Get daily AI recommendations, automated reports, and early warnings — so your team stays unblocked and always on track.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    detail: "Avg. 40% faster delivery",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">How it Works</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            No lengthy onboarding. No consultants. Just connect, learn, and ship.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-12">

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-linear-to-r from-indigo-200 via-violet-300 to-indigo-200" />

          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.15} direction="up">
              <div className="relative flex flex-col items-center text-center gap-5">

                {/* Icon circle */}
                <div className="relative w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 shrink-0">
                  {item.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-violet-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                    {item.step.slice(1)}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>

                {/* Detail badge */}
                <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.detail}
                </span>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
