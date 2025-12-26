import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const font = Kanit({
  variable: "--font-kanit",
  weight: "200",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OITE:P - Redirecting...",
  description: "Redirecting to your preferred language...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This will be handled by middleware for locale redirection
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="OITE:P" />
      </head>
      <body className={`${font.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
