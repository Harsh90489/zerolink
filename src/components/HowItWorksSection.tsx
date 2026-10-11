"use client";

import { motion } from "framer-motion";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-16 text-4xl font-bold text-center text-foreground">
          How It Works
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Step 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-muted/30 bg-surface/50 rounded-xl p-8 text-center backdrop-blur-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-10 w-10 bg-accent-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">01</span>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Describe</h3>
            <p className="text-muted">
              Tell Zerolink what you want your AI to do using everyday language.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-muted/30 bg-surface/50 rounded-xl p-8 text-center backdrop-blur-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-10 w-10 bg-accent-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">02</span>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Customize</h3>
            <p className="text-muted">
              Configure your model, capabilities, data sources, and evaluation requirements.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-muted/30 bg-surface/50 rounded-xl p-8 text-center backdrop-blur-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-10 w-10 bg-accent-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">03</span>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Build and Deploy</h3>
            <p className="text-muted">
              Work toward a custom AI model that can be evaluated and deployed to your chosen
              environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
