import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Trees, Leaf, Award, ShieldCheck, ArrowLeft, Clock, MapPin,
  Phone, Facebook, Youtube, Instagram, ChevronDown, Menu, X,
  Calendar, Heart, Sparkles, BookOpen, Compass, Info, ShieldAlert, ArrowRight
} from "lucide-react";

import heroForest from "@/assets/hero-forest.jpg";
import botanicalImg from "@/assets/botanical.jpg";
import lionImg from "@/assets/lion.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary scroll-smooth overflow-x-hidden">
      <AboutNav />
      <AboutHero />
      <AboutPillars />
      <HistoryTimeline />
      <AboutManagement />
      <AboutFooter />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </button>
    </div>
  );
}

/* -------------------------- NAV -------------------------- */
function AboutNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div 
          className={`rounded-2xl flex items-center justify-between px-5 py-3 transition-all duration-300 ${
            isScrolled 
              ? "glass shadow-md py-2 border-primary/20" 
              : "bg-white/95 sm:bg-white/80 backdrop-blur-md border border-border/40 shadow-sm"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 min-w-0 group">
            <div className="relative overflow-hidden rounded-xl bg-primary/10 border border-primary/20 p-1 transition-transform group-hover:scale-105 shrink-0">
              <img
                src="https://ogbazoo.com.ng/wp-content/uploads/2025/08/cropped-logo-lion-new-192x192.png"
                alt="Ogba Zoo Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display text-sm sm:text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">Ogba Zoo</div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-muted-foreground">& Nature Park, Benin City</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home Page</Link>
            <a href="#pillars" className="hover:text-primary transition-colors">Pillars</a>
            <a href="#timeline" className="hover:text-primary transition-colors">Our History</a>
            <a href="#management" className="hover:text-primary transition-colors">Management</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-xs font-bold text-foreground hover:bg-primary/5 hover:border-primary/45 transition-all shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------- HERO -------------------------- */
function AboutHero() {
  return (
    <section className="relative min-h-[60svh] w-full overflow-hidden flex items-end pb-12 pt-36">
      <div className="absolute inset-0">
        <img
          src={heroForest}
          alt="Ogba Zoo canopy"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 font-semibold">
            <Leaf className="h-3.5 w-3.5" /> Our Legacy & Mission
          </div>
          
          <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl font-black leading-[0.95] text-foreground tracking-tight">
            Conserving Nature <br />
            Since <em className="not-italic text-gradient-green">1971.</em>
          </h1>
          
          <p className="mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            For over half a century, Ogba Zoo & Nature Park has stood as Benin City's primary ecological shield — shielding 750 acres of ancient rain forest hardwoods and regional biodiversity.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ PILLARS ------------------------ */
function AboutPillars() {
  const pillars = [
    {
      title: "Nature Conservation",
      desc: "Safeguarding Edo State's native hardwood trees and protecting rare regional fauna in their original, natural forest ecosystem.",
      icon: <Trees className="h-6 w-6 text-primary" />
    },
    {
      title: "Bio-Studies & Research",
      desc: "Providing a live field laboratory for students, botanists, and academic researchers to explore tropical ecology and animal behaviors.",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      title: "Ecotourism & Relaxation",
      desc: "Creating a premium nature-first destination where families, companies, and tourists can rest, connect, and enjoy active recreation.",
      icon: <Compass className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="pillars" className="py-20 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-md transition duration-300">
              <div className="p-3 bg-primary/5 rounded-2xl w-fit mb-5">{p.icon}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- TIMELINE ----------------------- */
function HistoryTimeline() {
  const milestones = [
    {
      year: "1971",
      title: "Establishment by Brigadier General Ogbemudia",
      desc: "Formed out of the historic Ogba Forest Reserve. Under the military administration of Brigadier General Samuel Osaigbovo Ogbemudia, the reserve was officially gazetted as a state biological sanctuary to preserve local flora and fauna."
    },
    {
      year: "1990s",
      title: "Community Protection & Survival",
      desc: "During challenging socio-economic periods, the local communities and members of BENZOPA actively lobbied to protect the 750-acre reserve from illegal timber logging and urban encroachments."
    },
    {
      year: "2000s",
      title: "Edo State Public-Private Partnership",
      desc: "To upgrade the zoo to modern ecotourism standards, the Edo State Government signed a long-term management partnership with BENZOPA. This introduced secure enclosures, structured pavilions, and professional zoological oversight."
    },
    {
      year: "Present Day",
      title: "Ecotourism Hub & Ecotransit Development",
      desc: "Today, Ogba Zoo is Edo State's premier nature park, featuring paintball fields, quad trails, event gazebos, botanical archives, and an active primate/big-cat conservation program."
    }
  ];

  return (
    <section id="timeline" className="py-20 section-alt border-t border-border/60 nature-texture">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Historical Records</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mt-2">
            The Journey of <em className="not-italic text-gradient-green">Ogba Zoo.</em>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3">
            Trace the half-century story of preservation, local community protection, and professional management.
          </p>
        </div>

        <div className="relative border-l border-border pl-6 sm:pl-8 space-y-12">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Pulsing indicator node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 h-4.5 w-4.5 rounded-full border-2 border-primary bg-white flex items-center justify-center shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              
              <div className="bg-white rounded-3xl p-6 border border-border/80 shadow-sm hover:shadow-md transition">
                <span className="font-mono text-xs sm:text-sm font-bold text-primary">{m.year}</span>
                <h4 className="font-display text-base sm:text-lg font-black text-foreground mt-1">{m.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- MANAGEMENT ---------------------- */
function AboutManagement() {
  return (
    <section id="management" className="py-20 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Alliance Structure</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground leading-tight">
              A Public-Private <br />
              <em className="not-italic text-gradient-green">Conservation Pact.</em>
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                Ogba Zoo is managed under an active collaboration between the **Edo State Ministry of Environment & Sustainability** and **BENZOPA** (a dedicated conservationist organization).
              </p>
              <p>
                This framework combines public forest protection rights with private, professional management agility. It allows us to run animal enrichment initiatives, build modern event pavilions, and enforce strict safety standards without bureaucratic delays.
              </p>
            </div>
            
            <div className="pt-2">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-bold text-white hover:bg-primary/95 transition shadow-sm neon-glow"
              >
                Book Park Passes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-video border border-border/80 shadow-md">
            <img src={botanicalImg} alt="Botanical Gardens" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white bg-white/10 backdrop-blur-md p-5 border border-white/15 rounded-2xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <div className="leading-tight">
                  <span className="text-[9px] uppercase tracking-wider text-white/70 block">Protected Forestry status</span>
                  <span className="text-xs font-bold">Edo State Forestry Act Endorsed Reserve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- FOOTER ---------------------- */
function AboutFooter() {
  return (
    <footer className="border-t border-border/60 bg-[#0e1612] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded-xl bg-white/10 border border-white/20 p-1 shrink-0">
              <img
                src="https://ogbazoo.com.ng/wp-content/uploads/2025/08/cropped-logo-lion-new-192x192.png"
                alt="Logo"
                className="h-8 w-8 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="text-left">
              <div className="font-display text-lg font-black leading-none text-white">Ogba Zoo & Nature Park</div>
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/50 mt-1">Benin City · Edo State, Nigeria</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-xs text-white/40">
            <Link to="/" className="hover:text-white/80 transition-colors">Home Page</Link>
            <a href="#pillars" className="hover:text-white/80 transition-colors">Pillars</a>
            <a href="#timeline" className="hover:text-white/80 transition-colors">Our History</a>
            <a href="#management" className="hover:text-white/80 transition-colors">Management</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-[10px] text-white/30">
          © {new Date().getFullYear()} Ogba Zoo & Nature Park (BENZOPA Partnership). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
