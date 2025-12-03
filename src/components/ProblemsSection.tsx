import { Lock, DollarSign, Eye, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Lock,
    title: "Centralized Ownership",
    description: "Platforms own your content. Creators have no real control over their work or distribution rights.",
  },
  {
    icon: DollarSign,
    title: "Limited Monetization",
    description: "Opaque revenue sharing and algorithmic gatekeeping limit how creators can earn from their content.",
  },
  {
    icon: Eye,
    title: "No Royalty Transparency",
    description: "Creators can't track or verify how their content generates revenue across platforms.",
  },
  {
    icon: TrendingUp,
    title: "Viral Content Has No Value",
    description: "Even when content goes viral, creators miss out on the long-term economic value it creates.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">The Problem</p>
          <h2 className="section-title text-foreground">
            Why Creators Need Clipchain
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Traditional platforms exploit creators. It's time for a new model built on transparency and true ownership.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div key={index} className="card-base group transition-colors hover:border-primary/30">
              <div className="icon-box mb-5">
                <problem.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
