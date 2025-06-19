import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ranjeet - Modern Developer",
  description: "A modern portfolio showcasing exceptional development skills and creative projects",
  keywords: ["developer", "portfolio", "web development", "frontend", "backend", "fullstack"],
  authors: [{ name: "Ranjeet Patel" }],
  creator: "Ranjeet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ranjettt.com",
    title: "Ranjeet - Modern Developer",
    description: "A modern portfolio showcasing exceptional development skills and creative projects",
    siteName: "Rj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeet - Modern Developer",
    description: "A modern portfolio showcasing exceptional development skills and creative projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
