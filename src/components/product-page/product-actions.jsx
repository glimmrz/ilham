"use client";
import { QuantityControl } from "../quantity-control";
import { Button } from "../ui/button";
import { useCheckCart, useCheckWishlist, useEcommerce } from "@/utils/helpers";
import { useWishlist } from "@/hooks/use-wishlist";

export function ProductActions({ currentProduct }) {
  const isInCart = useCheckCart(currentProduct);
  const isInWishlist = useCheckWishlist(currentProduct);
  const wishlist = useWishlist();
  const { handleAddToCart, handleAddToWishlist } = useEcommerce();

  return (
    <div className="grid gap-2 md:grid-cols-2">
      {!isInCart && (
        <Button
          aria-label="add product to shopping cart"
          icon="bag"
          onClick={() => handleAddToCart(currentProduct)}
        >
          add to cart
        </Button>
      )}
      {isInCart && (
        <QuantityControl
          id={currentProduct?._id}
          title={currentProduct?.title}
          quantity={isInCart?.quantity}
        />
      )}
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
