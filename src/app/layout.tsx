import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charadas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
          {children}
          <Link
            href="/help"
            className="btn btn-primary btn-lg help-button"
            type="button"
          >
            <b>?</b> Ayuda
          </Link>
      </body>
    </html>
  );
}
