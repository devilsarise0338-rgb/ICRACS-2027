"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 relative z-40">
      <div className="text-center px-4">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-destructive/10 flex items-center justify-center text-destructive">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        <Button 
          onClick={() => reset()} 
          size="lg" 
          className="shadow-md hover:shadow-lg transition-all"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          Try again
        </Button>
      </div>
    </div>
  );
}
