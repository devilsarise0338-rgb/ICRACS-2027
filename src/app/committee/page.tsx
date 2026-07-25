"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { 
  Users, 
  Globe2, 
  Building2, 
  Layers, 
  Crown, 
  Star, 
  Settings, 
  Globe, 
  ChevronDown, 
  X,
  MapPin,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { 
  committeeSections, 
  getAllMembers,
  type CommitteeSection, 
  type CommitteeMember 
} from "@/data/committee";

export interface CommitteeDomain {
  id: string;
  title: string;
  nodes: (CommitteeSection & { color: string })[];
}

// ────────────────────────────────────────────────────────
// Dynamic Hierarchy Configuration for UI
// ────────────────────────────────────────────────────────
const committeeHierarchy: CommitteeDomain[] = [
  {
    id: "leadership",
    title: "Leadership",
    nodes: committeeSections.filter(s => 
      ["honorarypatron", "honorarychair", "generalchair", "conferencechair"].includes(s.id)
    ).map(s => ({ ...s, color: "#f59e0b" }))
  },
  {
    id: "operations",
    title: "Operations",
    nodes: committeeSections.filter(s => 
      ["programchair", "organizingchair", "organizingcommittee", "publicitychair", "financechair"].includes(s.id)
    ).map(s => ({ ...s, color: "#10b981" }))
  },
  {
    id: "academic",
    title: "Academic",
    nodes: committeeSections.filter(s => 
      ["technicalprogramcommittee", "internationaladvisorycommittee", "nationaladvisorycommittee"].includes(s.id)
    ).map(s => ({ ...s, color: "#8b5cf6" }))
  }
].filter(domain => domain.nodes.length > 0);

const allCommitteeMembers = committeeSections.flatMap(section => section.members);

