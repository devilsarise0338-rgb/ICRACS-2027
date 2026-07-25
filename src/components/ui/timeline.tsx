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
