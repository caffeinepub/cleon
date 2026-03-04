import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import CleonLogo from "./CleonLogo";

const navLinks = [
  { label: "Acasă", href: "#acasa" },
  { label: "Funcționalități", href: "#functionalitati" },
  { label: "Planuri", href: "#planuri" },
  { label: "FAQ", href: "#faq" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(var(--navy-deep)/0.95)] backdrop-blur-md border-b border-[oklch(var(--navy-border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <CleonLogo
          onClick={() => {
            document
              .getElementById("acasa")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={(e) => smoothScroll(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-[oklch(var(--muted-foreground))] hover:text-[oklch(var(--foreground))] transition-colors rounded-md hover:bg-[oklch(var(--navy-light)/0.5)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            data-ocid="nav.primary_button"
            onClick={() => {
              const el = document.getElementById("planuri");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-gold text-[oklch(var(--navy-deep))] font-semibold hover:bg-gold-bright glow-gold-sm transition-all duration-200 text-sm px-5"
          >
            Începe Gratuit
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-[oklch(var(--navy-light)/0.5)]"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-[oklch(var(--navy-mid))] border-[oklch(var(--navy-border))] p-0"
          >
            <div className="flex flex-col h-full">
              {/* Mobile header */}
              <div className="flex items-center px-6 py-5 border-b border-[oklch(var(--navy-border))]">
                <CleonLogo />
              </div>
              {/* Mobile nav links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={(e) => {
                      smoothScroll(e, link.href);
                      setOpen(false);
                    }}
                    className="px-4 py-3 text-base font-medium text-[oklch(var(--muted-foreground))] hover:text-foreground hover:bg-[oklch(var(--navy-light))] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              {/* Mobile CTA */}
              <div className="px-6 pb-8">
                <Button
                  data-ocid="nav.primary_button"
                  onClick={() => {
                    const el = document.getElementById("planuri");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    setOpen(false);
                  }}
                  className="w-full bg-gold text-[oklch(var(--navy-deep))] font-semibold hover:bg-gold-bright glow-gold-sm"
                >
                  Începe Gratuit
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
