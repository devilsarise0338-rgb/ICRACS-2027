import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Timeline, TimelineEvent } from "@/components/ui/timeline";

const dates: TimelineEvent[] = [
  { event: "Paper Submission Deadline", date: "April 30, 2027", isPast: false },
  { event: "Notification of Acceptance", date: "June 30, 2027", isPast: false },
  { event: "Camera-Ready Submission", date: "July 30, 2027", isPast: false },
  { event: "Early Bird Registration", date: "July 15, 2027", isPast: false },
  { event: "Registration with Late Fee", date: "August 20, 2027", isPast: false },
  { event: "Conference Dates", date: "August 27-28, 2027", isPast: false },
];

export default function ImportantDates() {
  return (
    <>
      <PageHeader 
        title="Important Dates" 
        description="Mark your calendars for ICRACS 2027. Keep track of submission and registration deadlines."
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
