import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-medium text-[#17aac0] hover:text-[#0f7687]"
      >
        Learn more →
      </Link>
    </article>
  );
}

