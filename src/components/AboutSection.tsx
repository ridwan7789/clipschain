import { Play, Coins, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-grid">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary neon-text">About Clipchain</p>
            <h2 className="section-title text-foreground">
              The Future of Creator Ownership
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Clipchain is a decentralized SocialFi platform that empowers creators to mint their short-form video content as Digital Clip Assets (DCA). Every clip becomes a verifiable on-chain asset with transparent royalty distribution.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Built on BNB Smart Chain, Clipchain combines the virality of social media with blockchain-powered monetization, giving creators true ownership over their content.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="icon-box">
                  <Play className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground uppercase text-sm tracking-wider">Mint Clips</h3>
                <p className="text-sm text-muted-foreground">Transform any video into an on-chain asset</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="icon-box">
                  <Coins className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-foreground uppercase text-sm tracking-wider">Earn Royalties</h3>
                <p className="text-sm text-muted-foreground">Automated revenue distribution on every trade</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="icon-box">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground uppercase text-sm tracking-wider">Own Forever</h3>
                <p className="text-sm text-muted-foreground">Permanent, verifiable on-chain ownership</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card-cyber">
              <div className="relative space-y-6 p-2">
                {/* Mock UI Element */}
                <div className="flex items-center gap-4 rounded-sm bg-muted/50 p-4 border border-primary/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/20 border border-primary/30">
                    <Play className="h-6 w-6 text-primary" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-foreground uppercase text-sm tracking-wider">Digital Clip Asset</p>
                    <p className="text-sm text-muted-foreground">BEP-721 Standard</p>
                  </div>
                  <span className="rounded-sm bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Minted</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-sm bg-muted/50 p-4 border border-secondary/20">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Total Views</p>
                    <p className="font-display text-2xl font-bold text-secondary">2.4M</p>
                  </div>
                  <div className="rounded-sm bg-muted/50 p-4 border border-accent/20">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Royalties Earned</p>
                    <p className="font-display text-2xl font-bold text-accent">$12,400</p>
                  </div>
                </div>

                <div className="rounded-sm bg-muted/50 p-4 border border-primary/20">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Royalty Distribution</p>
                    <p className="text-sm font-bold text-primary">10%</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
