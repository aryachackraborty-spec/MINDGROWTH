/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState, useEffect } from "react";

interface GlowStar {
  id: number;
  size: number;
  x: number; // percentage
  y: number; // percentage
  color: string;
  delay: number; // seconds
  duration: number; // seconds
  type: "up" | "down" | "drift";
}

export default function ScienceEngine() {
  const [clickCount, setClickCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  // Generate lightweight background science/math floating elements
  const scientificFormulas = useMemo(() => [
    { label: "E = mc²", x: 15, y: 25, delay: 0 },
    { label: "H₂O", x: 80, y: 15, delay: -4 },
    { label: "ΔH < 0", x: 75, y: 70, delay: -8 },
    { label: "F = ma", x: 20, y: 65, delay: -12 },
    { label: "CO₂", x: 45, y: 80, delay: -16 },
    { label: "Planck's h", x: 85, y: 45, delay: -20 },
  ], []);

  // Generate a premium stable set of stars to avoid re-calculating on frame renders
  const starsArray: GlowStar[] = useMemo(() => {
    const arr: GlowStar[] = [];
    const colors = ["bg-cyan-400", "bg-purple-500", "bg-pink-500", "bg-emerald-400"];
    const types: Array<"up" | "down" | "drift"> = ["up", "down", "drift"];

    for (let i = 0; i < 35; i++) {
      arr.push({
        id: i,
        size: Math.random() * 3 + 1.2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * -30,
        duration: Math.random() * 20 + 20, // slow speed: 20s to 40s
        type: types[i % types.length],
      });
    }
    return arr;
  }, []);

  // Soft cursor position tracker for subtle ambient glow follow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleScreenTap = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div 
      onClick={handleScreenTap}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none bg-slate-950"
    >
      {/* 1. Self-Contained High-Performance CSS Keyframes for GPU acceleration */}
      <style>{`
        @keyframes driftGlow {
          0%, 100% {
            transform: translate3d(0px, 0px, 0px) scale(1);
          }
          33% {
            transform: translate3d(40px, -40px, 0px) scale(1.15);
          }
          66% {
            transform: translate3d(-30px, 30px, 0px) scale(0.9);
          }
        }

        @keyframes driftGlowSlow {
          0%, 100% {
            transform: translate3d(0px, 0px, 0px) scale(1.1);
          }
          50% {
            transform: translate3d(-50px, 50px, 0px) scale(0.95);
          }
        }

        @keyframes starFloatUp {
          0% {
            transform: translate3d(0, 110vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translate3d(30px, -10vh, 0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes starFloatDown {
          0% {
            transform: translate3d(0, -10vh, 0);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translate3d(-30px, 110vh, 0);
            opacity: 0;
          }
        }

        @keyframes starFloatingDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate3d(25px, -25px, 0);
            opacity: 0.7;
          }
        }

        @keyframes formulaDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.15;
          }
          50% {
            transform: translate3d(-15px, 15px, 0);
            opacity: 0.35;
          }
        }

        @keyframes gridScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }

        .animate-drift-glow-1 {
          animation: driftGlow 25s infinite ease-in-out;
        }

        .animate-drift-glow-2 {
          animation: driftGlowSlow 30s infinite ease-in-out;
        }

        .ambient-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.05) 1.5px, transparent 0);
          background-size: 30px 30px;
          animation: gridScroll 120s linear infinite;
        }
      `}</style>

      {/* 2. Slow moving Dot Matrix Grid background overlay */}
      <div className="absolute inset-0 ambient-grid opacity-80 pointer-events-none" />

      {/* 3. High-Quality Radial Atmosphere Lights */}
      {/* Cyan Light Glow */}
      <div 
        className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-drift-glow-1" 
      />
      {/* Violet Light Glow */}
      <div 
        className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-drift-glow-2" 
        style={{ animationDelay: "-8s" }}
      />
      {/* Deep Rose accent glow */}
      <div 
        className="absolute top-[40%] left-[30%] w-[35%] h-[35%] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none animate-drift-glow-2" 
        style={{ animationDelay: "-15s" }}
      />

      {/* 4. Smooth GPU Particle System (Floating Elements) */}
      <div className="absolute inset-0 pointer-events-none">
        {starsArray.map((star) => {
          let animationName = "starFloatUp";
          if (star.type === "down") animationName = "starFloatDown";
          if (star.type === "drift") animationName = "starFloatingDrift";

          return (
            <div
              key={star.id}
              className={`absolute rounded-full pointer-events-none ${star.color} shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
              style={{
                left: `${star.x}%`,
                top: star.type === "drift" ? `${star.y}%` : "0%",
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `${animationName} ${star.duration}s infinite linear`,
                animationDelay: `${star.delay}s`,
                opacity: 0,
              }}
            />
          );
        })}
      </div>

      {/* 5. Floating Mathematical Constellations & Formulas */}
      <div className="absolute inset-0 pointer-events-none">
        {scientificFormulas.map((formula, idx) => (
          <div
            key={idx}
            className="absolute font-mono text-[9px] font-medium tracking-widest text-[#22d3ee]/20 select-none hidden sm:block p-1"
            style={{
              left: `${formula.x}%`,
              top: `${formula.y}%`,
              animation: `formulaDrift 16s infinite ease-in-out`,
              animationDelay: `${formula.delay}s`,
            }}
          >
            {formula.label}
          </div>
        ))}
      </div>

      {/* 6. Mouse spotlight reactive accent glow (fully smooth state based) */}
      <div
        className="absolute w-[240px] h-[240px] rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none transition-all duration-700 ease-out translate-x-[-50%] translate-y-[-50%]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Premium Micro Indicator */}
      <div className="absolute bottom-6 right-6 text-[9px] font-mono uppercase tracking-widest text-cyan-400/40 pointer-events-auto bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-lg">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping mr-2" />
        Cosmic Engine: Active ({clickCount})
      </div>
    </div>
  );
}
