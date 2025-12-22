type BlogTextProps = {
  title: string;
  content: string[];
};

export function BlogText({ title, content }: BlogTextProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-1 sm:space-y-2 mt-5">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
          Intellectway Insights
        </p>
        <h1 className="mx-auto max-w-[1115px] font-['Montserrat'] text-3xl font-semibold leading-none text-[#414141] text-center sm:text-4xl">
          {title}
        </h1>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-slate-600 mt-18 mb-18">
        {content.map((paragraph, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </section>
  );
}

