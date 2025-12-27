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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="81a97c03-48c0-4191-aaff-a9a085360256"
        ></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
