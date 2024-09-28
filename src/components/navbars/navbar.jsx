"use client";
import { useSearchDrawer } from "@/hooks/controllers";
import { Container } from "../wrappers/container";
import { Icon } from "../icon";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { User } from "../user";
import Link from "next/link";

export const Navbar = () => {
  const { onOpen } = useSearchDrawer();

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
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
            <Link href="/wishlist" passHref>
              <Button icon="heart" variant="outline">
                <span>0</span>
              </Button>
            </Link>

            <User />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
};
