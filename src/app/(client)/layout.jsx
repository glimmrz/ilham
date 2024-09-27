import { Navbar } from "@/components/navbars/navbar";
import { Navigation } from "@/components/navbars/navigation";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
