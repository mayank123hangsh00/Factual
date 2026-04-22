export const Footer = () => {
  return (
    <footer className="bg-surface py-12 md:py-16 border-t border-border mt-20">
      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-brand to-accent flex items-center justify-center font-bold text-white text-xs">
              H
            </div>
            <span className="font-bold text-lg tracking-tight">Helix</span>
          </div>
          <p className="text-sm text-foreground/60 mb-6">
            AI-powered code review platform that helps engineering teams ship better code, faster.
          </p>
          <div className="text-xs text-foreground/40">
            © {new Date().getFullYear()} Helix Inc. All rights reserved.
          </div>
        </div>
        
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-brand transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-brand transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-brand transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
