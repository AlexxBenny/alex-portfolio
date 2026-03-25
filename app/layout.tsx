import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Benny — AI Systems Engineer & Software Developer",
    template: "%s | Alex Benny",
  },
  description:
    "Portfolio of Alex Benny — AI systems engineer, software developer, and B.Tech student specializing in Artificial Intelligence and Data Science. Creator of MERLIN, a deterministic AI desktop automation system.",
  keywords: [
    "Alex Benny",
    "AI Engineer",
    "Software Developer",
    "MERLIN",
    "Portfolio",
    "Machine Learning",
    "NLP",
    "Automation",
  ],
  authors: [{ name: "Alex Benny" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alex Benny Portfolio",
    title: "Alex Benny — AI Systems Engineer",
    description:
      "AI systems engineer building deterministic automation systems. Creator of MERLIN — a four-layer cognitive architecture for desktop AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="h-full bg-black text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
