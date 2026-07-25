import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Train, Car, Hotel } from "lucide-react";

export default function Venue() {
  return (
    <>
      <PageHeader 
        title="Conference Venue" 
        description="Experience the vibrant culture and heritage of Jaipur while attending ICRACS 2026."
        bgImage="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1599661559882-9cb8c1e838f7?q=80&w=2070&auto=format&fit=crop" 
              alt="Hawa Mahal, Jaipur" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <AnimatedHeading title="Welcome to Jaipur" centered={false} className="mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Jaipur, affectionately known as the "Pink City," is the capital of Rajasthan. A UNESCO World Heritage Site, it is renowned for its magnificent palaces, historic forts, vibrant culture, and exquisite handicrafts. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              The city forms a part of the famous Golden Triangle tourist circuit along with Delhi and Agra. April in Jaipur offers pleasant weather, making it an ideal time to explore the architectural marvels like Amer Fort, City Palace, and Hawa Mahal after conference hours.
            </p>
          </div>
        </div>

        <AnimatedHeading title="How to Reach" subtitle="PIET Campus is well connected by all major modes of transportation" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Plane,
              title: "By Air",
              desc: "Jaipur International Airport (JAI) is just 8 km (15 mins drive) from the PIET campus. It connects to all major Indian cities and international destinations."
            },
            {
              icon: Train,
              title: "By Train",
              desc: "Jaipur Junction (JP) is 20 km away. Durgapura Railway Station (DPA) is closer, at just 10 km. Both are well connected to major cities."
            },
            {
              icon: Car,
              title: "By Road",
              desc: "Located in Sitapura Industrial Area, just off the NH-52 (Tonk Road). Easily accessible via Ola/Uber cabs from anywhere in the city."
            },
            {
              icon: Hotel,
              title: "Accommodation",
              desc: "Numerous budget and luxury hotels are available near the airport and Tonk Road area, within a 5-10 km radius of the campus."
            }
          ].map((item, i) => (
            <Card key={i} className="glass-card border-none hover:-translate-y-1 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
