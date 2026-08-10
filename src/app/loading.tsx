import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 relative z-40">
      <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        <Loader2 className="w-8 h-8 text-primary animate-spin relative z-10" />
      </div>
      <h2 className="text-xl font-semibold text-slate-800 animate-pulse">Loading ICRACS 2027...</h2>
    </div>
  );
}
