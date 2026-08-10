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
