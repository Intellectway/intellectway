import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: "primary" | "secondary" | "ghost";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1292a6] disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-[#17aac0] text-white hover:bg-[#1292a6]",
  secondary:
    "border border-[#17aac0] text-[#17aac0] hover:bg-[#17aac0] hover:text-white",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

