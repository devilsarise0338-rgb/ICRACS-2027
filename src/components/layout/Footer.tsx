import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">ICRACS 2026</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              3rd International Conference on Recent Advances in Artificial Intelligence, 
              Computer Vision & Smart Systems organized by Poornima Institute of 
              Engineering & Technology, Jaipur.
            </p>
            <div className="pt-4 flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/50 hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800/50 hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/call-for-papers" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Registration
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Conference Agenda
                </Link>
              </li>
              <li>
                <Link href="/committee" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Organizing Committee
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" /> Keynote Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Special Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/call-for-special-session" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Users className="h-4 w-4" /> Special Sessions
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Past Conferences
                </Link>
              </li>
              <li>
                <Link href="/reviewer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Users className="h-4 w-4" /> Join as Reviewer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Poornima Institute of Engineering & Technology, ISI-2, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:icracs@poornima.org" className="hover:text-primary transition-colors">
                  icracs@poornima.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 141 2770289</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} ICRACS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
