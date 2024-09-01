import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mountain Mixology",
  description: "Premium cocktail catering, based in Canmore, AB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-mount2 bg-cover bg-center bg-no-repeat bg-neutral-900`}>
        <Navbar />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
