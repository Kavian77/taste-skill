"use client";

import { useState } from "react";
import { cravingCategories } from "@/lib/data";

export function V1NewsletterForm() {
  const [email, setEmail] = useState("");
  const [selectedCraving, setSelectedCraving] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div 
        className="text-center py-8 px-6 rounded-2xl border"
        style={{ 
          backgroundColor: "var(--v1-success-bg)",
          borderColor: "var(--v1-success)"
        }}
      >
        <p 
          className="font-medium"
          style={{ color: "var(--v1-success)" }}
        >
          You are on the list.
        </p>
        <p 
          className="text-sm mt-2"
          style={{ color: "var(--v1-foreground-muted)" }}
        >
          We will send the next craving guide when it is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--v1-foreground)" }}
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
          style={{ 
            backgroundColor: "var(--v1-background-alt)",
            borderColor: "var(--v1-border)",
            color: "var(--v1-foreground)"
          }}
        />
      </div>

      <div>
        <label 
          htmlFor="craving" 
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--v1-foreground)" }}
        >
          Which guide should we build next? (optional)
        </label>
        <select
          id="craving"
          value={selectedCraving}
          onChange={(e) => setSelectedCraving(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
          style={{ 
            backgroundColor: "var(--v1-background-alt)",
            borderColor: "var(--v1-border)",
            color: "var(--v1-foreground)"
          }}
        >
          <option value="">Select a craving...</option>
          {cravingCategories
            .filter((c) => c.status === "coming-soon")
            .map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ 
          backgroundColor: "var(--v1-foreground)",
          color: "var(--v1-background)"
        }}
      >
        Join the list
      </button>
    </form>
  );
}
