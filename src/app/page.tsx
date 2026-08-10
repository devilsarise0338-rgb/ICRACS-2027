import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Shield, Zap, Award, Trophy, GraduationCap, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About PIET */}
      <Section bg="slate" id="about-piet">
        <AnimatedHeading 
          title="About PIET" 
          subtitle="Poornima Institute of Engineering & Technology - A Premier Institution in Engineering Education"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
                alt="PIET Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
                alt="PIET Lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Excellence in Education Since 2007</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Poornima Institute of Engineering & Technology, Jaipur, PIET, a premier institution in engineering education was established in the academic year 2007. PIET is affiliated to Rajasthan Technical University and approved by AICTE.
                </p>
                <p>
                  The institution aims at providing world-class technical and scientific education that can develop a professional outlook in every walk of life. PIET has been continuously striving for excellence in engineering education and research.
                </p>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">Key Achievements</h4>
                  <ul className="space-y-3">
                    {["1st institution to offer B.Tech CSE in Regional language",
                      "Only institute in Rajasthan funded by AICTE with Rs. 55 Lakh for IDEA Lab",
                      "Granted Rs. 12.84 Lakh for Neural Network & Deep Learning Lab under MODROB Scheme",
                      "Received research grants of more than Rs. 50 Lakh in 2019-20 & 2020-21"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Award, title: "NAAC Accredited", desc: "by National Assessment Council" },
                { icon: Trophy, title: "PLATINUM", desc: "AICTE-CII Survey Rating" },
                { icon: GraduationCap, title: "NBA Accredited", desc: "CSE and Civil Programs" },
                { icon: Users, title: "3rd in QIV", desc: "Quality of Infrastructure" }
              ].map((stat, i) => (
                <Card key={i} className="text-center glass-card border-none hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-2">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{stat.title}</h4>
                    <p className="text-xs text-slate-500">{stat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* About ICRACS */}
      <Section bg="white" id="about-icracs">
        <AnimatedHeading 
          title="About ICRACS 2027" 
          subtitle="International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems"
        />
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            ICRACS2027 focuses on the revolutionary applications of Artificial Intelligence, Computer Vision, and Smart Systems in emerging technologies. The conference serves as a premier platform for researchers, academicians, and industry professionals to share innovative AI solutions that enhance efficiency, stability, robustness, and security of smart systems through computational intelligence paradigms.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-10 text-slate-900">Key Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Brain, title: "Neural Networks & Deep Learning", desc: "Architectures, optimization, convolutional networks, transformers." },
            { icon: Eye, title: "Computer Vision", desc: "Object detection, image processing, medical imaging, 3D vision." },
            { icon: Zap, title: "Smart Systems & IoT", desc: "Smart city infrastructure, industrial automation, cyber-physical systems." },
            { icon: Shield, title: "Computational Security", desc: "AI-driven cybersecurity, privacy-preserving ML, threat detection." },
          ].map((area, i) => (
            <Card key={i} className="glass-card border-slate-100 shadow-lg hover:shadow-xl hover:border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <area.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{area.title}</h4>
                <p className="text-sm text-slate-600">{area.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass bg-slate-50/50 border-slate-200">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Conference Topics Include</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Neural Networks", "Evolutionary Computation", "Computer Vision", "Smart Energy Systems", 
                "IoT Applications", "Swarm Intelligence", "Genetic Algorithms", "Reinforcement Learning",
                "Hybrid Intelligent Systems", "Security & Privacy", "Quantum Machine Learning", 
                "Neuromorphic Computing", "Edge AI", "Explainable AI", "Brain-Computer Interfaces"
              ].map((topic, i) => (
                <Badge key={i} variant="secondary" className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border-slate-200 shadow-sm hover:bg-primary hover:text-white transition-colors">
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
