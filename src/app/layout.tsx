import { ThemeProvider } from "next-themes";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Bender - Portfolio",
  description: "Portfolio page of brazilian full-stack developer Arthur Bender",
  authors: [{ name: "Arthur Bender" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="root">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
