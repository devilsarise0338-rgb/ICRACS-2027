import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallForSpecialSession() {
  return (
    <>
      <PageHeader 
        title="Call for Special Sessions" 
        description="Organize a specialized track and lead discussions on cutting-edge topics in AI and Smart Systems."
        bgImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div>
            <AnimatedHeading title="Proposal Guidelines" centered={false} />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              ICRACS 2026 invites proposals for Special Sessions on emerging topics aligned with the conference themes. A Special Session provides a platform for focused discussions on specific domains of Artificial Intelligence, Computer Vision, and Smart Systems.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Title of the Special Session",
                "Brief description of the scope and motivation (approx. 200 words)",
                "Topics of interest",
                "Name, affiliation, and short bio of the organizers",
                "List of potential contributors/reviewers",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-2">Organizer Benefits</h3>
              <p className="text-slate-600 mb-0">
                Organizers of successful special sessions (with at least 6 registered papers) will receive complimentary registration for the conference.
              </p>
            </div>
          </div>

          <Card className="glass-card shadow-xl border-none">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Submit Your Proposal</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Proposals should be submitted in PDF format via email to the Special Sessions Chair. All proposals will be reviewed based on their relevance and potential to attract high-quality submissions.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-semibold">Deadline</p>
                  <p className="text-slate-900 font-medium">December 15, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-semibold">Email To</p>
                  <a href="mailto:icracs.sessions@poornima.org" className="text-primary font-medium hover:underline flex items-center gap-2">
                    <Send className="w-4 h-4" /> icracs.sessions@poornima.org
                  </a>
                </div>
              </div>

              <Button size="lg" className="w-full">
                Download Proposal Template
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
