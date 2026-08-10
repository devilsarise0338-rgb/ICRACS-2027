"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, FileCheck, Star, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  affiliation: z.string().min(2, "Affiliation is required"),
  designation: z.string().min(2, "Designation is required"),
  expertise: z.string().min(10, "Please provide your areas of expertise"),
  linkedInUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  scholarUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export default function Reviewer() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      affiliation: "",
      designation: "",
      expertise: "",
      linkedInUrl: "",
      scholarUrl: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Handle form submission here
    alert("Application submitted successfully!");
    form.reset();
  }

  const benefits = [
    { icon: BadgeCheck, title: "Certificate of Appreciation", desc: "Receive a formal certificate acknowledging your contribution to the conference." },
    { icon: Users, title: "Networking", desc: "Connect with leading researchers and academicians in your field of expertise." },
    { icon: Star, title: "Recognition", desc: "Your name and affiliation will be listed on the conference website and proceedings." },
    { icon: FileCheck, title: "Early Access", desc: "Get early access to the latest research and developments in your domain." },
  ];

  return (
    <>
      <PageHeader 
        title="Join as a Reviewer" 
        description="Contribute to the academic community by joining our esteemed panel of reviewers for ICRACS 2027."
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Join Us?</h2>
              <p className="text-slate-600 leading-relaxed">
                Reviewers play a crucial role in maintaining the high standard of the conference. We invite domain experts, researchers, and academicians with a strong publication record to join our technical program committee.
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100 shrink-0 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="lg:col-span-3 glass-card shadow-xl border-none">
            <CardHeader className="bg-primary/5 pb-6 border-b border-slate-100">
              <CardTitle className="text-2xl text-slate-900">Reviewer Application Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Full Name *</label>
                    <input 
                      {...form.register("fullName")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Dr. John Doe"
                    />
                    {form.formState.errors.fullName && <p className="text-xs text-destructive">{form.formState.errors.fullName.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Email Address *</label>
                    <input 
                      {...form.register("email")}
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="john.doe@university.edu"
                    />
                    {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Affiliation/University *</label>
                    <input 
                      {...form.register("affiliation")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Stanford University"
                    />
                    {form.formState.errors.affiliation && <p className="text-xs text-destructive">{form.formState.errors.affiliation.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Designation *</label>
                    <input 
                      {...form.register("designation")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Associate Professor"
                    />
                    {form.formState.errors.designation && <p className="text-xs text-destructive">{form.formState.errors.designation.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Areas of Expertise *</label>
                  <textarea 
                    {...form.register("expertise")}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                    placeholder="Machine Learning, Computer Vision, Neural Networks..."
                  />
                  {form.formState.errors.expertise && <p className="text-xs text-destructive">{form.formState.errors.expertise.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Google Scholar URL</label>
                    <input 
                      {...form.register("scholarUrl")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="https://scholar.google.com/..."
                    />
                    {form.formState.errors.scholarUrl && <p className="text-xs text-destructive">{form.formState.errors.scholarUrl.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">LinkedIn URL</label>
                    <input 
                      {...form.register("linkedInUrl")}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="https://linkedin.com/in/..."
                    />
                    {form.formState.errors.linkedInUrl && <p className="text-xs text-destructive">{form.formState.errors.linkedInUrl.message}</p>}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to review at least 3-4 papers within the stipulated time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
