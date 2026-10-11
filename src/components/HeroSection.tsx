"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Announcement Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-accent-violet/20 text-accent-violet rounded-full">
            THE FUTURE OF AI DEVELOPMENT
          </span>
        </div>

        {/* Headline and Supporting Text */}
        <div className="mb-8">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Your AI. Your Rules. Your Model.
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Turn simple prompts into custom AI models. Zerolink is building a simpler way to create,
            customize, and deploy AI — without the complexity of traditional machine learning.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            className="flex items-center justify-center px-6 py-3 bg-accent-violet text-white font-medium rounded-lg hover:bg-accent-violet/90 transition-colors"
          >
            Join the Waitlist
          </button>
          <button
            className="flex items-center justify-center px-6 py-3 border border-muted/50 text-muted hover:border-accent-violet hover:text-accent-violet hover:bg-accent-violet/5 rounded-lg transition-colors"
          >
            Explore the Vision
          </button>
        </div>

        {/* Product Mockup */}
        <div className="relative">
          {/* Label */}
          <div className="absolute -top-4 left-0 flex items-center gap-1 bg-surface px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium text-muted">
            Product Concept Preview
          </div>

          {/* Mockup Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-muted/30 bg-surface/50 rounded-xl p-6 backdrop-blur-sm"
          >
            {/* Prompt Input */}
            <div className="mb-6 p-4 bg-muted/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2.5 w-2.5 bg-accent-violet rounded-full"></div>
                <span className="font-mono text-sm text-accent-violet">prompt</span>
              </div>
              <p className="text-sm text-foreground">
                “Build an AI assistant that understands my business documents.”
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 bg-accent-violet rounded-full"></div>
                <div>
                  <h3 className="font-medium text-accent-violet">1. Understand requirements</h3>
                  <p className="text-sm text-muted">
                    Zerolink interprets your natural language description to identify the core
                    functionality and capabilities needed.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 bg-accent-violet rounded-full"></div>
                <div>
                  <h3 className="font-medium text-accent-violet">2. Configure a model</h3>
                  <p className="text-sm text-muted">
                    Choose model architecture, size, and training parameters through intuitive
                    controls.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 bg-accent-violet rounded-full"></div>
                <div>
                  <h3 className="font-medium text-accent-violet">3. Prepare data</h3>
                  <p className="text-sm text-muted">
                    Upload or connect your data sources, and Zerolink helps you preprocess and
                    format them for training.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 bg-accent-violet rounded-full"></div>
                <div>
                  <h3 className="font-medium text-accent-violet">4. Evaluate performance</h3>
                  <p className="text-sm text-muted">
                    Test your model with built-in evaluation tools to ensure it meets your
                    requirements before deployment.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 bg-accent-violet rounded-full"></div>
                <div>
                  <h3 className="font-medium text-accent-violet">5. Deploy your AI</h3>
                  <p className="text-sm text-muted">
                    Deploy your custom model to the cloud, edge, or on-premise with one click.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
