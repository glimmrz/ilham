import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { font } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "iLHAM",
    template: "%s | iLHAM",
  },
  keywords: [
    "ilham",
    "ilham bd",
    "ilham.com",
    "ilham.com bd",
    "bd ilham",
    "exommerce",
    "ilham ecommerce",
    "ilham store",
  ],
  openGraph: {
    description: "Modern e-commerce platform",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
        <GoogleTagManager gtmId="GTM-W3ST2L6G" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
