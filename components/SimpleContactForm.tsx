"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

// Pakketkeuze van de prijspagina (?pakket=enterprise), voor in de notificatiemail
function pricingChoice() {
  const params = new URLSearchParams(window.location.search);
  return { pakket: params.get("pakket") ?? undefined, facturatie: params.get("facturatie") ?? undefined };
}

const topicOptions = [
  "Algemene vraag",
  "Vraag over facturatie",
  "Technische ondersteuning",
  "Samenwerking of partnerschap",
  "Anders",
];

export function SimpleContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
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
        body: JSON.stringify({ type: "contact", ...form, ...pricingChoice(), website: honeypot }),
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
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-8 flex flex-col items-center text-center gap-3"
        style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
      >
        <CheckCircle className="w-8 h-8 text-green-600" />
        <p className="font-semibold text-green-800">Bericht verstuurd!</p>
        <p className="text-sm text-green-700">
          Bedankt voor je bericht. We reageren doorgaans binnen één werkdag.
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

  const selectStyle: React.CSSProperties = { ...inputStyle, color: form.topic ? "#1a1a1a" : "#9ca3af" };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "#374151" }}>
          Onderwerp <span style={{ color: "#9ca3af", fontWeight: 400 }}>optioneel</span>
        </label>
        <select
          value={form.topic}
          onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
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
          <option value="">Kies een onderwerp</option>
          {topicOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "#374151" }}>Je bericht</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Waar kunnen we je mee helpen?"
          rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
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
          <><Send className="w-4 h-4" /> Verstuur bericht</>
        )}
      </button>

      <p className="text-xs text-center leading-relaxed" style={{ color: "#9ca3af" }}>
        Door te versturen ga je akkoord met onze{" "}
        <a href="/privacy-policy" className="hover-orange" style={{ color: "#6b7280", textDecoration: "underline" }}>
          privacyverklaring
        </a>
        . We reageren doorgaans binnen één werkdag.
      </p>
    </form>
  );
}
