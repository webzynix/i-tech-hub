import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cpu, Laptop, Monitor, Camera, Printer, Fingerprint, Sun, Wifi,
  ShoppingBag, RefreshCw, Video, Apple, HardDrive, ShieldCheck, Network, Wrench,
  MapPin, Phone, Mail, Clock, Menu, X, MessageCircle, Facebook, Instagram,
  CheckCircle2, BadgeCheck, Sparkles, Send,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Monitor, name: "Computer Service", desc: "Diagnostics, repair & tune-ups for desktops." },
  { icon: Laptop, name: "Laptop Service", desc: "Screen, keyboard, battery & motherboard repair." },
  { icon: Camera, name: "CCTV Camera Install & Service", desc: "Home & office surveillance setup and repair." },
  { icon: Printer, name: "Printer Service", desc: "Inkjet, laser & all-in-one printer fixes." },
  { icon: Fingerprint, name: "Biometric Installation", desc: "Attendance & access control systems." },
  { icon: Sun, name: "Solar Camera Installation", desc: "Off-grid solar-powered surveillance." },
  { icon: Wifi, name: "Network Issue Resolution", desc: "Speed, drop & connectivity troubleshooting." },
  { icon: ShoppingBag, name: "Used Laptop & Desktop Sales", desc: "Tested pre-owned devices with warranty." },
  { icon: Cpu, name: "New Laptop & Desktop Sales", desc: "Latest brand-new machines at best prices." },
  { icon: RefreshCw, name: "Old Device Buyback", desc: "Sell your old laptop or desktop instantly." },
  { icon: Video, name: "CCTV Camera Sales", desc: "HD, IP & dome cameras from top brands." },
  { icon: Apple, name: "MacBook Service", desc: "Specialist Apple MacBook diagnostics & repair." },
  { icon: HardDrive, name: "Data Recovery", desc: "Recover files from crashed drives & SSDs." },
  { icon: ShieldCheck, name: "AMC Contracts", desc: "Annual maintenance for laptops & desktops." },
  { icon: Network, name: "Network Setup", desc: "LAN, Wi-Fi & enterprise network design." },
  { icon: Wrench, name: "All IT Hardware Solutions", desc: "End-to-end IT hardware support." },
];

const stats = [
  { v: "7+", l: "Years Experience" },
  { v: "500+", l: "Happy Customers" },
  { v: "Same Day", l: "Service Turnaround" },
  { v: "7 Days", l: "Open All Week" },
];

