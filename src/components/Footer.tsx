"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 bg-background border-t border-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4 mb-6 lg:mb-0">
            <div className="h-8 w-8 bg-accent-violet rounded flex items-center justify-center">
              <span className="text-white font-bold">Z</span>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Zerolink</h3>
              <p className="text-muted text-sm">
                Making AI creation accessible to everyone
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-12">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Product</h4>
              <nav className="space-y-1">
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Features
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Documentation
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Pricing
                </a>
              </nav>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Vision</h4>
              <nav className="space-y-1">
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Roadmap
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Blog
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Careers
                </a>
              </nav>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-foreground">About</h4>
              <nav className="space-y-1">
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Our Story
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Team
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Security
                </a>
              </nav>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Legal</h4>
              <nav className="space-y-1">
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted hover:text-accent-violet transition-colors">
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-muted/20 text-center text-sm text-muted">
          © {year} Zerolink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
