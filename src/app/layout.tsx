import type React from "react";
import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Epicore - Premium Web Design & Development Agency",
  description:
    "Epicore specializes in epic design and engineering. We create stunning, responsive websites with cutting-edge technology, innovative solutions, and exceptional user experiences for businesses worldwide.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "responsive design",
    "UI/UX design",
    "branding",
    "construction projects",
    "portfolio",
    "Epicore",
  ],
  authors: [{ name: "Epicore Team" }],
  creator: "Epicore",
  publisher: "Epicore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://epicore.com",
    title: "Epicore - Premium Web Design & Development Agency",
    description:
      "Epic design and engineering. We create stunning websites with modern technology and innovative solutions for businesses worldwide.",
    siteName: "Epicore",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Epicore - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epicore - Premium Web Design & Development Agency",
    description:
      "Epic design and engineering. We create stunning websites with modern technology and innovative solutions.",
    images: ["/og-image.jpg"],
    creator: "@epicore",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
