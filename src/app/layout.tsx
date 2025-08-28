import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import TechBackground from "./components/TechBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackcode1996.github.io"),
  title: {
    default: "Akash Diwakar | Developer Portfolio",
    template: "%s • Akash Diwakar",
  },
  description:
    "Akash Diwakar — modern portfolio showcasing full‑stack projects, UI/UX, and engineering work.",
  openGraph: {
    title: "Akash Diwakar | Developer Portfolio",
    description:
      "Akash Diwakar — modern portfolio showcasing full‑stack projects, UI/UX, and engineering work.",
    url: "/",
    siteName: "Akash Diwakar Portfolio",
    images: [
      {
        url: "/media/homepage_1.3e1c246fdf254607b615.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Diwakar | Developer Portfolio",
    description:
      "Akash Diwakar — modern portfolio showcasing full‑stack projects, UI/UX, and engineering work.",
    images: ["/media/homepage_1.3e1c246fdf254607b615.png"],
  },
  icons: {
    icon: [{ url: "/logo192.png" }, { url: "/logo512.png", sizes: "512x512" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TechBackground />
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/akash-logo.svg"
                alt="Akash Diwakar Logo"
                width={28}
                height={28}
              />
              <span className="font-semibold tracking-tight">
                Akash Diwakar
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:opacity-80 transition-opacity"
              >
                Projects
              </Link>
              <a
                href="/media/Akash_diwakar_CV.pdf"
                target="_blank"
                rel="noopener"
                className="hover:opacity-80 transition-opacity"
              >
                Resume
              </a>
              <a
                href="https://github.com/akshvaishnav96"
                target="_blank"
                rel="noopener"
                className="rounded-full border px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4">{children}</main>
        <footer className="mt-16 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-black/70 dark:text-white/70">
              © {new Date().getFullYear()} Akash Diwakar. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:akashdiwakar575@gmail.com"
                className="hover:underline"
              >
                Contact
              </a>
              <Link href="/" className="hover:underline">
                Top
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
