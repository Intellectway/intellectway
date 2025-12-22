"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Input, TextArea, Button } from "@/components/ui";

export function ContactForm() {
  const [inquiryType, setInquiryType] = useState<string>("");

  const [submitting, setSubmitting] = useState(false);

  const mapInquiryToEnum = (value: string) => {
    // Matches the server enum: Student=0, Professional=1, Corporate=2
    switch (value) {
      case "student":
        return 0;
      case "professional":
        return 1;
      case "corporate":
      case "institutes":
        return 2;
      default:
        return 0;
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload = {
        name: fd.get("name") as string | null,
        email: fd.get("email") as string | null,
        phoneNumber: fd.get("phone") as string | null,
        inquiryType: mapInquiryToEnum(inquiryType),
        message: fd.get("message") as string | null,
      };

      // Use local proxy to avoid CORS issues (same-origin)
      const url = `/api/contact-proxy`;

      const res = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status >= 400) throw new Error(`Request failed: ${res.status}`);
      // Keep design as-is; use SweetAlert for feedback
      Swal.fire({
        icon: "success",
        title: "Message sent",
        text: "Your message has been sent successfully.",
        timer: 2500,
        showConfirmButton: false,
      });
      form.reset();
      setInquiryType("");
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Send failed",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-slate-200 p-6"
      style={{ backgroundColor: "#E2E3E580" }}
    >
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "1.5rem",
          lineHeight: "100%",
          letterSpacing: "0%",
          verticalAlign: "middle",
          color: "#414141",
        }}
      >
        Get in Touch with Us
      </h2>

      <Input
        label="Name"
        name="name"
        placeholder="Enter your name"
        style={{ borderColor: "#6C757D" }}
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        style={{ borderColor: "#6C757D" }}
        placeholder="example@email.com"
        required
      />
      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        style={{ borderColor: "#6C757D" }}
        placeholder="Enter your phone number"
        required
      />

      <div className="space-y-3">
        <label className="text-sm font-medium text-slate-700">
          Inquiry Type
        </label>
        <div className="flex flex-row gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="inquiryType"
              value="student"
              checked={inquiryType === "student"}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-4 h-4 text-[#17aac0] border-slate-300 focus:ring-[#17aac0] focus:ring-2"
              style={{ backgroundColor: "transparent" }}
            />
            <span className="text-sm text-slate-700">Student</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="inquiryType"
              value="professional"
              checked={inquiryType === "professional"}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-4 h-4 text-[#17aac0] border-slate-300 focus:ring-[#17aac0] focus:ring-2"
              style={{ backgroundColor: "transparent" }}
            />
            <span className="text-sm text-slate-700">Professional</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="inquiryType"
              value="institutes"
              checked={inquiryType === "institutes"}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-4 h-4 text-[#17aac0] border-slate-300 focus:ring-[#17aac0] focus:ring-2"
              style={{ backgroundColor: "transparent" }}
            />
            <span className="text-sm text-slate-700">Institutes</span>
          </label>
        </div>
      </div>

      <TextArea
        label="Message"
        name="message"
        placeholder="Enter your message"
        style={{ borderColor: "#6C757D" }}
        rows={5}
        required
      />

      <Button type="submit" className="w-full">
        Send
      </Button>
    </form>
  );
}

