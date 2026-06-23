import { Link } from "@tanstack/react-router";
import {
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 light:border-black/10 bg-background">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-purple/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="text-xl font-bold tracking-tight">
            Highway<span className="text-gradient"> Setu</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The intelligent digital ecosystem connecting every mile of India's
            highway transportation industry.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/highway-setu/" },
              { Icon: Instagram, href: "https://www.instagram.com/futuretravel2050?igsh=MTI0eXkwbzJjZ280ZQ==" },
              { Icon: Youtube, href: "https://www.youtube.com/channel/UConnQnaclz6VJQhZHxQ1pUQ" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground light:bg-black/5 light:hover:bg-black/10"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Platform</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/drivers" className="hover:text-foreground">
                Truck Drivers
              </Link>
            </li>
            <li>
              <Link to="/mechanics" className="hover:text-foreground">
                Mechanics
              </Link>
            </li>
            <li>
              <Link to="/dhaba" className="hover:text-foreground">
                Dhaba Owners
              </Link>
            </li>
            <li>
              <Link to="/fleet" className="hover:text-foreground">
                Fleet Managers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" /> hello@highwaysetu.in
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Bengaluru, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 light:border-black/10 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Highway Setu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
