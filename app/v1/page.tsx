import { cravingCategories } from "@/lib/data";
import { V1CravingCard } from "./components/craving-card";
import { V1NewsletterForm } from "./components/newsletter-form";
import { ArrowRight, Sparkle, ListChecks, Eye } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function V1HomePage() {
  const liveCategories = cravingCategories.filter((c) => c.status === "live");
  const comingSoonCategories = cravingCategories.filter((c) => c.status === "coming-soon");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Subtle background gradient */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(139, 69, 19, 0.08) 0%, transparent 60%)"
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0s" }}>
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                style={{ 
                  backgroundColor: "rgba(139, 69, 19, 0.1)",
                  color: "var(--v1-accent)"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Amsterdam
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6 text-balance animate-fade-in-up opacity-0"
              style={{ 
                color: "var(--v1-foreground)",
                fontFamily: "var(--font-newsreader), serif",
                animationDelay: "0.1s"
              }}
            >
              Find the best version of what you are craving.
            </h1>

            {/* Subcopy */}
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-in-up opacity-0"
              style={{ 
                color: "var(--v1-foreground-muted)",
                animationDelay: "0.2s"
              }}
            >
              The Craving List ranks Amsterdam&apos;s most craveable bites by item, not just by place. 
              Start with cheesecake, then help us choose the next guide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
              <Link
                href="/v1/amsterdam/cheesecake"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ 
                  backgroundColor: "var(--v1-foreground)",
                  color: "var(--v1-background)"
                }}
              >
                Explore cheesecake
                <ArrowRight weight="bold" className="w-4 h-4" />
              </Link>
              <a
                href="#vote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-all hover:bg-black/5 active:scale-[0.98]"
                style={{ 
                  borderColor: "var(--v1-border-strong)",
                  color: "var(--v1-foreground)"
                }}
              >
                Vote for the next craving
              </a>
            </div>

            {/* Trust line */}
            <p 
              className="mt-8 text-sm animate-fade-in-up opacity-0"
              style={{ 
                color: "var(--v1-foreground-muted)",
                animationDelay: "0.4s"
              }}
            >
              Top five picks. Evidence-backed. No pay-to-rank.
            </p>
          </div>
        </div>
      </section>

      {/* Craving Cards Section */}
      <section className="py-20" style={{ backgroundColor: "var(--v1-background)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 
            className="text-2xl md:text-3xl font-medium mb-12"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            What are you craving?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Live categories first */}
            {liveCategories.map((craving, index) => (
              <div 
                key={craving.id} 
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <V1CravingCard craving={craving} />
              </div>
            ))}
            {/* Coming soon categories */}
            {comingSoonCategories.map((craving, index) => (
              <div 
                key={craving.id} 
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${(liveCategories.length + index) * 0.1}s` }}
              >
                <V1CravingCard craving={craving} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists Section */}
      <section 
        className="py-20 border-t"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-2xl md:text-3xl font-medium mb-6"
                style={{ 
                  color: "var(--v1-foreground)",
                  fontFamily: "var(--font-newsreader), serif"
                }}
              >
                Why this exists
              </h2>
              <p 
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Most food discovery starts with places. We start with cravings. If you want cheesecake, 
                you should not have to scroll through hundreds of cafe reviews to find the slice people 
                actually talk about.
              </p>
              <p 
                className="text-base leading-relaxed"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Google Maps helps people find places nearby. The Craving List helps people find the 
                best version of what they are craving.
              </p>
            </div>

            {/* How rankings work */}
            <div 
              className="p-8 rounded-2xl border"
              style={{ 
                backgroundColor: "var(--v1-background)",
                borderColor: "var(--v1-border)"
              }}
            >
              <h3 
                className="text-lg font-medium mb-6"
                style={{ color: "var(--v1-foreground)" }}
              >
                How rankings work
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(139, 69, 19, 0.1)" }}
                  >
                    <Sparkle weight="fill" className="w-5 h-5" style={{ color: "var(--v1-accent)" }} />
                  </div>
                  <div>
                    <p 
                      className="font-medium mb-1"
                      style={{ color: "var(--v1-foreground)" }}
                    >
                      Collect candidates
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: "var(--v1-foreground-muted)" }}
                    >
                      From public evidence, local knowledge, and user submissions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(139, 69, 19, 0.1)" }}
                  >
                    <Eye weight="fill" className="w-5 h-5" style={{ color: "var(--v1-accent)" }} />
                  </div>
                  <div>
                    <p 
                      className="font-medium mb-1"
                      style={{ color: "var(--v1-foreground)" }}
                    >
                      Look for item-specific signals
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: "var(--v1-foreground-muted)" }}
                    >
                      Not just general cafe ratings, but praise for the specific item.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(139, 69, 19, 0.1)" }}
                  >
                    <ListChecks weight="fill" className="w-5 h-5" style={{ color: "var(--v1-accent)" }} />
                  </div>
                  <div>
                    <p 
                      className="font-medium mb-1"
                      style={{ color: "var(--v1-foreground)" }}
                    >
                      Publish a short Top 5
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: "var(--v1-foreground-muted)" }}
                    >
                      With confidence notes, watch-outs, and update dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        id="vote"
        className="py-20 border-t"
        style={{ 
          backgroundColor: "var(--v1-background)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 
            className="text-2xl md:text-3xl font-medium mb-4"
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

      {/* Submit a Pick Section */}
      <section 
        className="py-20 border-t"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 
            className="text-2xl md:text-3xl font-medium mb-4"
            style={{ 
              color: "var(--v1-foreground)",
              fontFamily: "var(--font-newsreader), serif"
            }}
          >
            Know a better bite?
          </h2>
          <p 
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            Know a cheesecake, matcha, gelato, or pastry that deserves a spot? 
            Send it in. We review submissions before adding them.
          </p>
          <Link
            href="/v1/submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-all hover:bg-black/5 active:scale-[0.98]"
            style={{ 
              borderColor: "var(--v1-border-strong)",
              color: "var(--v1-foreground)"
            }}
          >
            Submit a pick
            <ArrowRight weight="bold" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
