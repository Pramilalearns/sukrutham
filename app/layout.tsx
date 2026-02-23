import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // changed from Geist
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukrutham Farmstay | Authentic Kerala Experience",
  description: "Experience the serenity of Kerala at Sukrutham Farmstay. Surrounded by paddy fields and nature, it's your perfect getaway.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
