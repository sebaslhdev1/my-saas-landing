import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "TaskAI cut our sprint planning meetings from 2 hours down to 20 minutes. The AI just knows what needs to go first — and it's almost always right.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Finova",
    initials: "SC",
    color: "bg-violet-500",
    stars: 5,
  },
  {
    quote:
      "We went from constantly missing deadlines to shipping every sprint on time. The Deadline Predictor caught a blocker 4 days early — that alone paid for the whole year.",
    name: "Marcus Rodriguez",
    role: "Engineering Manager",
    company: "Scaleform",
    initials: "MR",
    color: "bg-indigo-500",
    stars: 5,
  },
  {
    quote:
      "As a product lead managing 3 different dev teams, TaskAI gives me a single view of everything. The auto-reports save me 3 hours of stakeholder updates every week.",
    name: "Aisha Patel",
    role: "Product Lead",
    company: "Orbyt Agency",
    initials: "AP",
    color: "bg-pink-500",
    stars: 5,
  },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Loved by teams that ship
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Don&apos;t take our word for it — here&apos;s what real teams say after their first sprint with TaskAI.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <FadeIn key={t.name} delay={index * 0.15} direction="up">
            <div className="flex flex-col gap-6 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 h-full">
              {/* Stars */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 text-gray-300 dark:text-gray-600 text-sm font-semibold uppercase tracking-widest">
          {["Finova", "Scaleform", "Orbyt Agency", "Driftly", "Nexlane", "Pulsar Labs"].map((brand) => (
            <span key={brand} className="hover:text-gray-400 dark:hover:text-gray-400 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
