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
