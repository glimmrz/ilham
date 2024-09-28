"use client";
import { useCartSidebar } from "@/hooks/controllers";
import { Sidebar } from "./sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import { CartItem } from "../cart/cart-item";

export function CartSidebar() {
  const { isOpen, onClose } = useCartSidebar();

  const footer = (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-lg">Total:</span>
        <span className="text-lg font-bold">0.00 TK</span>
      </div>
      <Link href="/checkout" passHref>
        <Button className="w-full" icon="arrowRight">
          proceed to Checkout
        </Button>
      </Link>
    </div>
  );

  return (
    <Sidebar
      isOpen={isOpen}
      onClose={onClose}
      title="Your Shopping Cart"
      subtitle="Review your selected items before checkout."
      footer={footer}
    >
      <div className="grid gap-2">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </Sidebar>
  );
}
