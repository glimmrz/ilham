import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useMemo } from "react";

export function useCheckCart(product) {
  const { cartItems } = useCart();

  return useMemo(
    () => cartItems?.find((item) => item?._id === product?._id),
    [cartItems, product?._id]
  );
}

export function useCheckWishlist(product) {
  const { wishlistItems } = useWishlist();

  return useMemo(
    () => wishlistItems?.find((item) => item?._id === product?._id),
    [product?._id, wishlistItems]
  );
}

export function factorCartPrice(discount_price, regular_price) {
  if (discount_price > regular_price) return regular_price;

  return discount_price;
}

export function formatParams(params) {
  return params.replace(/-/g, " ");
}
