'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [{ label: 'Work', href: '#work' }, { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10' : 'bg-transparent'}`}>
    <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
      <a href="#home" className="group flex items-center gap-3" aria-label="Abisekha home"><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-400/40 bg-rose-500/10 text-sm font-bold text-rose-200 shadow-glow">A<span className="text-rose-500">.</span></span><span className="text-sm font-semibold tracking-wide">ABISEKHA<span className="ml-1 text-white/40">/ PORTFOLIO</span></span></a>
      <div className="hidden items-center gap-8 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="text-sm text-white/60 transition hover:text-white">{link.label}</a>)}<a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-rose-100">Let’s talk <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></div>
      <button className="rounded-lg border border-white/10 p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    {open && <div className="glass flex flex-col gap-5 border-t border-white/10 px-6 py-6 md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-white/80">{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="text-sm font-semibold text-rose-300">Let’s talk ↗</a></div>}
  </header>;
}
