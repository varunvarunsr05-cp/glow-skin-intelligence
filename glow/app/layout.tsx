import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOW Skin Intelligence™ — Search Less. Glow More.",
  description:
    "GLOW Skin Intelligence™ is a precision serum designed to simplify your skincare routine and bring out your natural radiance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" style={{ ["--font-inter" as string]: "'Inter', sans-serif" }}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
