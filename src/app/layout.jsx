import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
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
  openGraph: {},
  description:
    "Discover a wide range of eco-friendly jute bags for men and women, premium grocery items, and elegant home decor at iLHAM. Our sustainable jute products are perfect for fashion-conscious individuals who care about the environment. Shop high-quality ladies' handbags, men's bags, and essential grocery items along with stylish home decor pieces that elevate your living space. Enjoy fast delivery, exclusive offers, and unbeatable prices. Shop now for the best in sustainable fashion and home essentials.",
  verification: {
    google: "PdOkfv46dUopcBct9pLHm0Gz98vRuoiPEA52kdAxexk",
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
