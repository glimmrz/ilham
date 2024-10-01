"use client";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "../cart/cart-item";
import { Section } from "../section";

export function CheckoutSummary() {
  const { cartItems } = useCart();

  return (
    <Section>
      <div className="max-h-[600px] overflow-auto grid gap-2 mb-2">
        {cartItems?.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
}
