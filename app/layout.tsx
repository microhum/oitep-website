import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OITE:P - Reduce Salt Craving with Odor-Based Solutions",
  description:
    "Revolutionary odor-based technology that reduces salt cravings for patients on sodium-restricted diets. Enhance flavor perception through cross-modal sensory triggers without compromising health.",
  keywords: [
    "salt reduction",
    "low sodium diet",
    "chronic kidney disease",
    "heart failure",
    "odor therapy",
    "flavor enhancement",
    "hospital nutrition",
    "patient care",
    "neuroscience",
    "sensory triggers",
  ],
  authors: [{ name: "OITE:P Team" }],
  creator: "OITE:P",
  publisher: "OITE:P",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oitep.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OITE:P - Transform Bland Meals into Satisfying Experiences",
    description:
      "Help patients with chronic conditions enjoy their low-sodium diets with our scientifically-validated odor-based solutions that enhance saltiness perception.",
    url: "https://oitep.com",
    siteName: "OITE:P",
    images: [
      {
        url: "/static/preview/Preview.png",
        width: 1200,
        height: 630,
        alt: "OITE:P Product Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OITE:P - Reduce Salt Craving with Odor-Based Solutions",
    description:
      "Revolutionary odor-based technology that reduces salt cravings for patients on sodium-restricted diets.",
    images: ["/static/preview/Preview.png"],
  },
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
  // verification: {
  //   google: 'your-google-site-verification-code', // Uncomment and add your Google verification code when available
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
