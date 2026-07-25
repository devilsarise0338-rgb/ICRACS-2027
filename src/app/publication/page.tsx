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
