import { Film, GitBranch, Gift, Store, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Film,
    title: "Clip Minting (DCA)",
    description: "Mint any short video clip as a Digital Clip Asset with unique on-chain metadata and provenance.",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10",
  },
  {
    icon: GitBranch,
    title: "Royalty Split",
    description: "Set customizable royalty percentages that automatically distribute earnings to all stakeholders.",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Gift,
    title: "SocialFi Rewards",
    description: "Earn $CLIP tokens through engagement, content creation, and community participation.",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/10",
  },
  {
    icon: Store,
    title: "Marketplace",
    description: "Buy, sell, and trade DCAs on a dedicated marketplace with instant settlements.",
    color: "text-neon-green",
    borderColor: "border-neon-green/30",
    bgColor: "bg-neon-green/10",
  },
  {
    icon: Sparkles,
    title: "AI Clip Studio",
    description: "AI-powered tools to enhance, edit, and optimize clips for maximum engagement and value.",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-spacing cyber-grid">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary neon-text">Our Solutions</p>
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
              className={`card-cyber group transition-all hover:${solution.borderColor.replace('/30', '/50')}`}
            >
              <div className="relative z-10">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-sm ${solution.bgColor} border ${solution.borderColor}`}>
                  <solution.icon className={`h-5 w-5 ${solution.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground uppercase tracking-wider">
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
