import logo from "@/assets/logo1.png";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12 px-6 text-center flex flex-col items-center">
    <img
      src={logo}
      alt="Rishihood University Logo"
      className="h-48 w-auto mb-4 mix-blend-multiply opacity-90"
    />
    <p className="text-muted-foreground text-sm italic mb-6">
      Where learning meets inner awakening
    </p>

    <div className="flex gap-6 items-center justify-center">
      <a href="https://www.instagram.com/rishihooduni/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 hover:scale-110 duration-200">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="https://x.com/RishihoodUni/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 hover:scale-110 duration-200">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/school/rishihood/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 hover:scale-110 duration-200">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://www.facebook.com/rishihood/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 hover:scale-110 duration-200">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="https://www.youtube.com/@Rishihood" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 hover:scale-110 duration-200">
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  </footer>
);

export default Footer;
