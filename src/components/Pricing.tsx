const plans = [
  {
    name: "Starter",
    price: "Free",
    period: null,
    description: "Perfect for small teams getting started with AI-assisted task management.",
    cta: "Get Started Free",
    ctaStyle: "border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600",
    popular: false,
    features: [
      "Up to 5 team members",
      "100 tasks per month",
      "Basic AI priority scoring",
      "Slack integration",
      "7-day history",
      "Email support",
    ],
    missing: ["Smart Delegation", "Deadline Predictor", "Velocity Insights", "Custom reports"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo per team",
    description: "The full AI suite for growing teams that need to ship fast and stay aligned.",
    cta: "Start Free Trial",
    ctaStyle: "bg-white text-indigo-600 hover:bg-indigo-50 font-bold",
    popular: true,
    features: [
      "Up to 50 team members",
      "Unlimited tasks",
      "Full AI priority scoring",
      "Smart Delegation",
      "Deadline Predictor",
      "Team Velocity Insights",
      "50+ integrations",
      "Auto-generated reports",
      "Priority support",
    ],
    missing: [],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "Tailored for large organizations with advanced security and compliance needs.",
    cta: "Contact Sales",
    ctaStyle: "border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600",
    popular: false,
    features: [
      "Unlimited team members",
      "Unlimited tasks",
      "Everything in Pro",
      "SSO / SAML",
      "Custom AI model training",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
    ],
    missing: [],
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Start free. Upgrade when your team is ready. No hidden fees.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.popular
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              {/* Plan name & description */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-8">
                <span className={`text-5xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm mb-2 ${plan.popular ? "text-indigo-200" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`block text-center text-sm font-semibold px-6 py-3 rounded-xl transition-colors mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              {/* Feature list */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={plan.popular ? "text-indigo-200" : "text-indigo-600"}>
                      <CheckIcon />
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.missing.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 opacity-40">
                    <XIcon />
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include a 14-day free trial. No credit card required.
        </p>

      </div>
    </section>
  );
}
