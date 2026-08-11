"use client";

import { useState, useCallback } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, Cpu, Shield, Mic2, Mail } from "lucide-react";
import {
  keynoteSpeakers,
  pastSpeakers,
  keynoteSessionInfo,
  topicsCoverage,
  speakingOpportunities,
  type KeynoteSpeaker,
  type PastSpeaker,
  type TopicCoverage,
} from "@/data/speakers";
import { KeynoteSpeakerCard, PastSpeakerCard } from "@/components/speakers/SpeakerCards";
import { SpeakerPanel, type PanelSpeaker } from "@/components/speakers/SpeakerPanel";

// ──────────────────────────────────────────────────
// Topic icon resolver
// ──────────────────────────────────────────────────

function TopicIcon({ icon }: { icon: string }) {
  const cls = "h-7 w-7 text-primary";
  switch (icon) {
    case "Brain":  return <Brain className={cls} />;
    case "Eye":    return <Eye className={cls} />;
    case "Cpu":    return <Cpu className={cls} />;
    case "Shield": return <Shield className={cls} />;
    default:       return <Brain className={cls} />;
  }
}

// ──────────────────────────────────────────────────
// Topic Coverage Card
// ──────────────────────────────────────────────────

function TopicCoverageCard({ topic }: { topic: TopicCoverage }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <TopicIcon icon={topic.icon} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-1">{topic.title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{topic.description}</p>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────
// Main Page
// ──────────────────────────────────────────────────

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<PanelSpeaker | null>(null);

  const openKeynote = useCallback((speaker: KeynoteSpeaker, index: number) => {
    setSelectedSpeaker({ ...speaker, type: "keynote", index });
  }, []);

  const openPast = useCallback((speaker: PastSpeaker, index: number) => {
    setSelectedSpeaker({ ...speaker, type: "past", index: index + 4 });
  }, []);

  const closePanel = useCallback(() => {
    setSelectedSpeaker(null);
  }, []);

  return (
    <>
      <PageHeader
        title="Upcoming Speakers"
        description="Distinguished experts sharing their insights at ICRACS 2026 — leading researchers and industry pioneers at the forefront of AI, Computer Vision & Smart Systems."
        bgImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      />

      {/* ── Upcoming Speakers ── */}
      <Section bg="slate">
        <AnimatedHeading
          title="Upcoming Speakers"
          subtitle="Click any card to view the full speaker profile"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {keynoteSpeakers.map((speaker, i) => (
            <KeynoteSpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={i}
              isSelected={selectedSpeaker?.id === speaker.id}
              onClick={() => openKeynote(speaker, i)}
            />
          ))}
        </div>
      </Section>

      {/* ── Past Speakers ── */}
      <Section bg="white">
        <AnimatedHeading
          title="Past Speakers"
          subtitle="Distinguished speakers from previous ICRACS conferences"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pastSpeakers.map((speaker, i) => (
            <PastSpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={i}
              isSelected={selectedSpeaker?.id === speaker.id}
              onClick={() => openPast(speaker, i)}
            />
          ))}
        </div>
      </Section>

      {/* ── Speaker Information ── */}
      <Section bg="slate">
        <div className="max-w-6xl mx-auto">
          <AnimatedHeading
            title="Speaker Information"
            subtitle="Everything you need to know about upcoming sessions at ICRACS 2026"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Sessions */}
            <Card className="glass-card border-slate-100 shadow-sm col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mic2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Upcoming Sessions</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    keynoteSessionInfo.duration,
                    keynoteSessionInfo.format,
                    keynoteSessionInfo.focus,
                    keynoteSessionInfo.interaction,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Topics Coverage */}
            <div className="col-span-1 lg:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-primary" />
                Topics Coverage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topicsCoverage.map((topic) => (
                  <TopicCoverageCard key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
          </div>

          {/* Speaking Opportunities */}
          <div className="mt-10">
            <Card className="glass-card border-primary/20 shadow-sm bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mic2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {speakingOpportunities.heading}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {speakingOpportunities.description}
                </p>
                <a
                  href={`mailto:${speakingOpportunities.contactEmail}?subject=${encodeURIComponent(
                    speakingOpportunities.contactSubject
                  )}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  Contact Organizing Committee
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* ── Slide-over Profile Panel ── */}
      <SpeakerPanel speaker={selectedSpeaker} onClose={closePanel} />
    </>
  );
}
