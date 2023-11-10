import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import BackToTop from "@/components/BackToTop";

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
        {/* Create a back to top button with a top arrow */}
        {/* <a
          href="#"
          className="fixed bottom-5 right-5 p-2 rounded-full bg-warning hover:bg-neutral-300"
        >
          <ArrowUpIcon className="h-6 w-6 text-neutral-focus" />
        </a> */}

        {/* Create a button that scrolls to the top and only appears when the person has scrolled down a bit */}
        <BackToTop />
      </body>
    </html>
  );
}
