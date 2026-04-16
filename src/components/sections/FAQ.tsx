"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "How does AI prioritization actually work?",
    answer:
      "TaskAI analyzes each task's deadline, business impact, dependencies, and your team's historical velocity. It combines these signals into a priority score that updates in real time as conditions change — so if a blocker appears or a deadline shifts, the ranking adjusts automatically.",
  },
  {
    question: "Can I import my existing tasks from Jira or Trello?",
    answer:
      "Yes. TaskAI has one-click importers for Jira, Trello, Asana, Linear, and Notion. Your tasks, labels, assignees, and due dates all come over intact. The import typically takes under 2 minutes for boards with up to 1,000 tasks.",
  },
  {
    question: "Is my team's data secure?",
    answer:
      "Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified, GDPR compliant, and we never train our AI models on your proprietary data. Enterprise plans also support on-premise deployment.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes — no contracts, no cancellation fees. You can cancel from your account settings in under 30 seconds. You'll keep access until the end of your billing period, and we'll export all your data in standard formats so you're never locked in.",
  },
  {
    question: "Does the free trial require a credit card?",
    answer:
      "No credit card required. You get full access to the Pro plan for 14 days, completely free. We'll remind you 3 days before the trial ends, and you only upgrade if you choose to.",
  },
  {
    question: "Does TaskAI work for remote teams?",
    answer:
      "Yes — TaskAI is built with remote-first teams in mind. All updates, priorities, and reports are async and accessible from anywhere, so your team stays aligned whether they're across the hall or across the globe.",
  },
  {
    question: "How many integrations does TaskAI support?",
    answer:
      "TaskAI currently integrates with 50+ tools including Slack, GitHub, Jira, Notion, Figma, Google Calendar, Zoom, HubSpot, and more. New integrations are added every month — and you can request specific ones via our public roadmap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="mailto:hello@taskai.io" className="text-indigo-600 hover:underline font-medium">
              Chat with our team
            </a>
            .
          </p>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.07}>
              <div
                className={`bg-white rounded-2xl border transition-all duration-200 ${
                  isOpen ? "border-indigo-200 shadow-sm" : "border-gray-100"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold ${isOpen ? "text-indigo-600" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
