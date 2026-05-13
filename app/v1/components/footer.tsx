import Link from "next/link";

export function V1Footer() {
  return (
    <footer 
      className="border-t"
      style={{ 
        backgroundColor: "var(--v1-background-alt)",
        borderColor: "var(--v1-border)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 
              className="text-lg font-medium mb-3"
              style={{ color: "var(--v1-foreground)" }}
            >
              The Craving List
            </h3>
            <p 
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              The Craving List is starting in Amsterdam with a simple belief: the craving comes first.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h4 
              className="text-xs font-medium uppercase tracking-wider mb-4"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              Guides
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/v1/amsterdam/cheesecake" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--v1-foreground)" }}
                >
                  Cheesecake
                </Link>
              </li>
              <li>
                <Link 
                  href="/v1/amsterdam/pain-au-chocolat" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--v1-foreground-muted)" }}
                >
                  Pain au chocolat (soon)
                </Link>
              </li>
              <li>
                <Link 
                  href="/v1/amsterdam/matcha" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--v1-foreground-muted)" }}
                >
                  Matcha (soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 
              className="text-xs font-medium uppercase tracking-wider mb-4"
              style={{ color: "var(--v1-foreground-muted)" }}
            >
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/v1/methodology" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--v1-foreground)" }}
                >
                  How we rank
                </Link>
              </li>
              <li>
                <Link 
                  href="/v1/submit" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--v1-foreground)" }}
                >
                  Submit a pick
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="mt-16 pt-8 border-t text-center"
          style={{ borderColor: "var(--v1-border)" }}
        >
          <p 
            className="text-xs"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            Amsterdam, 2026. Built for people who know the craving comes first.
          </p>
        </div>
      </div>
    </footer>
  );
}
