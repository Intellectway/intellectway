export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

export function truncate(text: string, length = 120) {
  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length - 1)}…`;
}

