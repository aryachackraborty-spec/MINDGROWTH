/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Rocket, GraduationCap, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_NAME } from "../data";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolled state to add heavier backdrop blur or border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Courses & Facilities", key: "courses" },
    { label: "Reviews", key: "testimonials" },
    { label: "Branches", key: "branches" },
    { label: "Contact Us", key: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glassmorphic-navbar py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-cyan-500/10"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div
              onClick={() => {
                setCurrentPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-105">
                <GraduationCap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200 uppercase">
                  MIND<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">GROWTH</span>
                </span>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400 tracking-widest uppercase">
                  <span>Academy</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Kolkata</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-slate-800/80 px-2 py-1 rounded-full backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = currentPage === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setCurrentPage(item.key);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 ${
                      isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navGlowIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Helpline & Quick Connect CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="mailto:academymindgrowth@gmail.com"
                className="text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                academymindgrowth@gmail.com
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentPage("contact");
                  setTimeout(() => {
                    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-slate-950 text-xs font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all glow-btn cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Enroll Today
              </motion.button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex md:hidden items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentPage("contact");
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold"
              >
                Enroll
              </motion.button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-slate-950/95 border-b border-cyan-500/20 py-6 px-4 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setCurrentPage(item.key);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-left text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-[inset_0_0_8px_rgba(0,240,255,0.15)]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="h-px bg-slate-900 my-2" />
              
              <div className="px-4 py-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">Central Support</span>
                <a 
                  href="tel:+919830224455" 
                  className="text-sm font-bold text-cyan-400 flex items-center gap-2 mb-1"
                >
                  <Phone className="w-4 h-4" />
                  +91 98302 24455
                </a>
                <span className="text-xs text-slate-400 block font-mono">academymindgrowth@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
