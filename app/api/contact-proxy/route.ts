import { NextResponse } from "next/server";
import https from "https";

// Create an HTTPS agent that works with self-signed certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === 'production',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://intellecatwayfinal.runasp.net";
    const target = `${base.replace(/\/$/, "")}/api/ContactUs`;

    console.log("Contact proxy -> target:", target);

    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const res = await fetch(target, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "User-Agent": "IntellectWay-NextJS/1.0",
        },
        body: JSON.stringify(body),
        signal: controller.signal,
        // @ts-ignore - agent is valid for Node.js fetch
        agent: target.startsWith('https') ? httpsAgent : undefined,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        console.error(`Contact API responded with status ${res.status}`);
      }

      const text = await res.text();
      const contentType = res.headers.get("content-type") || "text/plain";

      return new Response(text, {
        status: res.status,
        headers: { "Content-Type": contentType },
      });
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        console.error("Contact API request timeout");
        return NextResponse.json(
          { message: "Request timeout", error: "The API request took too long to respond" },
          { status: 504 }
        );
      }
      
      throw fetchError;
    }
  } catch (err: any) {
    console.error("Contact proxy error:", err);
    console.error("Error details:", {
      code: err.code,
      cause: err.cause,
      message: err.message,
    });
    return NextResponse.json(
      { 
        message: "Unable to send contact form", 
        error: err.message || "Connection error",
        code: err.code || "UNKNOWN",
        details: process.env.NODE_ENV === 'development' ? err.toString() : undefined
      }, 
      { status: 500 }
    );
  }
}
