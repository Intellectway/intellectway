import Link from "next/link";

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

export function BlogCard({ id, title, excerpt, date }: BlogCardProps) {
  const formatTitle = (text: string) => {
    const maxLength = 80;
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength);
  };


  return (
    <article
      className="flex w-full flex-col justify-between rounded-[24px] border-[0.5px] border-[#CBD0D6] p-8 text-[#A7ACB1] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_60px_rgba(15,23,42,0.15)]"
      style={{ gap: "32px" }}
    >
      <div className="space-y-4">
        <h2
          className="font-['Montserrat'] text-xl font-medium leading-tight text-[#394046]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {formatTitle(title)}
        </h2>
        <div 
          className="font-['Montserrat'] text-base font-normal leading-[1.5] text-[#6C757D]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="border-l-2 border-[#27B3C8] pl-3 text-sm font-medium">
          {date}
        </span>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex h-12 w-[119px] items-center justify-center gap-2 rounded-full bg-[#27B3C8] px-4 py-3 font-['Montserrat'] text-base font-normal leading-none text-white shadow-sm transition hover:bg-[#1da2b7]"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

