import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Primary font - Plus Jakarta Sans (modern, clean, professional)
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

// Heading font - Outfit (stylish, modern, geometric)
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

// Monospace font - JetBrains Mono (perfect for code)
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"]
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
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className={`${plusJakarta.className} antialiased`}>
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
