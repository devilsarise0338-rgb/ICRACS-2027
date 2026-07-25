import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export interface Speaker {
  name: string;
  affiliation: string;
  image: string;
  expertise: string[];
  bio: string;
}

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Card className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 border-none group">
      <CardContent className="p-0 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-auto">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${speaker.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
        </div>
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <Quote className="h-8 w-8 text-primary/20 mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{speaker.name}</h3>
          <p className="text-primary font-medium mb-4">{speaker.affiliation}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {speaker.expertise.map((exp, idx) => (
              <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                {exp}
              </Badge>
            ))}
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
            {speaker.bio}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
