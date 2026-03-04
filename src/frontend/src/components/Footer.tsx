import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { SiTelegram, SiX, SiYoutube } from "react-icons/si";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import CleonLogo from "./CleonLogo";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { actor } = useActor();
  const year = new Date().getFullYear();

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Introdu o adresă de email validă.");
      return;
    }
    if (!actor) {
      toast.error("Se încarcă... Încearcă din nou.");
      return;
    }
    setLoading(true);
    try {
      await actor.subscribeNewsletter(email);
      toast.success("Ești abonat! Vei primi noutăți din piața crypto.");
      setEmail("");
    } catch (_err) {
      toast.error("A apărut o eroare. Încearcă din nou.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer
      className="relative pt-20 pb-8 border-t overflow-hidden"
      style={{
        background: "oklch(var(--navy-deep))",
        borderColor: "oklch(var(--navy-border))",
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--gold)/0.3), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <CleonLogo />
            </div>
            <p className="text-sm text-[oklch(var(--muted-foreground))] leading-relaxed mb-6">
              Platforma #1 de semnale crypto din România. Tranzacționează cu
              încredere, bazat pe date reale.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/cleon_trading"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[oklch(var(--navy-border))] text-[oklch(var(--muted-foreground))] hover:text-cyan-cleon hover:border-[oklch(var(--cyan)/0.4)] transition-colors"
              >
                <SiTelegram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/cleon_trading"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[oklch(var(--navy-border))] text-[oklch(var(--muted-foreground))] hover:text-foreground hover:border-[oklch(var(--border))] transition-colors"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@cleon_trading"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[oklch(var(--navy-border))] text-[oklch(var(--muted-foreground))] hover:text-sell-red hover:border-[oklch(var(--sell-red)/0.4)] transition-colors"
              >
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground tracking-wide uppercase mb-5">
              Navigare
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Acasă", href: "#acasa" },
                { label: "Funcționalități", href: "#functionalitati" },
                { label: "Planuri", href: "#planuri" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    className="text-sm text-[oklch(var(--muted-foreground))] hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground tracking-wide uppercase mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Termeni și Condiții", href: "/termeni" },
                {
                  label: "Politică de Confidențialitate",
                  href: "/confidentialitate",
                },
                { label: "Politică Cookies", href: "/cookies" },
                { label: "GDPR", href: "/gdpr" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[oklch(var(--muted-foreground))] hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-display font-semibold text-foreground tracking-wide uppercase mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-[oklch(var(--muted-foreground))] mb-4 leading-relaxed">
              Primești săptămânal analize crypto și semnale gratuite direct în
              inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                data-ocid="footer.input"
                type="email"
                placeholder="email@exemplu.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[oklch(var(--navy-light))] border-[oklch(var(--navy-border))] text-foreground placeholder:text-[oklch(var(--muted-foreground))] focus:border-[oklch(var(--gold)/0.5)] focus:ring-[oklch(var(--gold)/0.2)] text-sm h-10"
              />
              <Button
                data-ocid="footer.submit_button"
                type="submit"
                disabled={loading}
                className="h-10 bg-gold text-[oklch(var(--navy-deep))] font-semibold hover:bg-gold-bright glow-gold-sm transition-all duration-200 text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Se abonează...
                  </>
                ) : (
                  "Abonează-te"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(var(--navy-border)), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(var(--muted-foreground))]">
            © {year} CLEON. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-[oklch(var(--muted-foreground))]">
            Built with <span className="text-sell-red">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-[oklch(var(--muted-foreground))]">
            ⚠️ Semnalele nu constituie sfaturi financiare.
          </p>
        </div>
      </div>
    </footer>
  );
}
