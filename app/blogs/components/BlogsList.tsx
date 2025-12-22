"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "./BlogCard";

type RemoteBlog = {
  id: string;
  title: string;
  description: string;
  createdAt?: string;
};

type PagedResponse = {
  data: RemoteBlog[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default function BlogsList() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [posts, setPosts] = useState<RemoteBlog[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get<PagedResponse>(`/api/blogs?page=${page}&pageSize=${pageSize}`)
      .then((res) => {
        if (!mounted) return;
        const payload = res.data;
        setPosts(payload.data || []);
        setTotalPages(payload.totalPages || 1);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, [page, pageSize]);

  const paginationItems = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? new Array(pageSize).fill(0).map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-[24px] bg-slate-200"
              />
            ))
          : posts.map((p) => (
              <BlogCard
                key={p.id}
                id={p.id}
                title={p.title}
                excerpt={p.description}
                date={p.createdAt ? new Date(p.createdAt).toDateString() : ""}
              />
            ))}
      </div>

      <nav aria-label="Blog pagination" className="mt-12 mb-12 flex justify-center">
        <ul className="flex items-center gap-3">
          <li>
            <button
              type="button"
              onClick={() => setPage((s) => Math.max(1, s - 1))}
              disabled={page === 1}
              className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-transparent bg-white text-slate-500 shadow-sm hover:border-slate-200 hover:text-slate-700"
            >
              <span className="sr-only">Previous page</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>

          {paginationItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => setPage(item)}
                className={`flex h-8 w-8 items-center justify-center rounded-[4px] border text-sm font-semibold ${
                  item === page
                    ? "border-slate-400 bg-white text-slate-700 shadow-sm"
                    : "border-transparent bg-white text-slate-500 hover:border-slate-200 hover:text-slate-700"
                }`}
              >
                {item}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
              disabled={page === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-transparent bg-white text-slate-500 shadow-sm hover:border-slate-200 hover:text-slate-700"
            >
              <span className="sr-only">Next page</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
