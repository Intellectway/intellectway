"use client";

import { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Input, Select, Button } from "@/components/ui";
import { COUNTRIES } from "@/lib/countries";

export function RepresentUsForm() {
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Debug: log form data entries to console to verify names/values
      const entries: Array<[string, any]> = [];
      for (const pair of fd.entries()) {
        entries.push([pair[0], pair[1]]);
      }
      console.debug("RepresentUs FormData entries:", entries);

      // Map HTML form names to API expected names
      const mapField = (from: string, to: string) => {
        const v = fd.get(from);
        if (v !== null) fd.set(to, v as any);
      };

      mapField("name", "Name");
      mapField("email", "Email");
      mapField("phone", "PhoneNumber");
      mapField("additionalPhone", "AdditionalPhoneNumber");
      mapField("homeCountry", "HomeCountry");
      mapField("currentResidency", "CurrentResidency");
      mapField("university", "University");

      // If file input exists, append first file under name 'File'
      const input = fileRef.current;
      if (input && input.files && input.files.length > 0) {
        fd.set("File", input.files[0]);
      }

      const res = await axios.post("/api/represent-us", fd, {
        // Let browser set Content-Type with boundary
        headers: { Accept: "application/json" },
      });

      if (res.status >= 200 && res.status < 300) {
        Swal.fire({ icon: "success", title: "Submitted", text: "Your request was submitted successfully.", timer: 2500, showConfirmButton: false });
        form.reset();
        setFileName("");
      } else {
        throw new Error(`Status ${res.status}`);
      }
    } catch (err: any) {
      // axios error details
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.message);
        console.error("Response status:", err.response?.status);
        console.error("Response data:", err.response?.data);

        const data = err.response?.data as any;
        if (data && data.errors) {
          // Build readable list of validation errors
          const messages: string[] = [];
          for (const key of Object.keys(data.errors)) {
            const vals = data.errors[key];
            if (Array.isArray(vals)) messages.push(`${key}: ${vals.join(", ")}`);
            else messages.push(`${key}: ${String(vals)}`);
          }
          Swal.fire({ icon: "error", title: "Validation failed", html: messages.join("<br/>") });
        } else {
          Swal.fire({ icon: "error", title: "Submit failed", text: `Unable to submit: ${err.response?.status || err.message}` });
        }
      } else {
        console.error(err);
        Swal.fire({ icon: "error", title: "Submit failed", text: "Unable to submit your request. Please try again later." });
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Input
          label="Full name"
          name="name"
          placeholder="Enter your full name"
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          required
        />
        <Input
          label="Additional Phone Number"
          type="tel"
          name="additionalPhone"
          placeholder="Enter your additional phone number"
        />
        <Select
          label="Home Country"
          name="homeCountry"
          options={COUNTRIES}
        />
        <Select
          label="Current Residency"
          name="currentResidency"
          options={COUNTRIES}
        />
        <Input
          label="University"
          name="university"
          placeholder="Enter your university"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">
          Upload Any Related Documents <span className="text-slate-400">(Optional)</span>
        </label>
        <div className="relative">
            <input
              type="file"
              name="File"
              ref={fileRef}
              onChange={(e) => setFileName(e.target.files && e.target.files[0] ? e.target.files[0].name : "")}
              className="hidden"
              id="file-upload"
            />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:border-[#17aac0] transition-colors"
            style={{ borderColor: "#6C757D" }}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                <path
                  d="M15.4167 23.4168H12.75C8.97933 23.4168 7.09267 23.4168 5.922 22.2448C4.75 21.0741 4.75 19.1874 4.75 15.4168V8.75009C4.75 4.97942 4.75 3.09276 5.922 1.92209C7.09267 0.750091 8.978 0.750092 12.75 0.750092H14.5407C15.6313 0.750092 16.1753 0.750091 16.666 0.952758C17.1553 1.15542 17.542 1.54209 18.3127 2.31276L21.8553 5.85409C22.626 6.62476 23.0113 7.01142 23.214 7.50076C23.4167 7.99009 23.4167 8.53542 23.4167 9.62609V15.4168C23.4167 19.1874 23.4167 21.0741 22.2447 22.2448C21.074 23.4168 19.186 23.4168 15.4167 23.4168Z"
                  stroke="#414141"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0833 1.41675V2.75008C16.0833 5.26475 16.0833 6.52075 16.8647 7.30208C17.646 8.08341 18.902 8.08341 21.4167 8.08341H22.75M4.75 4.75008C3.68913 4.75008 2.67172 5.17151 1.92157 5.92165C1.17143 6.6718 0.75 7.68922 0.75 8.75008V19.4167C0.75 23.1874 0.75 25.0741 1.922 26.2447C3.09267 27.4167 4.978 27.4167 8.75 27.4167H15.4167C16.4775 27.4167 17.4949 26.9953 18.2451 26.2452C18.9952 25.495 19.4167 24.4776 19.4167 23.4167M9.418 12.7501H14.7513M9.418 18.0834H18.7513"
                  stroke="#414141"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className="text-slate-600"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Drop your files here or then{" "}
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#1E4469",
                  }}
                >
                  Browse
                </span>
              </p>
              {fileName ? (
                <p className="mt-2 text-sm text-slate-600">Selected file: {fileName}</p>
              ) : null}
            </div>
          </label>
        </div>
      </div>

      <div className="flex justify-start sm:justify-start pt-4">
        <Button type="submit" disabled={submitting} className="w-full sm:w-auto px-8 sm:px-12 py-3 text-sm sm:text-base">
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}

