import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPortfolio",
  description: "A professional journey through code, architecture, and creative problem solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
                font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24
            }
          `}
        </style>
      </head>
      <body className={`${spaceGrotesk.variable} antialiased selection:bg-primary selection:text-white bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden`}>
        <div className="relative flex min-h-screen w-full flex-col group/design-root">
          <Header />
          <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-8 py-12 flex flex-col gap-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