const features = [
  { icon: BadgeCheck, t: "Certified Technicians", d: "Trained experts who know every model inside out." },
  { icon: Sparkles, t: "Genuine Spare Parts", d: "Only authentic parts with warranty assurance." },
  { icon: CheckCircle2, t: "Transparent Pricing", d: "No hidden fees. You approve before we begin." },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { h: "#home", l: "Home" },
    { h: "#services", l: "Services" },
    { h: "#why", l: "Why Us" },
    { h: "#products", l: "Products" },
    { h: "#contact", l: "Contact" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan/10 ring-1 ring-cyan/40">
            <Cpu className="h-5 w-5 text-cyan" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            iCare <span className="text-cyan">Technologies</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((n) => (
            <a key={n.h} href={n.h} className="text-sm text-muted-foreground transition-colors hover:text-cyan">
              {n.l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_var(--cyan-glow)] md:inline-flex"
        >
          Book a Service
        </a>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="glass border-t border-border md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((n) => (
              <a key={n.h} href={n.h} onClick={() => setOpen(false)} className="py-3 text-sm">
                {n.l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-cyan px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Book a Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="circuit-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs text-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> Open today · 9 AM – 10 PM
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Your Trusted <span className="text-gradient">IT Partner</span> in Bengaluru
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Expert laptop repairs, CCTV installations, network solutions & more — all under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_-6px_var(--cyan-glow)]">
              Our Services
            </a>
            <a href="tel:+918553268366" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cyan/60 hover:text-cyan">
              <Phone className="h-4 w-4" /> Call Now: 8553268366
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-10 -z-10 rounded-full bg-cyan/20 blur-3xl" />
          <div className="animate-float relative mx-auto max-w-md">
            <div className="rounded-2xl border border-cyan/30 bg-gradient-to-br from-surface to-midnight p-6 glow-cyan">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
              </div>
              <div className="mt-5 flex items-center justify-center">
                <Laptop className="h-32 w-32 text-cyan" strokeWidth={1.2} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg border border-border bg-midnight/60 p-3">
                  <Cpu className="mb-1 h-4 w-4 text-cyan" />
                  <span className="text-muted-foreground">Diagnose</span>
                </div>
                <div className="rounded-lg border border-border bg-midnight/60 p-3">
                  <Wrench className="mb-1 h-4 w-4 text-cyan" />
                  <span className="text-muted-foreground">Repair</span>
                </div>
                <div className="rounded-lg border border-border bg-midnight/60 p-3">
                  <ShieldCheck className="mb-1 h-4 w-4 text-cyan" />
                  <span className="text-muted-foreground">Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">What We Fix & Install</h2>
          <p className="mt-4 text-muted-foreground">From laptop repairs to full network deployments — we handle it all.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="reveal card-hover group rounded-2xl border border-border bg-card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 ring-1 ring-cyan/30 transition-colors group-hover:bg-cyan/20">
                  <Icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Why iCare?</h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="reveal rounded-2xl border border-border bg-gradient-to-br from-surface to-midnight p-6 text-center">
              <div className="font-display text-3xl font-bold text-cyan md:text-4xl">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="reveal card-hover rounded-2xl border border-border bg-card p-7">
                <Icon className="h-8 w-8 text-cyan" />
                <h3 className="mt-4 font-display text-xl font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const items = [
    { t: "Buy New", d: "Brand-new laptops & desktops from top manufacturers, configured to your needs.", icon: Sparkles },
    { t: "Buy Used", d: "Quality pre-owned devices, fully tested, refurbished and backed by warranty.", icon: ShoppingBag },
    { t: "Sell Your Old Device", d: "Get the best buyback price for your old laptop or desktop today.", icon: RefreshCw },
  ];
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Products</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Laptops & Desktops — Buy, Sell, Exchange</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="reveal card-hover flex flex-col rounded-2xl border border-border bg-card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 ring-1 ring-cyan/30">
                  <Icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{p.t}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.d}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline">
                  Enquire Now <span aria-hidden>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Visit Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Find Us Here</h2>
        </div>
        <div className="reveal mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-1">
            <h3 className="font-display text-xl font-semibold">iCare Technologies</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-cyan" /><span>SEK Building, 1st Floor, Opp Mayura Bakery, Channasandra, Bengaluru, Karnataka 560067</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-cyan" /><a href="tel:+918553268366" className="hover:text-cyan">+91 8553268366</a></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-cyan" /><a href="mailto:hello@icarelaptop.com" className="hover:text-cyan">hello@icarelaptop.com</a></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-cyan" /><span>Every day · 9:00 AM – 10:00 PM</span></li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-cyan/40 glow-cyan lg:col-span-2">
            <iframe
              title="iCare Technologies Location"
              src="https://www.google.com/maps?q=SEK+Building,+1st+Floor,+Opp+Mayura+Bakery,+Channasandra,+Bengaluru,+Karnataka+560067&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">Have a device that needs attention? Reach out — we usually reply within minutes.</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { i: MapPin, t: "Address", v: "SEK Building, 1st Floor, Opp Mayura Bakery, Channasandra, Bengaluru 560067" },
              { i: Phone, t: "Phone", v: "+91 8553268366", href: "tel:+918553268366" },
              { i: Mail, t: "Email", v: "hello@icarelaptop.com", href: "mailto:hello@icarelaptop.com" },
              { i: Clock, t: "Hours", v: "Every day · 9:00 AM – 10:00 PM" },
            ].map((c, i) => {
              const Icon = c.i;
              const Inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-cyan/50">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan/10 ring-1 ring-cyan/30">
                    <Icon className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="mt-1 text-sm font-medium">{c.v}</div>
                  </div>
                </div>
              );
              return (
                <div key={i} className="reveal">
                  {c.href ? <a href={c.href}>{Inner}</a> : Inner}
                </div>
              );
            })}
          </div>

          <form
            className="reveal rounded-2xl border border-border bg-card p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div className="sm:col-span-2"><Field label="Email" name="email" type="email" required /></div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Service Needed</label>
                <select required className="w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/30">
                  <option value="">Select a service…</option>
                  {services.map((s) => <option key={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/30" placeholder="Describe the issue or request…" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_-6px_var(--cyan-glow)] sm:w-auto">
              <Send className="h-4 w-4" /> {sent ? "Message Sent!" : "Send Message"}
            </button>
            {sent && <p className="mt-3 text-sm text-cyan">Thanks! We'll be in touch shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/30" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-midnight">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan/10 ring-1 ring-cyan/40">
                <Cpu className="h-5 w-5 text-cyan" />
              </div>
              <span className="font-display text-lg font-bold">iCare <span className="text-cyan">Technologies</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Your Local IT Experts — laptop service, sales & complete IT solutions in Bengaluru.</p>
            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-cyan hover:text-cyan"><Facebook className="h-4 w-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-cyan hover:text-cyan"><Instagram className="h-4 w-4" /></a>
              <a href="https://wa.me/918553268366" target="_blank" rel="noopener" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-cyan hover:text-cyan"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-cyan">Home</a></li>
              <li><a href="#services" className="hover:text-cyan">Services</a></li>
              <li><a href="#why" className="hover:text-cyan">Why Us</a></li>
              <li><a href="#products" className="hover:text-cyan">Products</a></li>
              <li><a href="#contact" className="hover:text-cyan">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Reach Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>SEK Building, 1st Floor,<br />Opp Mayura Bakery, Channasandra,<br />Bengaluru 560067</li>
              <li><a href="tel:+918553268366" className="hover:text-cyan">+91 8553268366</a></li>
              <li><a href="mailto:hello@icarelaptop.com" className="hover:text-cyan">hello@icarelaptop.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2025 iCare Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918553268366?text=Hi%2C%20I%20need%20help%20with%20my%20device"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Products />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
