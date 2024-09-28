import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { font } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "ilham",
  description: "Modern e-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
