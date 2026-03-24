import type { Metadata } from "next";
import { Bungee, Space_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://aditya-dosapati.github.io/Personal-Portfolio-Website";

const displayFont = Bungee({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const monoFont = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aditya Dosapati | ML Engineer Portfolio",
  description:
    "Neo-brutalist developer portfolio for Aditya Dosapati, Machine Learning Engineer and AI Researcher.",
  keywords: [
    "Aditya Dosapati",
    "Machine Learning Engineer",
    "AI Portfolio",
    "Computer Science Student",
    "Neo Brutalist Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aditya Dosapati | ML Engineer Portfolio",
    description:
      "Building intelligent systems that solve real-world problems. Explore projects, skills, and experience.",
    url: siteUrl,
    siteName: "Aditya Dosapati Portfolio",
    type: "website",
    images: [
      {
        url: "/profile.jpeg",
        width: 768,
        height: 768,
        alt: "Portrait of Aditya Dosapati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Dosapati | ML Engineer Portfolio",
    description:
      "Building intelligent systems that solve real-world problems. Explore projects, skills, and experience.",
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
