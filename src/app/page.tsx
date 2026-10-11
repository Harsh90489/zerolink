import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import DeveloperSection from "@/components/DeveloperSection";
import WaitlistSection from "@/components/WaitlistSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zerolink - Create Custom AI Models with Natural Language",
  description:
    "Zerolink is building a simpler way to create, customize, and deploy AI models using natural language. Join the waitlist to help shape the future of AI development.",
  openGraph: {
    title: "Zerolink - Create Custom AI Models with Natural Language",
    description:
      "Zerolink is building a simpler way to create, customize, and deploy AI models using natural language. Join the waitlist to help shape the future of AI development.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zerolink - Create Custom AI Models with Natural Language",
      },
    ],
    siteName: "Zerolink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerolink - Create Custom AI Models with Natural Language",
    description:
      "Zerolink is building a simpler way to create, customize, and deploy AI models using natural language. Join the waitlist to help shape the future of AI development.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DeveloperSection />
      <WaitlistSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
