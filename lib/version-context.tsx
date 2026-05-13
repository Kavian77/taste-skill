"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

export type VersionType = "v1" | "v2" | "v3";

interface VersionContextType {
  version: VersionType;
  setVersion: (version: VersionType) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children, initialVersion = "v1" }: { children: ReactNode; initialVersion?: VersionType }) {
  const [version, setVersionState] = useState<VersionType>(initialVersion);
  const router = useRouter();
  const pathname = usePathname();

  const setVersion = useCallback((newVersion: VersionType) => {
    setVersionState(newVersion);
    // Navigate to the same page in the new version
    const pathParts = pathname.split("/");
    // Replace version segment or add it
    if (pathParts[1] === "v1" || pathParts[1] === "v2" || pathParts[1] === "v3") {
      pathParts[1] = newVersion;
    } else {
      pathParts.splice(1, 0, newVersion);
    }
    router.push(pathParts.join("/") || `/${newVersion}`);
  }, [pathname, router]);

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
}
