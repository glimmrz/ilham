import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { font } from "@/lib/fonts";

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
        </ThemeProvider>
      </body>
    </html>
  );
}
