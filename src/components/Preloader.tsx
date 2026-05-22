/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Sparkles, Binary, Cpu, Compass } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Academic Core...");
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    // Dynamic loading text sequential phases showing the actual curriculum disciplines
    const intervals = [
      { threshold: 18, text: "Configuring V–XII CBSE / ICSE School Foundation Modules..." },
      { threshold: 42, text: "Integrating IIT-JEE Mains & Advanced Strategic Mathematics..." },
      { threshold: 62, text: "Compiling Jadavpur Target WBJEE Physics Algorithms..." },
      { threshold: 82, text: "Loading NEET Medical NCERT Biology & Chemistry Modules..." },
      { threshold: 95, text: "Syncing Advanced Robotics, AI Coding, & Languages Hub..." },
      { threshold: 100, text: "Curriculum Synchronized. Welcome to MindGrowth Academy." },
    ];

    const startTime = Date.now();
    const duration = 1250; // Super fast 1.25s load speed for excellent user experience

    const updateTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calcProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(calcProgress);

      const currentStage = intervals.find(stage => calcProgress <= stage.threshold);
      if (currentStage) {
        setLoadingText(currentStage.text);
      }

      if (elapsed >= duration) {
        clearInterval(updateTimer);
        setTimeout(() => {
          setShouldExit(true);
        }, 150);
      }
    }, 16);

    return () => clearInterval(updateTimer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!shouldExit && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            filter: "blur(8px)",
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#03040b] select-none text-slate-100 overflow-hidden"
        >
          {/* Top-down neon lighting grid ornament */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          
          {/* Pulsing orbital rings background - No Logo, purely ambient geometry */}
          <div className="absolute w-[360px] h-[360px] border border-cyan-500/5 rounded-full animate-pulse blur-[1px] pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] border border-purple-500/5 rounded-full animate-ping pointer-events-none" style={{ animationDuration: "4s" }} />

          {/* Central content node */}
          <div className="relative text-center max-w-md px-6 z-10 flex flex-col items-center">
            
            {/* Elegant minimalist pulse radar circle representing synchronization, replacing the logo */}
            <div className="relative mb-6 w-16 h-16 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.8, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute inset-2 border border-purple-500/30 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              />
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-pulse" />
            </div>

            {/* Styled Logo Title */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <h1 className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase">
                MIND<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">GROWTH</span>
              </h1>
              <div className="flex items-center justify-center gap-1.5 text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                <span>Vanguard Education</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Kolkata</span>
              </div>
            </motion.div>

            {/* Glowing progress line */}
            <div className="w-72 h-1 bg-slate-950 rounded-full overflow-hidden mb-4 border border-slate-900 shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Progress Count Telemetry */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-cyan-400 font-black">{progress}%</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">Analyzed</span>
            </div>

            {/* Dynamic Loading Text displaying specific class groups */}
            <div className="h-8 flex items-center justify-center overflow-hidden max-w-sm">
              <motion.p 
                key={loadingText}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-[10px] sm:text-[11px] font-mono text-slate-300 font-medium uppercase tracking-wider text-center leading-normal"
              >
                {loadingText}
              </motion.p>
            </div>

            {/* Minimalist systems checks indicator */}
            <div className="mt-8 flex gap-4 text-slate-700 font-mono text-[8px] uppercase tracking-widest">
              <div className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-slate-600 animate-pulse" />
                <span>Diagnostics</span>
              </div>
              <div className="flex items-center gap-1">
                <Binary className="w-3 h-3 text-slate-600 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span>Curriculum Array</span>
              </div>
            </div>

          </div>

          {/* Subtle background grid details */}
          <div className="absolute inset-0 bg-[radial-gradient(#080b21_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

          {/* Floating metadata identifiers */}
          <div className="absolute bottom-4 left-6 font-mono text-[8px] text-slate-600 uppercase tracking-wider hidden sm:block">
            <span>READY // CALIBRATED_COURSES_V1.1</span>
          </div>

          <div className="absolute bottom-4 right-6 font-mono text-[8px] text-slate-600 uppercase tracking-wider hidden sm:block">
            <span>© ESTD 2018 // CLASSROOM_CORE_ENG</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
