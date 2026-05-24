/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  GraduationCap 
} from "lucide-react";

export default function ContactPage() {
  const [studentName, setStudentName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentClass, setStudentClass] = useState("V-VIII (Foundation)");
  const [course, setCourse] = useState("Classes V–XII Foundation");
  const [branch, setBranch] = useState("Naktala Branch (Opp. Bazaar Kolkata)");
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !phone) return;

    // Trigger visual celebration indicator
    setShowCelebration(true);

    // Format a beautiful pre-filled whatsapp message context
    const waText = `Hi MindGrowth Academy! 👋
I would like to book a Free Demo Classroom query:

👨‍🎓 Student Name: ${studentName}
👨‍👩‍👦 Parent Name: ${parentName || "Not Provided"}
📞 Phone Number: ${phone}
🎓 Class: ${studentClass}
📚 Course: ${course}
📍 Branch Preferred: ${branch}

Please contact us with class timings. Thank you!`;

    // Encode text properly
    const encodedText = encodeURIComponent(waText);
    
    // Create WhatsApp Redirect Link (Default central customer service line)
    const baseNumber = "918051680816"; // Naktala/Sonarpur central support helpline
    const whatsappUrl = `https://wa.me/${baseNumber}?text=${encodedText}`;

    // Redirect to WhatsApp after brief modal presentation
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1800);
  };

  return (
    <div id="lead-form" className="pt-24 min-h-screen bg-slate-950/20 text-slate-100 relative">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase tracking-widest border border-cyan-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open Session 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
          >
            REGISTER & BOOK A <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">FREE DEMO CLASS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-slate-400 font-sans"
          >
            Fill out the official inquiry registry below. Your submission instantly triggers 
            a pre-filled WhatsApp booking slip and notifies our Kolkata branch administrators immediately.
          </motion.p>
        </div>

        {/* Contact info bento grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Quick Helpline references block */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden flex-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-6">Central Admissions Matrix</span>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Helpline Calling Direct</h4>
                    
                    <div className="pb-2 border-b border-slate-900/40">
                      <p className="text-sm font-black text-slate-200 mt-0.5 hover:text-cyan-400 transition-colors">
                        <a href="tel:+918009900981">+91 80099 00981</a>
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Sonarpur Branch (Head Office)</p>
                    </div>

                    <div className="pb-2 border-b border-slate-900/40">
                      <p className="text-sm font-black text-slate-200 mt-0.5 hover:text-cyan-400 transition-colors">
                        <a href="tel:+918051680816">+91 80516 80816</a>
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Naktala Branch Campus</p>
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-200 mt-0.5 hover:text-cyan-400 transition-colors">
                        <a href="tel:+919073979837">+91 90739 79837</a>
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Canning Branch Campus</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">E-Mail Address</h4>
                    <p className="text-xs font-sans text-slate-300 mt-1 hover:text-cyan-400 transition-colors">
                      <a href="mailto:academymindgrowth@gmail.com">academymindgrowth@gmail.com</a>
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">Response Time: Under 2 Hours</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Active Campus Hours</h4>
                    <p className="text-xs text-slate-300 mt-1 font-sans">
                      Monday – Saturday: 11:30 AM – 8:30 PM
                    </p>
                    <p className="text-xs text-slate-300 font-sans">
                      Sunday batches: 8:00 AM – 3:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quick WhatsApp click banner */}
            <div className="bg-gradient-to-tr from-emerald-900/30 to-slate-950 p-6 rounded-2xl border border-emerald-500/20 text-center flex flex-col items-center justify-center p-6 text-center">
              <MessageSquare className="w-10 h-10 text-emerald-400 mb-3 animate-pulse" />
              <h3 className="text-sm font-bold text-white uppercase mb-1">Direct Counsel Desk</h3>
              <p className="text-[11px] text-slate-400 font-sans max-w-xs leading-relaxed mb-4">
                Skip form registrations entirely. Connect live with our central counselors via custom support.
              </p>
              <a
                href="https://wa.me/918051680816?text=Hi%20MindGrowth%20Academy!%20I%20want%20to%20know%20more%20about%20your%20coaching%2520programs%2520in%2520Kolkata."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-emerald-500 text-slate-950 text-xs font-black tracking-wider rounded-xl uppercase hover:bg-emerald-400 duration-200 block"
              >
                ⚡ WhatsApp Counsel Now
              </a>
            </div>
          </div>

          {/* Lead Registration Form panel */}
          <div className="lg:col-span-8 rounded-2xl glass-card p-6 md:p-8 relative overflow-hidden">
            
            {/* Modal Celebration Overlay */}
            <AnimatePresence>
              {showCelebration && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-30 flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 15 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  >
                    <CheckCircle2 className="w-8 h-8 text-cyan-400 animate-ping" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-black uppercase text-white tracking-wider mb-2">Registration Compiled!</h3>
                  <p className="text-xs text-slate-400 font-sans max-w-md leading-relaxed mb-6">
                    Meticulously generating your customized inquiry ticket details. 
                    Redirecting you safely to WhatsApp now to complete scheduling with the administrators.
                  </p>
                  
                  <div className="w-24 h-1 bg-slate-900 rounded-full overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-cyan-400 w-full animate-pulse origin-left" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-6">Classroom Demo Registration Portal</span>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Priyanjali Sen"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 font-sans"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Debasish Sen"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">Contact Phone Number * (WhatsApp Enabled)</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9830X XXXXX"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-slate-600 font-sans font-bold"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">Student Class *</label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-slate-350 focus:outline-none cursor-pointer"
                  >
                    <option value="Class V-VIII (Fundamentals)">Class V-VIII Foundation</option>
                    <option value="Class IX-X Board Prep">Class IX-X Core Prep</option>
                    <option value="Class XI Board + Foundation">Class XI Board + Foundations</option>
                    <option value="Class XII Board Sprint">Class XII Board Sprint</option>
                    <option value="Dropper Core Prep Batch">Dropper Specialty Batch</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">Course Intended *</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-slate-350 focus:outline-none cursor-pointer"
                  >
                    <option value="Classes V–XII Foundation (ALL SUBJECTS)">Classes V–XII (All Subjects)</option>
                    <option value="IIT-JEE MAINS Preparation">IIT-JEE MAINS Preparation</option>
                    <option value="IIT-JEE ADVANCED Preparation">IIT-JEE ADVANCED Preparation</option>
                    <option value="WBJEE Preparation Target">WBJEE Preparation Target</option>
                    <option value="NEET Preparation Target">NEET Medical Target</option>
                    <option value="Spoken English Program">Spoken English & Communication</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">Preferred Branch Location *</label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-slate-350 focus:outline-none cursor-pointer"
                  >
                    <option value="Naktala Branch (Opp. Bazaar Kolkata)">Naktala (Opp. Bazaar Kolkata)</option>
                    <option value="Sonarpur Branch (Sonarpur Bazar, 2nd Floor)">Sonarpur (Sonarpur Bazar)</option>
                    <option value="Canning Branch (Asha Complex, Sanjay Pally)">Canning (Opp. Bandhumahul Club)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-black text-xs uppercase rounded-xl tracking-wider select-none hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:opacity-90 duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Slip & Redirect to WhatsApp</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
