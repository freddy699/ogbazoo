import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import {
  MapPin, Clock, Minus, Plus, Ticket, Users, Sparkles,
  Trees, Leaf, Phone, Film, Dumbbell, Home, ArrowRight, Check,
  Target, Bike, Waves, Train, PartyPopper, Search, ShieldCheck,
  Compass, Info, Award, ChevronRight, Facebook, Youtube, Instagram,
  Camera, BookOpen, Swords, Star, CalendarDays, ChevronDown, Menu, X, HelpCircle
} from "lucide-react";

import heroForest from "@/assets/hero-forest.jpg";
import lionImg from "@/assets/lion.jpg";
import venueImg from "@/assets/venue-hall.jpg";
import botanicalImg from "@/assets/botanical.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Simple scroll-to-top helper
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Nav />
      <Hero />
      <AboutBanner />
      <AnimalGallery />
      <VirtualTour />
      <TicketBooking />
      <VenueExplorer />
      <AttractionsShowcase />
      <EventsGallery />
      <FAQSection />
      <GoogleMapSection />
      <ContactRouter />
      <Footer />

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
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Animals", href: "#animals" },
    { name: "Tour Stop", href: "#tour" },
    { name: "Tickets", href: "#tickets" },
    { name: "Pavilions", href: "#pavilions" },
    { name: "Attractions", href: "#attractions" },
    { name: "Events", href: "#events" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

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
          <a href="#" className="flex items-center gap-2.5 min-w-0 group">
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
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-muted-foreground">
            {links.map((l) => (
              <a 
                key={l.name} 
                href={l.href} 
                className="relative py-1 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* Action button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="#tickets" 
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm neon-glow"
            >
              Book Entry <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl border border-border bg-white text-foreground hover:text-primary hover:bg-primary/5 active:scale-95 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 animate-in fade-in zoom-in duration-200" /> : <Menu className="h-5 w-5 animate-in fade-in zoom-in duration-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-20 inset-x-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-white border border-border p-6 shadow-xl transition-all duration-300 origin-top ${
            isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border/60 pb-2">Navigation Menu</div>
            {links.map((l) => (
              <a 
                key={l.name} 
                href={l.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-sm font-bold text-foreground py-2 px-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-all"
              >
                <span>{l.name}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <a 
                href="#tickets" 
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-white hover:bg-primary/95 transition shadow-md"
              >
                Book Entry Pass <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------- HERO -------------------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end pb-12 sm:pb-20 pt-28 sm:pt-36">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroForest}
          alt="Ogba Zoo lush forest canopy"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        {/* Layered custom gradients for high visual quality */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.47_0.18_145_/_0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary bg-primary/10 border border-primary/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 font-semibold animate-fade-in">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            Est. 1971 · Benin City, Edo State · 750 Acres
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.92] text-foreground tracking-tight">
            Where the Wild <br />
            Meets the <em className="not-italic text-gradient-green">Ancient City.</em>
          </h1>
          
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Nigeria's premier eco-reserve — 750 acres of ancient hardwoods, living wildlife, adrenaline adventure parks, and luxury event pavilions in the heart of Benin City.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#tickets" 
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary/95 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-primary/25 neon-glow"
            >
              Reserve Entry Ticket <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#animals" 
              className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-border backdrop-blur-sm px-8 py-4 text-sm font-bold text-foreground hover:bg-white hover:border-foreground/30 hover:scale-[1.02] hover:-translate-y-0.5 transition-all shadow-sm"
            >
              View Our Animals
            </a>
          </div>
        </div>

        {/* Stats row — optimized grid layout on mobile (grid-cols-2) instead of stacking */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl">
          <HeroStat icon={<Clock className="h-5 w-5" />} label="Open Daily" value="9 AM – 6 PM" detail="Including Holidays" />
          <HeroStat icon={<MapPin className="h-5 w-5" />} label="Location" value="Airport Rd, Benin" detail="Opp. NPDC Complex" />
          <HeroStat icon={<Trees className="h-5 w-5" />} label="Reserve Size" value="750 Acres" detail="300+ Hectares" />
          <HeroStat icon={<Ticket className="h-5 w-5" />} label="Entry From" value="₦1,000" detail="Per Person, Ages 2+" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition duration-300 group">
      <div className="flex items-center gap-2.5 text-primary mb-2">
        <div className="p-1.5 sm:p-2 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition duration-300 shrink-0">{icon}</div>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{label}</span>
      </div>
      <div className="font-display font-black text-base sm:text-xl text-foreground">{value}</div>
      <div className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5 sm:mt-1 leading-snug">{detail}</div>
    </div>
  );
}

/* -------------------- ABOUT BANNER -------------------- */
function AboutBanner() {
  const visits = [
    { label: "Nature Conservation", icon: <Trees className="h-4 w-4" /> },
    { label: "Bio-Studies & Research", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Ecotourism & Retreats", icon: <Compass className="h-4 w-4" /> },
    { label: "School Excursions", icon: <Users className="h-4 w-4" /> },
    { label: "Seminars & Conferences", icon: <Award className="h-4 w-4" /> },
    { label: "Reception & Parties", icon: <PartyPopper className="h-4 w-4" /> },
    { label: "Event Halls & Gazebos", icon: <Home className="h-4 w-4" /> },
    { label: "Amusement Parks", icon: <Sparkles className="h-4 w-4" /> },
    { label: "Gym Starillion", icon: <Dumbbell className="h-4 w-4" /> },
    { label: "Eco Lodges", icon: <Leaf className="h-4 w-4" /> },
    { label: "Picnics & Fitness", icon: <Bike className="h-4 w-4" /> },
    { label: "Film & Music Video", icon: <Film className="h-4 w-4" /> },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 section-alt border-t border-border/60 nature-texture">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5">
              <Leaf className="h-3.5 w-3.5 text-primary" /> Heritage & Conservation
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight text-foreground">
              Protected from the city. <br />
              Dedicated to <em className="not-italic text-gradient-green">our tomorrow.</em>
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Ogba Zoo and Nature Park is Nigeria's leading wildlife conservation centre in Benin City, Edo State. It houses <strong className="text-foreground font-semibold">750 Acres of Protected Urban Park</strong> with a biological garden, wildlife reserve, and irresistible elements for conservation, biological studies, and community relaxation.
              </p>
              <p>
                Our wildlife residents exhibit captivating behaviors that enthral both young and old — Majestic Lions, baboons, crocodiles, monkeys, ostriches, pythons, spotted hyena, peacocks, baboons, and more. This provides a rich field laboratory for scientific research, family getaways, and luxury events.
              </p>
              <p>
                Established in 1971 from the ancient Ogba Forest Reserve under the visionary administration of Brigadier General Samuel Osaigbovo Ogbemudia, the zoo represents a proud conservation legacy. Today, it is managed under a professional partnership between <strong className="text-foreground font-semibold">BENZOPA</strong> and the Edo State Ministry of Environment.
              </p>
            </div>

            {/* Verification Badges */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white border border-border rounded-2xl px-4 py-2.5 shadow-sm hover:shadow-md transition">
                <Award className="h-4.5 w-4.5 text-gold" />
                <div className="leading-tight">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Management Partner</div>
                  <span className="text-xs font-bold text-foreground">BENZOPA Organization</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-border rounded-2xl px-4 py-2.5 shadow-sm hover:shadow-md transition">
                <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                <div className="leading-tight">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">State Endorsed</div>
                  <span className="text-xs font-bold text-foreground">Ministry of Environment</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://ogbazoo.com.ng/about-ogba-zoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline hover:text-primary/80 transition-colors group"
              >
                Read complete history profile 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: visit reasons grid & botanical image */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md border border-border/80 group">
              <img 
                src={botanicalImg} 
                alt="Ancient hardwoods at Ogba Zoo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md border border-border/50 rounded-2xl p-5 shadow-lg">
                  <div className="text-[9px] uppercase tracking-widest text-primary font-bold">Scientific Reserve</div>
                  <div className="font-display text-lg font-black text-foreground mt-0.5">Living Botanical Archive · 6+ Hardwood Species</div>
                  <div className="text-xs text-muted-foreground mt-1.5 flex flex-wrap gap-2">
                    {["Iroko", "Mahogany", "White Afara", "Teak", "Neem"].map(wood => (
                      <span key={wood} className="bg-primary/10 text-primary px-2 py-0.5 rounded font-semibold text-[10px]">
                        {wood}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4">Visit Us For</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {visits.map((v) => (
                  <div 
                    key={v.label} 
                    className="flex items-center gap-2.5 bg-white border border-border/60 rounded-xl px-4 py-3 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md transition duration-300 group"
                  >
                    <div className="text-primary group-hover:scale-110 transition shrink-0 bg-primary/5 p-1.5 rounded-lg group-hover:bg-primary group-hover:text-white">{v.icon}</div>
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ANIMAL GALLERY -------------------- */
type Animal = { name: string; category: string; img: string; desc: string };
const ANIMALS: Animal[] = [
  { name: "Lions", category: "Big Cats", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/3-1-lions.jpg", desc: "The majestic apex predator of the reserve, reflecting the power of the ancient Benin Kingdom. Our pride of lions is the highlight of the zoo." },
  { name: "Baboons", category: "Primates", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/6-baboon.jpg", desc: "Highly social and curious primates that delight visitors with their complex family hierarchies and energetic play." },
  { name: "Peafowls", category: "Birds", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/peacock-feathers.jpg", desc: "Their spectacular feather displays are among the most photographed sights in the reserve, roaming the open lawns." },
  { name: "Cranes & Birds", category: "Waterfowls", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/5-bird.jpg", desc: "A diverse collection of waterfowls, cranes, storks, and ostriches roam the open forest-edge habitats." },
  { name: "Donkeys", category: "Equines", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/donkey.jpg", desc: "Gentle and friendly, these equines are popular with younger visitors for guided interaction and heritage experiences." },
  { name: "Monkeys", category: "Primates", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/2-1-monkey.jpg", desc: "Various species of monkeys inhabit the forest canopy, thriving in their natural habitat of ancient hardwoods." },
  { name: "Nile Crocodiles", category: "Reptiles", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/10-crocodle.jpg", desc: "Thriving in our designated aquatic enclosures — ancient reptiles representing evolutionary history." },
  { name: "Giant Tortoises", category: "Reptiles", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/8-tortoise.jpg", desc: "Some of the oldest animal residents, these gentle giants captivate visitors of all ages with their slow-paced wisdom." },
  { name: "Camels", category: "Camelids", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/7-1-camels.jpg", desc: "Heritage Camel Rides are one of the most unique and thrilling experiences available for visitors at the reserve." },
  { name: "Horses", category: "Equines", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/4-horses.jpg", desc: "Beautiful horses available for guided heritage riding experiences inside the park's scenic forest trails." },
];

function AnimalGallery() {
  const [selected, setSelected] = useState<Animal>(ANIMALS[0]);

  return (
    <section id="animals" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
              <Camera className="h-3.5 w-3.5 text-primary" /> Wildlife Sanctuary
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
              Our Wildlife <em className="not-italic text-gradient-green">Residents.</em>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
              Explore our diverse collection of majestic cats, primates, reptiles, and exotic birds. Click on any species in the selector to view details.
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground bg-surface-2 border border-border/80 rounded-2xl px-5 py-3 self-start shadow-sm">
            <Camera className="h-4.5 w-4.5 text-primary" />
            <span>Click any animal to view their profile</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-8">
          {/* Selector grid - responsive layout */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-3 gap-3">
            {ANIMALS.map((animal) => {
              const isActive = selected.name === animal.name;
              return (
                <button 
                  key={animal.name} 
                  onClick={() => setSelected(animal)}
                  className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 text-left focus:outline-none ${
                    isActive 
                      ? "border-primary shadow-md scale-[1.03]" 
                      : "border-border/60 hover:border-primary/45 hover:shadow-sm"
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={animal.img} 
                      alt={animal.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t transition-opacity ${
                      isActive 
                        ? "from-primary/70 via-primary/20 to-transparent opacity-100" 
                        : "from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-40"
                    }`} />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                      <div className="text-[10px] font-black uppercase tracking-wider text-white leading-none">
                        {animal.name}
                      </div>
                      {isActive && (
                        <div className="h-4 w-4 bg-primary rounded-full flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Featured detail Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                key={selected.img} 
                src={selected.img} 
                alt={selected.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[9px] uppercase tracking-widest bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold">
                  {selected.category}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-display text-3xl font-black text-white">{selected.name}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col gap-6 flex-1">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{selected.desc}</p>
              
              <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Ogba Zoo Native Habitats</span>
                </div>
                <a 
                  href="#tickets" 
                  className="inline-flex items-center gap-2 rounded-xl bg-primary text-white text-xs font-bold px-5 py-3 hover:bg-primary/95 transition shadow-sm neon-glow"
                >
                  Plan Visit to See {selected.name} <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ INTERACTIVE AUDIO TOUR & VIRTUAL GUIDE ------------------ */
interface TourStop {
  id: string;
  name: string;
  category: string;
  img: string;
  diet: string;
  habitat: string;
  lifespan: string;
  status: string;
  audioText: string;
  description: string;
}

const TOUR_STOPS: TourStop[] = [
  {
    id: "lions",
    name: "Lion Enclosure",
    category: "Big Cats",
    img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/3-1-lions.jpg",
    diet: "Carnivore (Fresh Beef & Game)",
    habitat: "Woodland Enclosures",
    lifespan: "12 - 20 Years",
    status: "Vulnerable",
    audioText: "Welcome to the Lion enclosure stop. Here we conserve the majesty of the African Lion, a historical symbol of the ancient Benin Kingdom. Our lions roam a spacious natural woodland enclosure designed to simulate their native hunting grounds. Hear their deep roars that echo through the nature reserve daily.",
    description: "Our pride of lions resides in a secure, open-air woodland reserve that matches their natural behavioral needs. They represent the power and legacy of Edo conservation efforts."
  },
  {
    id: "baboons",
    name: "Primate Sanctuary",
    category: "Primates",
    img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/6-baboon.jpg",
    diet: "Omnivore (Fruits, Roots, Insects)",
    habitat: "Forest Canopy & Rocks",
    lifespan: "30 - 45 Years",
    status: "Protected",
    audioText: "Welcome to the Primate sanctuary. This active reserve houses baboons and monkeys who thrive under our natural behavioral enrichment programs. Watch their complex social structures and grooming rituals. Our keepers work daily to ensure their environmental stimulation.",
    description: "The primate enclosure is designed with natural climbing frames, foliage, and foraging tools to encourage active behaviors and cognitive enrichment for our resident baboons."
  },
  {
    id: "peafowls",
    name: "Free-Roaming Peafowls",
    category: "Birds",
    img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/peacock-feathers.jpg",
    diet: "Omnivore (Seeds, Grains, Insects)",
    habitat: "Open Arboretum Lawns",
    lifespan: "15 - 20 Years",
    status: "Least Concern",
    audioText: "Welcome to the Free-Roaming Peafowls stop. As you walk along our grassy lawns, you will spot Indian Peafowls displaying their spectacular, iridescent tail fans. They help control pests naturally and add organic elegance to the botanical gardens.",
    description: "Our peafowls roam freely across the 750-acre reserve, nesting in ancient hardwoods and strutting across picnic lawns, delighting photographers and guests."
  },
  {
    id: "crocodiles",
    name: "Reptile Basin",
    category: "Reptiles",
    img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/10-crocodle.jpg",
    diet: "Carnivore (Fish, Amphibians)",
    habitat: "Freshwater Swamps",
    lifespan: "60 - 80 Years",
    status: "Least Concern",
    audioText: "Welcome to the Crocodile Basin. These Nile Crocodiles are kept in a simulated riverine enclosure that mirrors the Ogba River delta. They are apex predators capable of holding their breath underwater for over two hours while patiently waiting for prey.",
    description: "Observe these pre-historic reptiles basking under the sun to regulate their body temperature. Their basin is built with deep water channels and sandy banks."
  },
  {
    id: "tortoises",
    name: "Aldabra Tortoise Lawn",
    category: "Reptiles",
    img: "https://ogbazoo.com.ng/wp-content/uploads/2021/03/8-tortoise.jpg",
    diet: "Herbivore (Grasses, Leafy Greens)",
    habitat: "Grassy Scrublands",
    lifespan: "80 - 150 Years",
    status: "Threatened",
    audioText: "Welcome to the Aldabra Giant Tortoise lawn. Meet our oldest residents, with some tortoises having witnessed over a century of Nigerian history. They move slowly but possess great resilience, playing a vital role in seed dispersal and vegetation control.",
    description: "Our tortoises are a favorite for children, offering a slow-paced, interactive look at one of the world's longest-living land animals."
  },
  {
    id: "arboretum",
    name: "Ancient Arboretum",
    category: "Flora",
    img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/20130222_133718-500x400.jpg",
    diet: "Photosynthesis (Solar, Minerals)",
    habitat: "Rainforest Reserve",
    lifespan: "150 - 400 Years",
    status: "Protected Reserve",
    audioText: "Welcome to the Ancient Botanical Arboretum stop. This protected woodland contains century-old African Mahogany and Iroko trees. They form the botanical shield of Ogba Zoo, supporting countless local bird species and preserving Benin City's forest ecosystem.",
    description: "The botanical arboretum serves as a crucial bio-study laboratory for researchers, safeguarding rare regional hardwood trees and medicinal plants."
  }
];

function VirtualTour() {
  const [selectedStop, setSelectedStop] = useState<TourStop>(TOUR_STOPS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(30);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [speechSupported, setSpeechSupported] = useState(false);

  // Check Web Speech API support safely in browser only (prevents SSR reference errors)
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSpeechSupported(true);
    }
  }, []);

  // Sync duration with estimated spoken time when selected stop changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
    // Estimate speaking duration: ~2.5 words per second
    const wordsCount = selectedStop.audioText.split(" ").length;
    const estSec = Math.max(12, Math.round(wordsCount / 2.5));
    setDuration(estSec);
  }, [selectedStop]);

  // Audio timer simulation ticker
  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            if (typeof window !== "undefined" && window.speechSynthesis) {
              window.speechSynthesis.cancel();
            }
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration, playbackRate]);

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const playAudioTour = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      // Fallback behavior: toggle play simulation
      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(selectedStop.audioText);
        
        // Match a default English language voice
        const voices = window.speechSynthesis.getVoices();
        const engVoice = voices.find(v => v.lang.startsWith("en"));
        if (engVoice) {
          utterance.voice = engVoice;
        }

        utterance.rate = playbackRate;
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(0);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
        };

        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
        setProgress(0);
      }
    }
  };

  const changeSpeed = () => {
    const nextRate = playbackRate === 1 ? 1.25 : playbackRate === 1.25 ? 1.5 : 1;
    setPlaybackRate(nextRate);
    if (isPlaying && typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setProgress(0);
      // Restart speech with new playback rate
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(selectedStop.audioText);
        const voices = window.speechSynthesis.getVoices();
        const engVoice = voices.find(v => v.lang.startsWith("en"));
        if (engVoice) utterance.voice = engVoice;
        utterance.rate = nextRate;
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(0);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
        };
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }, 100);
    }
  };

  // Helper format time
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section id="tour" className="py-24 sm:py-32 section-alt border-t border-border/60 nature-texture">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
              <Compass className="h-3.5 w-3.5 text-primary" /> Audio Tour Stop
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground leading-tight">
              Virtual Tour & <em className="not-italic text-gradient-green">Audio Guide.</em>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl">
              Listen to the history, conservation importance, and habitats of our major botanical and wildlife attractions. Click a stop to start the audio narrator.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Stops Selector - horizontal swipe on mobile, vertical list on desktop */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
            {TOUR_STOPS.map((stop, idx) => {
              const isActive = selectedStop.id === stop.id;
              return (
                <button
                  key={stop.id}
                  onClick={() => setSelectedStop(stop)}
                  className={`snap-center shrink-0 w-64 lg:w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3 focus:outline-none ${
                    isActive 
                      ? "border-primary bg-white shadow-sm ring-1 ring-primary/20 scale-[1.01]" 
                      : "border-border bg-white/70 hover:bg-white hover:border-primary/30"
                  }`}
                >
                  <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 border border-border/40">
                    <img src={stop.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Stop {idx + 1}</div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">{stop.name}</h4>
                    <span className="text-[9px] bg-primary/10 text-primary border border-primary/10 px-2 py-0.5 rounded font-semibold mt-0.5 inline-block">
                      {stop.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Virtual Player Card */}
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden p-6 sm:p-8 flex flex-col gap-6">
            <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 items-center">
              {/* Exhibit Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border/80">
                <img 
                  src={selectedStop.img} 
                  alt={selectedStop.name} 
                  className="w-full h-full object-cover animate-fade-in" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[9px] uppercase tracking-widest text-primary-foreground font-bold">Ogba Zoo Tour</div>
                  <h3 className="font-display text-lg sm:text-xl font-bold">{selectedStop.name}</h3>
                </div>
              </div>

              {/* Player Widget Box */}
              <div className="bg-surface rounded-2xl p-5 border border-border/60 flex flex-col gap-5 justify-between h-full">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="leading-tight">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold block">Tour Narrator</span>
                    <span className="text-xs font-bold text-foreground">
                      {speechSupported ? "Live Synthesis Player" : "Simulated Audio Guide"}
                    </span>
                  </div>
                  
                  {/* Wave Visualizer spectrum */}
                  <div className="flex items-center gap-1 h-6 px-1 shrink-0">
                    {Array.from({ length: 9 }).map((_, i) => {
                      const heights = ["h-2", "h-4", "h-5", "h-3", "h-6", "h-4", "h-2", "h-5", "h-3"];
                      const delay = ["delay-75", "delay-100", "delay-200", "delay-300", "delay-150", "delay-75", "delay-200", "delay-100", "delay-300"];
                      return (
                        <div
                          key={i}
                          className={`w-[2.5px] bg-primary rounded-full transition-all duration-300 ${heights[i]} ${
                            isPlaying ? `animate-bounce ${delay[i]}` : "opacity-35"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="w-full bg-border/60 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-300"
                      style={{ width: `${(progress / duration) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-semibold mt-2">
                    <span>{formatTime(progress)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={changeSpeed}
                    className="text-[9px] uppercase tracking-wider font-bold border border-border bg-white text-foreground hover:border-primary/40 px-3 py-2 rounded-xl transition"
                  >
                    Speed {playbackRate}x
                  </button>

                  <button
                    onClick={playAudioTour}
                    className="flex-1 rounded-xl bg-primary text-white text-xs font-bold px-5 py-3 hover:bg-primary/95 transition shadow-sm neon-glow flex items-center justify-center gap-2 active:scale-95"
                  >
                    {isPlaying ? (
                      <>
                        <span className="inline-block h-2 w-2 rounded-full bg-white animate-ping mr-1" />
                        Pause Guide
                      </>
                    ) : "Play Audio Guide"}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid - 2 columns on mobile */}
            <div>
              <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3 border-b border-border/40 pb-2">
                Exhibit Biosphere Profile
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCell label="Natural Habitat" value={selectedStop.habitat} />
                <StatCell label="Dietary Profile" value={selectedStop.diet} />
                <StatCell label="Expected Lifespan" value={selectedStop.lifespan} />
                <StatCell label="Status" value={selectedStop.status} highlight />
              </div>
            </div>

            <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed bg-surface-2/40 p-4 rounded-xl border border-dashed border-border/80">
              <span className="font-bold text-foreground block mb-1">Exhibit Overview:</span>
              {selectedStop.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-surface rounded-xl p-3.5 border border-border/50 text-left">
      <div className="text-[8px] uppercase tracking-wider text-muted-foreground font-bold">{label}</div>
      <div className={`text-xs font-black mt-1 ${highlight ? "text-primary" : "text-foreground"} leading-tight`}>
        {value}
      </div>
    </div>
  );
}

/* ---------------------- TICKET BOOKING ---------------------- */
interface AttractionAddon {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
}

const ADDONS: AttractionAddon[] = [
  { id: "paintball", name: "Paintball Arena Access", price: 2500, icon: <Swords className="h-4 w-4" /> },
  { id: "quad", name: "Quad Biking Trail", price: 4000, icon: <Bike className="h-4 w-4" /> },
  { id: "archery", name: "Archery Target Pack", price: 1500, icon: <Target className="h-4 w-4" /> },
  { id: "camel", name: "Heritage Camel Ride", price: 2000, icon: <Sparkles className="h-4 w-4" /> }
];

function TicketBooking() {
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const baseEntry = 1000;
  const groupDiscount = guests >= 20 ? 0.3 : 0;

  const totalAddonsPrice = useMemo(() => {
    return selectedAddons.reduce((sum, id) => {
      const addon = ADDONS.find(a => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);
  }, [selectedAddons]);

  const entryCostPerHead = baseEntry * (1 - groupDiscount);
  const totalEntryCost = entryCostPerHead * guests;
  const grandTotal = totalEntryCost + (totalAddonsPrice * guests);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <section id="tickets" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
            <Ticket className="h-3.5 w-3.5 text-primary" /> Admission Hub
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
            Configure Your <em className="not-italic text-gradient-green">Digital Pass.</em>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Base admission is <strong className="text-foreground font-bold">₦1,000 per person</strong> (ages 2+). Groups of <strong className="text-primary font-bold">20 or more</strong> unlock an automatic <strong className="text-primary font-bold">30% discount</strong> — perfect for school field trips, church programs, and family assemblies.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          {/* Configure panels */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-sm flex flex-col gap-8">
            {/* Guest Counter */}
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold">
                  <Users className="h-4 w-4 text-primary" /> 1. Select Guests count
                </div>
                {guests >= 20 && (
                  <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 rounded-md px-2 py-0.5 font-bold">
                    30% Group Discount Active
                  </span>
                )}
              </div>

              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 max-w-sm mx-auto py-3 bg-surface rounded-2xl px-5 border border-border/40">
                <button 
                  onClick={() => setGuests(g => Math.max(1, g - 1))}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-border text-foreground hover:border-primary/40 hover:bg-primary/5 active:scale-95 transition-all"
                  aria-label="Decrease guests"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="text-center">
                  <div className="font-display text-4xl sm:text-5xl font-black tabular-nums text-foreground">{guests}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Visitors</div>
                </div>
                <button 
                  onClick={() => setGuests(g => g + 1)}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-border text-foreground hover:border-primary/40 hover:bg-primary/5 active:scale-95 transition-all"
                  aria-label="Increase guests"
                >
                  <Plus className="h-4 w-4 text-primary" />
                </button>
              </div>

              {/* Fast selector buttons */}
              <div className="flex justify-center gap-2 mt-5">
                {[1, 5, 10, 20, 50].map((n) => (
                  <button 
                    key={n} 
                    onClick={() => setGuests(n)}
                    className={`text-[10px] uppercase font-bold tracking-wider px-3.5 py-2 rounded-lg border transition-all ${
                      guests === n 
                        ? "border-primary bg-primary text-white shadow-sm" 
                        : "border-border text-muted-foreground bg-white hover:text-foreground hover:border-primary/30"
                    }`}
                  >
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </button>
                ))}
              </div>

              {/* Discount progress notification */}
              <div className={`mt-5 rounded-2xl border p-4 transition-all duration-300 ${
                guests >= 20 
                  ? "border-primary/30 bg-primary/5 text-primary" 
                  : "border-dashed border-border/80 bg-surface-2/40 text-muted-foreground"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`grid h-8.5 w-8.5 place-items-center rounded-full shrink-0 ${
                    guests >= 20 ? "bg-primary text-white" : "bg-white border border-border text-muted-foreground"
                  }`}>
                    {guests >= 20 ? <Check className="h-4.5 w-4.5" /> : <Sparkles className="h-4.5 w-4.5" />}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold ${guests >= 20 ? "text-primary" : "text-foreground"}`}>
                      {guests >= 20 ? "Group Discount Unlocked!" : `Add ${20 - guests} more guests to get 30% discount`}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">
                      {guests >= 20 ? "30% off has been applied to each base ticket." : "Perfect for school excursions, religious groups & societies."}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attractions add-ons */}
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold border-b border-border/60 pb-3 mb-5">
                <Target className="h-4 w-4 text-primary" /> 2. Optional Activity Add-ons (Per Guest)
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button 
                      key={addon.id} 
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                        isSelected 
                          ? "border-primary bg-primary/5 shadow-sm" 
                          : "border-border bg-surface hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                          isSelected ? "bg-primary text-white" : "bg-white border border-border text-primary"
                        }`}>
                          {addon.icon}
                        </div>
                        <div className="min-w-0">
                          <div className={`text-xs font-bold truncate ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                            {addon.name}
                          </div>
                          <div className="text-[9px] text-muted-foreground mt-0.5">Custom trail</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-foreground shrink-0 ml-3 bg-white px-2 py-1 rounded-lg border border-border/40">
                        ₦{addon.price.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Premium Boarding Pass - optimized flex layout for mobile devices */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-md transition-shadow hover:shadow-lg">
              {/* Header */}
              <div className="bg-primary px-6 py-5 text-white">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-white/70 font-black">
                  <span>Ogba Zoo & Nature Park</span>
                  <span className="bg-white/25 px-2.5 py-0.5 rounded-md text-white font-bold">Admit Pass</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold">Admission Ticket Summary</h3>
                <div className="text-[10px] text-white/70 mt-1">Airport Road main gate entry · Benin City</div>
              </div>

              {/* Flex ticket pass stubs */}
              <div className="flex flex-col md:flex-row md:divide-x md:divide-dashed md:divide-border/80">
                <div className="p-6 flex flex-col justify-between min-h-[300px] flex-1">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Quantity</div>
                      <div className="font-display font-black text-base text-foreground mt-0.5">{guests} {guests === 1 ? "Visitor" : "Visitors"}</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Base Ticket</div>
                      <div className={`font-display font-black text-base mt-0.5 ${guests >= 20 ? "text-primary" : "text-foreground"}`}>
                        ₦{entryCostPerHead.toLocaleString()} <span className="text-[9px] text-muted-foreground font-sans font-normal">/ea</span>
                      </div>
                    </div>
                    {selectedAddons.length > 0 && (
                      <div className="col-span-2 border-t border-border/40 pt-3">
                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1.5">Selected Activities</div>
                        <div className="flex flex-wrap gap-1">
                          {selectedAddons.map(id => {
                            const addon = ADDONS.find(a => a.id === id);
                            return (
                              <span key={id} className="text-[9px] bg-primary/10 text-primary border border-primary/25 rounded-md px-2 py-0.5 font-bold flex items-center gap-1">
                                {addon?.name.split(" ")[0]} (₦{addon?.price.toLocaleString()})
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Calculations footer */}
                  <div className="border-t border-dashed border-border pt-5 mt-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Total Gate Fee Due</div>
                      <div className="font-display text-3xl font-black text-foreground mt-0.5">₦{grandTotal.toLocaleString()}</div>
                      {guests >= 20 && (
                        <div className="text-[9px] text-primary font-bold mt-1 bg-primary/10 px-2 py-0.5 rounded inline-block">
                          30% group discount applied
                        </div>
                      )}
                    </div>
                    
                    <a 
                      href="#contact"
                      className="rounded-xl bg-primary text-center px-5 py-3 text-xs font-bold text-white hover:bg-primary/95 transition-all shadow-sm neon-glow active:scale-95 shrink-0"
                    >
                      Process Pass
                    </a>
                  </div>
                </div>

                {/* Ticket stub Barcode column - stacks horizontally on mobile, vertically on desktop */}
                <div className="relative p-6 bg-surface/50 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 border-t md:border-t-0 md:border-l border-dashed border-border/80 md:w-32">
                  {/* Decorative Ticket punches */}
                  <div className="absolute left-0 md:left-auto md:-left-2.5 top-0 md:top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-border" />
                  <div className="absolute right-0 md:left-auto md:-left-2.5 bottom-0 md:bottom-0 h-5 w-5 translate-x-1/2 translate-y-1/2 rounded-full bg-white border border-border" />
                  
                  <div className="flex items-center gap-4 md:flex-col w-full">
                    {/* Simulated barcode */}
                    <div className="flex justify-between items-stretch h-20 md:h-28 bg-foreground p-1.5 rounded-lg w-14 md:w-20 shrink-0 gap-[1px]">
                      {Array.from({ length: 18 }).map((_, i) => {
                        const widths = [1, 3, 2, 1, 4, 1, 2, 3, 1, 2];
                        return <div key={i} style={{ flexGrow: widths[i % widths.length] }} className="bg-white h-full" />;
                      })}
                    </div>
                    
                    <div className="text-left md:text-center w-full leading-tight">
                      <div className="text-[7px] text-muted-foreground uppercase tracking-widest font-bold">Ticket Code</div>
                      <div className="mt-1 font-mono text-[8px] text-muted-foreground tracking-widest uppercase font-bold">
                        ZOO-{guests}-{Math.floor(grandTotal).toString(36).toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- VENUE EXPLORER ---------------------- */
type Venue = { name: string; capacity: string; tags: string[]; premium?: boolean; basePrice: number };
const VENUES: Venue[] = [
  { name: "Abuja Hall", capacity: "300 guests", tags: ["Weddings", "Conferences"], premium: true, basePrice: 250000 },
  { name: "Ogbemudia Hall", capacity: "500 guests", tags: ["Galas", "Ceremonies"], premium: true, basePrice: 400000 },
  { name: "Big Round Hall", capacity: "220 guests", tags: ["Receptions", "Seminars"], basePrice: 180000 },
  { name: "Small Round Hall", capacity: "80 guests", tags: ["Meetings", "Workshops"], basePrice: 90000 },
  { name: "Chairman's Lounge", capacity: "40 guests", tags: ["VIP", "Private"], premium: true, basePrice: 150000 },
  { name: "Festac Bar", capacity: "120 guests", tags: ["Cocktails", "Nightlife"], basePrice: 120000 },
  { name: "New Gazebo", capacity: "60 guests", tags: ["Outdoor", "Parties"], basePrice: 80000 },
  { name: "Picnic Area Hall", capacity: "200 guests", tags: ["Family", "Picnics"], basePrice: 100000 },
  { name: "Play Ground Hall", capacity: "150 guests", tags: ["Kids", "Parties"], basePrice: 90000 },
  { name: "Restaurant", capacity: "100 guests", tags: ["Dining", "Groups"], basePrice: 70000 },
];

function VenueExplorer() {
  const [filter, setFilter] = useState<string>("All");
  const filters = ["All", "Weddings", "Seminars", "VIP", "Kids", "Outdoor"];
  
  const list = filter === "All" 
    ? VENUES 
    : VENUES.filter(v => v.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="pavilions" className="relative py-24 sm:py-32 border-t border-border/60">
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none">
        <img src={venueImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
            <Home className="h-3.5 w-3.5 text-primary" /> Banquet & Hospitality
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
            Reserve a <em className="not-italic text-gradient-green">Sanctuary Space.</em>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Select from ten distinct event spaces — from our premium presidential lounges to grand banquet arboretum halls. Ideal for receptions, conferences, and film shoots.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              className={`text-xs px-4 py-2 rounded-full border transition-all font-semibold focus:outline-none ${
                filter === f 
                  ? "border-primary bg-primary text-white shadow-sm" 
                  : "border-border text-muted-foreground bg-white hover:text-foreground hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Venue Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((v) => (
            <div 
              key={v.name} 
              className="group bg-white rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`font-display text-xl font-bold ${v.premium ? "text-gradient-green" : "text-foreground"}`}>
                    {v.name}
                  </h3>
                  {v.premium && (
                    <span className="text-[9px] uppercase tracking-widest text-gold border border-gold/40 rounded-full px-2.5 py-1 font-bold shrink-0 bg-gold/5">
                      Premium
                    </span>
                  )}
                </div>
                <div className="mt-2.5 text-xs text-muted-foreground flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary shrink-0" /> 
                  <span className="font-semibold text-foreground">Capacity:</span> {v.capacity}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {v.tags.map(t => (
                    <span key={t} className="text-[9px] uppercase tracking-wider bg-surface-2 border border-border/60 px-2 py-1 rounded-md font-semibold text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
                <div className="text-xs text-muted-foreground">
                  Booking rate <br />
                  <span className="text-foreground font-black text-base">₦{v.basePrice.toLocaleString()}</span>
                </div>
                <a 
                  href="#contact"
                  className="bg-surface border border-border rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-1.5 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 active:scale-95"
                >
                  Book Space <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hotline Panel */}
        <div className="mt-12 bg-primary rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md border border-primary-foreground/10">
          <div>
            <div className="text-xs font-bold text-white/80 uppercase tracking-widest">General Booking Coordinator</div>
            <p className="text-sm text-white/90 mt-1">Ready to book a reception pavilion? Contact the administrative coordinator:</p>
          </div>
          <a href="tel:+2348033026283" className="flex items-center gap-3.5 group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-6 py-3.5 transition-all shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[9px] uppercase tracking-wider text-white/80">Call Booking desk</div>
              <span className="font-display text-lg sm:text-xl font-black text-white">+234 803 302 6283</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- ATTRACTIONS ---------------------- */
type AttractionItem = { name: string; label: string; img: string; icon: React.ReactNode };
const ATTRACTIONS: AttractionItem[] = [
  { name: "Paint Ball & Archery", label: "Sports Arena", img: "https://ogbazoo.com.ng/wp-content/uploads/2023/03/ogbazoo-and-gym-starillion2-500x400.jpg", icon: <Swords className="h-5 w-5" /> },
  { name: "Throw & Win Game", label: "Fun Games", img: "https://ogbazoo.com.ng/wp-content/uploads/2023/03/CIMG4201-500x400.jpg", icon: <Target className="h-5 w-5" /> },
  { name: "Face Painting", label: "Kids Activity", img: "https://ogbazoo.com.ng/wp-content/uploads/2023/03/CIMG4210-500x400.jpg", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Train Ride", label: "Park Transit", img: "https://ogbazoo.com.ng/wp-content/uploads/2023/03/CIMG4212-500x400.jpg", icon: <Train className="h-5 w-5" /> },
  { name: "Guided Horse Rides", label: "Fauna Experience", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/side-attraction-horse-500x400.jpg", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Space Ride Carousel", label: "Amusement Park", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/fun-02-1-500x400.jpg", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Quad Bike Trails", label: "Adventure Track", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/CIMG4111-500x400.jpg", icon: <Bike className="h-5 w-5" /> },
  { name: "Bouncy Castle Fest", label: "Kids Play Zone", img: "https://ogbazoo.com.ng/wp-content/uploads/2021/04/bouncy-castle-512x1024-500x400.jpg", icon: <PartyPopper className="h-5 w-5" /> },
];

function AttractionsShowcase() {
  return (
    <section id="attractions" className="py-24 sm:py-32 section-alt border-t border-border/60 nature-texture">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
            <Star className="h-3.5 w-3.5 text-primary" /> Inside the Park
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
            Park Attractions <br />& <em className="not-italic text-gradient-green">Amusements.</em>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Ogba Zoo is packed with active sports, children's playgrounds, and family entertainment trails.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ATTRACTIONS.map((a) => (
            <div 
              key={a.name} 
              className="group relative rounded-2xl overflow-hidden border border-border/80 shadow-sm hover:shadow-md hover:border-primary/45 transition-all duration-300 aspect-[4/3]"
            >
              <img 
                src={a.img} 
                alt={a.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-primary font-bold bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-0.5 inline-block mb-1">
                  {a.label}
                </div>
                <div className="font-display text-xs sm:text-sm font-black text-white leading-tight">
                  {a.name}
                </div>
              </div>
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/95 text-primary opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 shadow-sm">
                {a.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-border/80 rounded-3xl p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition">
          <div>
            <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Adventure Games & Sports Coordinator</div>
            <p className="text-sm text-muted-foreground">For paintball bookings, quad biking reservations, and archery targets:</p>
          </div>
          <a href="tel:08065967886" className="flex items-center gap-3 group shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition duration-300 shadow-sm">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">Call Attraction desk</div>
              <span className="font-display text-base sm:text-lg font-black text-gradient-green group-hover:opacity-85 transition">0806 596 7886</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- EVENTS GALLERY ---------------------- */
type EventItem = { title: string; img: string; caption: string };
const EVENTS: EventItem[] = [
  { title: "Wedding Parties", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/07/wedding-event4.jpg", caption: "Celebrate your marriage in a magical forest-canopy venue." },
  { title: "Weddings in the Garden", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/07/wedding-event3.jpg", caption: "Elegant garden ceremonies surrounded by century-old hardwoods." },
  { title: "Elegant Receptions", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/07/wedding-event2.jpg", caption: "Fully customized reception layouts accommodating up to 500 visitors." },
  { title: "Banquet Hall Setup", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/07/wedding-event.jpg", caption: "Professional event setup coordination and catering spaces." },
  { title: "Private Parties", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/07/Ready-for-party.jpg", caption: "Birthday retreats and exclusive lounge coordinate setups." },
  { title: "Birthday Celebrations", img: "https://ogbazoo.com.ng/wp-content/uploads/2024/07/birthday-parties.jpg", caption: "Family-friendly birthday events utilizing park slides and spaces." },
  { title: "Large Event Parties", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/06/Parties.jpg", caption: "Grand public concerts, corporate retreats, and society banquets." },
  { title: "Bouncy Castle Fun", img: "https://ogbazoo.com.ng/wp-content/uploads/2025/06/floater.jpg", caption: "Joyous child play setups during state holiday periods." },
];

function EventsGallery() {
  const [selected, setSelected] = useState<EventItem>(EVENTS[0]);

  return (
    <section id="events" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
              <CalendarDays className="h-3.5 w-3.5 text-primary" /> Events & Celebrations
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
              Sanctuary Hostings & <em className="not-italic text-gradient-green">Events.</em>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
              From picturesque green lawn weddings to VIP birthday garden setups, Ogba Zoo transforms private events into lifetime memories.
            </p>
          </div>
          <a 
            href="#pavilions" 
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-white text-xs font-bold px-5 py-3 hover:bg-primary/95 hover:scale-[1.02] transition shadow-sm neon-glow self-start md:self-auto active:scale-95"
          >
            Browse Event Venues <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* Main feature box */}
          <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                key={selected.img} 
                src={selected.img} 
                alt={selected.title} 
                className="w-full h-full object-cover animate-fade-in" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-border/50 shadow-md">
                  <div className="text-[9px] uppercase tracking-widest text-primary font-bold">Featured Event Highlight</div>
                  <div className="font-display text-xl font-black text-foreground mt-1">{selected.title}</div>
                  <div className="text-xs text-muted-foreground mt-1.5">{selected.caption}</div>
                </div>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between border-t border-border/60 bg-surface/30">
              <span className="text-xs text-muted-foreground">Planning a wedding or private party at the reserve?</span>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group">
                Enquire Now <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 gap-3 content-start">
            {EVENTS.map((ev) => {
              const isActive = selected.title === ev.title;
              return (
                <button 
                  key={ev.title} 
                  onClick={() => setSelected(ev)}
                  className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 text-left focus:outline-none ${
                    isActive 
                      ? "border-primary shadow-md scale-[1.02]" 
                      : "border-border/60 hover:border-primary/45 hover:shadow-sm"
                  }`}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={ev.img} 
                      alt={ev.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity ${
                      isActive ? "opacity-90" : "opacity-50 group-hover:opacity-30"
                    }`} />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                      <div className="text-[9px] font-bold text-white leading-tight pr-2">
                        {ev.title}
                      </div>
                      {isActive && (
                        <div className="h-4.5 w-4.5 bg-primary rounded-full flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- FAQ SECTION ---------------------- */
interface FAQItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Where is the zoo located?",
    a: "We are located along Airport Road, Opposite the NPDC Complex, Benin City, Edo State, Nigeria. We are directly situated in a serene, nature-friendly zone within the city limits."
  },
  {
    q: "What are the opening hours?",
    a: "Ogba Zoo and Nature Park is open daily from 9:00 AM until 6:00 PM, including on all public holidays (Easter, Christmas, New Year, etc.)."
  },
  {
    q: "What are the main wildlife attractions?",
    a: "We house various exciting animals including our majestic pride of lions, spotted hyenas, baboons, chimpanzees, crocodiles, monkeys, ostriches, giant tortoises, pythons, porcupines, and peacocks."
  },
  {
    q: "What is the price of admission tickets?",
    a: "Entrance tickets cost ₦1,000 only per person for all individuals ages 2 years and above. Children under 2 years of age enter for free."
  },
  {
    q: "Are there group discounts available?",
    a: "Yes! We offer a 30% discount on base admission tickets for group delegations of 20 people and above. This is ideal for school excursions, religious clubs, and corporate retreats."
  },
  {
    q: "Can we bring our own food from home?",
    a: "Yes, visitors are welcome to bring their own meals and drinks. We have designated picnic tables, lawns, and relaxation gazebos throughout the reserve."
  },
  {
    q: "Is photography and filming allowed?",
    a: "Yes! Photography is permitted. If you are conducting commercial movie shoots, music video productions, or professional modeling sessions, please contact our administrative desk to book a location package."
  },
  {
    q: "Can we host private receptions and events?",
    a: "Yes, we have 10 custom event spaces, gazebos, and round halls (like Abuja Hall and Ogbemudia Hall) available for rent. Advance booking is highly recommended to secure your preferred date."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section id="faq" className="py-24 sm:py-32 section-alt border-t border-border/60 nature-texture">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-primary" /> Frequently Asked Questions
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
            Got Questions? <br />Find <em className="not-italic text-gradient-green">Answers.</em>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Everything you need to know about gate fees, opening times, photography rules, and venue hosting at Ogba Zoo.
          </p>

          {/* FAQ Search */}
          <div className="mt-8 relative max-w-md mx-auto">
            <input 
              type="text"
              placeholder="Search FAQs (e.g. food, tickets, hours)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-border rounded-full py-3.5 pl-11 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-primary/45 shadow-sm" 
                      : "border-border/60 hover:border-primary/25 hover:shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left p-5 focus:outline-none group"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors pr-4">
                      {item.q}
                    </span>
                    <div className={`p-1 rounded-lg bg-surface group-hover:bg-primary/5 text-muted-foreground group-hover:text-primary transition-all shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}>
                      <ChevronDown className="h-4.5 w-4.5 transition-transform" />
                    </div>
                  </button>
                  
                  {/* Smooth height transition wrapper */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 border-t border-border/40" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white border border-dashed border-border rounded-2xl">
              <Info className="h-8 w-8 text-muted-foreground/60 mx-auto mb-2" />
              <p className="text-sm font-semibold text-muted-foreground">No matches found for "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-2 text-xs font-bold text-primary hover:underline"
              >
                Show all questions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- GOOGLE MAP ---------------------- */
function GoogleMapSection() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5 mb-4">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Find Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground">
            Locate Our <em className="not-italic text-gradient-green">Sanctuary.</em>
          </h2>
        </div>
        
        <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm p-3">
          <div className="rounded-2xl overflow-hidden border border-border/40">
            <iframe
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8009508009377!2d5.583154714273049!3d6.289873195447613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d18b00abe6c3%3A0x51f26cd3179fcfe0!2sOgba%20Zoo%2C%20Benin%20City.!5e0!3m2!1sen!2sng!4v1619632067280!5m2!1sen!2sng"
              width="100%"
              height="450"
              allowFullScreen
              title="Ogba Zoo Location Map"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface p-5 rounded-2xl border border-border/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="text-left leading-tight text-xs sm:text-sm">
              <span className="font-bold text-foreground block">Physical Address:</span>
              <span className="text-muted-foreground">Airport Road Gate, Opposite NPDC Complex, Benin City, Edo State, Nigeria.</span>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com/?q=Ogba+Zoo+Benin+City" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline hover:text-primary/80 transition-colors shrink-0 bg-white border border-border rounded-xl px-4 py-2.5 shadow-sm active:scale-95"
          >
            Open in Google Maps <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CONTACT ---------------------- */
function ContactRouter() {
  const [intent, setIntent] = useState<"entry" | "adventure">("entry");
  
  const phone = intent === "entry" ? "+234 (0) 803 302 6283" : "0806 596 7886";
  const label = intent === "entry" 
    ? "General Admission Passes & Venue / Banquet Booking Desk" 
    : "Adventure Sports Coordinator · Paintball · Quad Biking Trails · Archery";

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-white rounded-3xl p-6 sm:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative overflow-hidden border border-border shadow-sm">
          {/* Subtle watermarked lion silhouette background */}
          <img 
            src={lionImg} 
            alt="" 
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-[0.04] hidden lg:block select-none pointer-events-none" 
            loading="lazy" 
          />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent to-white hidden lg:block pointer-events-none" />

          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" /> Contact Desk
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
              Route your enquiry, <br />speak to the right desk.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              To guarantee prompt service without waiting, Ogba Zoo maintains two distinct hotlines. Choose the department that fits your visit.
            </p>
            
            <div className="inline-flex bg-surface-2 rounded-full p-1 border border-border/60 shadow-xs">
              <button 
                onClick={() => setIntent("entry")}
                className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-300 focus:outline-none ${
                  intent === "entry" 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Entry & Venues
              </button>
              <button 
                onClick={() => setIntent("adventure")}
                className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-300 focus:outline-none ${
                  intent === "adventure" 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Attractions & Rides
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-surface border border-border p-6 sm:p-8 hover:shadow-md transition-shadow">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-black border-b border-border/60 pb-3">
                {label}
              </div>
              <a 
                href={`tel:${phone.replace(/\D/g, "")}`} 
                className="mt-6 flex items-center gap-4 group"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-white group-hover:bg-primary/95 transition-all duration-300 shrink-0 shadow-sm neon-glow">
                  <Phone className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Direct Hotline</div>
                  <div className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-gradient-green group-hover:opacity-85 transition truncate">
                    {phone}
                  </div>
                </div>
              </a>
              <div className="mt-6 text-xs text-muted-foreground flex items-center gap-2.5 border-t border-border/60 pt-5">
                <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>Benin-Airport Road, opposite NPDC Complex, Benin City.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- FOOTER ---------------------- */
function Footer() {
  const specials = [
    { icon: <Film className="h-4 w-4" />, title: "Film & Music Location", desc: "Permits for high-quality shoots in secure ancient forests." },
    { icon: <Home className="h-4 w-4" />, title: "Eco-Lodges", desc: "Overnight cabins inside secure conservation zones." },
    { icon: <Dumbbell className="h-4 w-4" />, title: "Gym Starillion", desc: "High-end fitness center & sports club inside the reserve." },
    { icon: <Search className="h-4 w-4" />, title: "Academic Research", desc: "Field work access for botany, ecology, and zoology." },
    { icon: <Waves className="h-4 w-4" />, title: "Ogba River Front", desc: "Tranquil water views along the historic Ogba riverbed." },
    { icon: <Trees className="h-4 w-4" />, title: "Botanical Arboretum", desc: "Guided study trails among rare hardwoods & plants." },
  ];

  return (
    <footer className="border-t border-border/60 bg-[#0e1612] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-xl bg-white/10 border border-white/20 p-1.5 shrink-0">
                <img
                  src="https://ogbazoo.com.ng/wp-content/uploads/2025/08/cropped-logo-lion-new-192x192.png"
                  alt="Ogba Zoo Logo"
                  className="h-11 w-11 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="font-display text-2xl font-black leading-none text-white">Ogba Zoo & Nature Park</div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-white/50 mt-1.5">Benin City · Edo State, Nigeria</div>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              Established in 1971, Ogba Zoo & Nature Park is Edo State's premier wildlife, botanical, and leisure sanctuary — conserving legacy hardwoods and regional fauna under BENZOPA's professional private management.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com/ogbazoo" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://www.youtube.com/@OgbaZooandNaturePark" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://www.instagram.com/ogbazooandnature/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-5 pb-2 border-b border-white/10">
              Additional Services & Access
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {specials.map((s) => (
                <div 
                  key={s.title} 
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-primary mb-1.5 bg-primary/10 w-8 h-8 rounded-lg items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div className="font-display font-bold text-sm text-white">{s.title}</div>
                  <div className="text-[11px] text-white/50 mt-1 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} Ogba Zoo & Nature Park (BENZOPA Partnership). All rights reserved.</div>
          <div className="flex flex-wrap gap-4 justify-center">
            {["About", "Animals", "Tickets", "Pavilions", "Attractions", "Events", "FAQ", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white/80 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
