import type { Metadata } from "next";
import { Caveat_Brush, Poppins } from "next/font/google";
import "./globals.css";
import { PoluiProvider } from "pol-ui";

const sans = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
    <html lang="es">
      <body className={sans.className}>
        <PoluiProvider>
          <div className="bg-light min-h-screen dark:bg-dark text-dark dark:text-light">
            {children}
          </div>
        </PoluiProvider>
      </body>
    </html>
  );
}
