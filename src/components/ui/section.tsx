import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClass?: string;
  bg?: "white" | "slate" | "gradient" | "transparent";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClass, children, bg = "transparent", ...props }, ref) => {
    
    const bgClasses = {
      white: "bg-white",
      slate: "bg-slate-50",
      gradient: "bg-gradient-to-b from-slate-50 to-white",
      transparent: "bg-transparent",
    };

    return (
      <section
        ref={ref}
        className={cn(`py-16 md:py-24 relative overflow-hidden`, bgClasses[bg], className)}
        {...props}
      >
        <div className={cn("container mx-auto px-4 md:px-6 relative z-10", containerClass)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
