import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/helpers";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helperText?: string;
};

export function TextArea({
  label,
  helperText,
  className,
  ...props
}: TextAreaProps) {
  const id = props.id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={id} className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <textarea
        id={id}
        className={cn(
          "rounded-lg border px-4 py-2 text-sm text-slate-900 transition focus:border-[#17aac0] focus:outline-none focus:ring-2 focus:ring-[#c6eff3]",
          className,
        )}
        style={{ borderColor: "#6C757D" }}
        {...props}
      />
      {helperText ? (
        <span className="text-xs text-slate-500">{helperText}</span>
      ) : null}
    </label>
  );
}

