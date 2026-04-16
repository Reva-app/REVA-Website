"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Vul alle velden in.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Voer een geldig e-mailadres in.");
      return;
    }
    setError("");
    setStatus("loading");
    // Simulate — vervang door echte API call
    await new Promise((r) => setTimeout(r, 1000));
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
          Bedankt voor je bericht. We reageren zo snel mogelijk, meestal binnen één werkdag.
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" style={{ color: "#374151" }}>Naam</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Jouw naam"
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
            placeholder="jouw@email.nl"
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
        <label className="text-sm font-medium" style={{ color: "#374151" }}>Bericht</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Schrijf hier je bericht..."
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
        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white transition-colors disabled:opacity-60"
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
    </form>
  );
}
