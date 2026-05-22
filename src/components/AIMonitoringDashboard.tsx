/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  LineChart, 
  Cpu, 
  User, 
  TrendingUp, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  RefreshCw,
  Clock,
  MessageSquareCode,
  ArrowRightLeft
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AIMonitoringDashboardProps {
  onClose?: () => void;
}

interface StudentSession {
  name: string;
  role: string;
  avatar: string;
  target: string;
  focusIndex: number;
  recallIndex: number;
  masteryIndex: number;
  weakChapter: string;
  scores: number[];
  recs: string[];
  logs: string[];
}

const mockStudents: Record<string, StudentSession> = {
  jee: {
    name: "Aniket Sen",
    role: "IIT-JEE Advanced Class",
    target: "Target Ranks: <500 IIT JEE",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
    focusIndex: 94.8,
    recallIndex: 91.2,
    masteryIndex: 88.5,
    weakChapter: "Rotational Mechanics & Optics",
    scores: [68, 72, 75, 84, 89, 94],
    recs: [
      "Improve torque rotational inertia integrations by solving multi-concept Irodov problems.",
      "Detected high time consumption on wave-optics interference nodes. Shifting custom question levels to basic formula derivations.",
      "Remedial recommendation: Schedule a 30-min doubt-clearing sync on central momentum collisions.",
      "Send progress metrics alert to Siddharth Sen (Father) via WhatsApp."
    ],
    logs: [
      "10:42:01 AM - Active focus index computed via smart classroom feed: 95.2%",
      "11:15:30 AM - Mock-CBT JEE test evaluation completed with 84/100 correct answers.",
      "11:15:35 AM - Matrix Analysis identifies a weakness in Rotational Mechanics vectors. Auto-generating customized algebra exercises.",
      "01:30:15 PM - Student completed remedial revision cycle on angular acceleration."
    ]
  },
  neet: {
    name: "Rimpa Pramanik",
    role: "NEET Medical Dedicated",
    target: "Target Score: 680+ Medical UG",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    focusIndex: 96.2,
    recallIndex: 94.5,
    masteryIndex: 91.0,
    weakChapter: "Genetics, Plant Kingdom & Translation",
    scores: [70, 78, 81, 85, 92, 95],
    recs: [
      "Detected conceptual gap in Molecular Genetics DNA replication enzymes sequence ladder.",
      "Improve plant anatomy terminology recall utilizing mnemonic cards.",
      "Remedial recommendation: Watch 3D anatomical breakdown lectures of internal xylem/phloem cells.",
      "Send digital performance card to Gopal Pramanik (Father) via WhatsApp."
    ],
    logs: [
      "09:15:00 AM - Student checked-in Canning branch campus.",
      "10:00:20 AM - Core Botany diagnostics sheet completed. Score: 95.4 percentile.",
      "10:00:25 AM - Transcription enzymes identified as a high-friction target area. Auto-adjusting daily review schedule.",
      "12:45:10 PM - Counseling desk notification triggered: 'Schedule stress relief breathing cycle'."
    ]
  },
  foundation: {
    name: "Sohini Roy",
    role: "Class IX Foundation",
    target: "Target Goal: 98% Board Marks",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    focusIndex: 89.4,
    recallIndex: 86.8,
    masteryIndex: 85.2,
    weakChapter: "Quadratic Equations & Grammar",
    scores: [65, 71, 74, 80, 83, 89],
    recs: [
      "Strengthen quadratic discriminant factoring principles through standard step-by-step math drills.",
      "Linguistic diagnostics alert: Subject-verb agreement rules require reinforcement in syntax mock papers.",
      "Remedial recommendation: Engage in the peer-to-peer logical debate deck on quadratic roots classification.",
      "Send academic milestone log to Meenakshi Roy (Mother) via WhatsApp."
    ],
    logs: [
      "02:00:15 PM - Checked-in Naktala HQ classroom, smart attendance desk.",
      "03:15:40 PM - Math algebra quiz complete: 18/20 roots resolved correctly.",
      "03:15:45 PM - Discriminant equation parsing speed flagged as slightly below board standard average speed.",
      "04:30:00 PM - Spoken English active conversation focus session resolved with high-comfort flags."
    ]
  }
};

