import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/helpers";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export function Select({ label, options, className, ...props }: SelectProps) {
  const id = props.id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={id} className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <select
        id={id}
        className={cn(
          "rounded-lg border px-4 py-2 text-sm text-slate-900 transition focus:border-[#17aac0] focus:outline-none focus:ring-2 focus:ring-[#c6eff3]",
          className,
        )}
        style={{ borderColor: "#6C757D" }}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

