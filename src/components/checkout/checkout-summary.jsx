"use client";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "../cart/cart-item";

export function CheckoutSummary() {
  const { cartItems } = useCart();

  return (
    <div className="max-h-[600px] overflow-auto grid gap-2 mb-2 md:sticky md:top-[calc(theme(height.16)+theme(height.14)+theme(gap.2))]">
      {cartItems?.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
}