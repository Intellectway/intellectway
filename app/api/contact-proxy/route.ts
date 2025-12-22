import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const base = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const target = `${base.replace(/\/$/, "")}/api/ContactUs`;

    const res = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // credentials omitted; server-to-server request
    });

    const text = await res.text();
    const contentType = res.headers.get("content-type") || "text/plain";

    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": contentType },
    });
  } catch (err: any) {
    console.error("Proxy error:", err);
    return NextResponse.json({ message: "Proxy error" }, { status: 500 });
  }
}
