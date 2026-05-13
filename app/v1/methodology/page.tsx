import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function V1MethodologyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
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
          className="text-3xl md:text-4xl font-medium leading-tight mb-8"
          style={{ 
            color: "var(--v1-foreground)",
            fontFamily: "var(--font-newsreader), serif"
          }}
        >
          How we rank
        </h1>

        {/* Content */}
        <div 
          className="prose prose-lg"
          style={{ 
            color: "var(--v1-foreground)",
            "--tw-prose-headings": "var(--v1-foreground)",
            "--tw-prose-body": "var(--v1-foreground-muted)",
          } as React.CSSProperties}
        >
          <p 
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            We do not try to list everything. For each craving, we look for places with 
            item-specific evidence, recent signals, menu confidence, and enough public 
            support to deserve a spot. Rankings are editorial, not paid placement. When 
            evidence is limited, we say so.
          </p>

          <h2 
            className="text-2xl font-medium mt-12 mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            Our principles
          </h2>

          <div className="space-y-8">
            <div 
              className="p-6 rounded-2xl border"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)"
              }}
            >
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: "var(--v1-foreground)" }}
              >
                Curate fewer things better
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                We do not index every menu item from every cafe. The product should feel like 
                an evidence-backed shortlist, not a generic food directory. Top 5, not top 50.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl border"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)"
              }}
            >
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: "var(--v1-foreground)" }}
              >
                Item-specific, not place-general
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                A mediocre overall place may have one excellent item, while a famous place 
                may be overrated for a specific craving. We look for praise about the specific 
                item, not just the venue.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl border"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)"
              }}
            >
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: "var(--v1-foreground)" }}
              >
                Evidence over opinion
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                We collect signals from public reviews, social media mentions, menu evidence, 
                local knowledge, and user submissions. When confidence is limited, we label it clearly.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl border"
              style={{ 
                backgroundColor: "var(--v1-background-alt)",
                borderColor: "var(--v1-border)"
              }}
            >
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: "var(--v1-foreground)" }}
              >
                No pay-to-rank
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Rankings are editorial, not paid placement. Businesses cannot buy their way 
                onto the list. Trust is our core product.
              </p>
            </div>
          </div>

          <h2 
            className="text-2xl font-medium mt-12 mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            What we look for
          </h2>

          <ul 
            className="space-y-4"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            <li className="flex items-start gap-3">
              <span 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--v1-accent)" }}
              />
              <span className="text-base leading-relaxed">
                <strong style={{ color: "var(--v1-foreground)" }}>Item-specific praise:</strong> Are 
                people mentioning the specific item, not just the place?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--v1-accent)" }}
              />
              <span className="text-base leading-relaxed">
                <strong style={{ color: "var(--v1-foreground)" }}>Cross-source support:</strong> Does 
                the signal appear across multiple independent sources?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--v1-accent)" }}
              />
              <span className="text-base leading-relaxed">
                <strong style={{ color: "var(--v1-foreground)" }}>Freshness:</strong> Is the evidence 
                recent, or has the place changed since?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--v1-accent)" }}
              />
              <span className="text-base leading-relaxed">
                <strong style={{ color: "var(--v1-foreground)" }}>Menu confidence:</strong> Is the 
                item clearly on the current menu, or is availability uncertain?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--v1-accent)" }}
              />
              <span className="text-base leading-relaxed">
                <strong style={{ color: "var(--v1-foreground)" }}>Specificity:</strong> Do people 
                describe why it is good, not just that it is good?
              </span>
            </li>
          </ul>

          <h2 
            className="text-2xl font-medium mt-12 mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            Evidence confidence labels
          </h2>

          <p 
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            Every ranked item shows an evidence confidence label:
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                style={{ 
                  backgroundColor: "var(--v1-success-bg)",
                  color: "var(--v1-success)"
                }}
              >
                High confidence
              </span>
              <span 
                className="text-sm"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Strong, consistent signals across multiple sources
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                style={{ 
                  backgroundColor: "rgba(139, 69, 19, 0.1)",
                  color: "var(--v1-accent)"
                }}
              >
                Medium confidence
              </span>
              <span 
                className="text-sm"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Good signals but limited sources or recent changes
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                style={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "var(--v1-foreground-muted)"
                }}
              >
                Early signal
              </span>
              <span 
                className="text-sm"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Promising but needs more evidence
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                style={{ 
                  backgroundColor: "rgba(180, 83, 9, 0.1)",
                  color: "#B45309"
                }}
              >
                Needs re-check
              </span>
              <span 
                className="text-sm"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Evidence is dated or conflicting
              </span>
            </div>
          </div>

          <div 
            className="mt-12 p-6 rounded-2xl border text-center"
            style={{ 
              backgroundColor: "var(--v1-background-alt)",
              borderColor: "var(--v1-border)"
            }}
          >
            <p 
              className="text-base mb-4"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              Have feedback on our methodology?
            </p>
            <Link
              href="/v1/submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ 
                backgroundColor: "var(--v1-foreground)",
                color: "var(--v1-background)"
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
