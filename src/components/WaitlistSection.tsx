"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // In a real app, you would send the email to your backend here
      setSubmitStatus("success");
      setEmail("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-3xl font-bold text-foreground">
          Help shape the future of AI.
        </h2>
        <p className="mb-8 text-muted max-w-xl">
          Be among the first to hear about Zerolink as we build a more accessible way to create
          custom AI.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 bg-surface/50 border border-muted/50 rounded-lg text-foreground placeholder-muted/50 focus:border-accent-violet focus:ring-accent-violet/20 focus:ring-2 transition-all disabled:opacity-50"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-accent-violet text-white font-medium rounded-lg hover:bg-accent-violet/90 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">Submitting...</span>
                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              </>
            ) : (
              "Join the Waitlist"
            )}
          </button>
        </form>

        {submitStatus === "success" && (
          <p className="mt-4 text-sm text-accent-violet">
            Thanks for joining! We&apos;ll be in touch soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-sm text-accent-violet/60">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
