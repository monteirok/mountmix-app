import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "./components/Navbar/Navbar";
import { Montserrat, Roboto, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

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
