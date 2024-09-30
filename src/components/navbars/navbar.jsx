"use client";
import Link from "next/link";
import { useMenuSidebar, useSearchDrawer } from "@/hooks/controllers";
import { Container } from "../wrappers/container";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { User } from "../user";
import { useWishlist } from "@/hooks/use-wishlist";

export const Navbar = ({ userData }) => {
  const { onOpen } = useSearchDrawer();
  const menuSidebar = useMenuSidebar();
  const wishlist = useWishlist();

  return (
    <nav className="shadow-regular md:shadow-none">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              icon="search"
              className="rounded-full"
              onClick={onOpen}
            >
              <span className="sr-only">search</span>
            </Button>
            <Button icon="menu" onClick={menuSidebar.onOpen}>
              menu
            </Button>
            <div className="hidden md:flex gap-4 items-center">
              <Link href="/wishlist" passHref>
                <Button icon="heart" variant="outline">
                  <span>{wishlist.wishlistItems.length}</span>
                </Button>
              </Link>

              <User userData={userData} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
