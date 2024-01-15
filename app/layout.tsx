import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { PoluiProvider } from "pol-ui";
import localFont from "next/font/local";

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const greatFriend = localFont({
  src: "Great-Friend.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-hand",
});
export const metadata: Metadata = {
  title: "Naturastudio",
  description: "Naturastudio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sans.variable} ${greatFriend.variable}`}>
      <body>
        <PoluiProvider>
          <div className="bg-light min-h-screen dark:bg-dark text-dark dark:text-light">
            {children}
          </div>
        </PoluiProvider>
      </body>
    </html>
  );
}
