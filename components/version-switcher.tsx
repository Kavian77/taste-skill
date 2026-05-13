"use client";

import { useVersion, type VersionType } from "@/lib/version-context";
import clsx from "clsx";

const versions: { id: VersionType; label: string; description: string }[] = [
  { id: "v1", label: "Warm Editorial", description: "Cream tones, serif headings, editorial feel" },
  { id: "v2", label: "Bold Contemporary", description: "Dark mode, glass effects, premium agency" },
  { id: "v3", label: "Swiss Industrial", description: "High-contrast, raw typography, utilitarian" },
];

export function VersionSwitcher() {
  const { version, setVersion } = useVersion();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-zinc-900/90 backdrop-blur-xl rounded-full border border-zinc-700/50 shadow-2xl">
        {versions.map((v) => (
          <button
            key={v.id}
            onClick={() => setVersion(v.id)}
            className={clsx(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
              version === v.id
                ? "bg-white text-zinc-900"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            )}
            title={v.description}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function VersionSwitcherMinimal() {
  const { version, setVersion } = useVersion();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        {versions.map((v) => (
          <button
            key={v.id}
            onClick={() => setVersion(v.id)}
            className={clsx(
              "w-10 h-10 text-xs font-bold rounded-full transition-all duration-300 border-2",
              version === v.id
                ? "bg-zinc-900 text-white border-zinc-900"
                : "bg-white text-zinc-600 border-zinc-300 hover:border-zinc-900 hover:text-zinc-900"
            )}
            title={v.description}
          >
            {v.id.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
