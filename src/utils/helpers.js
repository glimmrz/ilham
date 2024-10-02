import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

export function useCheckCart(product) {
  const { cartItems } = useCart();

  return cartItems?.find((item) => item?._id === product?._id);
}

export function useCheckWishlist(product) {
  const { wishlistItems } = useWishlist();

  return wishlistItems?.find((item) => item?._id === product?._id);
}

export function factorCartPrice(discount_price, regular_price) {
  if (discount_price > regular_price) return regular_price;

  return discount_price;
}

export function formatParams(params) {
  return params.replace(/-/g, " ");
}
