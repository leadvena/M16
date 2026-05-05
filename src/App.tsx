/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  Droplets, 
  Thermometer, 
  Trash2, 
  ShowerHead,
  AlertTriangle,
  Star,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const SERVICES = [
  { icon: Droplets, title: 'Leak Detection', desc: 'Non-invasive acoustic & thermal imaging leaks.' },
  { icon: Wrench, title: 'Pipe Repair', desc: 'Fixing burst pipes, copper, and PVC systems.' },
  { icon: Trash2, title: 'Toilet & Sink', desc: 'Unblocking drains and fitting new sanitaryware.' },
  { icon: ShowerHead, title: 'Shower & Bath', desc: 'Repairing mixers, valves, and full installation.' },
  { icon: Thermometer, title: 'Water Heaters', desc: 'Emergency boiler and cylinder maintenance.' },
  { icon: CheckCircle2, title: 'Faucets & Taps', desc: 'Fixing drips or installing modern fixtures.' },
];

const REVIEWS = [
  { name: "John Stevens", text: "Called at 3 AM for a burst pipe. Arrived in 20 mins and fixed it perfectly. Life saver!", rating: 5 },
  { name: "Sarah Miller", text: "Professional, clean, and very reasonable pricing for an emergency call-out. Highly recommend.", rating: 5 },
  { name: "David Burke", text: "Fixed our non-stop toilet flush in no time. The electric yellow van is hard to miss!", rating: 4 },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-yellow selection:text-brand-navy overflow-x-hidden">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:hidden">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="flex gap-2"
        >
          <a 
            href="tel:01610000000" 
            className="flex-1 bg-brand-yellow text-brand-navy py-4 px-6 rounded-full font-black flex items-center justify-center gap-3 glow-yellow border-2 border-brand-yellow/20 uppercase text-sm"
            id="mobile-call-cta"
          >
            <Phone size={20} fill="currentColor" />
            CALL NOW
          </a>
          <a 
            href="#" 
            className="bg-[#25D366] text-white p-4 rounded-full glow-yellow border-2 border-white/10"
            id="mobile-whatsapp-cta"
          >
            <MessageCircle size={20} fill="currentColor" />
          </a>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy/95 backdrop-blur-md border-b border-white/10 h-[70px]' : 'bg-transparent h-[90px]'} flex items-center`}>
        <div className="max-w-7xl mx-auto w-full px-10 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-brand-yellow text-brand-navy p-1 rounded group-hover:rotate-12 transition-transform">
              <Wrench size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
              M16<span className="text-brand-yellow">PLUMBING</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em]">
            <a href="#services" className="hover:text-brand-yellow transition-colors">Services</a>
            <a href="#why-us" className="hover:text-brand-yellow transition-colors">Why Use Us</a>
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Emergency Line</p>
                <p className="text-lg font-black text-brand-yellow tracking-tight">0161 000 0000</p>
              </div>
              <a 
                href="tel:01610000000" 
                className="bg-brand-yellow text-brand-navy px-6 py-2.5 rounded-full font-black text-xs uppercase shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105 transition-transform"
                id="header-call-btn"
              >
                Call Now
              </a>
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-brand-navy pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold">Services</a>
              <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold">Why Us</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold">Reviews</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold">Contact</a>
              <div className="h-[1px] bg-white/10 my-4" />
              <div className="flex flex-col gap-3">
                <p className="text-white/50 text-sm uppercase tracking-widest">Emergency Line</p>
                <a href="tel:01610000000" className="text-3xl text-brand-yellow font-display font-extrabold">0161 000 0000</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
              alt="Modern bathroom background" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-sm animate-pulse mb-6">
                  24/7 Rapid Response Unit
                </div>
                <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tight uppercase font-black">
                  Manchester's <br />
                  <span className="text-brand-yellow">Emergency</span> <br />
                  Plumber
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                  Certified engineers on-site within 60 minutes for leaks, bursts, and heating failures in Whalley Range, Chorlton, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:01610000000" 
                    className="flex-1 bg-brand-yellow text-brand-navy h-14 rounded-xl flex items-center justify-center font-black text-lg uppercase tracking-tighter shadow-xl hover:scale-[1.02] transition-transform"
                    id="hero-call-btn"
                  >
                    Emergency Call Out
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 border-2 border-white/20 h-14 rounded-xl flex items-center justify-center font-bold text-lg uppercase gap-2 hover:bg-white/5 transition-colors"
                    id="hero-whatsapp-btn"
                  >
                    <MessageCircle size={20} className="text-white" fill="currentColor" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Ticker */}
        <div className="bg-brand-yellow py-4 overflow-hidden select-none relative z-10">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span className="text-brand-navy font-display font-bold flex items-center gap-2">
                  <AlertTriangle size={20} /> EMERGENCY CALL OUTS 24/7
                </span>
                <span className="text-brand-navy font-display font-bold flex items-center gap-2">
                  <ShieldCheck size={20} /> 1-YEAR GUARANTEE
                </span>
                <span className="text-brand-navy font-display font-bold flex items-center gap-2">
                  <MapPin size={20} /> COVERING ALL MANCHESTER
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <section id="services" className="py-24 bg-brand-navy relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">Professional Services</h2>
              <p className="text-white/50 uppercase tracking-widest text-sm font-bold">What we handle every day</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {SERVICES.map((s, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -2 }}
                  className="bg-brand-card p-4 rounded-lg flex items-center gap-4 border border-white/5 hover:border-brand-yellow/30 transition-colors group"
                >
                  <div className="text-brand-yellow group-hover:scale-110 transition-transform flex-shrink-0">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-0.5">{s.title}</h3>
                    <p className="text-[10px] text-white/40 font-bold uppercase truncate">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="py-24 border-y border-white/5 relative bg-checkered">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-xs font-black uppercase text-brand-yellow tracking-[0.3em] mb-6">Trust Indicators</h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Response Time", value: "60m" },
                    { label: "Work Guarantee", value: "1YR" },
                    { label: "Hyper Local", value: "M16" },
                    { label: "Google Score", value: "4.7" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col border-l border-brand-yellow/30 pl-4">
                      <span className="text-4xl font-black">{item.value}</span>
                      <span className="text-[10px] text-white/50 uppercase font-black tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                    alt="Professional plumber at work" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-navy p-6 rounded-2xl glow-yellow max-w-[240px]">
                  <div className="flex gap-0.5 text-brand-navy mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="italic text-sm font-black leading-tight mb-2">"Absolute life saver. Pipe burst at 3 AM. They were here in 40 minutes."</p>
                  <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">— James H., M16</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 bg-checkered">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl">What Neighbors Say</h2>
                <p className="text-white/50 flex items-center gap-2 mt-2">
                  <Star className="text-brand-yellow" size={16} fill="currentColor" /> 
                  4.7 Average based on 13 verified reviews
                </p>
              </div>
              <a href="#" className="flex items-center gap-2 group text-brand-yellow font-bold uppercase tracking-widest text-sm">
                View all on Google <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map((r, i) => (
                <div key={i} className="bg-brand-navy border border-white/10 p-8 rounded-3xl relative">
                  <div className="flex gap-1 mb-4 text-brand-yellow">
                    {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic mb-6 text-white/80">"{r.text}"</p>
                  <p className="font-bold text-brand-yellow">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 bg-brand-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-brand-yellow rounded-[40px] overflow-hidden grid lg:grid-cols-5 shadow-2xl">
              <div className="lg:col-span-2 bg-brand-navy p-12 text-white border-r border-white/5">
                <h2 className="text-4xl mb-8">Get a Fast Quote</h2>
                <p className="text-white/50 mb-10 leading-relaxed">Fill out the form for non-emergencies. For burst pipes or immediate disasters, please call us directly for a faster response.</p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-yellow">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Emergency Call</p>
                      <a href="tel:01610000000" className="text-xl font-display font-extrabold">0161 000 0000</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-yellow">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                      <a href="#" className="text-xl font-display font-extrabold">Send a Message</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-yellow">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Service Area</p>
                      <p className="text-xl font-display font-extrabold">M16, Manchester, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white p-12">
                <form className="space-y-6" id="quote-request-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-brand-navy font-bold text-xs uppercase tracking-widest" htmlFor="name">Full Name</label>
                      <input type="text" id="name" className="w-full bg-gray-50 border-0 p-4 rounded-xl text-brand-navy focus:ring-2 focus:ring-brand-yellow" placeholder="e.g. John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-brand-navy font-bold text-xs uppercase tracking-widest" htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" className="w-full bg-gray-50 border-0 p-4 rounded-xl text-brand-navy focus:ring-2 focus:ring-brand-yellow" placeholder="07123 456 789" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-brand-navy font-bold text-xs uppercase tracking-widest" htmlFor="service">Service Needed</label>
                    <select id="service" className="w-full bg-gray-50 border-0 p-4 rounded-xl text-brand-navy focus:ring-2 focus:ring-brand-yellow">
                      <option>Emergency Repair</option>
                      <option>Blocked Drain/Toilet</option>
                      <option>Boiler/Water Heater</option>
                      <option>Taps & Fixtures</option>
                      <option>General Maintenance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-brand-navy font-bold text-xs uppercase tracking-widest" htmlFor="message">Message Details</label>
                    <textarea id="message" rows={4} className="w-full bg-gray-50 border-0 p-4 rounded-xl text-brand-navy focus:ring-2 focus:ring-brand-yellow" placeholder="Briefly describe the issue..."></textarea>
                  </div>
                  <button className="w-full bg-brand-navy text-white font-display font-extrabold py-5 rounded-2xl hover:bg-opacity-90 transition-all uppercase tracking-widest shadow-lg">
                    Send Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-yellow p-1 rounded">
                  <Wrench className="text-brand-navy" size={20} />
                </div>
                <span className="text-xl font-black uppercase whitespace-nowrap">
                  M16<span className="text-brand-yellow">PLUMBING</span>
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 truncate max-w-sm">
                44 Wilbraham Rd, Manchester M16 7PR • Reg VAT# 882910
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 text-[10px] uppercase font-bold tracking-widest">
              <div className="flex flex-col">
                <span className="text-white/30 mb-1">Availability</span>
                <span className="text-brand-yellow">24/7/365 OPEN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 mb-1">Direct Dial</span>
                <span className="text-white">0161 000 0000</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
            <p>© 2026 M16 PLUMBING SERVICES LTD</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
