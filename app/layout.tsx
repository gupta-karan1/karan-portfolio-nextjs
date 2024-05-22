import "./globals.css";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "@/components/BackToTop";
import { GoogleTagManager } from '@next/third-parties/google'

const lexend = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Home - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={lexend.className}>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </body>
      <GoogleTagManager gtmId="G-HTX4SEJPM3" />
    </html>
  );
}
