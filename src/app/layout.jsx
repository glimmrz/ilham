import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { font } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL("https://www.ilham.com.bd"),
  title: {
    default: "iLHAM",
    template: "%s | iLHAM",
  },
  description:
    "Discover a wide range of eco-friendly jute bags for men and women, premium grocery items, and elegant home decor at iLHAM. Our sustainable jute products are perfect for fashion-conscious individuals who care about the environment. Shop high-quality ladies' handbags, men's bags, and essential grocery items along with stylish home decor pieces that elevate your living space. Enjoy fast delivery, exclusive offers, and unbeatable prices. Shop now for the best in sustainable fashion and home essentials.",
  keywords: [
    "ilham",
    "ilham bd",
    "ilham.com",
    "ilham.com bd",
    "bd ilham",
    "ecommerce",
    "ilham ecommerce",
    "ilham store",
    "eco-friendly bags",
    "jute bags",
    "sustainable fashion",
    "home decor",
  ],
  authors: [{ name: "iLHAM" }],
  creator: "iLHAM",
  publisher: "iLHAM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ilham.com",
    siteName: "iLHAM",
    description:
      "Discover sustainable jute bags, premium groceries, and stylish home decor at iLHAM. Shop now for eco-friendly fashion and essentials.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "iLHAM - Sustainable Fashion and Home Essentials",
      },
    ],
  },
  other: {
    "facebook-domain-verification": ["h6xoekafxdiype1n4cugs8otxcxyqm"],
  },
  twitter: {
    card: "summary_large_image",
    title: "iLHAM - Eco-Friendly Jute Bags, Groceries, and Home Decor",
    description:
      "Discover sustainable jute bags, premium groceries, and stylish home decor at iLHAM. Shop now for eco-friendly fashion and essentials.",
    images: [""],
    creator: "",
  },
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
