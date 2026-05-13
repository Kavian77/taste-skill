import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { VersionProvider } from "@/lib/version-context";
import { VersionSwitcher } from "@/components/version-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Craving List | Find the best version of what you are craving",
  description: "The Craving List ranks Amsterdam's most craveable bites by item, not just by place. Start with cheesecake, then help us choose the next guide.",
  openGraph: {
    title: "The Craving List",
    description: "Life is too short for mediocre bites. Find the best cheesecake, matcha, gelato, and more in Amsterdam.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#F7F6F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <VersionProvider>
          {children}
          <VersionSwitcher />
        </VersionProvider>
      </body>
    </html>
  );
}
