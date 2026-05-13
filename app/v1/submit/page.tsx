"use client";

import { useState } from "react";
import { cravingCategories } from "@/lib/data";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function V1SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    placeName: "",
    itemName: "",
    city: "Amsterdam",
    whyConsidered: "",
    evidenceLink: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "var(--v1-success-bg)" }}
          >
            <CheckCircle weight="fill" className="w-8 h-8" style={{ color: "var(--v1-success)" }} />
          </div>
          <h1 
            className="text-2xl font-medium mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            Thanks for your submission
          </h1>
          <p 
            className="text-base mb-8"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            We will review it before it affects the list.
          </p>
          <Link
            href="/v1"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ 
              backgroundColor: "var(--v1-foreground)",
              color: "var(--v1-background)"
            }}
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Back link */}
        <Link 
          href="/v1"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-70"
          style={{ color: "var(--v1-foreground-muted)" }}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
          Back
        </Link>

        {/* Header */}
        <h1 
          className="text-3xl md:text-4xl font-medium leading-tight mb-4"
          style={{ 
            color: "var(--v1-foreground)",
            fontFamily: "var(--font-newsreader), serif"
          }}
        >
          Submit a pick
        </h1>
        <p 
          className="text-lg mb-12"
          style={{ color: "var(--v1-foreground-muted)" }}
        >
          Think we missed a better bite? Send it in. We review submissions before they affect the list.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Craving category */}
          <div>
            <label 
              htmlFor="category" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              Craving category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            >
              <option value="">Select a category...</option>
              {cravingCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Place name */}
          <div>
            <label 
              htmlFor="placeName" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              Place name *
            </label>
            <input
              type="text"
              id="placeName"
              name="placeName"
              value={formData.placeName}
              onChange={handleChange}
              required
              placeholder="e.g., Canal Side Bakery"
              className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            />
          </div>

          {/* Item name */}
          <div>
            <label 
              htmlFor="itemName" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              Item name *
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              placeholder="e.g., Basque burnt cheesecake"
              className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            />
          </div>

          {/* City */}
          <div>
            <label 
              htmlFor="city" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled
              className="w-full px-4 py-3 rounded-lg border text-sm opacity-50"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            />
            <p 
              className="text-xs mt-1"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              We are starting with Amsterdam only
            </p>
          </div>

          {/* Why should it be considered */}
          <div>
            <label 
              htmlFor="whyConsidered" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              Why should it be considered? *
            </label>
            <textarea
              id="whyConsidered"
              name="whyConsidered"
              value={formData.whyConsidered}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell us what makes this place special for this craving..."
              className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 resize-none"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            />
          </div>

          {/* Evidence link */}
          <div>
            <label 
              htmlFor="evidenceLink" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              Evidence link (optional)
            </label>
            <input
              type="url"
              id="evidenceLink"
              name="evidenceLink"
              value={formData.evidenceLink}
              onChange={handleChange}
              placeholder="e.g., Google review, Instagram post, blog..."
              className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--v1-foreground)" }}
            >
              Your email (optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="In case we have questions"
              className="w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)",
                color: "var(--v1-foreground)"
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-4 rounded-lg text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ 
              backgroundColor: "var(--v1-foreground)",
              color: "var(--v1-background)"
            }}
          >
            Submit pick
          </button>
        </form>
      </div>
    </div>
  );
}
