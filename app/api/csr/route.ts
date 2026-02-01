import { NextResponse } from "next/server";
import https from "https";

// Create an HTTPS agent that works with self-signed certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === 'production',
});

export async function POST(request: Request) {
  try {
    const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "https://intellecatwayfinal.runasp.net";
    const target = `${base.replace(/\/$/, "")}/api/CSR`;
    // Read incoming raw body as ArrayBuffer and forward with same content-type
    const incomingContentType = request.headers.get("content-type") || "multipart/form-data";
    const buffer = await request.arrayBuffer();

    console.error("CSR proxy -> target:", target);
    console.error("Incoming Content-Type:", incomingContentType);
    console.error("Incoming body bytes:", buffer?.byteLength);

    let res;
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout for file upload

    try {
      res = await fetch(target, {
        method: "POST",
        headers: {
          // forward content-type so boundary is preserved
          "Content-Type": incomingContentType,
          accept: "application/json",
          "User-Agent": "IntellectWay-NextJS/1.0",
        },
        body: buffer,
        signal: controller.signal,
        // @ts-ignore - agent is valid for Node.js fetch
        agent: target.startsWith('https') ? httpsAgent : undefined,
      });
      clearTimeout(timeoutId);
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);

      if (fetchErr.name === 'AbortError') {
        console.error("CSR API request timeout");
        return NextResponse.json({ message: "Request timeout", detail: "The API request took too long to respond" }, { status: 504 });
      }

      console.error("Error forwarding to target:", fetchErr?.message || fetchErr);
      console.error("Error details:", { code: fetchErr.code, cause: fetchErr.cause });
      return NextResponse.json({ message: "Upstream request failed", detail: String(fetchErr?.message || fetchErr), code: fetchErr.code }, { status: 502 });
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
    console.error("CSR proxy error:", err);
    return NextResponse.json({ message: "Proxy error" }, { status: 500 });
  }
}
