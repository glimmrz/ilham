"use client";
import { useCheckCart, useCheckWishlist, useEcommerce } from "@/utils/helpers";
import { Button } from "../ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import { useRouter } from "next/navigation";

export function ReferActions({ currentProduct }) {
  const isInCart = useCheckCart(currentProduct);
  const isInWishlist = useCheckWishlist(currentProduct);
  const wishlist = useWishlist();
  const { handleAddToCart, handleAddToWishlist } = useEcommerce();
  const router = useRouter();

  const handleBuyProduct = () => {
    if (isInCart) {
      router.push("/checkout");
    } else {
      handleAddToCart(currentProduct);
      router.push("/checkout");
    }
  };

  return (
    <div className="grid gap-2 md:grid-cols-2">
      <Button aria-label="buy product" icon="bag" onClick={handleBuyProduct}>
        buy now
      </Button>

      <Button
        aria-label="add product to wishlist"
        icon={!isInWishlist ? "heart" : "heartCross"}
        variant="outline"
        onClick={
          !isInWishlist
            ? () => handleAddToWishlist(currentProduct)
            : () =>
                wishlist.onRemove(currentProduct?._id, currentProduct?.title)
        }
      >
        {!isInWishlist ? "add to wishlist" : "remove from wishlist"}
      </Button>
    </div>
  );
}
