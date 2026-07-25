import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function About() {
  return (
    <>
      <PageHeader 
        title="About the Conference" 
        description="Learn more about the vision, mission, and scope of ICRACS 2026."
        bgImage="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <AnimatedHeading title="Vision & Mission" centered={false} />
            <div className="prose prose-slate max-w-none prose-lg">
              <p>
                The 3rd International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems (ICRACS 2026) is a premier forum for presenting technological advances and research results in the fields of computational intelligence, machine vision, and interconnected smart systems.
              </p>
              <p>
                Organized by the Department of Computer Science and Engineering at Poornima Institute of Engineering & Technology, the conference aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of AI and Smart Systems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-primary">For Researchers</h3>
              <p className="text-slate-600 leading-relaxed">
                Provide a platform to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of AI, Computer Vision, and Smart Systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-primary">For Industry</h3>
              <p className="text-slate-600 leading-relaxed">
                Foster collaboration between academia and industry. Discover emerging technologies, recruit top talent, and understand how fundamental research is translating into real-world applications.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
