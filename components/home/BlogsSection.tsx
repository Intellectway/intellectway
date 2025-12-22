"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

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

export function BlogsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get<PagedResponse>(`/api/blogs?page=1&pageSize=9`)
      .then((res) => {
        if (!mounted) return;
        const payload = res.data;
        const blogPosts: BlogPost[] = (payload.data || []).map((blog) => ({
          id: blog.id,
          title: blog.title,
          excerpt: blog.description,
          date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
          }) : "",
        }));
        setPosts(blogPosts);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const groupedPosts = useMemo(() => {
    const chunks: BlogPost[][] = [];
    for (let i = 0; i < posts.length; i += 3) {
      chunks.push(posts.slice(i, i + 3));
    }
    return chunks;
  }, [posts]);

  const totalSlides = groupedPosts.length;

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setCurrentSlide(index);
  };

  return (
    <section className="w-full space-y-6 sm:space-y-8 py-8 sm:py-12 md:py-16">
      <header className="space-y-2 text-center mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
          Latests Blog Posts
        </h2>
        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
          Discover news, insights, and success stories
        </p>
      </header>

      <div className="relative w-full overflow-hidden mx-auto max-w-8xl px-4 sm:px-6">
        <Swiper
          modules={[Mousewheel, FreeMode]}
          slidesPerView={1}
          speed={2000}
          spaceBetween={32}
          resistanceRatio={0.85}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: false,
          }}
          freeMode={{
            enabled: true,
            sticky: false,
            momentum: true,
            momentumRatio: 0.5,
            momentumBounce: true,
            momentumBounceRatio: 1,
          }}
          touchEventsTarget="container"
          touchRatio={1}
          threshold={5}
          onSwiper={(instance) => {
            swiperRef.current = instance;
          }}
          onSlideChange={(instance) => {
            setCurrentSlide(instance.activeIndex);
          }}
          className="pb-6"
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {loading ? (
            <SwiperSlide>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-[300px] animate-pulse rounded-3xl bg-slate-200"
                  />
                ))}
              </div>
            </SwiperSlide>
          ) : groupedPosts.length > 0 ? (
            groupedPosts.map((group, slideIndex) => (
              <SwiperSlide key={`blog-slide-${slideIndex}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {group.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col h-[300px] rounded-3xl p-4 sm:p-5 md:p-6 bg-transparent hover:bg-[#EFF0F9] transition-all duration-500 cursor-pointer group"
                    style={{
                      border: "0.5px solid var(--Blog-Border, #A7ACB1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0px 2px 4px 0px #41414166";
                      e.currentTarget.style.backgroundColor = "#D1EEF2";
                      // e.currentTarget.style.marginTop = "10px";
                        const arrow = e.currentTarget.querySelector<HTMLAnchorElement>("[data-blog-arrow]");
                      if (arrow) {
                        const cardRect = e.currentTarget.getBoundingClientRect();
                        const arrowRect = arrow.getBoundingClientRect();
                        const available = cardRect.width - arrowRect.width - 32;
                        const currentOffset = arrowRect.left - cardRect.left;
                        const shift = Math.max(0, available - currentOffset);
                        arrow.style.transform = `translateX(${shift}px)`;
                        arrow.style.backgroundColor = "#1E4469";
                        arrow.style.color = "#FFFFFF";
                          arrow.style.width = "32px";
                          arrow.style.height = "32px";
                          arrow.style.fontSize = "12px";
                        const svg = arrow.querySelector("svg");
                        if (svg) {
                          svg.style.transform = "rotate(45deg)";
                          svg.style.stroke = "#FFFFFF";
                            svg.style.width = "12px";
                            svg.style.height = "12px";
                        }
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.marginTop = "0px";
                        const arrow = e.currentTarget.querySelector<HTMLAnchorElement>("[data-blog-arrow]");
                      if (arrow) {
                        arrow.style.transform = "translateX(0)";
                        arrow.style.backgroundColor = "transparent";
                        arrow.style.color = "#4B6987";
                          arrow.style.width = "40px";
                          arrow.style.height = "40px";
                          arrow.style.fontSize = "";
                        const svg = arrow.querySelector("svg");
                        if (svg) {
                          svg.style.transform = "rotate(0deg)";
                          svg.style.stroke = "currentColor";
                            svg.style.width = "16px";
                            svg.style.height = "16px";
                        }
                      }
                    }}
                  >
                    <div className="flex flex-col" style={{ gap: "32px" }}>
                      <h3 className="text-lg font-semibold text-slate-900 overflow-hidden text-ellipsis line-clamp-2">
                        {post.title}
                      </h3>
                      <div 
                        className="text-sm leading-6 text-slate-600 flex-1 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      <div className="relative flex items-center gap-3 pt-4 border-t border-slate-100 overflow-visible">
                        <span
                          className="text-sm text-slate-500"
                          style={{
                            borderLeft: "1px solid #1E4469",
                            marginRight: "10px",
                            paddingLeft: "8px",
                          }}
                        >
                          {post.date}
                        </span>
                        <Link
                          href={`/blogs/${post.id}`}
                          data-blog-arrow
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[#4B6987] transition-all duration-500"
                          style={{ transform: "translateX(0)" }}
                          aria-label="Read more"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-500 ease-out"
                            style={{ transform: "rotate(0deg)" }}
                          >
                            <path
                              d="M14.75 0.75L0.75 14.75"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M14.75 11.02V0.75H4.48"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                  ))}
                </div>
              </SwiperSlide>
            ))
          ) : null}
        </Swiper>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-2 rounded bg-slate-700"
                  : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#D1EEF2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          View More
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
        </Link>
      </div>
    </section>
  );
}

