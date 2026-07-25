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
  { time: "08:30 AM - 09:30 AM", title: "Registration & Breakfast", location: "Main Reception", type: "Break" },
  { time: "09:30 AM - 10:30 AM", title: "Inauguration Ceremony", location: "Arbuda Convention Centre", type: "Networking" },
  { time: "10:30 AM - 11:30 AM", title: "Keynote Address: Future of Generative AI", location: "Arbuda Convention Centre", speaker: "Prof. Atulya K. Nagar", type: "Keynote" },
  { time: "11:30 AM - 11:45 AM", title: "Tea Break", location: "Lounge Area", type: "Break" },
  { time: "11:45 AM - 01:15 PM", title: "Technical Session 1: Neural Networks & Deep Learning", location: "Seminar Hall 1", type: "Technical" },
  { time: "01:15 PM - 02:15 PM", title: "Lunch", location: "Dining Hall", type: "Break" },
  { time: "02:15 PM - 03:15 PM", title: "Keynote Address: Edge Computing and IoT", location: "Arbuda Convention Centre", speaker: "Dr. Rajnish Sharma", type: "Keynote" },
  { time: "03:15 PM - 05:00 PM", title: "Technical Session 2: Computer Vision", location: "Seminar Hall 2", type: "Technical" },
  { time: "05:00 PM - 06:30 PM", title: "Panel Discussion: Ethics in AI", location: "Arbuda Convention Centre", type: "Panel" },
];

const day2: Session[] = [
  { time: "09:00 AM - 10:00 AM", title: "Keynote Address: Semantic Web and Agents", location: "Arbuda Convention Centre", speaker: "Dr. Marcin Paprzycki", type: "Keynote" },
  { time: "10:00 AM - 11:30 AM", title: "Technical Session 3: Smart Systems", location: "Seminar Hall 1", type: "Technical" },
  { time: "11:30 AM - 11:45 AM", title: "Tea Break", location: "Lounge Area", type: "Break" },
  { time: "11:45 AM - 01:15 PM", title: "Special Session: Quantum Artificial Intelligence", location: "Seminar Hall 2", type: "Technical" },
  { time: "01:15 PM - 02:15 PM", title: "Lunch", location: "Dining Hall", type: "Break" },
  { time: "02:15 PM - 03:45 PM", title: "Technical Session 4: Computational Security", location: "Seminar Hall 1", type: "Technical" },
  { time: "03:45 PM - 05:00 PM", title: "Valedictory Function & Award Ceremony", location: "Arbuda Convention Centre", type: "Networking" },
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
