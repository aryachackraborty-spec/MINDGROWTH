/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 * Core Web Audio sound synthesizer for immersive futuristic/scientific feedback.
 * Synthesizes sounds programmatically to avoid network fetch latency or bulky assets.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  // Resume context if suspended (common browser security protection)
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Creates an ultra-short clean scientific haptic slide tick.
 * Ideal for hover states.
 */
export function playHoverTick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Tiny Oscillator
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    // Quick high frequency sweep for that "clean technical" chime feel
    osc.frequency.setValueAtTime(2400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);

    // Exponential volume drop to prevent speaker popping and give physical haptic feedback
    gainNode.gain.setValueAtTime(0.015, now); // soft, delicate overlay
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch (error) {
    // Graceful fallback for browsers blocklisting Web Audio
    console.debug("Audio playback ignored due to focus constraints", error);
  }
}

/**
 * Creates a reassuring double scientific click sound.
 * Ideal for expanding FAQ items or active navigation switches.
 */
export function playExpandClick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // First click (higher frequency, short)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(1800, now);
    osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.06);

    gain1.gain.setValueAtTime(0.03, now);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.07);

    // Second click (bounced after 35ms, lower frequency, provides physics weight)
    const delay = 0.035;
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(1400, now + delay);
    osc2.frequency.exponentialRampToValueAtTime(900, now + delay + 0.08);

    gain2.gain.setValueAtTime(0.012, now + delay);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.08);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.start(now + delay);
    osc2.stop(now + delay + 0.09);

  } catch (error) {
    console.debug("Audio playback ignored due to focus constraints", error);
  }
}
