"use client";
import { useWishlist } from "@/hooks/use-wishlist";
import { Product } from "./product-cards/product";
import { ProductView } from "./product-view";

export function Wishlist() {
  const { wishlistItems } = useWishlist();
  return (
    <ProductView title="wishlist items">
      {wishlistItems?.map((item, index) => (
        <Product key={index} product={item} />
      ))}
    </ProductView>
  );
}
