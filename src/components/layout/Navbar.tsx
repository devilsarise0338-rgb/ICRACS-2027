"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/call-for-papers", label: "Call For Papers" },
  { href: "/call-for-special-session", label: "Special Session" },
  { href: "/agenda", label: "Agenda" },
  { href: "/registration", label: "Registration" },
  { href: "/committee", label: "Committee" },
  { href: "/speakers", label: "Speakers" },
  { href: "/reviewer", label: "Reviewer" },
  { href: "/archive", label: "Archive" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Set initial state in case page loads already scrolled
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
      style={{ height: "auto" }}
    >
      <div className="mx-auto max-w-7xl">
        <nav
          className="flex items-center justify-between px-4 md:px-6 lg:px-8"
          style={{ minHeight: "80px" }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="ICRACS 2027 – Home"
          >
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/pietLogoUpdated.png"
                alt="PIET Logo"
                fill
                className="object-contain"
                priority
                sizes="56px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg font-extrabold tracking-tight transition-colors ${
                  scrolled || !isHomePage ? "text-blue-700" : "text-white drop-shadow"
                }`}
              >
                ICRACS 2027
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled || !isHomePage
                    ? "text-gray-500"
                    : "text-white/80 drop-shadow"
                }`}
              >
                PIET · Jaipur
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-xs font-medium transition-colors duration-200 rounded-md group ${
                    isActive
                      ? scrolled || !isHomePage
                        ? "text-blue-600"
                        : "text-white"
                      : scrolled || !isHomePage
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/85 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600 transition-all duration-200 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Register CTA */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md shadow-sm transition-colors"
              >
                <Link href="/registration">Register Now</Link>
              </Button>
            </div>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || !isHomePage
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-200 shadow-lg`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-3 pt-3 border-t border-gray-100">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
