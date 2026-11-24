"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { cars } from "@/data/cars";

export function EnquiryForm({ initialCar = "", enquiryType = "enquiry", compact = false }: {
  initialCar?: string;
  enquiryType?: "enquiry" | "test-drive";
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");
  const [kind, setKind] = useState(enquiryType);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.enquiryType = kind;
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "The request could not be sent.");
      if (result.persisted) {
        setNotice("Your request has been sent to the VELOCITY MOTORS team.");
      } else {
        const current = JSON.parse(localStorage.getItem("velocity-enquiries") || "[]");
        localStorage.setItem("velocity-enquiries", JSON.stringify([...current, { ...payload, savedAt: new Date().toISOString() }]));
        setNotice("Saved on this browser only. Cloud enquiry storage is not configured yet.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Please try again or use WhatsApp.");
      setStatus("error");
    }
  }

  return (
    <div className={`enquiry-form-wrap ${compact ? "enquiry-form-wrap--compact" : ""}`}>
      {status === "success" ? (
        <div className="form-success" role="status"><span className="success-icon"><Check size={18} /></span><h3>Request received.</h3><p>{notice}</p><button className="text-link" onClick={() => setStatus("idle")}>Send another request <ArrowUpRight size={13} /></button></div>
      ) : (
        <form className="enquiry-form" onSubmit={submit}>
          <div className="form-type-switch" role="group" aria-label="Request type">
            <button type="button" className={kind === "enquiry" ? "is-selected" : ""} onClick={() => setKind("enquiry")}>Enquiry</button>
            <button type="button" className={kind === "test-drive" ? "is-selected" : ""} onClick={() => setKind("test-drive")}>Test-drive request</button>
          </div>
          <div className="form-row">
            <label><span className="field-label">Name</span><input className="field" name="name" autoComplete="name" placeholder="Your name" required maxLength={120} /></label>
            <label><span className="field-label">Email</span><input className="field" type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={180} /></label>
          </div>
          <div className="form-row">
            <label><span className="field-label">Phone number</span><input className="field" type="tel" name="phone" autoComplete="tel" placeholder="Country code + number" required maxLength={48} /></label>
            <label><span className="field-label">Interested car</span><select className="field" name="interestedCar" defaultValue={initialCar} required><option value="" disabled>Select a vehicle</option>{cars.map((car) => <option key={car.slug} value={car.displayName}>{car.displayName}</option>)}</select></label>
          </div>
          {kind === "test-drive" && <label><span className="field-label">Preferred date</span><input className="field" type="date" name="preferredDate" /></label>}
          <label><span className="field-label">Message</span><textarea className="field" name="message" placeholder="Tell us what you would like to know." required rows={compact ? 2 : 3} maxLength={2400} /></label>
          {status === "error" && <p className="form-error" role="alert">{notice}</p>}
          <div className="form-submit-row"><button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : kind === "test-drive" ? "Request a test drive" : "Send enquiry"}<ArrowUpRight size={15} /></button><span className="form-privacy">Your details are used only to respond to this request.</span></div>
        </form>
      )}
      {compact && <a className="whatsapp-link" href={`https://wa.me/?text=${encodeURIComponent(`Hello VELOCITY MOTORS, I'm interested in ${initialCar || "your collection"}.`)}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Continue on WhatsApp</a>}
    </div>
  );
}
