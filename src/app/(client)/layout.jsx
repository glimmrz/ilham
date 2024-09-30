import { CartIndicator } from "@/components/cart/cart-indicator";
import { SearchDrawer } from "@/components/drawers/search-drawer";
import { ProductModal } from "@/components/modals/product-modal";
import { Navbar } from "@/components/navbars/navbar";
import { Navigation } from "@/components/navbars/navigation";
import { CartSidebar } from "@/components/sidebars/cart-sidebar";
import { getSession } from "@/utils/auth";

export default async function Layout({ children }) {
  const session = await getSession();

  return (
    <>
      <Navbar userData={session} />
      <Navigation />
      <main>{children}</main>
      <ProductModal />
      <SearchDrawer />
      <CartIndicator />
      <CartSidebar />
    </>
  );
}
