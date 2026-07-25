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
