/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface Interactive3DModelProps {
  courseId: string;
  glowColorClass?: string;
}

export default function Interactive3DModel({ courseId, glowColorClass = "from-cyan-400 to-blue-500" }: Interactive3DModelProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Interaction States
  const [angleX, setAngleX] = useState(0.5);
  const [angleY, setAngleY] = useState(0.5);
  const [zoom, setZoom] = useState(1.0);
  const [isHovered, setIsHovered] = useState(false);

  // Drag Refs to prevent excess state re-renders during 60fps drag
  const isDraggingRef = useRef(false);
  const startMouseRef = useRef({ x: 0, y: 0 });
  const anglesRef = useRef({ x: 0.5, y: 0.5 });
  const zoomRef = useRef(1.0);

  // Synchronize state trigger to refs
  useEffect(() => {
    anglesRef.current = { x: angleX, y: angleY };
  }, [angleX, angleY]);

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  // Adjust zoom controls
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 2.5));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.4));
  const handleReset = () => {
    setAngleX(0.5);
    setAngleY(0.5);
    setZoom(1.0);
    anglesRef.current = { x: 0.5, y: 0.5 };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let autoRotationSpeedX = 0.002;
    let autoRotationSpeedY = 0.005;

    // Node systems depending on Course
    let points: Array<{ x: number; y: number; z: number; color?: string; size?: number; label?: string }> = [];
    let connections: Array<[number, number]> = [];

    // Initialize structures
    if (courseId === "neet") {
      // 🧬 DNA Double Helix
      // Create two helical strands coiled around the Z/Y-axis
      const numSteps = 24;
      for (let i = 0; i < numSteps; i++) {
        const theta = (i / numSteps) * Math.PI * 4; // Two complete coiling turns
        const r = 35;
        const y = -70 + (i / numSteps) * 140; // Height of the DNA

        // Strand 1
        const x1 = Math.cos(theta) * r;
        const z1 = Math.sin(theta) * r;
        points.push({ x: x1, y, z: z1, color: "#22d3ee", size: 4 });

        // Strand 2
        const theta2 = theta + Math.PI; // 180 degrees offset
        const x2 = Math.cos(theta2) * r;
        const z2 = Math.sin(theta2) * r;
        points.push({ x: x2, y, z: z2, color: "#d946ef", size: 4 });

        // Base Pair Connections (every 2 points are connected across the strands)
        const p1Index = points.length - 2;
        const p2Index = points.length - 1;
        connections.push([p1Index, p2Index]);

        // Connect along Strand 1
        if (i > 0) {
          connections.push([p1Index - 2, p1Index]);
          connections.push([p2Index - 2, p2Index]);
        }
      }
    } else if (courseId === "jee-mains") {
      // ⚛️ Molecule Model (C60 carbon ring or molecular diamond structure)
      // Crystal Lattice Cube structure
      const size = 35;
      const vertices = [
        { x: -size, y: -size, z: -size, color: "#60a5fa" },
        { x: size, y: -size, z: -size, color: "#60a5fa" },
        { x: size, y: size, z: -size, color: "#60a5fa" },
        { x: -size, y: size, z: -size, color: "#60a5fa" },
        { x: -size, y: -size, z: size, color: "#60a5fa" },
        { x: size, y: -size, z: size, color: "#60a5fa" },
        { x: size, y: size, z: size, color: "#60a5fa" },
        { x: -size, y: size, z: size, color: "#60a5fa" },
        // Interstitials (atoms inside bonds)
        { x: 0, y: 0, z: 0, color: "#f87171", size: 7 } // Central nuclei atom
      ];

      points = vertices;
      // Cube connections
      connections = [
        [0, 1], [1, 2], [2, 3], [3, 0], // dynamic front
        [4, 5], [5, 6], [6, 7], [7, 4], // dynamic back
        [0, 4], [1, 5], [2, 6], [3, 7]  // depths
      ];
      // Core bounds connection to center
      for (let i = 0; i < 8; i++) {
        connections.push([i, 8]);
      }
    } else if (courseId === "jee-advanced") {
      // 💫 Quantum Atomic Electron Orbits with Shells
      // Center nucleus
      points.push({ x: 0, y: 0, z: 0, color: "#f43f5e", size: 8 }); // glowing nucleus
      
      // We will draw the electron paths as mathematical equations directly in loop, 
      // but let's pre-define some active outer orbital particles
      points.push({ x: -45, y: -20, z: 30, color: "#38bdf8", size: 4 });
      points.push({ x: 40, y: 40, z: -30, color: "#a855f7", size: 4 });
      points.push({ x: -20, y: 55, z: -20, color: "#e11d48", size: 4 });
      points.push({ x: 50, y: -30, z: 10, color: "#f59e0b", size: 4 });
    } else if (courseId === "v-xii-all") {
      // 🪐 Animated Solar System Model
      // Center Sun
      points.push({ x: 0, y: 0, z: 0, color: "#eab308", size: 10, label: "Sun" });
      // Planets starting locations
      points.push({ x: -30, y: 0, z: 15, color: "#94a3b8", size: 3, label: "Mercury" });
      points.push({ x: 50, y: 0, z: -25, color: "#ea580c", size: 4.5, label: "Venus" });
      points.push({ x: -75, y: 0, z: -10, color: "#3b82f6", size: 5, label: "Earth" });
      points.push({ x: 100, y: 0, z: 45, color: "#ef4444", size: 4, label: "Mars" });
    } else if (courseId === "wbjee") {
      // ⚙️ Rotating Vector Gear / Torque Angular Momentum
      // Vector arrows in 3D + circular gear points
      // We can make an elegant 3D coordinate torque system
      points.push({ x: 0, y: 0, z: 0, color: "#cbd5e1", size: 4 }); // origin
      
      // X, Y, Z vector head spikes
      points.push({ x: 70, y: 0, z: 0, color: "#22d3ee", size: 4.5, label: "+X Torque" });
      points.push({ x: 0, y: -70, z: 0, color: "#10b981", size: 4.5, label: "+Y Force" });
      points.push({ x: 0, y: 0, z: 70, color: "#8b5cf6", size: 4.5, label: "+Z Velocity" });

      connections.push([0, 1]);
      connections.push([0, 2]);
      connections.push([0, 3]);

      // Outer force circle ring coordinates
      const rimSegments = 16;
      const parentIdxOffset = points.length;
      for (let i = 0; i < rimSegments; i++) {
        const phi = (i / rimSegments) * Math.PI * 2;
        const rx = Math.cos(phi) * 45;
        const rz = Math.sin(phi) * 45;
        points.push({ x: rx, y: 0, z: rz, color: "#f59e0b", size: 2.5 });

        connections.push([0, parentIdxOffset + i]); // Spoke connection
        if (i > 0) {
          connections.push([parentIdxOffset + i - 1, parentIdxOffset + i]);
        }
      }
      connections.push([parentIdxOffset + rimSegments - 1, parentIdxOffset]); // Complete ring
    } else if (courseId === "spoken-english") {
      // 🌐 Glowing wireframe 3D Globe represent worldwide confidence
      const latCount = 6;
      const longCount = 10;
      
      // Generate latitude rings
      for (let l = 1; l < latCount; l++) {
        const latAngle = (l / latCount) * Math.PI - Math.PI / 2;
        const r = Math.cos(latAngle) * 50;
        const y = Math.sin(latAngle) * 50;
        
        const firstRingIdx = points.length;
        for (let j = 0; j < longCount; j++) {
          const longAngle = (j / longCount) * Math.PI * 2;
          const x = Math.cos(longAngle) * r;
          const z = Math.sin(longAngle) * r;
          
          points.push({ x, y, z, color: "#38bdf8", size: 2 });
          
          // Latitude line connection
          if (j > 0) {
            connections.push([points.length - 2, points.length - 1]);
          }
        }
        connections.push([points.length - 1, firstRingIdx]); // close ring
      }
    }

    let phase = 0;

    const render = () => {
      if (!ctx || !canvas) return;

      // Handle high precision scaling
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Increment rotation incrementally if not dragging
      if (!isDraggingRef.current) {
        anglesRef.current.y += autoRotationSpeedY;
        anglesRef.current.x += autoRotationSpeedX;
      }

      const cosX = Math.cos(anglesRef.current.x);
      const sinX = Math.sin(anglesRef.current.x);
      const cosY = Math.cos(anglesRef.current.y);
      const sinY = Math.sin(anglesRef.current.y);

      phase += 0.02;

      // If courses have dynamic orbiting systems, we modify some points on the fly!
      if (courseId === "v-xii-all") {
        // Solar system orbiting
        // Orbit diameters
        const orbitsRadius = [0, 32, 52, 72, 94];
        const speeds = [0, 0.04, 0.02, 0.015, 0.01];
        
        // Render orbital concentric circles in 3D projection
        ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
        ctx.lineWidth = 1;
        for (let k = 1; k < orbitsRadius.length; k++) {
          ctx.beginPath();
          const orbitalSubdivisions = 40;
          for (let s = 0; s <= orbitalSubdivisions; s++) {
            const angle = (s / orbitalSubdivisions) * Math.PI * 2;
            const ox = Math.cos(angle) * orbitsRadius[k];
            const oz = Math.sin(angle) * orbitsRadius[k];
            
            // 3D rotations
            const xRoty = ox * cosY - oz * sinY;
            const zRoty = ox * sinY + oz * cosY;
            const yRotx = -zRoty * sinX;
            const zFinal = zRoty * cosX;

            const dProj = 180;
            const scaleProj = dProj / (dProj + zFinal) * zoomRef.current;
            const sx = cx + xRoty * scaleProj;
            const sy = cy + yRotx * scaleProj;

            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.stroke();
        }

        // Animate actual core planets positions
        for (let j = 1; j <= 4; j++) {
          const orbitAngle = phase * speeds[j] * 18 + j * 12;
          points[j].x = Math.cos(orbitAngle) * orbitsRadius[j];
          points[j].z = Math.sin(orbitAngle) * orbitsRadius[j];
        }
      } else if (courseId === "jee-advanced") {
        // Render orbiting electron rings paths
        ctx.lineWidth = 1.2;
        const ringsCount = 3;
        for (let ring = 0; ring < ringsCount; ring++) {
          // Tilt orbit planes
          const orbitTiltX = ring * 0.8;
          const orbitTiltY = ring * 1.2;
          ctx.strokeStyle = ring === 0 ? "rgba(34, 211, 238, 0.25)" : ring === 1 ? "rgba(139, 92, 246, 0.25)" : "rgba(244, 63, 94, 0.25)";
          
          ctx.beginPath();
          const precision = 36;
          for (let s = 0; s <= precision; s++) {
            const angle = (s / precision) * Math.PI * 2;
            const r = 55;
            // Base coords along a circle inside vertical tilts
            let ox = Math.cos(angle) * r;
            let oy = Math.sin(angle) * r * Math.cos(orbitTiltX);
            let oz = Math.sin(angle) * r * Math.sin(orbitTiltX);

            // Apply global rotation
            const xRoty = ox * cosY - oz * sinY;
            const zRoty = ox * sinY + oz * cosY;
            const yRotx = oy * cosX - zRoty * sinX;
            const zFinal = oy * sinX + zRoty * cosX;

            const dProj = 180;
            const scaleProj = dProj / (dProj + zFinal) * zoomRef.current;
            const sx = cx + xRoty * scaleProj;
            const sy = cy + yRotx * scaleProj;

            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.stroke();
        }

        // Orbit dynamic electrons
        const speeds = [0.03, -0.05, 0.04, -0.025];
        const orbitsRadius = [42, 54, 54, 54];
        for (let j = 1; j < points.length; j++) {
          const t = phase * speeds[j] * 12 + j * 9;
          const tilt = j * 0.7;
          points[j].x = Math.cos(t) * orbitsRadius[j];
          points[j].y = Math.sin(t) * Math.sin(tilt) * orbitsRadius[j];
          points[j].z = Math.sin(t) * Math.cos(tilt) * orbitsRadius[j];
        }
      }

      // Project all coordinates to screen
      const projectedPoints = points.map((p) => {
        // Rotate around Y-axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate around X-axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective Projection calculation
        const distance = 160;
        const scale = distance / (distance + z2) * zoomRef.current;

        const sx = cx + x1 * scale;
        const sy = cy + y2 * scale;

        return {
          sx,
          sy,
          sz: z2, // Store depth for z-sorting rendering
          color: p.color || "#38bdf8",
          size: (p.size || 3) * scale,
          label: p.label
        };
      });

      // Draw Bonds / Connections lines
      ctx.lineWidth = 1;
      connections.forEach(([p1Index, p2Index]) => {
        const pt1 = projectedPoints[p1Index];
        const pt2 = projectedPoints[p2Index];

        if (!pt1 || !pt2) return;

        // Line color depends on node coordinates
        const avgDepth = (pt1.sz + pt2.sz) / 2;
        const opacity = Math.max(0.08, Math.min(0.85, 1 - (avgDepth + 60) / 150));
        
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
        
        if (courseId === "neet") {
          // DNA code connecting bars coloring
          if (Math.abs(p1Index - p2Index) === 1) { // connector rungs
            ctx.strokeStyle = p1Index % 4 === 0 
              ? `rgba(34, 211, 238, ${opacity * 1.1})` 
              : p1Index % 4 === 1 
              ? `rgba(168, 85, 247, ${opacity * 1.1})` 
              : `rgba(234, 179, 8, ${opacity * 1.1})`;
            ctx.lineWidth = 2;
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
          }
        } else if (courseId === "spoken-english") {
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.3})`;
        }

        ctx.beginPath();
        ctx.moveTo(pt1.sx, pt1.sy);
        ctx.lineTo(pt2.sx, pt2.sy);
        ctx.stroke();
      });

      // Draw Nodes (Z-sorted for correct depth appearance)
      const sortedIndices = Array.from({ length: projectedPoints.length }, (_, i) => i);
      sortedIndices.sort((a, b) => projectedPoints[b].sz - projectedPoints[a].sz);

      sortedIndices.forEach((i) => {
        const pt = projectedPoints[i];
        if (pt.sx < 0 || pt.sx > width || pt.sy < 0 || pt.sy > height) return;

        // Dynamic scale size based on depth
        const sphereRadius = Math.max(1, pt.size);
        
        // Depth gradient circles
        const opacity = Math.max(0.15, Math.min(1.0, 1.2 - (pt.sz + 60) / 120));
        
        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, sphereRadius, 0, Math.PI * 2);
        
        // Glowing atomic nodes
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // If core node or hovered, draw clean label typography
        if (pt.label && (isHovered || i === 0 || courseId === "v-xii-all")) {
          ctx.font = "bold 9px monospace";
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.fillText(pt.label, pt.sx + sphereRadius + 4, pt.sy + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [courseId, isHovered]);

  // Handle Drag rotations
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    startMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startMouseRef.current.x;
    const deltaY = e.clientY - startMouseRef.current.y;

    startMouseRef.current = { x: e.clientX, y: e.clientY };

    anglesRef.current.y += deltaX * 0.008;
    anglesRef.current.x += deltaY * 0.008;

    setAngleX(anglesRef.current.x);
    setAngleY(anglesRef.current.y);
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  // Touch triggers for smartphone compatibility
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 0) return;
    isDraggingRef.current = true;
    startMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - startMouseRef.current.x;
    const deltaY = e.touches[0].clientY - startMouseRef.current.y;

    startMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    anglesRef.current.y += deltaX * 0.012; // slightly more sensitive on mobile
    anglesRef.current.x += deltaY * 0.012;

    setAngleX(anglesRef.current.x);
    setAngleY(anglesRef.current.y);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[190px] rounded-xl bg-slate-950/60 border border-slate-900 border-dashed overflow-hidden flex flex-col justify-center items-center group/model mt-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
    >
      {/* Light border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      
      {/* Sub titles floating */}
      <div className="absolute top-2 left-3 flex items-center gap-1.5 pointer-events-none z-10 font-mono text-[9px] uppercase tracking-wider text-slate-500">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D Visualizer
      </div>

      <div className="absolute top-2 right-3 pointer-events-none z-10 font-mono text-[8px] uppercase tracking-widest text-[#22d3ee]/80">
        {courseId === "neet" && "DNA Double Helix Code"}
        {courseId === "jee-mains" && "Inorganic Crystal Grid"}
        {courseId === "jee-advanced" && "Quantum Shell Levels"}
        {courseId === "v-xii-all" && "Celestial Kepler Orbits"}
        {courseId === "wbjee" && "Moment Torque Vector"}
        {courseId === "spoken-english" && "Wireframe Global Net"}
      </div>

      {/* Manual Controls Layer */}
      <div className="absolute bottom-2 left-3 flex gap-1 z-20">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="p-1 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="p-1 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleReset(); }}
          className="p-1 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
          title="Reset View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interaction Guideline hint */}
      <div className="absolute bottom-2 right-3 pointer-events-none z-10 font-mono text-[8px] uppercase tracking-wider text-slate-600 group-hover/model:text-[#22d3ee]/60 transition-colors">
        Drag to SPIN & Rotate • Scroll to Zoom
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
