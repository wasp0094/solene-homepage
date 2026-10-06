import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Sans, Lexend_Exa } from "next/font/google";
import "./globals.css";

const lexendExa = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solène — Skin that holds the light",
  description:
    "Clean, clinically-minded beauty made in small batches. Skincare, makeup, haircare, body and fragrance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lexendExa.variable} ${bodoniModa.variable} ${instrumentSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
