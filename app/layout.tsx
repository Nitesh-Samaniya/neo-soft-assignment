import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Neo Soft",
  description: "Product card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="pt-14">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
