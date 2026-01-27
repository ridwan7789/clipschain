import { Upload, Search, Sliders, Coins, ArrowLeftRight, Banknote } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Clip",
    description: "Upload your short-form video content to the Clipchain platform.",
  },
  {
    icon: Search,
    step: "02",
    title: "Metadata Scan",
    description: "AI analyzes your clip for originality, quality, and categorization.",
  },
  {
    icon: Sliders,
    step: "03",
    title: "Set Royalty Split",
    description: "Configure royalty percentages for creators and collaborators.",
  },
  {
    icon: Coins,
    step: "04",
    title: "Mint DCA NFT",
    description: "Your clip is minted as a Digital Clip Asset on Solana.",
  },
  {
    icon: ArrowLeftRight,
    step: "05",
    title: "Clip Becomes Tradable",
    description: "Your DCA is listed on the marketplace for buying and trading.",
  },
  {
    icon: Banknote,
    step: "06",
    title: "Earn $CLIP",
    description: "Receive $CLIP rewards from engagement, sales, and royalties.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-spacing border-t border-primary/20">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">How It Works</p>
          <h2 className="section-title text-foreground">
            From Upload to Earnings
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A simple six-step process to transform your clips into revenue-generating assets.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, index) => (
            <div key={index} className="group relative">
              <div className="card-cyber h-full transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 border border-primary/30">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-display text-2xl font-bold text-primary/30">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
