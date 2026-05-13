import Link from "next/link";
import type { CravingCategory } from "@/lib/data";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface CravingCardProps {
  craving: CravingCategory;
}

export function V1CravingCard({ craving }: CravingCardProps) {
  const isLive = craving.status === "live";
  
  return (
    <Link
      href={`/v1/amsterdam/${craving.slug}`}
      className="group block"
    >
      <article 
        className="relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={craving.imageUrl}
            alt={craving.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Status badge */}
          <div className="mb-3">
            {isLive ? (
              <span 
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: "var(--v1-success-bg)",
                  color: "var(--v1-success)"
                }}
              >
                Top 5 live
              </span>
            ) : (
              <span 
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: "rgba(0,0,0,0.05)",
                  color: "var(--v1-foreground-muted)"
                }}
              >
                Coming soon
              </span>
            )}
          </div>

          {/* Title */}
          <h3 
            className="text-xl font-medium mb-2"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            {craving.title}
          </h3>

          {/* Description */}
          <p 
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            {craving.shortDescription}
          </p>

          {/* CTA */}
          <div 
            className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:opacity-70"
            style={{ color: "var(--v1-accent)" }}
          >
            <span>{isLive ? "View Top 5" : "Get notified"}</span>
            <ArrowRight 
              weight="bold" 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
