import "./globals.css";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "@/components/BackToTop";

import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HTX4SEJPM3" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HTX4SEJPM3');
        `}
      </Script>
    </>
 );
}

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
      <GoogleAnalyticsTracking />
      <body className={lexend.className}>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </body>
      
    </html>
  );
}
