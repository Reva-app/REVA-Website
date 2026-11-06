"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

// Pakketkeuze of aanbod van de site (?pakket=team&facturatie=jaarlijks, ?aanbod=pilot), voor in de notificatiemail
function pricingChoice() {
  const params = new URLSearchParams(window.location.search);
  return {
    pakket: params.get("pakket") ?? undefined,
    facturatie: params.get("facturatie") ?? undefined,
    aanbod: params.get("aanbod") ?? undefined,
  };
}

const softwareOptions = [
  "Nog geen patiëntenportaal",
  "Ander patiëntenportaal",
  "Losse tools (WhatsApp, Excel, etc.)",
  "Weet ik nog niet",
];

/** `pilot`: aanmelding als pilotpraktijk, ook zonder ?aanbod=pilot in de URL */
export function ContactForm({ variant = "demo" }: { variant?: "demo" | "pilot" }) {
  const pilot = variant === "pilot";
  const choice = () => ({ ...pricingChoice(), ...(pilot ? { aanbod: "pilot" } : {}) });
  const [form, setForm] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    employees: "",
    software: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.practice || !form.email) {
      setError("Vul alle verplichte velden in.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Voer een geldig e-mailadres in.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "demo", ...form, ...choice(), website: honeypot }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Er ging iets mis. Probeer het later opnieuw.");
        setStatus("error");
        return;
      }
    } catch {
      setError("Geen verbinding mogelijk. Probeer het later opnieuw.");
      setStatus("error");
      return;
    }
    setStatus("success");

    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "generate_lead", form_name: pilot ? "pilot_aanmelding" : "demo_aanvragen", ...choice() });
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-8 flex flex-col items-center text-center gap-3"
        style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
      >
        <CheckCircle className="w-8 h-8 text-green-600" />
        <p className="font-semibold text-green-800">{pilot ? "Aanmelding ontvangen" : "Aanvraag verstuurd!"}</p>
        <p className="text-sm text-green-700">
          {pilot
            ? "Bedankt voor je aanmelding als pilotpraktijk. We nemen binnen één werkdag contact met je op voor een kennismaking."
            : "Bedankt voor je aanvraag. We nemen binnen één werkdag contact met je op om een demo in te plannen."}
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "1.5px solid #e8e5df",
    background: "#ffffff",
    color: "#1a1a1a",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const selectStyle: React.CSSProperties = { ...inputStyle, color: form.software ? "#1a1a1a" : "#9ca3af" };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "#374151" }}>Je naam</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Voor- en achternaam"
          style={inputStyle}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor = "#e8632a";
            (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor = "#e8e5df";
            (e.target as HTMLInputElement).style.boxShadow = "none";
          }}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "#374151" }}>Bedrijf</label>
        <input
          type="text"
          value={form.practice}
          onChange={(e) => setForm((f) => ({ ...f, practice: e.target.value }))}
          placeholder="Bijv. Fysiopraktijk de Linde"
          style={inputStyle}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor = "#e8632a";
            (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor = "#e8e5df";
            (e.target as HTMLInputElement).style.boxShadow = "none";
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" style={{ color: "#374151" }}>Telefoon</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="06 1234 5678"
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "#e8632a";
              (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "#e8e5df";
              (e.target as HTMLInputElement).style.boxShadow = "none";
            }}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium" style={{ color: "#374151" }}>E-mail</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="naam@praktijk.nl"
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "#e8632a";
              (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "#e8e5df";
              (e.target as HTMLInputElement).style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" style={{ color: "#374151" }}>
            Aantal medewerkers <span style={{ color: "#9ca3af", fontWeight: 400 }}>optioneel</span>
          </label>
          <input
            type="number"
            min={1}
            value={form.employees}
            onChange={(e) => setForm((f) => ({ ...f, employees: e.target.value }))}
            placeholder="Bijv. 4"
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "#e8632a";
              (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "#e8e5df";
              (e.target as HTMLInputElement).style.boxShadow = "none";
            }}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium" style={{ color: "#374151" }}>
            Huidige software <span style={{ color: "#9ca3af", fontWeight: 400 }}>optioneel</span>
          </label>
          <select
            value={form.software}
            onChange={(e) => setForm((f) => ({ ...f, software: e.target.value }))}
            style={selectStyle}
            onFocus={(e) => {
              (e.target as HTMLSelectElement).style.borderColor = "#e8632a";
              (e.target as HTMLSelectElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
            }}
            onBlur={(e) => {
              (e.target as HTMLSelectElement).style.borderColor = "#e8e5df";
              (e.target as HTMLSelectElement).style.boxShadow = "none";
            }}
          >
            <option value="">Kies je huidige software</option>
            {softwareOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "#374151" }}>
          Opmerkingen <span style={{ color: "#9ca3af", fontWeight: 400 }}>optioneel</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Iets wat we vooraf moeten weten? Bijvoorbeeld hoe je van ons gehoord hebt, met hoeveel locaties je werkt, of waar je tegenaan loopt."
          rows={4}
          style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
          onFocus={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor = "#e8632a";
            (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(232,99,42,0.12)";
          }}
          onBlur={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor = "#e8e5df";
            (e.target as HTMLTextAreaElement).style.boxShadow = "none";
          }}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm text-white transition-colors disabled:opacity-60"
        style={{ background: "#e8632a" }}
        onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Versturen...</>
        ) : (
          <><Send className="w-4 h-4" /> {pilot ? "Meld mijn praktijk aan" : "Stuur mijn aanvraag"}</>
        )}
      </button>

      <p className="text-xs text-center leading-relaxed" style={{ color: "#9ca3af" }}>
        Door te versturen ga je akkoord met onze{" "}
        <a href="/privacy-policy" className="hover-orange" style={{ color: "#6b7280", textDecoration: "underline" }}>
          privacyverklaring
        </a>
        . We nemen doorgaans binnen één werkdag contact met je op.
      </p>
    </form>
  );
}
