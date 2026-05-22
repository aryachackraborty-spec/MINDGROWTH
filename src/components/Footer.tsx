/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, MapPin, Mail, Phone, ArrowUp, Star } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900/80 pt-16 pb-8 text-slate-400 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-[-100px] left-1/3 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Core segment */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setCurrentPage("home")}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white uppercase">
                  MIND<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">GROWTH</span>
                </span>
                <p className="text-[8px] font-bold text-slate-400 tracking-widest uppercase">Academy - Kolkata</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Providing futuristic smart classrooms, OMR evaluation testing layers, and Computer Based testing simulations for 
              School Board exams, IIT-JEE, and NEET aspirants across West Bengal.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 text-cyan-400 rounded-full border border-slate-800 text-[10px] font-mono uppercase">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
              Smart Learning Ecosystem
            </div>
          </div>

          {/* Quick links directory */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => { setCurrentPage("home"); scrollUp(); }} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Home Experience
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage("about"); scrollUp(); }} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Academic Mission & Vision
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage("courses"); scrollUp(); }} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Courses & Syllabus Catalog
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage("testimonials"); scrollUp(); }} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Student Vouch Reviews
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage("branches"); scrollUp(); }} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Kolkata Branch Campuses
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage("contact"); scrollUp(); }} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Demo Class Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Core branches short coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Branch Access Ports</h4>
            <div className="space-y-3.5 text-xs text-slate-450 font-sans">
              
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900/40 relative">
                <span className="text-[9px] font-mono text-cyan-400 block mb-1">📍 Naktala H.Q. Desk</span>
                <p className="leading-relaxed text-[11px]">Shyama Apartment, 3rd Floor, 2/91B, Naktala, Kolkata – 700047 (Opp. Bazaar Kolkata)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900/40 relative">
                <span className="text-[9px] font-mono text-purple-400 block mb-1">📍 Sonarpur Campus</span>
                <p className="leading-relaxed text-[11px]">82, Neel Pushpa Complex, 2nd Floor, Sonarpur Bazar, Kolkata – 700150</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900/40 relative">
                <span className="text-[9px] font-mono text-emerald-400 block mb-1">📍 Canning Campus</span>
                <p className="leading-relaxed text-[11px]">Asha Complex, Sanjay Pally (Opp. Bandhumahul Club), Canning</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright and up shortcut */}
        <div className="pt-8 mt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} MindGrowth Academy. Kolkata, WB. All rights preserved.
          </p>

          <p className="text-[10px] text-slate-500 font-sans sm:text-right">
            Discipline • Academic Excellence • Future Ready Scholars
          </p>

          <button
            onClick={scrollUp}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-705 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Scroll up to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
