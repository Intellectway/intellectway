import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const base = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const target = `${base.replace(/\/$/, "")}/api/Blogs/${id}`;

    const res = await fetch(target, {
      method: "GET",
      headers: { accept: "application/json" },
    });

    const data = await res.text();
    const contentType = res.headers.get("content-type") || "application/json";

    return new Response(data, {
      status: res.status,
      headers: { "Content-Type": contentType },
    });
  } catch (err: any) {
    console.error("Blogs by id proxy error:", err);
    return NextResponse.json({ message: "Proxy error" }, { status: 500 });
  }
}