// ──────────────────────────────────────────────────
// Icon Resolver
// ──────────────────────────────────────────────────
function ResolveIcon({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  switch (name) {
    case "Crown": return <Crown className={className} style={style} />;
    case "Star": return <Star className={className} style={style} />;
    case "Settings": return <Settings className={className} style={style} />;
    case "Globe": return <Globe className={className} style={style} />;
    default: return <Users className={className} style={style} />;
  }
}

// ──────────────────────────────────────────────────
// Premium Avatar
// ──────────────────────────────────────────────────
function CommitteeAvatar({ initials, color, image, size = 120 }: { initials: string; color: string; image?: string | null; size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full flex items-center justify-center select-none overflow-hidden"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
        boxShadow: `0 0 0 4px white, 0 8px 24px ${color}40`,
      }}
    >
      {image && image !== "null" ? (
        <img src={image} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <span className="font-bold text-white tracking-tight" style={{ fontSize: size * 0.28, textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>
          {initials}
        </span>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────
// Member Card
// ──────────────────────────────────────────────────
function MemberCard({
  member,
  nodeConfig,
  onClick
}: {
  member: CommitteeMember;
  nodeConfig: CommitteeSection & { color: string };
  onClick: (m: CommitteeMember, config: CommitteeSection & { color: string }) => void;
}) {
  const { color } = nodeConfig;
  return (
    <motion.div
      layoutId={`card-${member.id}`}
      onClick={() => onClick(member, nodeConfig)}
      className="relative rounded-3xl overflow-hidden cursor-pointer bg-white group flex flex-col h-full"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)",
        transition: "background 0.25s ease, transform 0.25s ease",
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 24px 48px ${color}15, 0 8px 24px rgba(0,0,0,0.04), 0 0 0 1px ${color}30`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(member, nodeConfig);
        }
      }}
    >
      {/* Background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${color}10, transparent 70%)`
        }}
      />

      <div className="p-6 relative z-10 flex flex-col flex-1 items-center text-center">
        <motion.div layoutId={`avatar-${member.id}`} className="mb-4">
          <CommitteeAvatar initials={member.initials} color={color} image={member.image} size={88} />
        </motion.div>
        
        <motion.div layoutId={`content-${member.id}`} className="flex flex-col flex-1">
          <h4 className="font-bold text-slate-900 leading-tight mb-1" style={{ fontSize: "1.1rem" }}>
            {member.name}
          </h4>
          <p className="text-sm font-semibold mb-2" style={{ color }}>{member.designation}</p>
          <div className="flex flex-col items-center gap-1 mt-auto">
            <span className="text-sm text-slate-500 leading-snug">{member.institution}</span>
            {member.country && (
              <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full mt-1">
                {member.country}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────
// Member Modal
// ──────────────────────────────────────────────────
function MemberModal({
  member,
  nodeConfig,
  onClose
}: {
  member: CommitteeMember;
  nodeConfig: CommitteeSection & { color: string };
  onClose: () => void;
}) {
  const { color } = nodeConfig;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          layoutId={`card-${member.id}`}
          className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
          style={{ 
            boxShadow: `0 32px 64px rgba(0,0,0,0.15), 0 0 0 1px ${color}30, 0 16px 48px ${color}20` 
          }}
        >
          {/* Header strip */}
          <div className="h-1.5 shrink-0" style={{ background: color }} />

          <div className="overflow-y-auto p-8 pt-6 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center mb-6">
              <motion.div layoutId={`avatar-${member.id}`} className="mb-5">
                <CommitteeAvatar initials={member.initials} color={color} image={member.image} size={112} />
              </motion.div>

              <motion.div layoutId={`content-${member.id}`}>
                <span 
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3"
                  style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                >
                  <ResolveIcon name={nodeConfig.icon} className="h-3 w-3" />
                  {nodeConfig.title}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-base font-semibold" style={{ color }}>{member.designation}</p>
              </motion.div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                  <Building2 className="h-4 w-4" style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Institution</p>
                  <p className="text-sm font-medium text-slate-800">{member.institution}</p>
                </div>
              </div>

              {member.country && (
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                    <Globe2 className="h-4 w-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Country</p>
                    <p className="text-sm font-medium text-slate-800">{member.country}</p>
                  </div>
                </div>
              )}

              {member.biography && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4" style={{ color }} />
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Biography</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed" style={{ borderLeft: `2px solid ${color}30`, paddingLeft: "12px" }}>
                    {member.biography}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex-1 flex justify-center items-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: color }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 rounded-xl py-2.5 text-sm font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// ──────────────────────────────────────────────────
// Member Grid (Progressive)
// ──────────────────────────────────────────────────
function MemberGrid({ 
  nodeConfig, 
  onMemberClick 
}: { 
  nodeConfig: CommitteeSection & { color: string };
  onMemberClick: (m: CommitteeMember, config: CommitteeSection & { color: string }) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const data = nodeConfig.members;
  const showCount = expanded ? data.length : Math.min(6, data.length);
  const hasMore = data.length > 6;

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden mb-12"
    >
      <div className="pt-6 pb-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-slate-200" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <ResolveIcon name={nodeConfig.icon} className="h-4 w-4" style={{ color: nodeConfig.color }} />
            <span className="text-sm font-semibold text-slate-700">{nodeConfig.title}</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
              {data.length} Members
            </span>
          </div>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        
        <p className="text-center text-slate-500 text-sm mb-8 max-w-2xl mx-auto">
          {nodeConfig.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <AnimatePresence mode="popLayout">
            {data.slice(0, showCount).map((member) => (
              <MemberCard 
                key={member.id} 
                member={member} 
                nodeConfig={nodeConfig} 
                onClick={onMemberClick} 
              />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              {expanded ? "Show Less" : `View All ${data.length} Members`}
              <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────
// Dashboard Node
// ──────────────────────────────────────────────────
function DashboardNode({ 
  node, 
  isActive, 
  onClick 
}: { 
  node: CommitteeSection & { color: string }; 
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="relative p-5 rounded-2xl border text-left transition-all duration-300 w-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        backgroundColor: isActive ? `${node.color}08` : "#ffffff",
        borderColor: isActive ? `${node.color}40` : "rgba(0,0,0,0.06)",
        boxShadow: isActive 
          ? `0 12px 24px ${node.color}15, 0 0 0 1px ${node.color}20` 
          : "0 4px 12px rgba(0,0,0,0.02)",
      }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          layoutId="active-node-indicator"
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: `2px solid ${node.color}` }}
        />
      )}
      <div className="flex items-center gap-4">
        <div 
          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${node.color}15` }}
        >
          <ResolveIcon name={node.icon} className="h-5 w-5" style={{ color: node.color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base leading-tight mb-1">
            {node.title}
          </h3>
          <span className="text-xs font-medium text-slate-500">
            {node.members.length} Members
          </span>
        </div>
      </div>
    </motion.button>
  );
}

// ──────────────────────────────────────────────────
// Main Page
// ──────────────────────────────────────────────────
export default function CommitteePage() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(
    committeeHierarchy[0]?.nodes[0]?.id || null
  );
  
  const [selectedMember, setSelectedMember] = useState<{
    member: CommitteeMember;
    config: CommitteeSection & { color: string };
  } | null>(null);

  // Auto-calculated statistics
  const stats = useMemo(() => {
    return {
      members: allCommitteeMembers.length,
      institutions: new Set(allCommitteeMembers.map(m => m.institution).filter(Boolean)).size,
      countries: new Set(allCommitteeMembers.map(m => m.country).filter(Boolean)).size,
      categories: committeeSections.length,
    };
  }, []);

  const activeNodeConfig = useMemo(() => {
    for (const domain of committeeHierarchy) {
      const found = domain.nodes.find(n => n.id === activeNodeId);
      if (found) return found;
    }
    return null;
  }, [activeNodeId]);

  return (
    <>
      <PageHeader 
        title="Leadership & Committee" 
        description="An international team of distinguished academicians, researchers and industry experts driving ICRACS 2027."
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <LayoutGroup>
          <div className="max-w-6xl mx-auto">
            
            {/* ── Premium Statistics Header ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: Users, label: "Total Members", value: stats.members },
                { icon: Building2, label: "Institutions", value: stats.institutions },
                { icon: Globe2, label: "Countries", value: stats.countries },
                { icon: Layers, label: "Committees", value: stats.categories },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                    <stat.icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <span className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{stat.value}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* ── Dashboard Grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {committeeHierarchy.map((domain) => (
                <div key={domain.id} className="flex flex-col gap-3">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2">
                    {domain.title}
                  </h2>
                  {domain.nodes.map((node) => (
                    <DashboardNode 
                      key={node.id}
                      node={node}
                      isActive={activeNodeId === node.id}
                      onClick={() => setActiveNodeId(node.id)}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* ── Expanded Member Section ── */}
            <AnimatePresence mode="wait">
              {activeNodeConfig && (
                <MemberGrid 
                  key={activeNodeConfig.id} 
                  nodeConfig={activeNodeConfig} 
                  onMemberClick={(member, config) => setSelectedMember({ member, config })}
                />
              )}
            </AnimatePresence>

          </div>

          {/* ── Member Modal (Shared Element) ── */}
          <AnimatePresence>
            {selectedMember && (
              <MemberModal 
                member={selectedMember.member} 
                nodeConfig={selectedMember.config} 
                onClose={() => setSelectedMember(null)}
              />
            )}
          </AnimatePresence>
          
        </LayoutGroup>
      </Section>
    </>
  );
}
