import { ArrowRight, FileText, Users } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-24">
      <div className="container-grid">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">Built on BNB Smart Chain</span>
            </div>
            
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Own Your Clips.{" "}
              <span className="text-primary">Earn From Your Creativity.</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Clipchain is a decentralized SocialFi protocol on BNB Smart Chain that transforms short video clips into Digital Clip Assets (DCA) with real on-chain ownership and creator rewards.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className="btn-primary">
                Launch App
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://app.gitbook.com/invite/XTZ5AqUFLqNRYg468ZGd/Wjo5g11S2YAkd1L7GX72" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FileText className="h-4 w-4" />
                Whitepaper
              </a>
              <a href="https://t.me/ClipsChain" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Users className="h-4 w-4" />
                Join Community
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-2xl font-bold text-foreground lg:text-3xl">$CLIP</p>
                <p className="mt-1 text-sm text-muted-foreground">Native Token</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground lg:text-3xl">BNB</p>
                <p className="mt-1 text-sm text-muted-foreground">Smart Chain</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground lg:text-3xl">DCA</p>
                <p className="mt-1 text-sm text-muted-foreground">Digital Assets</p>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5" />
              <img 
                src={appMockup} 
                alt="Clipchain App" 
                className="relative z-10 h-auto w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default HeroSection;
