"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, Building2, Globe2, Mic2 } from "lucide-react";
import type { KeynoteSpeaker, PastSpeaker } from "@/data/speakers";

// ─────────────────────────────────────────────────────────────
// Gradient Avatar (premium editorial style)
// ─────────────────────────────────────────────────────────────

export const AVATAR_GRADIENTS = [
  ["#1e40af", "#3b82f6"],
  ["#4c1d95", "#7c3aed"],
  ["#064e3b", "#059669"],
  ["#7c2d12", "#ea580c"],
  ["#0e7490", "#06b6d4"],
  ["#1e3a5f", "#2563eb"],
  ["#3b0764", "#9333ea"],
  ["#134e4a", "#14b8a6"],
];

export function getSpeakerGradient(index: number) {
  return AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
}

interface AvatarProps {
  initials: string;
  index?: number;
  size?: number;
  isHovered?: boolean;
}

function PremiumAvatar({ initials, index = 0, size = 140, isHovered = false }: AvatarProps) {
  const [from, to] = getSpeakerGradient(index);
  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Ambient glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={isHovered ? { opacity: 1, scale: 1.15 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle, ${from}55 0%, transparent 70%)`,
          filter: "blur(12px)",
        }}
      />
      {/* White ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={isHovered ? { opacity: 1, scale: 1.06 } : { opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)`,
          boxShadow: isHovered
            ? `0 0 0 3px white, 0 0 0 5px ${from}80, 0 12px 40px ${from}55`
            : `0 0 0 3px white, 0 0 0 5px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.12)`,
        }}
      />
      {/* Gradient circle */}
      <div
        className="absolute inset-0.5 rounded-full flex items-center justify-center select-none"
        style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      >
        <span
          className="font-bold text-white tracking-tight"
          style={{ fontSize: size * 0.26, textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
        >
          {initials}
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Glass Expertise Pill
// ─────────────────────────────────────────────────────────────

function GlassPill({
  label,
  accent = "#2563eb",
  delay = 0,
}: {
  label: string;
  accent?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      whileHover={{ y: -2, scale: 1.04, transition: { duration: 0.15 } }}
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium cursor-default select-none"
      style={{
        background: `linear-gradient(135deg, ${accent}12 0%, ${accent}06 100%)`,
        border: `1px solid ${accent}28`,
        color: accent,
        backdropFilter: "blur(8px)",
        boxShadow: `0 1px 4px ${accent}16, inset 0 1px 0 rgba(255,255,255,0.6)`,
      }}
    >
      {label}
    </motion.span>
  );
}

// ─────────────────────────────────────────────────────────────
// Cursor spotlight hook
// ─────────────────────────────────────────────────────────────

function useCursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(37,99,235,0.04) 0%, transparent 70%)`
  );

  return { ref, handleMouseMove, spotlightBg };
}

// ─────────────────────────────────────────────────────────────
// KEYNOTE Speaker Card — Premium Editorial
// ─────────────────────────────────────────────────────────────

interface KeynoteCardProps {
  speaker: KeynoteSpeaker;
  index: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export function KeynoteSpeakerCard({
  speaker,
  index,
  isSelected = false,
  onClick,
}: KeynoteCardProps) {
  const [hovered, setHovered] = useState(false);
  const { ref, handleMouseMove, spotlightBg } = useCursorSpotlight();
  const accent = "#2563eb";
  const triggerRef = useRef<HTMLDivElement>(null);

  const activeStyle = isSelected
    ? {
        boxShadow: "0 0 0 2px #2563eb, 0 12px 40px rgba(37,99,235,0.20), 0 4px 16px rgba(0,0,0,0.08)",
        scale: 1.015,
      }
    : hovered
    ? {
        boxShadow: "0 32px 64px rgba(37,99,235,0.12), 0 8px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(37,99,235,0.12)",
        scale: 1,
      }
    : {
        boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.06)",
        scale: 1,
      };

  return (
    <motion.div
      ref={(el) => {
        // dual-ref: spotlight ref AND triggerRef
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (triggerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      animate={{
        y: hovered && !isSelected ? -8 : 0,
        ...activeStyle,
      }}
      className="relative rounded-3xl overflow-hidden cursor-pointer h-full"
      style={{
        background: isSelected
          ? "linear-gradient(145deg, #f0f7ff 0%, #e8f2ff 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
        transition: "background 0.25s ease",
      }}
      aria-label={`View profile: ${speaker.name}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Cursor spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlightBg }}
      />

      {/* Selected/hover gradient border overlay */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0"
        animate={{ opacity: hovered || isSelected ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background: isSelected
            ? `linear-gradient(135deg, ${accent}18, transparent 50%, ${accent}10)`
            : `linear-gradient(135deg, ${accent}20, transparent 50%, ${accent}14)`,
        }}
      />

      {/* Click hint ripple */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
            }}
          >
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent }}
            />
            <span className="text-[10px] font-semibold" style={{ color: accent }}>
              Selected
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col h-full">
        {/* Top row: Avatar + Core Info */}
        <div className="flex items-start gap-6 mb-6">
          <PremiumAvatar initials={speaker.initials} index={index} size={120} isHovered={hovered} />

          <div className="flex-1 min-w-0 pt-1">
            <motion.div
              animate={hovered || isSelected ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 text-xs font-semibold"
              style={{
                background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
                color: "#1d4ed8",
                border: "1px solid #bfdbfe",
              }}
            >
              <CalendarDays className="h-3 w-3" />
              {speaker.speakingDate}
            </motion.div>

            <h3
              className="font-bold text-slate-900 leading-tight mb-1.5"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", letterSpacing: "-0.02em" }}
            >
              {speaker.name}
            </h3>
            <p className="font-semibold mb-2" style={{ color: accent, fontSize: "0.875rem" }}>
              {speaker.designation}
            </p>
            <div className="flex items-start gap-1.5 mb-1.5">
              <Building2 className="h-3.5 w-3.5 mt-0.5 text-slate-400 shrink-0" />
              <span className="text-sm text-slate-600 leading-snug">{speaker.institution}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="text-sm text-slate-500">{speaker.country}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px mb-5"
          style={{
            background:
              hovered || isSelected
                ? `linear-gradient(90deg, transparent, ${accent}30, transparent)`
                : "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
            transition: "background 0.35s ease",
          }}
        />

        {/* Biography */}
        <div className="mb-5 flex-1">
          <p
            className="text-slate-600 leading-relaxed"
            style={{
              fontSize: "0.9rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {speaker.biography}
          </p>
        </div>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-2">
          {speaker.expertiseTags.map((tag, i) => (
            <GlassPill key={tag} label={tag} accent={accent} delay={i * 0.04} />
          ))}
        </div>

        {/* Footer hint */}
        <div
          className="mt-5 pt-5 flex items-center justify-between"
          style={{ borderTop: `1px solid ${accent}16` }}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ background: `${accent}12` }}
            >
              <Mic2 className="h-3.5 w-3.5" style={{ color: accent }} />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Upcoming Speaker
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-xs text-slate-400">Click to view profile</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// PAST Speaker Card — Premium Editorial (violet accent)
// ─────────────────────────────────────────────────────────────

interface PastCardProps {
  speaker: PastSpeaker;
  index: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export function PastSpeakerCard({
  speaker,
  index,
  isSelected = false,
  onClick,
}: PastCardProps) {
  const [hovered, setHovered] = useState(false);
  const { ref, handleMouseMove, spotlightBg } = useCursorSpotlight();
  const accent = "#7c3aed";

  const activeStyle = isSelected
    ? {
        boxShadow: "0 0 0 2px #7c3aed, 0 12px 40px rgba(124,58,237,0.18), 0 4px 16px rgba(0,0,0,0.08)",
        scale: 1.015,
      }
    : hovered
    ? {
        boxShadow: "0 32px 64px rgba(124,58,237,0.10), 0 8px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(124,58,237,0.10)",
        scale: 1,
      }
    : {
        boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.06)",
        scale: 1,
      };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      animate={{
        y: hovered && !isSelected ? -8 : 0,
        ...activeStyle,
      }}
      className="relative rounded-3xl overflow-hidden cursor-pointer h-full"
      style={{
        background: isSelected
          ? "linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #faf8ff 100%)",
        transition: "background 0.25s ease",
      }}
      aria-label={`View profile: ${speaker.name}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Cursor spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlightBg }}
      />

      {/* Gradient border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0"
        animate={{ opacity: hovered || isSelected ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background: `linear-gradient(135deg, ${accent}16, transparent 50%, ${accent}10)`,
        }}
      />

      {/* Selected badge */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              background: `${accent}12`,
              border: `1px solid ${accent}28`,
            }}
          >
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
            <span className="text-[10px] font-semibold" style={{ color: accent }}>
              Selected
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col h-full">
        <div className="flex items-start gap-5 mb-5">
          <PremiumAvatar initials={speaker.initials} index={index + 4} size={100} isHovered={hovered} />

          <div className="flex-1 min-w-0 pt-1">
            <motion.div
              animate={hovered || isSelected ? { opacity: 1 } : { opacity: 0.85 }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 text-xs font-semibold"
              style={{
                background: "linear-gradient(135deg, #ede9fe, #f5f3ff)",
                color: accent,
                border: "1px solid #ddd6fe",
              }}
            >
              {speaker.conferenceEdition}
            </motion.div>

            <h3
              className="font-bold text-slate-900 leading-tight mb-1.5"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", letterSpacing: "-0.02em" }}
            >
              {speaker.name}
            </h3>
            <p className="font-semibold mb-2" style={{ color: accent, fontSize: "0.8rem" }}>
              {speaker.designation}
            </p>
            <div className="flex items-start gap-1.5">
              <Building2 className="h-3.5 w-3.5 mt-0.5 text-slate-400 shrink-0" />
              <span className="text-xs text-slate-500 leading-snug line-clamp-2">
                {speaker.institution}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          className="h-px mb-4"
          style={{
            background:
              hovered || isSelected
                ? `linear-gradient(90deg, transparent, ${accent}25, transparent)`
                : "linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)",
            transition: "background 0.35s ease",
          }}
        />

        <div className="mb-4 flex-1">
          <p
            className="text-slate-500 leading-relaxed"
            style={{
              fontSize: "0.875rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {speaker.biography}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {speaker.expertiseTags.map((tag, i) => (
            <GlassPill key={tag} label={tag} accent={accent} delay={i * 0.04} />
          ))}
        </div>

        <div
          className="mt-5 pt-5 flex items-center justify-between"
          style={{ borderTop: `1px solid ${accent}16` }}
        >
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Alumni Speaker
          </span>
          <span className="text-xs text-slate-400">Click to view profile</span>
        </div>
      </div>
    </motion.div>
  );
}
