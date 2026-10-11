export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-center text-foreground">
          AI development shouldn&apos;t be this complicated.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              The Challenges
            </h3>

            {/* Problem 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
              <div>
                <h4 className="font-medium text-accent-violet">Specialized Knowledge Required</h4>
                <p className="text-muted">
                  Building AI requires deep expertise in machine learning, data science, and
                  specialized tools that most developers and businesses don&apos;t possess.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
              <div>
                <h4 className="font-medium text-accent-violet">Complex Customization Workflows</h4>
                <p className="text-muted">
                  Tailoring models to specific use cases involves complicated pipelines,
                  hyperparameter tuning, and intricate tooling.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-2.5 w-2.5 bg-accent-violet rounded-full mt-0.5"></div>
              <div>
                <h4 className="font-medium text-accent-violet">From Idea to Product is Hard</h4>
                <p className="text-muted">
                  Moving from an AI concept to a production-ready product demands significant
                  time, resources, and engineering effort.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="border-l border-muted/50 pl-8">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              The Zerolink Approach
            </h3>
            <p className="text-muted">
              Zerolink is being built to simplify AI development through natural-language
              instructions and guided workflows, eliminating the need for deep ML expertise.
            </p>
            <ul className="list-disc list-inside mt-6 space-y-2 text-muted">
              <li>
                Describe your AI needs in plain language, and Zerolink interprets your intent.
              </li>
              <li>
                Get guided through model configuration, data preparation, and evaluation steps.
              </li>
              <li>
                Focus on your goals while Zerolink handles the underlying complexity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
