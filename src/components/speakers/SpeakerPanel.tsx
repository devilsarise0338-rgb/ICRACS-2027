"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Building2,
  Globe2,
  CalendarDays,
  Mic2,
  ExternalLink,
  BookOpen,
  Tag,
} from "lucide-react";
import type { KeynoteSpeaker, PastSpeaker } from "@/data/speakers";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type PanelSpeaker =
  | ({ type: "keynote"; index: number } & KeynoteSpeaker)
  | ({ type: "past"; index: number } & PastSpeaker);

// ─────────────────────────────────────────────────────────────
// Avatar palette (same as cards)
// ─────────────────────────────────────────────────────────────

const AVATAR_GRADIENTS = [
  ["#1e40af", "#3b82f6"],
  ["#4c1d95", "#7c3aed"],
  ["#064e3b", "#059669"],
  ["#7c2d12", "#ea580c"],
  ["#0e7490", "#06b6d4"],
  ["#1e3a5f", "#2563eb"],
  ["#3b0764", "#9333ea"],
  ["#134e4a", "#14b8a6"],
];

function getSpeakerGradient(index: number) {
  return AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
}

// ─────────────────────────────────────────────────────────────
// Large Panel Avatar
// ─────────────────────────────────────────────────────────────

function PanelAvatar({ initials, index }: { initials: string; index: number }) {
  const [from, to] = getSpeakerGradient(index);
  const size = 160;

  return (
    <motion.div
      className="relative mx-auto shrink-0"
      style={{ width: size, height: size }}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${from}44 0%, transparent 70%)`,
          filter: "blur(18px)",
          transform: "scale(1.3)",
        }}
      />
      {/* White ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 0 4px white, 0 0 0 6px ${from}50, 0 16px 48px ${from}30`,
        }}
      />
      {/* Gradient circle */}
      <div
        className="absolute inset-1 rounded-full flex items-center justify-center select-none"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        <span
          className="font-bold text-white tracking-tight"
          style={{ fontSize: size * 0.26, textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}
        >
          {initials}
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Glass Tag Pill
// ─────────────────────────────────────────────────────────────

function TagPill({
  label,
  accent,
  delay,
}: {
  label: string;
  accent: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay, ease: "easeOut" }}
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
      style={{
        background: `${accent}12`,
        border: `1px solid ${accent}28`,
        color: accent,
        backdropFilter: "blur(6px)",
      }}
    >
      {label}
    </motion.span>
  );
}

// ─────────────────────────────────────────────────────────────
// Info Row
// ─────────────────────────────────────────────────────────────

function InfoRow({
  icon: Icon,
  label,
  value,
  accent,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  accent: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
    >
      <div
        className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: `${accent}12` }}
      >
        <Icon className="h-4 w-4" style={{ color: accent }} />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm text-slate-800 font-medium leading-snug">{value}</p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Focus Trap Hook
// ─────────────────────────────────────────────────────────────

function useFocusTrap(isOpen: boolean) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", trap);
    // Move focus into panel
    first?.focus();
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  return panelRef;
}

// ─────────────────────────────────────────────────────────────
// Main Panel Component
// ─────────────────────────────────────────────────────────────

interface SpeakerPanelProps {
  speaker: PanelSpeaker | null;
  onClose: () => void;
}

