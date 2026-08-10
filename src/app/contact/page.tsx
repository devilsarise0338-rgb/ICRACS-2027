"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Have questions about ICRACS 2027? Reach out to our organizing team."
        bgImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed">
                For any inquiries regarding paper submission, registration, or general information about the conference, please don't hesitate to contact us. We will get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid gap-6">
              <Card className="glass-card border-none hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-sm text-slate-600">Poornima Institute of Engineering & Technology<br />ISI-2, RIICO Institutional Area, Sitapura<br />Jaipur, Rajasthan 302022, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a href="mailto:icracs@poornima.org" className="text-sm text-slate-600 hover:text-primary transition-colors">icracs@poornima.org</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-sm text-slate-600">+91 141 2770289</p>
                    <p className="text-sm text-slate-600">+91 99285 55222 (Convener)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="glass-card border-none shadow-xl overflow-hidden h-[600px]">
            <CardContent className="p-0 h-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.218525091722!2d75.81745481504263!3d26.769352983189495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee8eb9eeeaad283!2sPoornima%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1647864456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="absolute inset-0"
              />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
