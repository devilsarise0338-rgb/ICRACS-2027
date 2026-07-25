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
