import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helix | Ship better code, 3x faster",
  description: "Helix is an AI-powered code review platform for engineering teams. It catches bugs, enforces best practices, and speeds up PR cycles without process overhead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground bg-[#050508]">
        {children}
      </body>
    </html>
  );
}
