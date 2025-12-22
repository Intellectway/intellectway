import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "https://intellecatway.runasp.net";
    const target = `${base.replace(/\/$/, "")}/api/RepresentUs`;
    // Read incoming raw body as ArrayBuffer and forward with same content-type
    const incomingContentType = request.headers.get("content-type") || "multipart/form-data";
    const buffer = await request.arrayBuffer();

    console.error("RepresentUs proxy -> target:", target);
    console.error("Incoming Content-Type:", incomingContentType);
    console.error("Incoming body bytes:", buffer?.byteLength);

    let res;
    try {
      res = await fetch(target, {
        method: "POST",
        headers: {
          // forward content-type so boundary is preserved
          "Content-Type": incomingContentType,
          accept: "application/json",
        },
        body: buffer,
      });
    } catch (fetchErr: any) {
      console.error("Error forwarding to target:", fetchErr?.message || fetchErr);
      return NextResponse.json({ message: "Upstream request failed", detail: String(fetchErr?.message || fetchErr) }, { status: 502 });
    }

    const text = await res.text();
    const contentType = res.headers.get("content-type") || "application/json";

    if (!res.ok) {
      console.error("Upstream responded with status", res.status, "body:", text);
    }

    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": contentType },
    });
  } catch (err: any) {
    console.error("RepresentUs proxy error:", err);
    return NextResponse.json({ message: "Proxy error" }, { status: 500 });
  }
}

