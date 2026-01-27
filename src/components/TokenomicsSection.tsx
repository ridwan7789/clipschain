import { Wallet, Zap, Gift, ArrowUpRight } from "lucide-react";

const utilities = [
  { icon: Wallet, title: "Governance", description: "Vote on protocol upgrades and treasury allocation" },
  { icon: Zap, title: "Staking Rewards", description: "Stake $CLIP to earn protocol fees" },
  { icon: Gift, title: "Creator Rewards", description: "Earn tokens through content creation" },
  { icon: ArrowUpRight, title: "Fee Discounts", description: "Reduced marketplace fees for holders" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="section-spacing cyber-grid">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary neon-text">Tokenomics</p>
          <h2 className="section-title text-foreground">
            $CLIP Token Utilities
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Discover the various ways $CLIP powers the Clipchain ecosystem.
          </p>
        </div>

        <div className="mt-16">
          {/* Utilities */}
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {utilities.map((utility, index) => (
                <div key={index} className="card-cyber p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 border border-primary/30">
                    <utility.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground uppercase tracking-wider">{utility.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{utility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
