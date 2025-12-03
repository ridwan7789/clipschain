import { FileText } from "lucide-react";
import logo from "@/assets/clipchain-logo.png";

const socialLinks = [
  { name: "Telegram", href: "https://t.me/ClipsChain", icon: "TG" },
  { name: "Twitter", href: "https://x.com/Clipschain", icon: "X" },
  { name: "TikTok", href: "https://tiktok.com/@clips_chain", icon: "TT" },
  { name: "YouTube", href: "https://www.youtube.com/@ClipsChain", icon: "YT" },
];

const footerLinks = [
  {
    title: "Protocol",
    links: [
      { label: "About", href: "#about" },
      { label: "Solutions", href: "#solutions" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Tokenomics", href: "#tokenomics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Whitepaper", href: "https://app.gitbook.com/invite/XTZ5AqUFLqNRYg468ZGd/Wjo5g11S2YAkd1L7GX72" },
      { label: "Documentation", href: "#" },
      { label: "Brand Kit", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Telegram", href: "https://t.me/ClipsChain" },
      { label: "Twitter", href: "https://x.com/Clipschain" },
      { label: "TikTok", href: "https://tiktok.com/@clips_chain" },
      { label: "YouTube", href: "https://www.youtube.com/@ClipsChain" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-grid">
        {/* CTA Section */}
        <div className="py-16 text-center lg:py-20">
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Own Your Clips?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Join the Clipchain community and start earning from your creativity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="btn-primary">
              Launch App
            </a>
            <a href="https://app.gitbook.com/invite/XTZ5AqUFLqNRYg468ZGd/Wjo5g11S2YAkd1L7GX72" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText className="h-4 w-4" />
              Read Whitepaper
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Footer Links */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <img src={logo} alt="Clipchain" className="h-9 w-9" />
              <span className="font-display text-xl font-bold text-foreground">clipchain</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A decentralized SocialFi protocol transforming short video clips into Digital Clip Assets with real on-chain ownership.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Clipchain. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
