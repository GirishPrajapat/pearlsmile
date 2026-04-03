import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import WelcomePopup from "@/components/ui/WelcomePopup";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PearlSmile Dental — Where Every Smile Tells a Story",
  description: "Mumbai's most trusted dental clinic. Book a consultation with Dr. Priya Sharma.",
  keywords: "dental clinic Mumbai, dentist Mumbai, teeth whitening, smile makeover, Dr Priya Sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", overflowX: "hidden" }}>
        {children}
        <WelcomePopup />
      </body>
    </html>
  );
}
