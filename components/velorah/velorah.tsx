"use client";

import { cn } from "@/lib/utils";

import { CompanySection } from "./company-section";
import { Cta } from "./cta";
import { Feature } from "./feature";
import { inter, instrumentSerif } from "./fonts";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { ModulesSection } from "./modules-section";
import { PlatformSection } from "./platform-section";
import { SectionIndicator } from "./section-indicator";
import { Statement } from "./statement";
import { Tagline } from "./tagline";
import { VelorahStyles } from "./styles";

export default function Velorah() {
  return (
    <div
      className={cn(
        "velorah",
        inter.variable,
        instrumentSerif.variable,
        "relative min-h-svh bg-background text-foreground antialiased",
      )}
      style={{
        fontFamily: "var(--font-velorah-sans), ui-sans-serif, sans-serif",
      }}
    >
      <VelorahStyles />
      <Hero />
      <Tagline />
      <Feature />
      <Statement />
      <PlatformSection />
      <ModulesSection />
      <CompanySection />
      <Cta />
      <Footer />
      <SectionIndicator />
    </div>
  );
}
