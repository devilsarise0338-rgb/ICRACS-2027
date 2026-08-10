# Code Dump

## AGENTS.md

```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

```

## CLAUDE.md

```md
@AGENTS.md

```

## components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}

```

## eslint.config.mjs

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

```

## next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

```

## next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

## package.json

```json
{
  "name": "icracs2k27",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@base-ui/react": "^1.6.0",
    "@hookform/resolvers": "^5.4.0",
    "@radix-ui/react-accordion": "^1.2.18",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-slot": "^1.3.1",
    "@studio-freight/lenis": "^1.0.42",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "framer-motion": "^12.42.2",
    "gsap": "^3.15.0",
    "lenis": "^1.3.25",
    "lucide-react": "^1.26.0",
    "next": "16.2.11",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.82.0",
    "shadcn": "^4.14.1",
    "swiper": "^14.0.6",
    "tailwind-merge": "^3.6.0",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.11",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

## postcss.config.mjs

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

## README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

## src/app/about/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function About() {
  return (
    <>
      <PageHeader 
        title="About the Conference" 
        description="Learn more about the vision, mission, and scope of ICRACS 2026."
        bgImage="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <AnimatedHeading title="Vision & Mission" centered={false} />
            <div className="prose prose-slate max-w-none prose-lg">
              <p>
                The 3rd International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems (ICRACS 2026) is a premier forum for presenting technological advances and research results in the fields of computational intelligence, machine vision, and interconnected smart systems.
              </p>
              <p>
                Organized by the Department of Computer Science and Engineering at Poornima Institute of Engineering & Technology, the conference aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of AI and Smart Systems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-primary">For Researchers</h3>
              <p className="text-slate-600 leading-relaxed">
                Provide a platform to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of AI, Computer Vision, and Smart Systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-primary">For Industry</h3>
              <p className="text-slate-600 leading-relaxed">
                Foster collaboration between academia and industry. Discover emerging technologies, recruit top talent, and understand how fundamental research is translating into real-world applications.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

```

## src/app/agenda/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, User, Mic } from "lucide-react";

interface Session {
  time: string;
  title: string;
  location: string;
  speaker?: string;
  type: "Keynote" | "Technical" | "Break" | "Networking" | "Panel";
}

const day1: Session[] = [
  { time: "08:30 AM - 09:30 AM", title: "Registration & Welcome Coffee", location: "Registration", type: "Break" },
  { time: "09:30 AM - 10:00 AM", title: "Opening Ceremony", location: "Ceremony", type: "Networking" },
  { time: "10:00 AM - 11:00 AM", title: "Keynote: Dr. Brij Bhushan Gupta", location: "Keynote", speaker: "Dr. Brij Bhushan Gupta", type: "Keynote" },
  { time: "11:00 AM - 11:15 AM", title: "Coffee Break", location: "Break", type: "Break" },
  { time: "11:15 AM - 12:30 PM", title: "Track 1: Neural Networks & Deep Learning", location: "Technical", type: "Technical" },
  { time: "12:30 PM - 01:30 PM", title: "Lunch Break", location: "Break", type: "Break" },
  { time: "01:30 PM - 05:30 PM", title: "Workshop: Computational Intelligence for Sustainable Energy Systems", location: "Workshop", type: "Technical" },
  { time: "05:30 PM - 06:00 PM", title: "Day 1 Networking Session", location: "Networking", type: "Networking" },
];

const day2: Session[] = [
  { time: "09:00 AM - 09:30 AM", title: "Registration & Morning Coffee", location: "Registration", type: "Break" },
  { time: "09:30 AM - 10:30 AM", title: "Keynote: Dr. Dharm Singh", location: "Keynote", speaker: "Dr. Dharm Singh", type: "Keynote" },
  { time: "10:30 AM - 10:45 AM", title: "Coffee Break", location: "Break", type: "Break" },
  { time: "10:45 AM - 12:00 PM", title: "Track 2: Computer Vision & Pattern Recognition", location: "Technical", type: "Technical" },
  { time: "12:00 PM - 01:00 PM", title: "Lunch Break", location: "Break", type: "Break" },
  { time: "01:00 PM - 02:00 PM", title: "Panel Discussion: Neural Networks for Computer Vision", location: "Panel", type: "Panel" },
  { time: "02:00 PM - 03:15 PM", title: "Track 3: Smart Systems & IoT Applications", location: "Technical", type: "Technical" },
  { time: "03:15 PM - 03:30 PM", title: "Tea Break", location: "Break", type: "Break" },
  { time: "03:30 PM - 04:30 PM", title: "Track 4: Computational Intelligence for Security", location: "Technical", type: "Technical" },
  { time: "04:30 PM - 05:30 PM", title: "Award Ceremony & Closing", location: "Ceremony", type: "Networking" },
];

function SessionCard({ session }: { session: Session }) {
  const isBreak = session.type === "Break";
  const isKeynote = session.type === "Keynote";
  
  return (
    <div className={`relative pl-8 md:pl-0 ${isBreak ? 'opacity-80' : ''}`}>
      {/* Timeline line for mobile */}
      <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-slate-200" />
      <div className="md:hidden absolute left-[11px] top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white" />
      
      <Card className={`border-none shadow-sm transition-all duration-300 hover:shadow-md ${isKeynote ? 'bg-blue-50/50 border-l-4 border-l-primary' : 'bg-white'}`}>
        <CardContent className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="md:w-48 shrink-0 flex items-center gap-2 text-primary font-semibold">
            <Clock className="w-4 h-4" />
            {session.time}
          </div>
          
          <div className="flex-grow">
            <div className="flex items-start md:items-center gap-3 mb-2">
              <h3 className={`text-lg font-bold ${isBreak ? 'text-slate-500' : 'text-slate-900'}`}>
                {session.title}
              </h3>
              {isKeynote && (
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shrink-0">
                  Keynote
                </span>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                {session.location}
              </div>
              
              {session.speaker && (
                <div className="flex items-center gap-1.5 font-medium text-primary">
                  <Mic className="w-4 h-4" />
                  {session.speaker}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Agenda() {
  return (
    <>
      <PageHeader 
        title="Conference Agenda" 
        description="Two days of insightful keynotes, technical sessions, and networking opportunities. Plan your conference experience."
        bgImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-200/50 p-1 rounded-xl">
              <TabsTrigger value="day1" className="rounded-lg py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary">
                Day 1 - April 17
              </TabsTrigger>
              <TabsTrigger value="day2" className="rounded-lg py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary">
                Day 2 - April 18
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="day1" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {day1.map((session, i) => (
                <SessionCard key={i} session={session} />
              ))}
            </TabsContent>
            
            <TabsContent value="day2" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {day2.map((session, i) => (
                <SessionCard key={i} session={session} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </Section>
    </>
  );
}

```

## src/app/archive/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, BookOpen } from "lucide-react";
import Link from "next/link";

const archives = [
  {
    year: "2025",
    edition: "2nd",
    date: "2025",
    location: "PIET, Jaipur",
    proceedings: "Various Publications",
    stats: {
      submissions: "285+",
      accepted: "53+",
      acceptanceRate: "18.5%"
    },
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2024",
    edition: "1st",
    date: "April 24-25, 2024",
    location: "PIET, Jaipur",
    proceedings: "CRC Press (Scopus) & IJTE (UGC Index)",
    proceedingsLink: "#",
    stats: {
      submissions: "190+",
      accepted: "50+",
      acceptanceRate: "26.3%"
    },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Archive() {
  return (
    <>
      <PageHeader 
        title="Conference Archive" 
        description="Explore the legacy and impact of previous editions of ICRACS."
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="max-w-5xl mx-auto space-y-12">
          {archives.map((archive, i) => (
            <Card key={i} className="glass-card overflow-hidden border-none group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${archive.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent flex items-end md:items-center p-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">ICRACS {archive.year}</h2>
                      <p className="text-primary font-medium text-lg">{archive.edition} Edition</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{archive.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{archive.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Publication
                    </h3>
                    <p className="text-slate-600 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {archive.proceedings}
                    </p>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Key Statistics
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 text-center">
                        <div className="text-xl font-bold text-primary">{archive.stats.submissions}</div>
                        <div className="text-xs text-slate-500 uppercase font-semibold mt-1">Submissions</div>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 text-center">
                        <div className="text-xl font-bold text-primary">{archive.stats.accepted}</div>
                        <div className="text-xs text-slate-500 uppercase font-semibold mt-1">Accepted</div>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 text-center">
                        <div className="text-xl font-bold text-primary">{archive.stats.acceptanceRate}</div>
                        <div className="text-xs text-slate-500 uppercase font-semibold mt-1">Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  {archive.proceedingsLink && (
                    <Button asChild variant="outline" className="w-full sm:w-auto self-start border-primary/20 hover:bg-primary hover:text-white transition-colors">
                      <Link href={archive.proceedingsLink}>
                        View Proceedings <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

```

## src/app/call-for-papers/page.tsx

```tsx
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
    topics: ["Deep learning architectures", "Neural network optimization", "Convolutional and recurrent networks", "Transformers and attention mechanisms", "Generative models", "Advanced training techniques for intelligent systems"]
  },
  {
    id: 2,
    title: "Computer Vision and Pattern Recognition",
    icon: Eye,
    topics: ["Object detection and recognition", "Image processing and analysis", "Video analysis and understanding", "Medical imaging applications", "Biometric systems", "3D vision and visual perception applications"]
  },
  {
    id: 3,
    title: "Smart Systems and IoT Applications",
    icon: Cpu,
    topics: ["Intelligent IoT systems", "Smart city infrastructure", "Industrial automation", "Energy management systems", "Healthcare applications", "Computational intelligence in cyber-physical systems"]
  },
  {
    id: 4,
    title: "Computational Intelligence for Security and Privacy",
    icon: Shield,
    topics: ["AI-driven cybersecurity", "Privacy-preserving machine learning", "Adversarial systems and defenses", "Blockchain integration with AI", "Biometric security systems", "Intelligent threat detection mechanisms"]
  },
  {
    id: 5,
    title: "Reinforcement Learning and Intelligent Control",
    icon: Bot,
    topics: ["Reinforcement learning algorithms", "Multi-agent systems", "Intelligent control strategies", "Robotics applications", "Game-theoretic learning", "Adaptive control in smart environments"]
  },
  {
    id: 6,
    title: "Emerging Technologies and Applications",
    icon: Sparkles,
    topics: ["Quantum machine learning", "Neuromorphic computing", "Edge AI and distributed intelligence", "Explainable AI and interpretability", "AI ethics and responsible AI", "Brain-computer interfaces"]
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
                Authors are invited to submit full papers (maximum 8 pages) in English, strictly following the AIP conference proceedings template.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-slate-800 font-semibold hover:text-primary">Paper Format (AIP Standards)</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    All papers must be formatted according to the standard AIP dual-column format. The maximum page limit is 8 pages, including all figures, tables, and references. Extra pages may incur additional charges.
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
                    <div className="text-2xl font-bold text-primary">16-18%</div>
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

```

## src/app/call-for-special-session/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const specialSessions = [
  {
    id: 1,
    title: "Trusted and Secure Assistive Robotics for Physically Challenged Individuals",
    chairs: ["Dr. Priyanka Mishra (Session Chair)"]
  },
  {
    id: 2,
    title: "Quantum Artificial Intelligence: Algorithms, Architectures, and Applications",
    chairs: ["Dr. Varun Malik (Session Chair)", "Ms. Kimmi Gupta (Session Co-Chair)", "Dr. Mithlesh Arya (Session Co-Chair)"]
  },
  {
    id: 3,
    title: "Quantum Technologies for AI, Cryptography, and Complex Systems",
    chairs: ["Dr. Tanmay Kasbe (Session Chair)", "Dr. Sailesh Iyer (Session Co-Chair)", "Dr. Dipti Durgesh Patil (Session Co-Chair)"]
  },
  {
    id: 4,
    title: "AI-Driven Computer Vision and Federated Learning for Scalable Healthcare Applications",
    chairs: ["Dr. Adithya Padthe (Session Chair)"]
  },
  {
    id: 5,
    title: "Machine Learning for Healthcare and Biomedical Applications",
    chairs: ["Dr. Anita (Session Chair)"]
  },
  {
    id: 6,
    title: "Machine Learning and Deep Learning Techniques for IoT Applications",
    chairs: ["Rajiv Gandhi (Session Chair)", "Prof. (Dr) Jimmy Singla (Session Co-Chair)"]
  },
  {
    id: 7,
    title: "Unified AI: Vision, Language, and Learning for Smart Environments.",
    chairs: ["Dr. Yogesh Kumar Sharma (Session Chair)", "Dr. Sunayana Kundan Shivthare (Session Co-Chair)"]
  }
];

export default function CallForSpecialSession() {
  return (
    <>
      <PageHeader 
        title="Approved Special Sessions" 
        description="Explore the approved special sessions organized by leading researchers in AI, Computer Vision, and Smart Systems."
        bgImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <AnimatedHeading title="Special Sessions" subtitle="Submit your paper directly to these specialized tracks:" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specialSessions.map((session) => (
            <Card key={session.id} className="glass-card hover:-translate-y-1 transition-all border-none shadow-lg">
              <CardHeader className="pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="font-bold text-xl">{session.id}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight pt-1">{session.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Session Chairs
                </h4>
                <ul className="space-y-2 mb-6">
                  {session.chairs.map((chair, i) => (
                    <li key={i} className="text-slate-700 font-medium bg-slate-50 p-2 rounded-md border border-slate-100">
                      {chair}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Button size="lg" asChild>
             <Link href="/call-for-papers">
               <FileText className="mr-2 w-5 h-5" /> Back to Call for Papers
             </Link>
           </Button>
        </div>
      </Section>
    </>
  );
}

```

## src/app/committee/page.tsx

```tsx
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

```

## src/app/contact/page.tsx

```tsx
"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Have questions about ICRACS 2026? Reach out to our organizing team."
        bgImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed">
                For any inquiries regarding paper submission, registration, or general information about the conference, please don't hesitate to contact us. We will get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid gap-6">
              <Card className="glass-card border-none hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-sm text-slate-600">Poornima Institute of Engineering & Technology<br />ISI-2, RIICO Institutional Area, Sitapura<br />Jaipur, Rajasthan 302022, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a href="mailto:icracs@poornima.org" className="text-sm text-slate-600 hover:text-primary transition-colors">icracs@poornima.org</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-sm text-slate-600">+91 141 2770289</p>
                    <p className="text-sm text-slate-600">+91 99285 55222 (Convener)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="glass-card border-none shadow-xl overflow-hidden h-[600px]">
            <CardContent className="p-0 h-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.218525091722!2d75.81745481504263!3d26.769352983189495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee8eb9eeeaad283!2sPoornima%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1647864456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="absolute inset-0"
              />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

```

## src/app/error.tsx

```tsx
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 relative z-40">
      <div className="text-center px-4">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-destructive/10 flex items-center justify-center text-destructive">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        <Button 
          onClick={() => reset()} 
          size="lg" 
          className="shadow-md hover:shadow-lg transition-all"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          Try again
        </Button>
      </div>
    </div>
  );
}

```

## src/app/globals.css

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-sans);
  
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  /* Academic Blue Theme */
  --background: oklch(0.99 0.01 240);
  --foreground: oklch(0.15 0.05 240);
  
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.05 240);
  
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.05 240);
  
  /* Primary: Deep Blue */
  --primary: oklch(0.45 0.15 250);
  --primary-foreground: oklch(0.98 0.01 240);
  
  /* Secondary: Light Blue */
  --secondary: oklch(0.95 0.05 250);
  --secondary-foreground: oklch(0.3 0.1 250);
  
  --muted: oklch(0.96 0.02 240);
  --muted-foreground: oklch(0.55 0.05 240);
  
  --accent: oklch(0.96 0.05 250);
  --accent-foreground: oklch(0.3 0.1 250);
  
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.98 0 0);
  
  --border: oklch(0.9 0.02 240);
  --input: oklch(0.9 0.02 240);
  --ring: oklch(0.45 0.15 250);
  
  --radius: 0.75rem;
  
  /* Charts */
  --chart-1: oklch(0.45 0.15 250);
  --chart-2: oklch(0.6 0.1 220);
  --chart-3: oklch(0.3 0.1 260);
  --chart-4: oklch(0.7 0.1 280);
  --chart-5: oklch(0.8 0.1 240);
}

.dark {
  --background: oklch(0.1 0.05 240);
  --foreground: oklch(0.95 0.01 240);
  
  --card: oklch(0.15 0.05 240);
  --card-foreground: oklch(0.95 0.01 240);
  
  --popover: oklch(0.15 0.05 240);
  --popover-foreground: oklch(0.95 0.01 240);
  
  --primary: oklch(0.6 0.15 250);
  --primary-foreground: oklch(0.1 0.05 240);
  
  --secondary: oklch(0.2 0.05 250);
  --secondary-foreground: oklch(0.95 0.01 240);
  
  --muted: oklch(0.2 0.05 240);
  --muted-foreground: oklch(0.7 0.05 240);
  
  --accent: oklch(0.2 0.1 250);
  --accent-foreground: oklch(0.95 0.01 240);
  
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.98 0 0);
  
  --border: oklch(0.25 0.05 240);
  --input: oklch(0.25 0.05 240);
  --ring: oklch(0.6 0.15 250);
  
  --chart-1: oklch(0.6 0.15 250);
  --chart-2: oklch(0.7 0.1 220);
  --chart-3: oklch(0.8 0.1 260);
  --chart-4: oklch(0.9 0.1 280);
  --chart-5: oklch(0.5 0.1 240);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans scroll-smooth;
  }
}

@layer utilities {
  .glass {
    @apply bg-white/70 dark:bg-black/70 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg;
  }
  
  .glass-card {
    @apply bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-xl transition-all duration-300;
  }
  
  .glass-card:hover {
    @apply shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgb(0,0,0,0.3)] -translate-y-1;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400;
  }
}

/* Lenis smooth scrolling base styles */
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
```

## src/app/important-dates/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Timeline, TimelineEvent } from "@/components/ui/timeline";

const dates: TimelineEvent[] = [
  { event: "Paper Submission Deadline", date: "January 15, 2026", isPast: false },
  { event: "Notification of Acceptance", date: "February 28, 2026", isPast: false },
  { event: "Camera-Ready Submission", date: "March 15, 2026", isPast: false },
  { event: "Early Bird Registration", date: "March 20, 2026", isPast: false },
  { event: "Registration with Late Fee", date: "April 05, 2026", isPast: false },
  { event: "Conference Dates", date: "April 17-18, 2026", isPast: false },
];

export default function ImportantDates() {
  return (
    <>
      <PageHeader 
        title="Important Dates" 
        description="Mark your calendars for ICRACS 2026. Keep track of submission and registration deadlines."
        bgImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Conference Timeline</h2>
            <Timeline events={dates} />
          </div>
        </div>
      </Section>
    </>
  );
}

```

## src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { ScrollFeatures } from "@/components/layout/scroll-features";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ICRACS 2026 - International Conference on Recent Advances in AI, Computer Vision & Smart Systems",
  description:
    "3rd International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems organized by Poornima Institute of Engineering & Technology, Jaipur on April 17-18, 2026",
  keywords:
    "ICRACS, AI, Computer Vision, Smart Systems, Conference, PIET, Jaipur, Artificial Intelligence, Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 min-h-screen flex flex-col`}
      >
        <LenisProvider>
          <ScrollFeatures />
          <Navbar />
          {/*
           * No global pt-* here — the Hero page has its own full-screen
           * section that accounts for the transparent navbar overlay.
           * All other pages use PageHeader or their own top padding.
           */}
          <main className="flex-1 flex flex-col relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

```

## src/app/loading.tsx

```tsx
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 relative z-40">
      <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        <Loader2 className="w-8 h-8 text-primary animate-spin relative z-10" />
      </div>
      <h2 className="text-xl font-semibold text-slate-800 animate-pulse">Loading ICRACS 2026...</h2>
    </div>
  );
}

```

## src/app/not-found.tsx

```tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
      
      <div className="container px-4 text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
          <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
          <FileQuestion className="w-12 h-12" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-10 text-lg">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-primary/25">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white hover:bg-slate-50 border-slate-200">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

```

## src/app/page.tsx

```tsx
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Shield, Zap, Award, Trophy, GraduationCap, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About PIET */}
      <Section bg="slate" id="about-piet">
        <AnimatedHeading 
          title="About PIET" 
          subtitle="Poornima Institute of Engineering & Technology - A Premier Institution in Engineering Education"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
                alt="PIET Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
                alt="PIET Lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Excellence in Education Since 2007</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Poornima Institute of Engineering & Technology, Jaipur, PIET, a premier institution in engineering education was established in the academic year 2007. PIET is affiliated to Rajasthan Technical University and approved by AICTE.
                </p>
                <p>
                  The institution aims at providing world-class technical and scientific education that can develop a professional outlook in every walk of life. PIET has been continuously striving for excellence in engineering education and research.
                </p>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">Key Achievements</h4>
                  <ul className="space-y-3">
                    {["1st institution to offer B.Tech CSE in Regional language",
                      "Only institute in Rajasthan funded by AICTE with Rs. 55 Lakh for IDEA Lab",
                      "Granted Rs. 12.84 Lakh for Neural Network & Deep Learning Lab under MODROB Scheme",
                      "Received research grants of more than Rs. 50 Lakh in 2019-20 & 2020-21"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Award, title: "NAAC Accredited", desc: "by National Assessment Council" },
                { icon: Trophy, title: "PLATINUM", desc: "AICTE-CII Survey Rating" },
                { icon: GraduationCap, title: "NBA Accredited", desc: "CSE and Civil Programs" },
                { icon: Users, title: "3rd in QIV", desc: "Quality of Infrastructure" }
              ].map((stat, i) => (
                <Card key={i} className="text-center glass-card border-none hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-2">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{stat.title}</h4>
                    <p className="text-xs text-slate-500">{stat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* About ICRACS */}
      <Section bg="white" id="about-icracs">
        <AnimatedHeading 
          title="About ICRACS 2026" 
          subtitle="International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems"
        />
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            ICRACS2026 focuses on the revolutionary applications of Artificial Intelligence, Computer Vision, and Smart Systems in emerging technologies. The conference serves as a premier platform for researchers, academicians, and industry professionals to share innovative AI solutions that enhance efficiency, stability, robustness, and security of smart systems through computational intelligence paradigms.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-10 text-slate-900">Key Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Brain, title: "Neural Networks & Deep Learning", desc: "Architectures, optimization, convolutional networks, transformers." },
            { icon: Eye, title: "Computer Vision", desc: "Object detection, image processing, medical imaging, 3D vision." },
            { icon: Zap, title: "Smart Systems & IoT", desc: "Smart city infrastructure, industrial automation, cyber-physical systems." },
            { icon: Shield, title: "Computational Security", desc: "AI-driven cybersecurity, privacy-preserving ML, threat detection." },
          ].map((area, i) => (
            <Card key={i} className="glass-card border-slate-100 shadow-lg hover:shadow-xl hover:border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <area.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{area.title}</h4>
                <p className="text-sm text-slate-600">{area.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass bg-slate-50/50 border-slate-200">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Conference Topics Include</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Neural Networks", "Evolutionary Computation", "Computer Vision", "Smart Energy Systems", 
                "IoT Applications", "Swarm Intelligence", "Genetic Algorithms", "Reinforcement Learning",
                "Hybrid Intelligent Systems", "Security & Privacy", "Quantum Machine Learning", 
                "Neuromorphic Computing", "Edge AI", "Explainable AI", "Brain-Computer Interfaces"
              ].map((topic, i) => (
                <Badge key={i} variant="secondary" className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border-slate-200 shadow-sm hover:bg-primary hover:text-white transition-colors">
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}

```

## src/app/publication/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, AlertCircle, FileText, Globe } from "lucide-react";

export default function Publication() {
  return (
    <>
      <PageHeader 
        title="Publication" 
        description="Information regarding conference proceedings and special issue journals for ICRACS 2026."
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <AnimatedHeading title="Conference Proceedings" centered={false} className="mb-0" />
            <p className="text-slate-600 text-lg leading-relaxed">
              All accepted, registered, and presented papers will be submitted for publication in the prestigious <strong>AIP Conference Proceedings</strong>. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              AIP Conference Proceedings report findings presented at many of the most important scientific meetings around the world. Published proceedings are valuable as topical status reports providing quick access to information before it appears in the traditional journal literature.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                <span className="font-semibold text-slate-800">Scopus Indexed</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <span className="font-semibold text-slate-800">Web of Science</span>
              </div>
            </div>
          </div>

          <Card className="glass-card shadow-xl border-none">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Important Guidelines</h3>
              
              <ul className="space-y-4">
                {[
                  "Plagiarism policy strictly applies. Similarity index should be below 15%.",
                  "Formatting must follow the AIP Template strictly.",
                  "At least one author must register and present the paper at the conference.",
                  "The organizers reserve the right to reject papers that do not meet the quality standards.",
                  "Publication fee is included in the registration fee."
                ].map((guideline, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

```

## src/app/registration/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, CreditCard, Landmark, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const importantDates = [
  { event: "Paper Submission Deadline", date: "February 17, 2026" },
  { event: "Notification of Acceptance", date: "March 17, 2026" },
  { event: "Camera-Ready Submission", date: "March 22, 2026" },
  { event: "Early Bird Registration", date: "March 22, 2026" },
  { event: "Registration with Late Fee", date: "March 26, 2026" },
  { event: "Conference Dates", date: "April 17-18, 2026" },
];

const fees = [
  { category: "Student Author", early: "₹ 7,000", late: "₹ 8,000" },
  { category: "Research Scholar", early: "₹ 9,000", late: "₹ 10,000" },
  { category: "Faculty/Academic", early: "₹ 10,000", late: "₹ 11,000" },
  { category: "Industry Professional", early: "₹ 11,000", late: "₹ 12,000" },
  { category: "International Delegate", early: "$ 200", late: "$ 250" },
];

export default function Registration() {
  return (
    <>
      <PageHeader 
        title="Registration & Important Dates" 
        description="Secure your spot at ICRACS 2026. Explore our registration categories, deadlines, and payment information."
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-slate-900">Important Dates</h2>
            </div>
            
            <Card className="glass-card border-none shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50/50">
                    <TableRow>
                      <TableHead className="w-[60%] py-4 text-slate-900 font-semibold">Event</TableHead>
                      <TableHead className="py-4 text-slate-900 font-semibold text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {importantDates.map((item, index) => (
                      <TableRow key={index} className="hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-700 py-4">{item.event}</TableCell>
                        <TableCell className="text-right text-primary font-semibold py-4">{item.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-slate-900">Registration Fees</h2>
            </div>
            
            <Card className="glass-card border-none shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-primary/5">
                    <TableRow>
                      <TableHead className="w-[50%] py-4 text-slate-900 font-semibold">Category</TableHead>
                      <TableHead className="py-4 text-slate-900 font-semibold text-center">Early Bird</TableHead>
                      <TableHead className="py-4 text-slate-900 font-semibold text-right">Late Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fees.map((item, index) => (
                      <TableRow key={index} className="hover:bg-slate-50/50 transition-colors">
                        <TableCell className="font-medium text-slate-700 py-4">{item.category}</TableCell>
                        <TableCell className="text-center font-semibold text-slate-900 py-4">{item.early}</TableCell>
                        <TableCell className="text-right font-semibold text-destructive py-4">{item.late}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <AnimatedHeading title="Payment Information" subtitle="Bank Details for NEFT / RTGS / IMPS" />
        
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card shadow-xl border-primary/20 bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 text-primary/5 rotate-12">
              <Landmark className="h-64 w-64" />
            </div>
            <CardContent className="p-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Account Name</p>
                  <p className="text-lg font-bold text-slate-900">POORNIMA INSTITUTE PART TWO</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Account Number</p>
                  <p className="text-lg font-bold text-slate-900 font-mono tracking-tight">50200067728688</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="text-lg font-bold text-slate-900">HDFC BANK LTD.</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">IFSC Code</p>
                  <p className="text-lg font-bold text-slate-900 font-mono">HDFC0003873</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Branch</p>
                  <p className="text-lg font-bold text-slate-900">F-129 RIICO INDUSTRIAL AREA SITAPURA JAIPUR</p>
                </div>
                <div className="md:col-span-2 mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Important Note</p>
                  <p className="text-slate-700">Any IEEE/ACM Member will be eligible for fee waive of Rs. 2000/25$ as applicable.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Keep your transaction ID ready for the registration form.
                </p>
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-primary/25 transition-all">
                  Proceed to Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

```

## src/app/reviewer/page.tsx

```tsx
"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, FileCheck, Star, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  affiliation: z.string().min(2, "Affiliation is required"),
  designation: z.string().min(2, "Designation is required"),
  expertise: z.string().min(10, "Please provide your areas of expertise"),
  linkedInUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  scholarUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export default function Reviewer() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      affiliation: "",
      designation: "",
      expertise: "",
      linkedInUrl: "",
      scholarUrl: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Handle form submission here
    alert("Application submitted successfully!");
    form.reset();
  }

  const benefits = [
    { icon: BadgeCheck, title: "Certificate of Appreciation", desc: "Receive a formal certificate acknowledging your contribution to the conference." },
    { icon: Users, title: "Networking", desc: "Connect with leading researchers and academicians in your field of expertise." },
    { icon: Star, title: "Recognition", desc: "Your name and affiliation will be listed on the conference website and proceedings." },
    { icon: FileCheck, title: "Early Access", desc: "Get early access to the latest research and developments in your domain." },
  ];

  return (
    <>
      <PageHeader 
        title="Join as a Reviewer" 
        description="Contribute to the academic community by joining our esteemed panel of reviewers for ICRACS 2026."
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Join Us?</h2>
              <p className="text-slate-600 leading-relaxed">
                Reviewers play a crucial role in maintaining the high standard of the conference. We invite domain experts, researchers, and academicians with a strong publication record to join our technical program committee.
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100 shrink-0 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="lg:col-span-3 glass-card shadow-xl border-none">
            <CardHeader className="bg-primary/5 pb-6 border-b border-slate-100">
              <CardTitle className="text-2xl text-slate-900">Reviewer Application Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Full Name *</label>
                    <input 
                      {...form.register("fullName")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Dr. John Doe"
                    />
                    {form.formState.errors.fullName && <p className="text-xs text-destructive">{form.formState.errors.fullName.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Email Address *</label>
                    <input 
                      {...form.register("email")}
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="john.doe@university.edu"
                    />
                    {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Affiliation/University *</label>
                    <input 
                      {...form.register("affiliation")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Stanford University"
                    />
                    {form.formState.errors.affiliation && <p className="text-xs text-destructive">{form.formState.errors.affiliation.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Designation *</label>
                    <input 
                      {...form.register("designation")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Associate Professor"
                    />
                    {form.formState.errors.designation && <p className="text-xs text-destructive">{form.formState.errors.designation.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Areas of Expertise *</label>
                  <textarea 
                    {...form.register("expertise")}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                    placeholder="Machine Learning, Computer Vision, Neural Networks..."
                  />
                  {form.formState.errors.expertise && <p className="text-xs text-destructive">{form.formState.errors.expertise.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Google Scholar URL</label>
                    <input 
                      {...form.register("scholarUrl")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="https://scholar.google.com/..."
                    />
                    {form.formState.errors.scholarUrl && <p className="text-xs text-destructive">{form.formState.errors.scholarUrl.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">LinkedIn URL</label>
                    <input 
                      {...form.register("linkedInUrl")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="https://linkedin.com/in/..."
                    />
                    {form.formState.errors.linkedInUrl && <p className="text-xs text-destructive">{form.formState.errors.linkedInUrl.message}</p>}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to review at least 3-4 papers within the stipulated time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

```

## src/app/robots.ts

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://icracs.poornima.org/sitemap.xml',
  }
}

```

## src/app/sitemap.ts

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://icracs.poornima.org'
  
  const routes = [
    '',
    '/about',
    '/call-for-papers',
    '/committee',
    '/speakers',
    '/registration',
    '/agenda',
    '/archive',
    '/call-for-special-session',
    '/reviewer',
    '/important-dates',
    '/venue',
    '/contact',
    '/publication',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

```

## src/app/speakers/page.tsx

```tsx
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
        title="Keynote Speakers"
        description="Distinguished experts sharing their insights at ICRACS 2026 — leading researchers and industry pioneers at the forefront of AI, Computer Vision & Smart Systems."
        bgImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      />

      {/* ── Keynote Speakers ── */}
      <Section bg="slate">
        <AnimatedHeading
          title="Keynote Speakers"
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
            subtitle="Everything you need to know about keynote sessions at ICRACS 2026"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Keynote Sessions */}
            <Card className="glass-card border-slate-100 shadow-sm col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mic2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Keynote Sessions</h3>
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

```

## src/app/venue/page.tsx

```tsx
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Train, Car, Hotel } from "lucide-react";

export default function Venue() {
  return (
    <>
      <PageHeader 
        title="Conference Venue" 
        description="Experience the vibrant culture and heritage of Jaipur while attending ICRACS 2026."
        bgImage="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1599661559882-9cb8c1e838f7?q=80&w=2070&auto=format&fit=crop" 
              alt="Hawa Mahal, Jaipur" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <AnimatedHeading title="Welcome to Jaipur" centered={false} className="mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Jaipur, affectionately known as the "Pink City," is the capital of Rajasthan. A UNESCO World Heritage Site, it is renowned for its magnificent palaces, historic forts, vibrant culture, and exquisite handicrafts. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              The city forms a part of the famous Golden Triangle tourist circuit along with Delhi and Agra. April in Jaipur offers pleasant weather, making it an ideal time to explore the architectural marvels like Amer Fort, City Palace, and Hawa Mahal after conference hours.
            </p>
          </div>
        </div>

        <AnimatedHeading title="How to Reach" subtitle="PIET Campus is well connected by all major modes of transportation" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Plane,
              title: "By Air",
              desc: "Jaipur International Airport (JAI) is just 8 km (15 mins drive) from the PIET campus. It connects to all major Indian cities and international destinations."
            },
            {
              icon: Train,
              title: "By Train",
              desc: "Jaipur Junction (JP) is 20 km away. Durgapura Railway Station (DPA) is closer, at just 10 km. Both are well connected to major cities."
            },
            {
              icon: Car,
              title: "By Road",
              desc: "Located in Sitapura Industrial Area, just off the NH-52 (Tonk Road). Easily accessible via Ola/Uber cabs from anywhere in the city."
            },
            {
              icon: Hotel,
              title: "Accommodation",
              desc: "Numerous budget and luxury hotels are available near the airport and Tonk Road area, within a 5-10 km radius of the campus."
            }
          ].map((item, i) => (
            <Card key={i} className="glass-card border-none hover:-translate-y-1 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

```

## src/components/home/Hero.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{ backgroundImage: `url(${src})`, transition: 'transform 10s ease-out' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-slate-900/70 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white">
              <span className="text-primary font-extrabold tracking-tight">ICRACS</span> 2026
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-slate-200">
              International Conference on Recent Advances in
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-slate-300">
              Artificial Intelligence, Computer Vision & Smart Systems
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 mb-10"
          >
            <div className="flex items-center gap-3 text-slate-300 text-lg">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Poornima Institute of Engineering and Technology, Jaipur</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-lg">
              <Calendar className="h-6 w-6 text-primary" />
              <span>April 17-18, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-lg">
              <span className="flex h-2 w-2 rounded-full bg-green-500 ml-2" />
              <span className="ml-2 font-medium">Hybrid Mode</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md">
              <Link href="/call-for-papers">Submit Paper</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

```

## src/components/layout/Footer.tsx

```tsx
import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">ICRACS 2026</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              3rd International Conference on Recent Advances in Artificial Intelligence, 
              Computer Vision & Smart Systems organized by Poornima Institute of 
              Engineering & Technology, Jaipur.
            </p>
            <div className="pt-4 flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/50 hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/50 hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/call-for-papers" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Registration
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Conference Agenda
                </Link>
              </li>
              <li>
                <Link href="/committee" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Organizing Committee
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Keynote Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Special Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/call-for-special-session" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Users className="h-4 w-4" /> Special Sessions
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Past Conferences
                </Link>
              </li>
              <li>
                <Link href="/reviewer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Users className="h-4 w-4" /> Join as Reviewer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Poornima Institute of Engineering & Technology, ISI-2, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:icracs@poornima.org" className="hover:text-primary transition-colors">
                  icracs@poornima.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 141 2770289</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} ICRACS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

## src/components/layout/LenisProvider.tsx

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

```

## src/components/layout/Navbar.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/call-for-papers", label: "Call For Papers" },
  { href: "/call-for-special-session", label: "Special Session" },
  { href: "/agenda", label: "Agenda" },
  { href: "/registration", label: "Registration" },
  { href: "/committee", label: "Committee" },
  { href: "/speakers", label: "Speakers" },
  { href: "/reviewer", label: "Reviewer" },
  { href: "/archive", label: "Archive" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Set initial state in case page loads already scrolled
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
      style={{ height: "auto" }}
    >
      <div className="mx-auto max-w-7xl">
        <nav
          className="flex items-center justify-between px-4 md:px-6 lg:px-8"
          style={{ minHeight: "80px" }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="ICRACS 2026 – Home"
          >
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/pietLogoUpdated.png"
                alt="PIET Logo"
                fill
                className="object-contain"
                priority
                sizes="56px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg font-extrabold tracking-tight transition-colors ${
                  scrolled || !isHomePage ? "text-blue-700" : "text-white drop-shadow"
                }`}
              >
                ICRACS 2026
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled || !isHomePage
                    ? "text-gray-500"
                    : "text-white/80 drop-shadow"
                }`}
              >
                PIET · Jaipur
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-xs font-medium transition-colors duration-200 rounded-md group ${
                    isActive
                      ? scrolled || !isHomePage
                        ? "text-blue-600"
                        : "text-white"
                      : scrolled || !isHomePage
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/85 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600 transition-all duration-200 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Register CTA */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md shadow-sm transition-colors"
              >
                <Link href="/registration">Register Now</Link>
              </Button>
            </div>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || !isHomePage
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-200 shadow-lg`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-3 pt-3 border-t border-gray-100">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

```

## src/components/layout/scroll-features.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollFeatures() {
  const { scrollYProgress, scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button 
            onClick={scrollToTop} 
            size="icon" 
            className="rounded-full shadow-lg hover:shadow-xl w-12 h-12"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </>
  );
}

```

## src/components/speakers/SpeakerCards.tsx

```tsx
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
              Keynote Speaker
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

```

## src/components/speakers/SpeakerPanel.tsx

```tsx
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

```

## src/components/ui/accordion.tsx

```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

## src/components/ui/animated-heading.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export function AnimatedHeading({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
}: AnimatedHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn("text-3xl md:text-4xl font-bold text-slate-900 mb-4", titleClassName)}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

```

## src/components/ui/badge.tsx

```tsx
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }

```

## src/components/ui/button.tsx

```tsx
"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

## src/components/ui/card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

## src/components/ui/command.tsx

```tsx
"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group"
import { SearchIcon, CheckIcon } from "lucide-react"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
  children: React.ReactNode
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="p-1 pb-0">
      <InputGroup className="h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="size-4 shrink-0 opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```

## src/components/ui/committee-card.tsx

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface CommitteeCardProps {
  name: string;
  title: string;
  affiliation: string;
}

export function CommitteeCard({ name, title, affiliation }: CommitteeCardProps) {
  return (
    <Card className="glass-card overflow-hidden hover:-translate-y-1 transition-transform border-none">
      <CardContent className="p-0">
        <div className="h-24 bg-gradient-to-r from-primary/10 to-blue-500/10" />
        <div className="px-6 pb-6 relative">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center -mt-8 mb-4 border border-slate-100">
            <User className="w-8 h-8 text-primary/60" />
          </div>
          <h4 className="font-bold text-lg text-slate-900 leading-tight mb-1">{name}</h4>
          <p className="text-sm font-medium text-primary mb-2">{title}</p>
          <p className="text-sm text-slate-500 line-clamp-2">{affiliation}</p>
        </div>
      </CardContent>
    </Card>
  );
}

```

## src/components/ui/dialog.tsx

```tsx
"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-2 right-2 h-7 w-7"
                size="icon"
              />
            }
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "font-heading text-base leading-none font-medium",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

```

## src/components/ui/input-group.tsx

```tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
        "inline-end":
          "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
        "block-start":
          "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset"
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

```

## src/components/ui/input.tsx

```tsx
import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```

## src/components/ui/page-header.tsx

```tsx
"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  bgImage?: string;
}

export function PageHeader({ title, description, bgImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}

```

## src/components/ui/section.tsx

```tsx
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClass?: string;
  bg?: "white" | "slate" | "gradient" | "transparent";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClass, children, bg = "transparent", ...props }, ref) => {
    
    const bgClasses = {
      white: "bg-white",
      slate: "bg-slate-50",
      gradient: "bg-gradient-to-b from-slate-50 to-white",
      transparent: "bg-transparent",
    };

    return (
      <section
        ref={ref}
        className={cn(`py-16 md:py-24 relative overflow-hidden`, bgClasses[bg], className)}
        {...props}
      >
        <div className={cn("container mx-auto px-4 md:px-6 relative z-10", containerClass)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

```

## src/components/ui/sheet.tsx

```tsx
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3 h-7 w-7"
                size="icon"
              />
            }
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

## src/components/ui/speaker-card.tsx

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export interface Speaker {
  name: string;
  affiliation: string;
  image: string;
  expertise: string[];
  bio: string;
}

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Card className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 border-none group">
      <CardContent className="p-0 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-auto">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${speaker.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
        </div>
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <Quote className="h-8 w-8 text-primary/20 mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{speaker.name}</h3>
          <p className="text-primary font-medium mb-4">{speaker.affiliation}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {speaker.expertise.map((exp, idx) => (
              <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                {exp}
              </Badge>
            ))}
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
            {speaker.bio}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

```

## src/components/ui/stat-card.tsx

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export function StatCard({ icon: Icon, title, desc }: StatCardProps) {
  return (
    <Card className="text-center glass-card border-none hover:-translate-y-2 transition-transform duration-300">
      <CardContent className="p-6 flex flex-col items-center gap-3">
        <div className="p-3 rounded-full bg-primary/10 text-primary mb-2">
          <Icon className="h-6 w-6" />
        </div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-500">{desc}</p>
      </CardContent>
    </Card>
  );
}

```

## src/components/ui/table.tsx

```tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

## src/components/ui/tabs.tsx

```tsx
"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }

```

## src/components/ui/textarea.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```

## src/components/ui/timeline.tsx

```tsx
import { CalendarCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface TimelineEvent {
  event: string;
  date: string;
  isPast?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8 py-4">
      {events.map((item, index) => (
        <div key={index} className="relative pl-8">
          <div className="absolute -left-[21px] top-1">
            <div className={`p-2 rounded-full ring-4 ring-white shadow-sm ${item.isPast ? 'bg-slate-300' : 'bg-primary'}`}>
              <CalendarCheck className={`w-4 h-4 ${item.isPast ? 'text-slate-500' : 'text-white'}`} />
            </div>
          </div>
          
          <Card className="glass-card border-none hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-5">
              <h3 className={`text-lg font-bold mb-1 ${item.isPast ? 'text-slate-500' : 'text-slate-900'}`}>{item.event}</h3>
              <p className={`font-semibold ${item.isPast ? 'text-slate-400' : 'text-primary'}`}>{item.date}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

```

## src/components/ui/track-card.tsx

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TrackCardProps {
  id: number;
  title: string;
  icon: LucideIcon;
  topics: string[];
}

export function TrackCard({ id, title, icon: Icon, topics }: TrackCardProps) {
  return (
    <Card className="glass-card hover:-translate-y-1 transition-all border-none">
      <CardHeader className="pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <CardTitle className="text-lg leading-tight">Track {id}: {title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topics.map((topic, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
              {topic}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

```

## src/data/committee.ts

```ts
export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  institution?: string;
  country?: string;
  image?: string | null;
  email?: string;
  linkedin?: string;
  biography?: string;
  initials: string;
}

export interface CommitteeSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  members: CommitteeMember[];
}

function getInitials(name: string): string {
  const parts = name.replace(/^(Mr\.|Dr\.|Prof\.|Mrs\.)\s*/i, '').split(' ').filter(Boolean);
  if (parts.length === 0) return 'IC';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const honorarypatronMembers: CommitteeMember[] = [
  {
    id: "mrharisinghdirector-0",
    name: "Mr. Hari Singh Director",
    designation: "Director",
    institution: "Poornima Group",
    country: "Jaipur",
    image: null,
    initials: getInitials("Mr. Hari Singh Director")
  },
  {
    id: "mrmkmshahdirector-1",
    name: "Mr. MKM Shah Director",
    designation: "Director",
    institution: "Poornima Group",
    country: "Jaipur",
    image: null,
    initials: getInitials("Mr. MKM Shah Director")
  }
];

export const honorarychairMembers: CommitteeMember[] = [
  {
    id: "drbrijbhushangupta-0",
    name: "Dr. Brij Bhushan Gupta",
    designation: "Board of governors",
    institution: "IEEE CT Society",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Brij Bhushan Gupta")
  }
];

export const generalchairMembers: CommitteeMember[] = [
  {
    id: "drdharamsingh-0",
    name: "Dr. Dharam Singh",
    designation: "Professor of Computer Science",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Dharam Singh")
  }
];

export const conferencechairMembers: CommitteeMember[] = [
  {
    id: "profdrdineshgoyal-0",
    name: "Prof. (Dr.) Dinesh Goyal",
    designation: "Professor and Prinicipal",
    institution: "PIET",
    country: undefined,
    image: null,
    initials: getInitials("Prof. (Dr.) Dinesh Goyal")
  }
];

export const programchairMembers: CommitteeMember[] = [
  {
    id: "drbudeshkanwar-0",
    name: "Dr. Budesh Kanwar",
    designation: "HOD",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Budesh Kanwar")
  }
];

export const organizingchairMembers: CommitteeMember[] = [
  {
    id: "drshiprabhatia-0",
    name: "Dr. Shipra Bhatia",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Shipra Bhatia")
  },
  {
    id: "dradityapundir-1",
    name: "Dr. Aditya Pundir",
    designation: "Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Aditya Pundir")
  }
];

export const organizingcommitteeMembers: CommitteeMember[] = [
  {
    id: "drajaymaurya-0",
    name: "Dr. Ajay Maurya",
    designation: "Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Ajay Maurya")
  },
  {
    id: "drumeshkumar-1",
    name: "Dr. Umesh Kumar",
    designation: "Associate Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Umesh Kumar")
  },
  {
    id: "drpriyamathur-2",
    name: "Dr. Priya Mathur",
    designation: "Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Priya Mathur")
  },
  {
    id: "drebtasamahmadsiddiqui-3",
    name: "Dr. Ebtasam Ahmad Siddiqui",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Ebtasam Ahmad Siddiqui")
  },
  {
    id: "mrkamalsaini-4",
    name: "Mr. Kamal Saini",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Kamal Saini")
  },
  {
    id: "mrpunitkumar-5",
    name: "Mr. Punit Kumar",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Punit Kumar")
  },
  {
    id: "mrmohnishsachdeva-6",
    name: "Mr. Mohnish Sachdeva",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Mohnish Sachdeva")
  },
  {
    id: "msbhawanapurohit-7",
    name: "Ms. Bhawana Purohit",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Ms. Bhawana Purohit")
  },
  {
    id: "mskrishnagupta-8",
    name: "Ms. Krishna Gupta",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Ms. Krishna Gupta")
  },
  {
    id: "mrvaibhavshekhawat-9",
    name: "Mr. Vaibhav Shekhawat",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Vaibhav Shekhawat")
  },
  {
    id: "mrvikaskumar-10",
    name: "Mr. Vikas Kumar",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Vikas Kumar")
  },
  {
    id: "msbhawanakumari-11",
    name: "Ms. Bhawana Kumari",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Ms. Bhawana Kumari")
  },
  {
    id: "mranuragananddubey-12",
    name: "Mr. Anurag Anand Dubey",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Anurag Anand Dubey")
  },
  {
    id: "mrbharatthathera-13",
    name: "Mr. Bharat Thathera",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Bharat Thathera")
  },
  {
    id: "mrrohitkumar-14",
    name: "Mr. Rohit Kumar",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Rohit Kumar")
  },
  {
    id: "mrgirdharilal-15",
    name: "Mr. Girdhari Lal",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Girdhari Lal")
  }
];

export const technicalprogramcommitteeMembers: CommitteeMember[] = [
  {
    id: "drvalentinaebalas-0",
    name: "Dr. Valentina E. Balas",
    designation: "Full Professor",
    institution: "Department of Automatics",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Valentina E. Balas")
  },
  {
    id: "drjoaquimjorge-1",
    name: "Dr. Joaquim Jorge",
    designation: "UNESCO Chair on AI & XR",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Joaquim Jorge")
  },
  {
    id: "profseeramramakrishna-2",
    name: "Prof. Seeram Ramakrishna",
    designation: "Vice president research strategy",
    institution: "Professor",
    country: undefined,
    image: null,
    initials: getInitials("Prof. Seeram Ramakrishna")
  },
  {
    id: "profsanmurugesan-3",
    name: "Prof. San Murugesan",
    designation: "Adjunct professor",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. San Murugesan")
  },
  {
    id: "proframanmunnikrishnan-4",
    name: "Prof. Raman M. Unnikrishnan",
    designation: "Dean professor Fellow IEEE",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. Raman M. Unnikrishnan")
  },
  {
    id: "drnaveensharma-5",
    name: "Dr. Naveen Sharma",
    designation: "Professor",
    institution: "SE department",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Naveen Sharma")
  },
  {
    id: "profrkjoshi-6",
    name: "Prof. R.K. Joshi",
    designation: "Department of CSE",
    institution: "IIT Bombay",
    country: undefined,
    image: null,
    initials: getInitials("Prof. R.K. Joshi")
  },
  {
    id: "drpuneetgoyal-7",
    name: "Dr. Puneet Goyal",
    designation: "Assistant Professor",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Puneet Goyal")
  },
  {
    id: "drmauroconti-8",
    name: "Dr. Mauro Conti",
    designation: "Professor",
    institution: "university of Padua",
    country: "Italy",
    image: null,
    initials: getInitials("Dr. Mauro Conti")
  },
  {
    id: "profalbertdipanda-9",
    name: "Prof. Albert Dipanda",
    designation: "Professor",
    institution: "university of Bourgogne",
    country: "France",
    image: null,
    initials: getInitials("Prof. Albert Dipanda")
  },
  {
    id: "profkokouyetongnon-10",
    name: "Prof. Kokou Yetongnon",
    designation: "Professor",
    institution: "university of Bourgogne",
    country: "France",
    image: null,
    initials: getInitials("Prof. Kokou Yetongnon")
  },
  {
    id: "drxiaozhigao-11",
    name: "Dr. Xiao Zhi Gao",
    designation: "Professor",
    institution: "LUT University",
    country: "Finland",
    image: null,
    initials: getInitials("Dr. Xiao Zhi Gao")
  },
  {
    id: "drghasiramverma-12",
    name: "Dr. Ghasi Ram Verma",
    designation: "Professor",
    institution: "University of Rhode Island",
    country: "USA",
    image: null,
    initials: getInitials("Dr. Ghasi Ram Verma")
  },
  {
    id: "drvaibhavkatewa-13",
    name: "Dr. Vaibhav Katewa",
    designation: "University of California",
    institution: undefined,
    country: "USA",
    image: null,
    initials: getInitials("Dr. Vaibhav Katewa")
  },
  {
    id: "drsugamsharma-14",
    name: "Dr. Sugam Sharma",
    designation: "Iowa State University",
    institution: undefined,
    country: "USA",
    image: null,
    initials: getInitials("Dr. Sugam Sharma")
  },
  {
    id: "drsoujanyaporia-15",
    name: "Dr. Soujanya Poria",
    designation: "NT University",
    institution: undefined,
    country: "Singapore",
    image: null,
    initials: getInitials("Dr. Soujanya Poria")
  },
  {
    id: "profksubramanian-16",
    name: "Prof. K. Subramanian",
    designation: "IEEE Delhi Section",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. K. Subramanian")
  },
  {
    id: "profarunsharma-17",
    name: "Prof. Arun Sharma",
    designation: "Managing Director - IGDTUW",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. Arun Sharma")
  }
];

export const publicitychairMembers: CommitteeMember[] = [
  {
    id: "drmarcinpaprzycki-0",
    name: "Dr. Marcin Paprzycki",
    designation: "Polish Academy of Science",
    institution: undefined,
    country: "Poland",
    image: null,
    initials: getInitials("Dr. Marcin Paprzycki")
  },
  {
    id: "drankitagarwal-1",
    name: "Dr. Ankit Agarwal",
    designation: "Northernwest University",
    institution: "U.S.",
    country: "USA",
    image: null,
    initials: getInitials("Dr. Ankit Agarwal")
  },
  {
    id: "msalkarani-2",
    name: "Ms. Alka Rani",
    designation: "PIET",
    institution: "Jaipur",
    country: undefined,
    image: null,
    initials: getInitials("Ms. Alka Rani")
  },
  {
    id: "drhiteshmehta-3",
    name: "Dr. Hitesh Mehta",
    designation: "Founder Director.",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Hitesh Mehta")
  },
  {
    id: "gajendradeshpande-4",
    name: "Gajendra Deshpande",
    designation: "Founder And Managing Director",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Gajendra Deshpande")
  }
];

export const financechairMembers: CommitteeMember[] = [
  {
    id: "drudaypratapsingh-0",
    name: "Dr. Uday Pratap Singh",
    designation: "Associate Professor Department of AI & DS",
    institution: "PIET",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Uday Pratap Singh")
  },
  {
    id: "drpradeepsinghbhati-1",
    name: "Dr. Pradeep Singh Bhati",
    designation: "Lecturer Selection Grade",
    institution: "GPC Kota",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Pradeep Singh Bhati")
  }
];

export const internationaladvisorycommitteeMembers: CommitteeMember[] = [
  {
    id: "manfredfredschindler-0",
    name: "Manfred (Fred) Schindler",
    designation: "2024 IEEE Fellow",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Manfred (Fred) Schindler")
  },
  {
    id: "ravikumararya-1",
    name: "Ravi Kumar Arya",
    designation: "Director",
    institution: "Xiangshan Laboratory Wireless Group",
    country: undefined,
    image: null,
    initials: getInitials("Ravi Kumar Arya")
  },
  {
    id: "drwitoldpedrycz-2",
    name: "Dr. Witold Pedrycz",
    designation: "Professor",
    institution: "University of Alberta",
    country: "Canada",
    image: null,
    initials: getInitials("Dr. Witold Pedrycz")
  },
  {
    id: "drjanuszkacprzyk-3",
    name: "Dr. Janusz Kacprzyk",
    designation: "Professor",
    institution: "Warsaw",
    country: "Poland",
    image: null,
    initials: getInitials("Dr. Janusz Kacprzyk")
  },
  {
    id: "drpieropbonissone-4",
    name: "Dr. Piero P. Bonissone",
    designation: "IEEE Life Fellow",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Piero P. Bonissone")
  },
  {
    id: "drbadrulhishamahmad-5",
    name: "Dr. Badrul Hisham Ahmad",
    designation: "Professor",
    institution: "UTeM",
    country: "Malaysia",
    image: null,
    initials: getInitials("Dr. Badrul Hisham Ahmad")
  },
  {
    id: "drjeduardolugo-6",
    name: "Dr. J. Eduardo Lugo",
    designation: "Universit\u00e9 de Montreal",
    institution: undefined,
    country: "Canada",
    image: null,
    initials: getInitials("Dr. J. Eduardo Lugo")
  }
];

export const nationaladvisorycommitteeMembers: CommitteeMember[] = [
  {
    id: "drveerpratapmeena-0",
    name: "Dr. Veerpratap Meena",
    designation: "Assistant Professor",
    institution: "NIT Jamshedpur",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Veerpratap Meena")
  },
  {
    id: "drnilanjandey-1",
    name: "Dr. Nilanjan Dey",
    designation: "Professor",
    institution: "Techno International New Town",
    country: "Kolkata",
    image: null,
    initials: getInitials("Dr. Nilanjan Dey")
  },
  {
    id: "drdeepakgarg-2",
    name: "Dr. Deepak Garg",
    designation: "Professor and Vice Chancellor",
    institution: "SR University",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Deepak Garg")
  },
  {
    id: "drakashsaxena-3",
    name: "Dr. Akash Saxena",
    designation: "Professor and Data Scientist",
    institution: "Stanford University",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Akash Saxena")
  },
  {
    id: "drghanshyamsingh-4",
    name: "Dr. Ghanshyam Singh",
    designation: "Professor",
    institution: "MNIT Jaipur",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Ghanshyam Singh")
  }
];

export const committeeSections: CommitteeSection[] = [
  {
    id: "honorarypatron",
    title: "Honorary Patron",
    description: "Members of the Honorary Patron.",
    icon: "Crown",
    members: honorarypatronMembers
  },
  {
    id: "honorarychair",
    title: "Honorary Chair",
    description: "Members of the Honorary Chair.",
    icon: "Star",
    members: honorarychairMembers
  },
  {
    id: "generalchair",
    title: "General Chair",
    description: "Members of the General Chair.",
    icon: "Users",
    members: generalchairMembers
  },
  {
    id: "conferencechair",
    title: "Conference Chair",
    description: "Members of the Conference Chair.",
    icon: "Layers",
    members: conferencechairMembers
  },
  {
    id: "programchair",
    title: "Program Chair",
    description: "Members of the Program Chair.",
    icon: "BookOpen",
    members: programchairMembers
  },
  {
    id: "organizingchair",
    title: "Organizing Chair",
    description: "Members of the Organizing Chair.",
    icon: "Settings",
    members: organizingchairMembers
  },
  {
    id: "organizingcommittee",
    title: "Organizing Committee",
    description: "Members of the Organizing Committee.",
    icon: "Users",
    members: organizingcommitteeMembers
  },
  {
    id: "technicalprogramcommittee",
    title: "Technical Program Committee",
    description: "Members of the Technical Program Committee.",
    icon: "Layers",
    members: technicalprogramcommitteeMembers
  },
  {
    id: "publicitychair",
    title: "Publicity Chair",
    description: "Members of the Publicity Chair.",
    icon: "Globe",
    members: publicitychairMembers
  },
  {
    id: "financechair",
    title: "Finance Chair",
    description: "Members of the Finance Chair.",
    icon: "Building2",
    members: financechairMembers
  },
  {
    id: "internationaladvisorycommittee",
    title: "International Advisory Committee",
    description: "Members of the International Advisory Committee.",
    icon: "Globe2",
    members: internationaladvisorycommitteeMembers
  },
  {
    id: "nationaladvisorycommittee",
    title: "National Advisory Committee",
    description: "Members of the National Advisory Committee.",
    icon: "MapPin",
    members: nationaladvisorycommitteeMembers
  }
];

export const getAllMembers = () => committeeSections.flatMap(s => s.members);

```

## src/data/speakers.ts

```ts
// ============================================================
// ICRACS 2026 — Speakers Data
// Source: https://icracs.poornima.org/speakers
// ============================================================

export interface KeynoteSpeaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  speakingDate: string;
  expertiseTags: string[];
  biography: string;
  /** Initials used for avatar fallback */
  initials: string;
  /** Local image path (relative to /public) — null if not available */
  image: string | null;
  altText: string;
}

export interface PastSpeaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  conferenceEdition: string;
  expertiseTags: string[];
  biography: string;
  initials: string;
  image: string | null;
  altText: string;
}

export interface KeynoteSessionInfo {
  duration: string;
  format: string;
  focus: string;
  interaction: string;
}

export interface TopicCoverage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SpeakingOpportunity {
  heading: string;
  description: string;
  contactEmail: string;
  contactSubject: string;
}

// ============================================================
// KEYNOTE SPEAKERS — ICRACS 2026
// ============================================================

export const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: "atulya-k-nagar",
    name: "Prof. Atulya K. Nagar",
    designation: "Pro Vice-Chancellor (Research)",
    institution: "Liverpool Hope University",
    country: "United Kingdom",
    speakingDate: "April 17, 2026",
    expertiseTags: ["Computing", "Research Leadership", "Advanced Computing"],
    biography:
      "Prof. Atulya K. Nagar is the Pro Vice-Chancellor (Research) at Liverpool Hope University, providing strategic leadership for research and innovation across the institution. He is a distinguished academic with extensive experience in mathematical computing, bio-mathematics, and computational sciences. His research spans non-linear mathematics, computational biology, and natural computing paradigms, with numerous high-impact publications to his credit.",
    initials: "AN",
    image: null,
    altText: "Prof. Atulya K. Nagar — Pro Vice-Chancellor (Research), Liverpool Hope University",
  },
  {
    id: "rajnish-sharma",
    name: "Dr. Rajnish Sharma",
    designation: "Vice-Chancellor",
    institution: "Chitkara University Himachal Pradesh",
    country: "India",
    speakingDate: "April 17, 2026",
    expertiseTags: ["Higher Education", "Technology", "Academic Leadership"],
    biography:
      "Dr. Rajnish Sharma is the Vice-Chancellor of Chitkara University Himachal Pradesh, driving academic excellence and research innovation in the Himalayan region. He brings decades of experience in higher education administration, academic policy, and technology-driven learning. Under his leadership, the university has achieved significant milestones in research output and industry collaborations.",
    initials: "RS",
    image: null,
    altText: "Dr. Rajnish Sharma — Vice-Chancellor, Chitkara University Himachal Pradesh",
  },
  {
    id: "marcin-paprzycki",
    name: "Dr. Marcin Paprzycki",
    designation: "Associate Professor",
    institution: "Polish Academy of Sciences",
    country: "Poland",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Artificial Intelligence", "Multi-Agent Systems", "Computer Science"],
    biography:
      "Dr. Marcin Paprzycki is an Associate Professor at the Systems Research Institute of the Polish Academy of Sciences. He has extensive research contributions in artificial intelligence, distributed computing, and agent-based systems. He is widely recognized for his work on semantic web technologies, software agents, and parallel computing. He has authored numerous publications in leading international journals and conferences.",
    initials: "MP",
    image: null,
    altText: "Dr. Marcin Paprzycki — Associate Professor, Polish Academy of Sciences, Poland",
  },
  {
    id: "ghanshyam-singh",
    name: "Prof. Ghanshyam Singh",
    designation: "Professor & Director",
    institution: "University of Johannesburg",
    country: "South Africa",
    speakingDate: "April 17, 2026",
    expertiseTags: ["Electronics", "Photonics", "Communication Systems"],
    biography:
      "Prof. Ghanshyam Singh is a Professor and Director at the University of Johannesburg, South Africa, leading cutting-edge research in electronics and photonic systems. He has made seminal contributions to the fields of optical fiber communications, metamaterials, and photonic crystal fibers. His research work has been widely cited and he has collaborated with leading institutions worldwide.",
    initials: "GS",
    image: null,
    altText: "Prof. Ghanshyam Singh — Professor & Director, University of Johannesburg, South Africa",
  },
  {
    id: "jagdish-chand-bansal",
    name: "Dr. Jagdish Chand Bansal",
    designation: "Professor",
    institution: "South Asian University",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Swarm Intelligence", "Optimization", "Machine Learning"],
    biography:
      "Dr. Jagdish Chand Bansal is a Professor at South Asian University with pioneering contributions to swarm intelligence, nature-inspired computing, and optimization algorithms. He is widely recognized for developing novel bio-inspired algorithms and their applications in engineering and science. He has edited and authored several books on nature-inspired computing and has mentored numerous doctoral researchers in this field.",
    initials: "JB",
    image: null,
    altText: "Dr. Jagdish Chand Bansal — Professor, South Asian University, India",
  },
  {
    id: "jai-gopal-pandey",
    name: "Dr. Jai Gopal Pandey",
    designation: "Scientist-F",
    institution: "CSIR-Central Electronics Engineering Research Institute (CEERI), Pilani",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["VLSI Design", "Embedded Systems", "Electronic Circuits"],
    biography:
      "Dr. Jai Gopal Pandey is a Scientist-F at CSIR-CEERI Pilani, one of India's premier research institutions in the field of electronics. He specializes in VLSI design, embedded systems, and advanced electronic circuit research. His work encompasses low-power circuit design, hardware security, and reconfigurable computing, with significant contributions to national research programmes.",
    initials: "JP",
    image: null,
    altText: "Dr. Jai Gopal Pandey — Scientist-F, CSIR-CEERI Pilani, India",
  },
  {
    id: "m-santosh-kumar",
    name: "M. Santosh Kumar",
    designation: "Scientist-F",
    institution: "CSIR-Central Electronics Engineering Research Institute (CEERI), Pilani",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Micro-electronics", "Sensors", "MEMS"],
    biography:
      "M. Santosh Kumar is a Scientist-F at CSIR-CEERI Pilani, contributing to cutting-edge research in micro-electronics, sensors, and MEMS (Micro-Electro-Mechanical Systems) technology. His work focuses on the development of advanced sensor technologies and miniaturized electronic systems with applications in healthcare, defence, and industrial monitoring systems.",
    initials: "SK",
    image: null,
    altText: "M. Santosh Kumar — Scientist-F, CSIR-CEERI Pilani, India",
  },
  {
    id: "ashwin-c-gowda",
    name: "Dr. Ashwin C Gowda",
    designation: "Assistant Professor",
    institution: "Visvesvaraya Technological University, Bengaluru Region",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Signal Processing", "Communication", "VLSI"],
    biography:
      "Dr. Ashwin C Gowda is an Assistant Professor at Visvesvaraya Technological University, Bengaluru Region, with active research in signal processing and communication systems. His research contributions include work on wireless communications, digital signal processing, and VLSI-based implementation of communication algorithms. He has published extensively in reputed international journals and conferences.",
    initials: "AG",
    image: null,
    altText: "Dr. Ashwin C Gowda — Assistant Professor, Visvesvaraya Technological University, India",
  },
];

// ============================================================
// PAST SPEAKERS — Previous ICRACS Editions
// ============================================================

export const pastSpeakers: PastSpeaker[] = [
  {
    id: "brij-gupta",
    name: "Prof. Brij Gupta",
    designation: "Distinguished Professor",
    institution: "Director, Center for AI and Cyber Security | Board of Governors, IEEE CT Society",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Cybersecurity", "AI Security", "Cloud Computing", "IoT Security"],
    biography:
      "Prof. Brij Gupta is a Distinguished Professor and Director of the Center for Artificial Intelligence and Cyber Security. He serves on the Board of Governors of the IEEE Consumer Technology Society. He is a highly cited researcher in the field of cybersecurity, cloud computing, and IoT security. His pioneering research has fundamentally advanced the understanding of security paradigms in distributed and intelligent systems.",
    initials: "BG",
    image: null,
    altText: "Prof. Brij Gupta — Distinguished Professor, Center for AI and Cyber Security",
  },
  {
    id: "dharam-singh",
    name: "Dr. Dharam Singh",
    designation: "Professor",
    institution: "University of Namibia",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Wireless Communications", "Network Security", "IoT"],
    biography:
      "Dr. Dharam Singh is a Professor at the University of Namibia with expertise in wireless communications, network security, and Internet of Things. He has contributed extensively to research in communication systems and has published numerous papers in international journals and conference proceedings. He is actively involved in building research capacity in Africa and internationally.",
    initials: "DS",
    image: null,
    altText: "Dr. Dharam Singh — Professor, University of Namibia",
  },
  {
    id: "valentina-balas",
    name: "Prof. Valentina E. Balas",
    designation: "Professor",
    institution: "Aurel Vlaicu University of Arad",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Soft Computing", "Fuzzy Logic", "Intelligent Systems", "Machine Learning"],
    biography:
      "Prof. Valentina E. Balas is a distinguished professor at Aurel Vlaicu University of Arad, Romania, known for her pioneering work in fuzzy logic, soft computing, and intelligent systems. She serves on the editorial board of several international journals and has been a program committee member for numerous prestigious conferences worldwide. Her research spans computational intelligence and its applications.",
    initials: "VB",
    image: null,
    altText: "Prof. Valentina E. Balas — Professor, Aurel Vlaicu University of Arad, Romania",
  },
  {
    id: "akash-saxena",
    name: "Dr. Akash Saxena",
    designation: "Professor",
    institution: "Swami Keshvanand Institute of Technology, Jaipur",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Power Systems", "Optimization", "Smart Grid", "Renewable Energy"],
    biography:
      "Dr. Akash Saxena is a Professor at Swami Keshvanand Institute of Technology, Jaipur, specializing in power systems, optimization, and smart grid technologies. He has made significant contributions to energy-efficient computing and intelligent power systems. His research work on meta-heuristic optimization has been well received in the academic community with numerous citations.",
    initials: "AS",
    image: null,
    altText: "Dr. Akash Saxena — Professor, Swami Keshvanand Institute of Technology, Jaipur",
  },
  {
    id: "ravi-kumar-arya",
    name: "Prof. Ravi Kumar Arya",
    designation: "Professor",
    institution: "Indian Institute of Technology (IIT) Delhi",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Chemical Engineering", "Coatings", "Polymer Science", "Transport Phenomena"],
    biography:
      "Prof. Ravi Kumar Arya is a Professor in the Department of Chemical Engineering at IIT Delhi. His research focuses on transport phenomena in polymer solutions, coating technologies, and drying processes. He has made foundational contributions to the understanding of diffusion in polymer systems and has guided numerous doctoral students. He is a fellow of several prestigious scientific bodies.",
    initials: "RA",
    image: null,
    altText: "Prof. Ravi Kumar Arya — Professor, IIT Delhi",
  },
  {
    id: "ankit-agrawal",
    name: "Dr. Ankit Agrawal",
    designation: "Research Scientist",
    institution: "Argonne National Laboratory, USA",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Machine Learning", "High Performance Computing", "Data Mining", "Materials Science"],
    biography:
      "Dr. Ankit Agrawal is a Research Scientist at Argonne National Laboratory, USA, working at the intersection of machine learning, high-performance computing, and materials informatics. His research applies data-driven approaches to accelerate scientific discovery in materials science. He has developed novel algorithms for knowledge discovery from large-scale scientific datasets.",
    initials: "AA",
    image: null,
    altText: "Dr. Ankit Agrawal — Research Scientist, Argonne National Laboratory, USA",
  },
  {
    id: "vijayshri-chaurasiya",
    name: "Dr. Vijayshri Chaurasiya",
    designation: "Associate Professor",
    institution: "Vellore Institute of Technology (VIT), Bhopal",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Signal Processing", "Biomedical Engineering", "Wavelet Analysis", "Image Processing"],
    biography:
      "Dr. Vijayshri Chaurasiya is an Associate Professor at VIT Bhopal with expertise in digital signal processing, biomedical signal analysis, and image processing. Her research contributions include novel wavelet-based techniques for biomedical signal processing and disease detection. She has published extensively in high-impact journals and is actively engaged in interdisciplinary research.",
    initials: "VC",
    image: null,
    altText: "Dr. Vijayshri Chaurasiya — Associate Professor, VIT Bhopal",
  },
  {
    id: "sandeep-saxena",
    name: "Prof. Sandeep Saxena",
    designation: "Professor",
    institution: "GLA University, Mathura",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Computer Vision", "Deep Learning", "Medical Imaging", "Pattern Recognition"],
    biography:
      "Prof. Sandeep Saxena is a Professor at GLA University, Mathura, with a strong research focus on computer vision, deep learning, and medical image analysis. He has developed several deep learning models for automated disease detection from medical images. His research has been published in leading journals and he has contributed to advancing AI-assisted diagnostics.",
    initials: "SS",
    image: null,
    altText: "Prof. Sandeep Saxena — Professor, GLA University, Mathura",
  },
];

// ============================================================
// SPEAKER INFORMATION SECTION
// ============================================================

export const keynoteSessionInfo: KeynoteSessionInfo = {
  duration: "45-minute presentations followed by Q&A",
  format: "In-person and virtual hybrid sessions",
  focus: "Focus on cutting-edge research and industry trends",
  interaction: "Interactive discussions with conference participants",
};

// ============================================================
// TOPICS COVERAGE
// ============================================================

export const topicsCoverage: TopicCoverage[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Latest advances in Artificial Intelligence and Machine Learning techniques",
    icon: "Brain",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Computer Vision and Image Processing innovations shaping the future",
    icon: "Eye",
  },
  {
    id: "smart-systems",
    title: "Smart Systems & IoT",
    description: "Smart Systems and IoT Applications transforming industries",
    icon: "Cpu",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & AI",
    description: "Cybersecurity and AI integration for robust digital infrastructure",
    icon: "Shield",
  },
];

// ============================================================
// SPEAKING OPPORTUNITIES
// ============================================================

export const speakingOpportunities: SpeakingOpportunity = {
  heading: "Speaking Opportunities",
  description:
    "ICRACS 2026 welcomes distinguished researchers and industry experts to share their insights and contribute to advancing the frontiers of Artificial Intelligence, Computer Vision, and Smart Systems. If you are a leading researcher or practitioner in these domains and wish to deliver a keynote or invited talk, we encourage you to reach out to the organizing committee. Our conference brings together academia, research institutions, and industry professionals, providing an exceptional platform to present groundbreaking work and engage with a highly motivated audience from across the globe.",
  contactEmail: "icracs@poornima.org",
  contactSubject: "Speaking Opportunity Inquiry — ICRACS 2026",
};

```

## src/lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

