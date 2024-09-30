"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";
import { Container } from "../wrappers/container";

export function Navigation() {
  return (
    <div className="hidden md:block bg-accent dark:bg-secondary shadow-regular z-10 sticky top-16">
      <Container>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/category/bags" title="ladies bag">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/category/bags" title="clothing">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/category/bags" title="groceries">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/category/bags" title="home appliances">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/category/bags" title="furniture">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/category/bags" title="makeup">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/category/bags" title="makeup">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/category/bags" title="makeup">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <ListItem href="/category/bags" title="makeup">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  all products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  about us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Container>
    </div>
  );
}

export const ListItem = forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm capitalize font-medium leading-none">
              {title}
            </div>
            <p className="line-clamp-2 text-sm first-letter:capitalize leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
