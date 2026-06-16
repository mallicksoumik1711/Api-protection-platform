import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQs() {
  const faqs = [
    {
      question:
        "Why does the sign-in or sign-up process sometimes take longer than expected?",
      answer:
        "Bouncer's backend is hosted on Render's free tier. After periods of inactivity, the server may enter a sleep state and require a short warm up period before processing requests.",
    },
    {
      question: "How long does it take to integrate Bouncer?",
      answer:
        "Integration is straightforward and typically takes only a few minutes. Bouncer can be added to existing applications with minimal configuration and without disrupting current workflows.",
    },
    {
      question:
        "How can Bouncer protect frontend pages if it is designed for backend APIs?",
      answer:
        "Frontend routes can be secured by creating dedicated backend endpoints that serve or validate access to those pages. This approach enables Bouncer to enforce authentication, authorization, and access policies before users reach protected resources.",
    },
    {
      question: "Can Bouncer be integrated into existing applications?",
      answer:
        "Yes. Bouncer is designed to work seamlessly with both new and existing projects, allowing developers to add security without major architectural changes.",
    },
    {
      question: "Is a free plan available?",
      answer:
        "Yes. Bouncer offers a free tier that allows developers to explore its features and evaluate the platform before upgrading to higher usage limits.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10 bg-gradient-to-br from-black via-slate-900 to-black text-white py-12 px-4 sm:px-6 w-full md:w-3/4 mx-auto md:my-20 sm:rounded-xl">
      {/* Heading */}
      <div className="mb-10 md:mb-16">
        <p className="text-[10px] sm:text-xs text-white/40 tracking-widest mb-3 md:mb-4">
          Frequently Asked Questions
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:gap-10 oswald-text">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold leading-tight">
            Answers to
            <br />
            Common Questions
          </h2>

          <div className="hidden md:block flex-1 h-[1px] bg-white/10 mt-4 md:mt-0" />
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl bg-white/[0.03] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full grid grid-cols-[1fr_auto] gap-4 px-6 py-5 text-left items-center"
            >
              <h3 className="text-sm sm:text-base font-medium">
                {faq.question}
              </h3>

              <ChevronDown
                className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 px-6 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-sm text-white/50 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
