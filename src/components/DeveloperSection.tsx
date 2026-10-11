"use client";

import { motion } from "framer-motion";

export default function DeveloperSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-16 text-4xl font-bold text-center text-foreground">
          Built for builders. Designed for everyone.
        </h2>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Natural Language Interface */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-muted/30 bg-surface/50 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Natural Language Interface</h3>
            <p className="text-muted mb-6">
              Describe your AI needs in plain language, and Zerolink will guide you through the
              creation process step by step.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
                <div>
                  <h4 className="font-medium text-accent-violet">Example Prompt</h4>
                  <p className="text-muted text-sm">
                    “Create a customer support AI that can handle billing inquiries and technical
                    troubleshooting for our SaaS product.”
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
                <div>
                  <h4 className="font-medium text-accent-violet">Guided Workflow</h4>
                  <p className="text-muted text-sm">
                    Zerolink breaks down your request into actionable steps: understanding
                    requirements, configuring the model, preparing data, evaluating, and deploying.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Editor Mockup */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-muted/30 bg-surface/50 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Developer Tools</h3>
            <p className="text-muted mb-6">
              For developers who want more control, Zerolink will provide APIs, SDKs, and
              command-line tools to integrate AI creation into existing workflows.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
                <div>
                  <h4 className="font-medium text-accent-violet">API Access</h4>
                  <p className="text-muted text-sm">
                    Programmatically create, customize, and manage AI models through RESTful
                    APIs and GraphQL endpoints.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
                <div>
                  <h4 className="font-medium text-accent-violet">SDKs & CLI</h4>
                  <p className="text-muted text-sm">
                    Official SDKs for popular languages (Python, JavaScript, etc.) and a
                    command-line interface for automation and scripting.
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
