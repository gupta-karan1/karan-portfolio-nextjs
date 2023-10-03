import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const lexend = Lexend({
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
    <html lang="en" data-theme="forest">
      <body className={lexend.className}>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
