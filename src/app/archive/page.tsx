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