export default function AIMonitoringDashboard({ onClose }: AIMonitoringDashboardProps) {
  const [selectedID, setSelectedID] = useState<"jee" | "neet" | "foundation">("jee");
  const [interactiveScores, setInteractiveScores] = useState<number[]>([...mockStudents.jee.scores]);
  const [activeLogs, setActiveLogs] = useState<string[]>([...mockStudents.jee.logs]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const student = mockStudents[selectedID];

  // Sync interactive scores on student change
  useEffect(() => {
    setInteractiveScores([...student.scores]);
    setActiveLogs([...student.logs]);
  }, [selectedID, student]);

  // Simulate a live diagnostics test evaluation
  const handleTriggerEvaluation = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const newLogs = [
      `Initializing telemetry link... scanning diagnostics sheets...`,
      `Scanning completed - processing conceptual failure maps...`,
      `Analysis completed! Updating progress scores for ${student.name}...`
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < newLogs.length) {
        setActiveLogs(prev => [newLogs[logIdx], ...prev]);
        logIdx++;
      } else {
        clearInterval(interval);
        // Boost the last score dynamically for demonstration
        setInteractiveScores(prev => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          const currentVal = updated[lastIdx];
          if (currentVal < 99) {
            updated[lastIdx] = Math.min(100, currentVal + 2);
          }
          return updated;
        });

        // Add final outcome log
        setActiveLogs(prev => [
          `SUCCESS: Score metric calibrated. Recent Mock updated to ${Math.min(100, Math.round(student.scores[5] + 2))}% with +2% performance boost. Custom worksheets delivered!`,
          ...prev
        ]);
        setIsSimulating(false);
      }
    }, 1200);
  };

  // Generate SVG coordinates for performance trend
  const svgWidth = 460;
  const svgHeight = 160;
  const padding = 30;

  const pointsCount = interactiveScores.length;
  const getCoordinates = () => {
    return interactiveScores.map((score, index) => {
      // Scale X evenly across width
      const x = padding + (index / (pointsCount - 1)) * (svgWidth - 2 * padding);
      // Scale Y inversely depending on score (0 to 100)
      const y = svgHeight - padding - (score / 100) * (svgHeight - 2 * padding);
      return { x, y, score };
    });
  };

  const coordinates = getCoordinates();
  // Create SVG path
  const linePath = coordinates.reduce((path, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${path} L ${p.x} ${p.y}`;
  }, "");

  // Area path under the line
  const areaPath = coordinates.length > 0 
    ? `${linePath} L ${coordinates[coordinates.length - 1].x} ${svgHeight - padding} L ${coordinates[0].x} ${svgHeight - padding} Z` 
    : "";

  return (
    <div className="rounded-3xl bg-slate-950/90 border border-slate-900 overflow-hidden relative shadow-[0_0_50px_rgba(34,211,238,0.15)] mt-8 p-6 md:p-8 animate-fadeIn">
      {/* Absolute futuristic decorative tags */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Top dashboard header bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-900/80 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg relative overflow-hidden group">
            <Cpu className="w-6 h-6 animate-pulse" />
            <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform rounded-2xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                Interactive Model Live Simulation
              </span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight font-sans">
              MindGrowth AI™ student analytics center
            </h3>
          </div>
        </div>

        {/* Templates Selector */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 px-2 uppercase font-bold">Select Profile:</span>
          {(Object.keys(mockStudents) as Array<"jee" | "neet" | "foundation">).map((key) => {
            const active = selectedID === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedID(key)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono leading-none font-bold uppercase cursor-pointer transition-all ${
                  active 
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.4)]" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {key === "jee" ? "JEE Advanced" : key === "neet" ? "NEET Prep" : "V-XII Board"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COMPARTMENT: Profile & Real-time Diagnostic Commands and logs */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
          {/* Active Student Card */}
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-900 flex items-center gap-4 relative">
            <img 
              src={student.avatar} 
              alt={student.name} 
              className="w-12 h-12 rounded-xl object-cover border border-cyan-500/20"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">STUDENT PORTRAIT</div>
              <h4 className="text-sm font-black text-white truncate">{student.name}</h4>
              <p className="text-[11px] font-semibold text-slate-400 truncate">{student.role}</p>
              <span className="text-[9px] font-mono text-purple-400 bg-purple-950/40 border border-purple-500/20 px-2 py-0.5 rounded-full mt-1.5 inline-block leading-none">
                {student.target}
              </span>
            </div>
          </div>

          {/* AI Automated Diagnostic Actions Terminal */}
          <div className="flex-1 rounded-2xl bg-slate-950 border border-slate-900 p-4 flex flex-col justify-between font-mono">
            <div className="mb-3 flex justify-between items-center bg-slate-900/30 p-2 rounded-lg border border-slate-900">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Diagnostics Logs</span>
              <span className="text-[8px] uppercase bg-cyan-950 flex items-center px-2 py-0.5 rounded text-cyan-400 border border-cyan-500/20">
                <Clock className="w-2.5 h-2.5 mr-1" />
                Live Feed
              </span>
            </div>

            <div className="space-y-2 text-[9px] leading-relaxed max-h-[140px] overflow-y-auto pr-1 text-left text-slate-350">
              <AnimatePresence>
                {activeLogs.map((log, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-b border-slate-900/50 pb-1.5 flex gap-1.5 items-start font-mono"
                  >
                    <span className="text-cyan-500">▶</span>
                    <span>{log}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button
              onClick={handleTriggerEvaluation}
              disabled={isSimulating}
              className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400/20 to-teal-400/20 hover:from-cyan-400/30 hover:to-teal-400/30 text-cyan-400 hover:text-white transition-colors duration-200 border border-cyan-500/30 hover:border-cyan-500/50 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Processing Diagnostic Telemetry...</span>
                </>
              ) : (
                <>
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Execute AI Simulation Test Scan</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* MIDDLE COMPARTMENT: PERFORMANCE TREND SVG CHART */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-900/20 border border-slate-900 p-5 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-405 uppercase tracking-wide block">Performance Progression Matrix</span>
                <span className="text-xs font-bold text-slate-300">Continuous Assessment Mock Scores (% Marks)</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-cyan-400 inline-block" />
                <span className="text-[9px] font-mono text-slate-400 uppercase">Interactive Trend</span>
              </div>
            </div>

            {/* SVG Interactive Chart Drawing Area */}
            <div className="relative w-full aspect-[460/160] border border-slate-900/80 rounded-xl bg-slate-950 p-2 flex items-center justify-center">
              
              <svg 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                className="w-full h-full overflow-visible"
              >
                {/* Horizontal Guide lines */}
                {[20, 40, 60, 80, 100].map((level) => {
                  const y = svgHeight - padding - (level / 100) * (svgHeight - 2 * padding);
                  return (
                    <g key={level}>
                      <line 
                        x1={padding} 
                        y1={y} 
                        x2={svgWidth - padding} 
                        y2={y} 
                        stroke="rgba(255, 255, 255, 0.05)" 
                        strokeWidth="1" 
                        strokeDasharray="4 4"
                      />
                      <text 
                        x={padding - 8} 
                        y={y + 3} 
                        fill="rgba(255, 255, 255, 0.3)" 
                        fontSize="8" 
                        fontFamily="monospace"
                        textAnchor="end"
                      >
                        {level}%
                      </text>
                    </g>
                  );
                })}

                {/* Vertical Season lines */}
                {interactiveScores.map((_, i) => {
                  const x = padding + (i / (pointsCount - 1)) * (svgWidth - 2 * padding);
                  return (
                    <g key={i}>
                      <line 
                        x1={x} 
                        y1={padding} 
                        x2={x} 
                        y2={svgHeight - padding} 
                        stroke="rgba(255, 255, 255, 0.04)" 
                        strokeWidth="1"
                      />
                      <text 
                        x={x} 
                        y={svgHeight - padding + 12} 
                        fill="rgba(255, 255, 255, 0.4)" 
                        fontSize="8" 
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        Mock {i+1}
                      </text>
                    </g>
                  );
                })}

                {/* Fill area beneath the curve line */}
                {areaPath && (
                  <path 
                    d={areaPath} 
                    fill="url(#gradient-area)" 
                    opacity="0.2"
                  />
                )}

                {/* Trend curve line itself */}
                {linePath && (
                  <motion.path 
                    d={linePath} 
                    fill="none" 
                    stroke="url(#gradient-line)" 
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                )}

                {/* Circles nodes with tracking score tooltip */}
                {coordinates.map((p, i) => (
                  <g key={i}>
                    <circle 
                      cx={p.x} 
                      cy={p.y} 
                      r="4" 
                      fill="#22d3ee" 
                      stroke="#020617" 
                      strokeWidth="2"
                    />
                    <circle 
                      cx={p.x} 
                      cy={p.y} 
                      r="8" 
                      fill="#22d3ee" 
                      opacity="0.15" 
                      className="animate-pulse"
                    />
                    {/* Tooltip marks */}
                    <text 
                      x={p.x} 
                      y={p.y - 12} 
                      fill="#38bdf8" 
                      fontSize="9" 
                      fontWeight="bold"
                      fontFamily="monospace" 
                      textAnchor="middle"
                    >
                      {p.score}%
                    </text>
                  </g>
                ))}

                {/* Linear Gradient Configurations */}
                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Syllabus Health Progress Check: Satisfactory
            </span>
            <span className="text-cyan-400">95% board threshold passed</span>
          </div>
        </div>

        {/* RIGHT COMPARTMENT: KPI CIRCULAR PROGRESS RING & DETAILED AI ADVISORY */}
        <div className="lg:col-span-3 space-y-5 flex flex-col justify-between">
          
          {/* Radial Diagnostic Indices */}
          <div className="p-4 rounded-2xl bg-slate-900/30 border border-slate-900 space-y-4">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide block">Cognitive Metrics</span>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                {/* SVG Progress Circle index */}
                <div className="relative w-12 h-12 mx-auto mb-1 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="transparent" />
                    <motion.circle 
                      cx="24" 
                      cy="24" 
                      r="20" 
                      stroke="#22d3ee" 
                      strokeWidth="3.5" 
                      fill="transparent" 
                      strokeDasharray="125"
                      strokeDashoffset={125 - (125 * student.focusIndex) / 100}
                    />
                  </svg>
                  <span className="text-[9px] font-bold text-white font-mono">{student.focusIndex}%</span>
                </div>
                <span className="text-[8px] font-mono text-slate-500 uppercase block leading-none">Focus Rate</span>
              </div>

              <div className="text-center">
                {/* SVG Progress Circle index */}
                <div className="relative w-12 h-12 mx-auto mb-1 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="transparent" />
                    <motion.circle 
                      cx="24" 
                      cy="24" 
                      r="20" 
                      stroke="#a855f7" 
                      strokeWidth="3.5" 
                      fill="transparent" 
                      strokeDasharray="125"
                      strokeDashoffset={125 - (125 * student.recallIndex) / 100}
                    />
                  </svg>
                  <span className="text-[9px] font-bold text-white font-mono">{student.recallIndex}%</span>
                </div>
                <span className="text-[8px] font-mono text-slate-500 uppercase block leading-none">Recall Stability</span>
              </div>

              <div className="text-center">
                {/* SVG Progress Circle index */}
                <div className="relative w-12 h-12 mx-auto mb-1 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="transparent" />
                    <motion.circle 
                      cx="24" 
                      cy="24" 
                      r="20" 
                      stroke="#ec4899" 
                      strokeWidth="3.5" 
                      fill="transparent" 
                      strokeDasharray="125"
                      strokeDashoffset={125 - (125 * student.masteryIndex) / 100}
                    />
                  </svg>
                  <span className="text-[9px] font-bold text-white font-mono">{student.masteryIndex}%</span>
                </div>
                <span className="text-[8px] font-mono text-slate-500 uppercase block leading-none">Concept Map</span>
              </div>
            </div>

            {/* Critical Weak Chapter node highlighting */}
            <div className="mt-2 text-left bg-slate-950 p-2.5 rounded-xl border border-rose-500/20">
              <span className="text-[8px] font-mono text-rose-400 uppercase tracking-widest flex items-center gap-1 leading-none mb-1">
                <AlertCircle className="w-3 h-3 text-rose-500" />
                Remedial Focus Node
              </span>
              <p className="text-[10px] uppercase font-bold text-slate-200 font-sans truncate leading-none">
                {student.weakChapter}
              </p>
            </div>
          </div>

          {/* AI Tailored Action Recommendations list panel */}
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-900 space-y-2 text-left flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide block mb-2.5">AI Clinical Recommendations</span>
              <ul className="space-y-2 text-[10px] text-slate-300 font-sans leading-relaxed">
                {student.recs.map((rec, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close / Minimize dashboard btn */}
            {onClose && (
              <button
                onClick={onClose}
                className="w-full mt-4 py-2 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 rounded-xl text-[10px] font-mono uppercase tracking-wider cursor-pointer"
              >
                ✕ Close Diagnostic Panel
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
