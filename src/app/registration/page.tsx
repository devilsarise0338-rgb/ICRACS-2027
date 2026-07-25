import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, CreditCard, Landmark, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const importantDates = [
  { event: "Paper Submission Deadline", date: "January 15, 2026" },
  { event: "Notification of Acceptance", date: "February 28, 2026" },
  { event: "Camera-Ready Submission", date: "March 15, 2026" },
  { event: "Early Bird Registration", date: "March 20, 2026" },
  { event: "Registration with Late Fee", date: "April 05, 2026" },
  { event: "Conference Dates", date: "April 17-18, 2026" },
];

const fees = [
  { category: "Indian Authors (Academia/R&D)", early: "₹ 6,000", late: "₹ 7,000" },
  { category: "Indian Authors (Industry)", early: "₹ 7,000", late: "₹ 8,000" },
  { category: "Indian Students (UG/PG/PhD)", early: "₹ 5,000", late: "₹ 6,000" },
  { category: "International Authors", early: "$ 150", late: "$ 200" },
  { category: "Attendees (Without Paper)", early: "₹ 2,000", late: "₹ 2,500" },
];

export default function Registration() {
  return (
    <>
      <PageHeader 
        title="Registration & Important Dates" 
        description="Secure your spot at ICRACS 2026. Explore our registration categories, deadlines, and payment information."
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      />

      <Section bg="slate">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-slate-900">Important Dates</h2>
            </div>
            
            <Card className="glass-card border-none shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50/50">
                    <TableRow>
                      <TableHead className="w-[60%] py-4 text-slate-900 font-semibold">Event</TableHead>
                      <TableHead className="py-4 text-slate-900 font-semibold text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {importantDates.map((item, index) => (
                      <TableRow key={index} className="hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-700 py-4">{item.event}</TableCell>
                        <TableCell className="text-right text-primary font-semibold py-4">{item.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-slate-900">Registration Fees</h2>
            </div>
            
            <Card className="glass-card border-none shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-primary/5">
                    <TableRow>
                      <TableHead className="w-[50%] py-4 text-slate-900 font-semibold">Category</TableHead>
                      <TableHead className="py-4 text-slate-900 font-semibold text-center">Early Bird</TableHead>
                      <TableHead className="py-4 text-slate-900 font-semibold text-right">Late Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fees.map((item, index) => (
                      <TableRow key={index} className="hover:bg-slate-50/50 transition-colors">
                        <TableCell className="font-medium text-slate-700 py-4">{item.category}</TableCell>
                        <TableCell className="text-center font-semibold text-slate-900 py-4">{item.early}</TableCell>
                        <TableCell className="text-right font-semibold text-destructive py-4">{item.late}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <AnimatedHeading title="Payment Information" subtitle="Bank Details for NEFT / RTGS / IMPS" />
        
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card shadow-xl border-primary/20 bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 text-primary/5 rotate-12">
              <Landmark className="h-64 w-64" />
            </div>
            <CardContent className="p-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Account Name</p>
                  <p className="text-lg font-bold text-slate-900">PIET ICRACS</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Account Number</p>
                  <p className="text-lg font-bold text-slate-900 font-mono tracking-tight">3126 000 1234 5678</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="text-lg font-bold text-slate-900">HDFC Bank Ltd.</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">IFSC Code</p>
                  <p className="text-lg font-bold text-slate-900 font-mono">HDFC0003126</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Branch</p>
                  <p className="text-lg font-bold text-slate-900">Sitapura Industrial Area, Jaipur</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Keep your transaction ID ready for the registration form.
                </p>
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-primary/25 transition-all">
                  Proceed to Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
