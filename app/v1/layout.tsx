import type { ReactNode } from "react";
import { V1Header } from "./components/header";
import { V1Footer } from "./components/footer";

export default function V1Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ backgroundColor: "var(--v1-background)" }}>
      <V1Header />
      <main className="flex-1">{children}</main>
      <V1Footer />
    </div>
  );
}
