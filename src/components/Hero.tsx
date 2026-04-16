const stats = [
  { value: "5,000+", label: "Teams using TaskAI" },
  { value: "2M+", label: "Tasks automated" },
  { value: "4.9/5", label: "Average rating" },
];

const mockTasks = [
  { label: "Redesign onboarding flow", priority: "High", assignee: "S", color: "bg-red-100 text-red-700" },
  { label: "Fix API rate limiting bug", priority: "Critical", assignee: "M", color: "bg-orange-100 text-orange-700" },
  { label: "Write Q2 release notes", priority: "Medium", assignee: "A", color: "bg-yellow-100 text-yellow-700" },
  { label: "Set up CI/CD pipeline", priority: "Low", assignee: "J", color: "bg-green-100 text-green-700" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24">
      {/* Background gradient blobs */}
      <div className="absolute -top-40 -right-32 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              New: AI-powered sprint planning is here
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              AI Task Management for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
                High-Performance Teams
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              Stop wasting time on priorities. TaskAI automatically organizes your team&apos;s work, predicts bottlenecks, and keeps everyone aligned — so you ship faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-indigo-600 text-white text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors text-center shadow-lg shadow-indigo-200"
              >
                Start Free Trial
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 text-base font-semibold text-gray-700 px-8 py-3.5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Mockup header */}
              <div className="bg-gray-50 border-b border-gray-100 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-gray-400">TaskAI — Sprint #14</span>
                <div className="w-16" />
              </div>

              {/* AI insight banner */}
              <div className="mx-5 mt-5 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L4.09 12.26a1 1 0 00.91 1.74H11v8l8.91-10.26a1 1 0 00-.91-1.74H13V2z" />
                  </svg>
                </div>
                <p className="text-sm text-indigo-800 font-medium">
                  AI re-prioritized 3 tasks based on your deadline risk. <span className="underline cursor-pointer">Review changes →</span>
                </p>
              </div>

              {/* Task list */}
              <div className="p-5 flex flex-col gap-3">
                {mockTasks.map((task) => (
                  <div
                    key={task.label}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                  >
                    <input type="checkbox" className="w-4 h-4 accent-indigo-600 shrink-0" readOnly />
                    <span className="flex-1 text-sm font-medium text-gray-800 truncate">{task.label}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${task.color}`}>
                      {task.priority}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-700 shrink-0">
                      {task.assignee}
                    </div>
                  </div>
                ))}
              </div>

              {/* Velocity bar */}
              <div className="px-5 pb-5">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                  <span>Sprint velocity</span>
                  <span className="font-medium text-indigo-600">78%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-linear-to-r from-indigo-500 to-violet-500 h-2 rounded-full w-[78%]" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Shipped today</p>
                <p className="text-sm font-bold text-gray-900">12 tasks done</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
