import { FileText } from "lucide-react";
import logo from "@/assets/clipchain-logo.png";
import Notification3D from "./Notification3D";
import { useState } from "react";

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/ClipsChain",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "https://x.com/Clipschain",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@clips_chain",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ClipsChain",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
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
      { label: "Whitepaper", href: "https://docs.clipschain.click" },
      { label: "Documentation", href: "https://docs.clipschain.click" },
      { label: "Brand Kit", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Tokens",
    links: [
      { label: "$CLIP Token", href: "#" },
      { label: "Buy on Pump.fun", href: "https://pump.fun" },
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
  const [notification, setNotification] = useState({
    isVisible: false,
    message: ""
  });

  const showNotification = (message: string) => {
    setNotification({
      isVisible: true,
      message: message
    });
  };

  const hideNotification = () => {
    setNotification({
      isVisible: false,
      message: ""
    });
  };

  return (
    <footer className="border-t border-primary/20">
      <div className="container-grid">
        {/* CTA Section */}
        <div className="py-16 text-center lg:py-20">
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl uppercase tracking-wider">
            Ready to <span className="text-primary neon-text">Own Your Clips</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Join the Clipchain community and start earning from your creativity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              BUY ON PUMPFUN
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                showNotification("App is currently under development. Please check back soon!");
              }}
              className="btn-primary"
            >
              Launch App
            </button>
            <a href="https://docs.clipschain.click" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText className="h-4 w-4" />
              Whitepaper
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
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/30 bg-primary/5 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
                style={{ transition: 'all 0.3s ease' }}
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
              <span className="font-display text-xl font-bold text-primary neon-text">CLIPCHAIN</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A decentralized SocialFi protocol transforming short video clips into Digital Clip Assets with real on-chain ownership.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-semibold text-foreground uppercase tracking-wider">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
            © 2026 Clipchain. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </a>
          </div>
        </div>
      </div>
      {/* 3D Notification */}
      <Notification3D
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </footer>
  );
};

export default Footer;
