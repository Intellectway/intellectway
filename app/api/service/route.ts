import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const params = url.searchParams.toString();
    const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "https://intellecatway.runasp.net";
    const target = `${base.replace(/\/$/, "")}/api/Service${params ? `?${params}` : ""}`;

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
    console.error("Service proxy error:", err);
    return NextResponse.json({ message: "Proxy error" }, { status: 500 });
  }
}

