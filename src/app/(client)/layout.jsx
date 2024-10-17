import { CartIndicator } from "@/components/cart/cart-indicator";
import { MobileNavbar } from "@/components/navbars/mobile-navbar";
import { Navbar } from "@/components/navbars/navbar";
import { Navigation } from "@/components/navbars/navigation";
import { AccountSidebar } from "@/components/sidebars/account-sidebar";
import { CartSidebar } from "@/components/sidebars/cart-sidebar";
import { MenuSidebar } from "@/components/sidebars/menu-sidebar/menu-sidebar";
import { getSession } from "@/utils/auth";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function Layout({ children }) {
  const session = await getSession();

  return (
    <>
      <Navbar userData={session} />
      <Navigation />
      <main className="min-h-[calc(theme(height.screen)-120px)]">
        {children}
      </main>
      <CartIndicator />
      <CartSidebar />
      <MenuSidebar />
      <AccountSidebar userData={session} />
      <MobileNavbar />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
