import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Eye, Cpu, Shield, Bot, Sparkles, BookOpen, AlertCircle } from "lucide-react";

const tracks = [
  {
    id: 1,
    title: "Neural Networks and Deep Learning",
    icon: Brain,
    topics: ["Deep learning architectures", "Neural network optimization", "Convolutional and recurrent networks", "Transformers and attention mechanisms", "Generative models"]
  },
  {
    id: 2,
    title: "Computer Vision and Pattern Recognition",
    icon: Eye,
    topics: ["Object detection and recognition", "Image processing", "Video analysis", "Medical imaging", "Biometric systems", "3D vision"]
  },
  {
    id: 3,
    title: "Smart Systems and IoT Applications",
    icon: Cpu,
    topics: ["Intelligent IoT systems", "Smart city infrastructure", "Industrial automation", "Energy management", "Cyber-physical systems"]
  },
  {
    id: 4,
    title: "Computational Intelligence for Security",
    icon: Shield,
    topics: ["AI-driven cybersecurity", "Privacy-preserving machine learning", "Adversarial systems", "Intelligent threat detection", "Blockchain and AI"]
  },
  {
    id: 5,
    title: "Reinforcement Learning and Control",
    icon: Bot,
    topics: ["Autonomous systems", "Robotics control", "Multi-agent systems", "Decision making algorithms", "Game theory applications"]
  },
  {
    id: 6,
    title: "Emerging Technologies",
    icon: Sparkles,
    topics: ["Quantum machine learning", "Neuromorphic computing", "Edge AI", "Explainable AI", "Brain-computer interfaces"]
  }
];

export default function CallForPapers() {
  return (
    <>
      <PageHeader 
        title="Call for Papers" 
        description="Submit your original research and be part of ICRACS 2026. Explore our diverse tracks covering the latest in AI, Computer Vision, and Smart Systems."
      />

      <Section bg="slate">
        <AnimatedHeading title="Conference Tracks" subtitle="Submissions are welcome in, but not limited to, the following technical tracks:" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <Card key={track.id} className="glass-card hover:-translate-y-1 transition-all border-none">
              <CardHeader className="pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <track.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg leading-tight">Track {track.id}: {track.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {track.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimatedHeading title="Submission Guidelines" centered={false} className="mb-8" />
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 text-lg mb-6">
                Authors are invited to submit full papers (maximum 6 pages) in English, strictly following the AIP conference proceedings template.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-slate-800 font-semibold hover:text-primary">Paper Format (AIP Standards)</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    All papers must be formatted according to the standard AIP dual-column format. The maximum page limit is 6 pages, including all figures, tables, and references. Extra pages may incur additional charges.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-slate-800 font-semibold hover:text-primary">Originality & Plagiarism</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    Submitted papers must be original and not previously published or currently under review elsewhere. All submissions will be checked for plagiarism using Turnitin. Similarity index must be strictly below 15%.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-slate-800 font-semibold hover:text-primary">Review Process</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    ICRACS employs a rigorous double-blind peer-review process. Each paper will be reviewed by at least three independent experts. Acceptance is based on originality, significance, technical soundness, and clarity.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <Card className="bg-blue-50 border-blue-100 shadow-lg">
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle className="flex items-center gap-2 text-primary">
                <AlertCircle className="h-5 w-5" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-white shadow-sm shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Publication</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    All accepted and presented papers will be submitted for inclusion in the <strong>AIP Conference Proceedings</strong> (indexed in Scopus and Web of Science).
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-blue-100">
                <h4 className="font-semibold text-slate-900 mb-4">Acceptance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-blue-100 text-center">
                    <div className="text-2xl font-bold text-primary">24%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Acceptance Rate</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 text-center">
                    <div className="text-2xl font-bold text-primary">3-Layer</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Peer Review</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
