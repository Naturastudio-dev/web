import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "./providers";

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const greatFriend = localFont({
  src: "fonts/DKMandarinWhispers.otf",
  weight: "400",
  style: "normal",
  variable: "--font-hand",
});
export const metadata: Metadata = {
  title: "Naturastudio",
  description: "Naturastudio",
  keywords: ["Portafolio", "Naturastudio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sans.variable} ${greatFriend.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
