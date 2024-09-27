import { SearchDrawer } from "@/components/drawers/search-drawer";
import { ProductModal } from "@/components/modals/product-modal";
import { Navbar } from "@/components/navbars/navbar";
import { Navigation } from "@/components/navbars/navigation";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <Navigation />
        <main>{children}</main>
        <ProductModal />
        <SearchDrawer />
      </body>
    </html>
  );
}
