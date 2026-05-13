import Link from "next/link";

export function V1Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(247, 246, 243, 0.9)" }}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/v1" className="group">
          <span 
            className="text-xl font-medium tracking-tight transition-colors"
            style={{ color: "var(--v1-foreground)" }}
          >
            The Craving List
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/v1/amsterdam/cheesecake" 
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            Cheesecake
          </Link>
          <Link 
            href="/v1/methodology" 
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--v1-foreground-muted)" }}
          >
            How we rank
          </Link>
          <Link 
            href="/v1/submit" 
            className="px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-[0.98]"
            style={{ 
              backgroundColor: "var(--v1-foreground)",
              color: "var(--v1-background)"
            }}
          >
            Submit a pick
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -mr-2"
          style={{ color: "var(--v1-foreground)" }}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
