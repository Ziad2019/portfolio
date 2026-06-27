import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCVButton from "@/components/Floatingcvbutton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziad Fayez — Fullstack Developer",
  description:
    "Fullstack developer building backend systems with NestJS and frontend interfaces with Next.js. Authentication, payments, and production-level APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="grain-overlay" />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <FloatingCVButton />
      </body>
    </html>
  );
}