
import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center w-full py-12", className)}>
      <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
    </div>
  );
}
