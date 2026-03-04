import { Toaster } from "@/components/ui/sonner";
import ExchangesSection from "./components/ExchangesSection";
import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import SocialProofSection from "./components/SocialProofSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ExchangesSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border))",
            color: "oklch(var(--foreground))",
          },
        }}
      />
    </div>
  );
}
