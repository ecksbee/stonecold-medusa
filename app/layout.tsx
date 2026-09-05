import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gelasio = localFont({
  variable: "--font-gelasio",
  src: [
    {
      path: "../public/gelasio/Gelasio-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/gelasio/Gelasio-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/gelasio/Gelasio-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/gelasio/Gelasio-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

const dejavuSans = localFont({
  variable: "--font-dejavu-sans",
  src: [
    {
      path: "../public/dejavu-sans/ttf/DejaVuSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/dejavu-sans/ttf/DejaVuSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/dejavu-sans/ttf/DejaVuSans-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/dejavu-sans/ttf/DejaVuSans-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "ECKSBEE FOUNDATION",
  description: "XBRL for humanity's future",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} ${gelasio.variable} ${dejavuSans.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
