import { getCravingBySlug, cravingCategories } from "@/lib/data";
import { V1NewsletterForm } from "../../components/newsletter-form";
import { ArrowLeft, Bell, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function V1CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const craving = getCravingBySlug(slug);

  if (!craving) {
    notFound();
  }

  // If it's a live category, redirect to the specific page
  if (craving.status === "live") {
    redirect(`/v1/amsterdam/${slug}`);
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
            {/* Status badge */}
            <div className="mb-4">
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                style={{ 
                  backgroundColor: "rgba(139, 69, 19, 0.1)",
                  color: "var(--v1-accent)"
                }}
              >
                <Bell weight="fill" className="w-3 h-3" />
                Coming soon
              </span>
            </div>

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
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              {craving.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section 
        className="py-16 border-t"
        style={{ 
          backgroundColor: "var(--v1-background-alt)",
          borderColor: "var(--v1-border)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h2 
                className="text-2xl font-medium mb-6"
                style={{ 
                  color: "var(--v1-foreground)",
                  fontFamily: "var(--font-newsreader), serif"
                }}
              >
                We are researching this guide
              </h2>
              <p 
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                This guide is being researched. We are collecting evidence, visiting spots, 
                and building a shortlist of the {craving.title.toLowerCase()} places worth 
                your craving in Amsterdam.
              </p>
              <p 
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--v1-foreground-muted)" }}
              >
                Submit a pick, vote for it, or join the list to get notified when it goes live.
              </p>

              {/* What the guide will include */}
              <div 
                className="p-6 rounded-2xl border"
                style={{ 
                  backgroundColor: "var(--v1-background)",
                  borderColor: "var(--v1-border)"
                }}
              >
                <h3 
                  className="text-sm font-medium uppercase tracking-wider mb-4"
                  style={{ color: "var(--v1-foreground-muted)" }}
                >
                  What this guide will include
                </h3>
                <ul className="space-y-3">
                  <li 
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--v1-foreground)" }}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                      style={{ 
                        backgroundColor: "rgba(139, 69, 19, 0.1)",
                        color: "var(--v1-accent)"
                      }}
                    >
                      1
                    </span>
                    Top 5 ranked {craving.title.toLowerCase()} spots in Amsterdam
                  </li>
                  <li 
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--v1-foreground)" }}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                      style={{ 
                        backgroundColor: "rgba(139, 69, 19, 0.1)",
                        color: "var(--v1-accent)"
                      }}
                    >
                      2
                    </span>
                    Evidence-backed reasoning for each pick
                  </li>
                  <li 
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--v1-foreground)" }}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                      style={{ 
                        backgroundColor: "rgba(139, 69, 19, 0.1)",
                        color: "var(--v1-accent)"
                      }}
                    >
                      3
                    </span>
                    Style variations and what each is best for
                  </li>
                  <li 
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--v1-foreground)" }}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                      style={{ 
                        backgroundColor: "rgba(139, 69, 19, 0.1)",
                        color: "var(--v1-accent)"
                      }}
                    >
                      4
                    </span>
                    Watch-outs and practical tips
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Forms */}
            <div className="space-y-8">
              {/* Newsletter */}
              <div 
                className="p-6 rounded-2xl border"
                style={{ 
                  backgroundColor: "var(--v1-background)",
                  borderColor: "var(--v1-border)"
                }}
              >
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ 
                    color: "var(--v1-foreground)",
                    fontFamily: "var(--font-newsreader), serif"
                  }}
                >
                  Get notified when it goes live
                </h3>
                <p 
                  className="text-sm mb-6"
                  style={{ color: "var(--v1-foreground-muted)" }}
                >
                  Be the first to know when this guide is ready.
                </p>
                <V1NewsletterForm />
              </div>

              {/* Submit a pick */}
              <div 
                className="p-6 rounded-2xl border"
                style={{ 
                  backgroundColor: "var(--v1-background)",
                  borderColor: "var(--v1-border)"
                }}
              >
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ 
                    color: "var(--v1-foreground)",
                    fontFamily: "var(--font-newsreader), serif"
                  }}
                >
                  Know a great {craving.title.toLowerCase()} spot?
                </h3>
                <p 
                  className="text-sm mb-6"
                  style={{ color: "var(--v1-foreground-muted)" }}
                >
                  Help us find the best. We review every submission.
                </p>
                <Link
                  href="/v1/submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium w-full justify-center transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{ 
                    backgroundColor: "var(--v1-foreground)",
                    color: "var(--v1-background)"
                  }}
                >
                  <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                  Submit a {craving.title.toLowerCase()} pick
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other cravings */}
      <section 
        className="py-16 border-t"
        style={{ 
          backgroundColor: "var(--v1-background)",
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
            Explore other cravings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cravingCategories
              .filter((c) => c.id !== craving.id)
              .slice(0, 3)
              .map((category) => (
                <Link
                  key={category.id}
                  href={`/v1/amsterdam/${category.slug}`}
                  className="group block p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1"
                  style={{ 
                    backgroundColor: "var(--v1-background-alt)",
                    borderColor: "var(--v1-border)"
                  }}
                >
                  <span 
                    className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-3"
                    style={{ 
                      backgroundColor: category.status === "live" 
                        ? "var(--v1-success-bg)" 
                        : "rgba(0, 0, 0, 0.05)",
                      color: category.status === "live" 
                        ? "var(--v1-success)" 
                        : "var(--v1-foreground-muted)"
                    }}
                  >
                    {category.status === "live" ? "Top 5 live" : "Coming soon"}
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
    </div>
  );
}

export function generateStaticParams() {
  return cravingCategories
    .filter((c) => c.status === "coming-soon")
    .map((c) => ({ slug: c.slug }));
}
