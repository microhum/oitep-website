import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
