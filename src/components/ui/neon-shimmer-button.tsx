"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface NeonShimmerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "purple" | "pink" | "green";
}

const NeonShimmerButton = forwardRef<HTMLButtonElement, NeonShimmerButtonProps>(
  ({ className, variant = "cyan", children, ...props }, ref) => {
    const variants = {
      cyan: "border-cyan-400 text-cyan-400 shadow-cyan-400/50 hover:shadow-cyan-400/80",
      purple:
        "border-purple-400 text-purple-400 shadow-purple-400/50 hover:shadow-purple-400/80",
      pink: "border-pink-400 text-pink-400 shadow-pink-400/50 hover:shadow-pink-400/80",
      green:
        "border-green-400 text-green-400 shadow-green-400/50 hover:shadow-green-400/80",
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "relative overflow-hidden rounded-lg border-2 bg-transparent px-8 py-3 font-semibold transition-all duration-300",
          // Neon glow effect
          "shadow-[0_0_20px_var(--tw-shadow-color)] hover:shadow-[0_0_30px_var(--tw-shadow-color)]",
          // Hover effects
          "hover:scale-105 active:scale-95",
          // Variant colors
          variants[variant],
          className,
        )}
        {...props}
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 animate-shimmer" />

        {/* Button content */}
        <span className="relative z-10">{children}</span>

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-current/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      </button>
    );
  },
);

NeonShimmerButton.displayName = "NeonShimmerButton";

export { NeonShimmerButton };
