import type { RankedItemPick, Place } from "@/lib/data";
import { MapPin, Globe, InstagramLogo, Warning, CheckCircle, Clock } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface PickCardProps {
  pick: RankedItemPick;
  place: Place;
}

export function V1PickCard({ pick, place }: PickCardProps) {
  const confidenceColor = {
    "High confidence": "var(--v1-success)",
    "Medium confidence": "var(--v1-accent)",
    "Early signal": "var(--v1-foreground-muted)",
    "Needs re-check": "#B45309",
  }[pick.evidenceConfidence];

  const confidenceBg = {
    "High confidence": "var(--v1-success-bg)",
    "Medium confidence": "rgba(139, 69, 19, 0.1)",
    "Early signal": "rgba(0, 0, 0, 0.05)",
    "Needs re-check": "rgba(180, 83, 9, 0.1)",
  }[pick.evidenceConfidence];

  return (
    <article 
      className="relative rounded-2xl border overflow-hidden"
      style={{ 
        backgroundColor: "var(--v1-background-alt)",
        borderColor: "var(--v1-border)"
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Image */}
        <div className="lg:col-span-1">
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src={pick.imageUrl}
              alt={pick.itemName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              {/* Rank and label */}
              <div className="flex items-center gap-3 mb-2">
                <span 
                  className="text-3xl font-medium"
                  style={{ 
                    color: "var(--v1-accent)",
                    fontFamily: "var(--font-newsreader), serif"
                  }}
                >
                  #{pick.rank}
                </span>
                <span 
                  className="px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                  style={{ 
                    backgroundColor: "rgba(139, 69, 19, 0.1)",
                    color: "var(--v1-accent)"
                  }}
                >
                  {pick.publicLabel}
                </span>
              </div>

              {/* Place name and neighborhood */}
              <h3 
                className="text-xl font-medium mb-1"
                style={{ 
                  color: "var(--v1-foreground)",
                  fontFamily: "var(--font-newsreader), serif"
                }}
              >
                {place.name}
              </h3>
              <p 
                className="text-sm flex items-center gap-1"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <MapPin weight="fill" className="w-4 h-4" />
                {place.neighborhood}
              </p>
            </div>

            {/* Evidence confidence */}
            <div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: confidenceBg,
                color: confidenceColor
              }}
            >
              <CheckCircle weight="fill" className="w-4 h-4" />
              {pick.evidenceConfidence}
            </div>
          </div>

          {/* Item details */}
          <div 
            className="mb-4 pb-4 border-b"
            style={{ borderColor: "var(--v1-border)" }}
          >
            <p 
              className="font-medium mb-1"
              style={{ color: "var(--v1-foreground)" }}
            >
              {pick.itemName}
            </p>
            <p 
              className="text-sm"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              {pick.itemStyle}
            </p>
          </div>

          {/* Best for */}
          <div className="mb-4">
            <h4 
              className="text-xs font-medium uppercase tracking-wider mb-2"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              Best for
            </h4>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: "var(--v1-foreground)" }}
            >
              {pick.bestFor}
            </p>
          </div>

          {/* Why it ranks */}
          <div className="mb-4">
            <h4 
              className="text-xs font-medium uppercase tracking-wider mb-2"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              Why it ranks
            </h4>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: "var(--v1-foreground)" }}
            >
              {pick.whyItRanks}
            </p>
          </div>

          {/* What people mention */}
          <div className="mb-4">
            <h4 
              className="text-xs font-medium uppercase tracking-wider mb-2"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              What people mention
            </h4>
            <div className="flex flex-wrap gap-2">
              {pick.whatPeopleMention.map((mention, i) => (
                <span 
                  key={i}
                  className="px-2.5 py-1 rounded-full text-xs"
                  style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    color: "var(--v1-foreground)"
                  }}
                >
                  {mention}
                </span>
              ))}
            </div>
          </div>

          {/* Watch-outs */}
          {pick.watchOuts.length > 0 && (
            <div 
              className="mb-6 p-4 rounded-lg"
              style={{ backgroundColor: "rgba(180, 83, 9, 0.05)" }}
            >
              <h4 
                className="text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-2"
                style={{ color: "#B45309" }}
              >
                <Warning weight="fill" className="w-4 h-4" />
                Watch-outs
              </h4>
              <ul className="space-y-1">
                {pick.watchOuts.map((watchOut, i) => (
                  <li 
                    key={i}
                    className="text-sm"
                    style={{ color: "var(--v1-foreground)" }}
                  >
                    {watchOut}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div 
            className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t"
            style={{ borderColor: "var(--v1-border)" }}
          >
            {/* Links */}
            <div className="flex items-center gap-4">
              <a 
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <MapPin weight="fill" className="w-4 h-4" />
                Map
              </a>
              <a 
                href={place.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <Globe weight="fill" className="w-4 h-4" />
                Website
              </a>
              <a 
                href={place.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <InstagramLogo weight="fill" className="w-4 h-4" />
                Instagram
              </a>
            </div>

            {/* Last checked */}
            <div 
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              <Clock weight="fill" className="w-4 h-4" />
              Last checked: {pick.lastChecked}
            </div>
          </div>

          {/* Feedback CTA */}
          <div className="mt-4">
            <Link
              href="/v1/submit"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--v1-accent)" }}
            >
              Tried this? Add feedback
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
