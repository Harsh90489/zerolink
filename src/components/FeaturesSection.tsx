"use client";

import { motion } from "framer-motion";
import { Zap, Users, Cpu, Database, BarChart2, UploadCloud } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Prompt-to-Model Workflow",
    description:
      "Turn simple natural language prompts into custom AI models through an intuitive guided process.",
  },
  {
    icon: Users,
    title: "Custom AI Assistants",
    description:
      "Create specialized AI assistants tailored to your specific use cases and domain knowledge.",
  },
  {
    icon: Cpu,
    title: "Model Customization",
    description:
      "Fine-tune model architecture, parameters, and capabilities to match your exact requirements.",
  },
  {
    icon: Database,
    title: "Data Preparation",
    description:
      "Easily upload, connect, and preprocess your data sources for optimal model training.",
  },
  {
    icon: BarChart2,
    title: "Model Evaluation",
    description:
      "Built-in evaluation tools help you assess performance, accuracy, and reliability before deployment.",
  },
  {
    icon: UploadCloud,
    title: "Flexible Deployment",
    description:
      "Deploy your custom models to various environments: cloud, edge, or on-premise infrastructure.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-16 text-4xl font-bold text-center text-foreground">
          Features
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-muted/30 bg-surface/50 rounded-xl p-6 backdrop-blur-sm transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-accent-violet" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
