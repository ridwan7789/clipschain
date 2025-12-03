import { Film, GitBranch, Gift, Store, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Film,
    title: "Clip Minting (DCA)",
    description: "Mint any short video clip as a Digital Clip Asset with unique on-chain metadata and provenance.",
  },
  {
    icon: GitBranch,
    title: "Royalty Split",
    description: "Set customizable royalty percentages that automatically distribute earnings to all stakeholders.",
  },
  {
    icon: Gift,
    title: "SocialFi Rewards",
    description: "Earn $CLIP tokens through engagement, content creation, and community participation.",
  },
  {
    icon: Store,
    title: "Marketplace",
    description: "Buy, sell, and trade DCAs on a dedicated marketplace with instant settlements.",
  },
  {
    icon: Sparkles,
    title: "AI Clip Studio",
    description: "AI-powered tools to enhance, edit, and optimize clips for maximum engagement and value.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-spacing">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Our Solutions</p>
          <h2 className="section-title text-foreground">
            Built for the Creator Economy
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A complete ecosystem for minting, trading, and monetizing short-form video content.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="card-base group relative overflow-hidden transition-colors hover:border-primary/30"
            >
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <solution.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {solution.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
