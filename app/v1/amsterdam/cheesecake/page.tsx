import { getCravingBySlug, getPicksForCraving, getPlaceById, cravingCategories } from "@/lib/data";
import { V1PickCard } from "../../components/pick-card";
import { V1NewsletterForm } from "../../components/newsletter-form";
import { ArrowLeft, CalendarBlank, MapPin, ListNumbers, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function V1CheesecakePage() {
  const craving = getCravingBySlug("cheesecake");
  const picks = getPicksForCraving("cheesecake");
  const comingSoonCategories = cravingCategories.filter((c) => c.status === "coming-soon").slice(0, 3);

  if (!craving) {
    return <div>Craving not found</div>;
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(139, 69, 19, 0.1) 0%, transparent 60%)"
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Back link */}
          <Link 
            href="/v1"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-70"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            <ArrowLeft weight="bold" className="w-4 h-4" />
            All cravings
          </Link>

          <div className="max-w-3xl">
            {/* Title */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 text-balance"
              style={{ 
                color: "var(--v1-foreground)",
                fontFamily: "var(--font-newsreader), serif"
              }}
            >
              {craving.heroTitle}
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              {craving.heroSubtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span 
                className="flex items-center gap-1.5"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <MapPin weight="fill" className="w-4 h-4" />
                Amsterdam
              </span>
              <span 
                className="flex items-center gap-1.5"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <ListNumbers weight="fill" className="w-4 h-4" />
                Top 5
              </span>
              <span 
                className="flex items-center gap-1.5"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                <CalendarBlank weight="fill" className="w-4 h-4" />
                Updated {craving.lastUpdated}
              </span>
              <span 
                className="flex items-center gap-1.5"
                style={{ color: "var(--v1-success)" }}
              >
                <CheckCircle weight="fill" className="w-4 h-4" />
                Evidence-backed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section 
        className="py-8 border-y"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p 
            className="text-base leading-relaxed max-w-3xl"
            style={{ color: "var(--v1-foreground)" }}
          >
            This is not a list of every place that sells cheesecake. It is a short guide to the 
            cheesecake picks that currently look most worth trying in Amsterdam, based on item-specific 
            public evidence, menu confidence, review themes, and editorial judgment.
          </p>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-16" style={{ backgroundColor: "var(--v1-background)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 
            className="text-2xl font-medium mb-8"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            The Top 5
          </h2>

          <div className="space-y-8">
            {picks.map((pick, index) => {
              const place = getPlaceById(pick.placeId);
              if (!place) return null;

              return (
                <div 
                  key={pick.id}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <V1PickCard pick={pick} place={place} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section 
        className="py-16 border-t"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 
              className="text-2xl font-medium mb-6"
              style={{ 
                color: "var(--v1-foreground)",
                fontFamily: "var(--font-newsreader), serif"
              }}
            >
              How we rank
            </h2>
            <p 
              className="text-base leading-relaxed"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              We do not try to list everything. For each craving, we look for places with 
              item-specific evidence, recent signals, menu confidence, and enough public support 
              to deserve a spot. Rankings are editorial, not paid placement. When evidence is 
              limited, we say so.
            </p>
            <Link
              href="/v1/methodology"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--v1-accent)" }}
            >
              Read full methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Submit a better cheesecake */}
      <section 
        className="py-16 border-t"
        style={{ 
          backgroundColor: "var(--v1-background)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 
            className="text-2xl font-medium mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            Think we missed a better cheesecake?
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            Send it in. We review submissions before they affect the list.
          </p>
          <Link
            href="/v1/submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ 
              backgroundColor: "var(--v1-foreground)",
              color: "var(--v1-background)"
            }}
          >
            Submit a pick
          </Link>
        </div>
      </section>

      {/* Next cravings */}
      <section 
        className="py-16 border-t"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 
            className="text-2xl font-medium mb-8"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            More cravings coming soon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonCategories.map((category) => (
              <Link
                key={category.id}
                href={`/v1/amsterdam/${category.slug}`}
                className="group block p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1"
                style={{ 
                  backgroundColor: "var(--v1-background)",
                  borderColor: "var(--v1-border)"
                }}
              >
                <span 
                  className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    color: "var(--v1-foreground-muted)"
                  }}
                >
                  Coming soon
                </span>
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ 
                    color: "var(--v1-foreground)",
                    fontFamily: "var(--font-newsreader), serif"
                  }}
                >
                  {category.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: "var(--v1-foreground-muted)" }}
                >
                  {category.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section 
        className="py-16 border-t"
        style={{ 
          backgroundColor: "var(--v1-background)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 
            className="text-2xl font-medium mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            Get the next craving guide first
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            We are starting with Amsterdam. Join for new Top 5 guides, reader picks, 
            and updates when rankings change.
          </p>
          <V1NewsletterForm />
        </div>
      </section>
    </div>
  );
}