export function SpeakerPanel({ speaker, onClose }: SpeakerPanelProps) {
  const isOpen = speaker !== null;
  const panelRef = useFocusTrap(isOpen);

  const accent = speaker?.type === "keynote" ? "#2563eb" : "#7c3aed";

  // ESC key closes
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Sub-fields derived from speaker type
  const speakingDate =
    speaker?.type === "keynote" ? (speaker as KeynoteSpeaker).speakingDate : null;
  const country =
    speaker?.type === "keynote" ? (speaker as KeynoteSpeaker).country : null;
  const conferenceEdition =
    speaker?.type === "past" ? (speaker as PastSpeaker).conferenceEdition : null;

  return (
    <AnimatePresence>
      {isOpen && speaker && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.45)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Panel ── */}
          <motion.div
            key="panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Speaker profile: ${speaker.name}`}
            className="fixed inset-y-0 right-0 z-50 flex flex-col bg-white shadow-2xl
                       w-full sm:w-[440px] md:w-[480px] lg:w-[540px]"
            style={{ boxShadow: "-8px 0 60px rgba(0,0,0,0.12), -1px 0 0 rgba(0,0,0,0.06)" }}
            initial={{ x: "100%", opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 36, mass: 0.9 }}
          >
            {/* ── Gradient header strip ── */}
            <div
              className="h-1.5 shrink-0"
              style={{
                background: `linear-gradient(90deg, ${accent} 0%, ${accent}66 100%)`,
              }}
            />

            {/* ── Scrollable content ── */}
            <div 
              className="flex-1 overflow-y-auto overscroll-contain"
              data-lenis-prevent
              style={{
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-y"
              }}
            >

              {/* ── Close button ── */}
              <div className="sticky top-0 z-10 flex justify-end px-5 pt-4 pb-2 bg-white/90 backdrop-blur-sm">
                <motion.button
                  onClick={onClose}
                  className="h-9 w-9 rounded-full flex items-center justify-center text-slate-500
                             hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  whileTap={{ scale: 0.92 }}
                  aria-label="Close profile panel"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* ── Avatar + Name block ── */}
              <div className="px-8 pb-6 text-center">
                <PanelAvatar initials={speaker.initials} index={speaker.index} />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.22 }}
                  className="mt-6"
                >
                  {/* Type badge */}
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-4"
                    style={{
                      background: `${accent}12`,
                      border: `1px solid ${accent}28`,
                      color: accent,
                    }}
                  >
                    <Mic2 className="h-3 w-3" />
                    {speaker.type === "keynote" ? "Keynote Speaker" : `${conferenceEdition}`}
                  </span>

                  <h2
                    className="font-bold text-slate-900 leading-tight mb-2"
                    style={{ fontSize: "1.5rem", letterSpacing: "-0.025em" }}
                  >
                    {speaker.name}
                  </h2>
                  <p className="font-semibold mb-1" style={{ color: accent, fontSize: "1rem" }}>
                    {speaker.designation}
                  </p>
                </motion.div>
              </div>

              {/* ── Divider ── */}
              <motion.div
                className="mx-8 h-px mb-6"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.28 }}
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent}30, transparent)`,
                  transformOrigin: "left",
                }}
              />

              {/* ── Info rows ── */}
              <div className="px-8 space-y-4 mb-6">
                <InfoRow
                  icon={Building2}
                  label="Institution"
                  value={speaker.institution}
                  accent={accent}
                  delay={0.3}
                />
                {country && (
                  <InfoRow
                    icon={Globe2}
                    label="Country"
                    value={country}
                    accent={accent}
                    delay={0.34}
                  />
                )}
                {speakingDate && (
                  <InfoRow
                    icon={CalendarDays}
                    label="Speaking Date"
                    value={speakingDate}
                    accent={accent}
                    delay={0.38}
                  />
                )}
              </div>

              {/* ── Biography ── */}
              <motion.div
                className="px-8 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4" style={{ color: accent }} />
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Biography
                  </h3>
                </div>
                <p
                  className="text-slate-600 leading-relaxed"
                  style={{
                    fontSize: "0.9rem",
                    borderLeft: `2px solid ${accent}25`,
                    paddingLeft: "0.875rem",
                  }}
                >
                  {speaker.biography}
                </p>
              </motion.div>

              {/* ── Expertise Tags ── */}
              <motion.div
                className="px-8 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.46 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-4 w-4" style={{ color: accent }} />
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Areas of Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {speaker.expertiseTags.map((tag, i) => (
                    <TagPill key={tag} label={tag} accent={accent} delay={0.48 + i * 0.05} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Footer CTA ── */}
            <motion.div
              className="shrink-0 border-t border-slate-100 px-8 py-5 bg-slate-50/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.52 }}
            >
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:icracs@poornima.org?subject=Inquiry about ${encodeURIComponent(speaker.name)}`}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact Speaker
                </a>
                <button
                  onClick={onClose}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
