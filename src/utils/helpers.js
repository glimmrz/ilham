import { useCart } from "@/hooks/use-cart";
import { useEcommerceEvent } from "@/hooks/use-ecommerce-event";
import { useWishlist } from "@/hooks/use-wishlist";
import { useMemo } from "react";

export function useCheckCart(product) {
  const { cartItems } = useCart();

  const foundItem = useMemo(() => {
    return cartItems?.find((item) => item?._id === product?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length]);

  return foundItem;
}

export function useCheckWishlist(product) {
  const { wishlistItems } = useWishlist();

  const foundItem = useMemo(() => {
    return wishlistItems?.find((item) => item?._id === product?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistItems.length]);

  return foundItem;
}

export function factorCartPrice(discount_price, regular_price) {
  if (discount_price > regular_price) return regular_price;

  return discount_price;
}

export function formatParams(params) {
  return params.replace(/-/g, " ");
}

export const useEcommerce = () => {
  const { sendEvent } = useEcommerceEvent();
  const cart = useCart();
  const wishlist = useWishlist();

  // Add to cart
  const handleAddToCart = (currentProduct) => {
    sendEvent({
      event: "add_to_cart",
      currency: "BDT",
      value:
        factorCartPrice(
          currentProduct?.discountedPrice,
          currentProduct?.price
        ) / 100,
      ecommerce: {
        items: [
          {
            item_id: currentProduct?._id,
            item_name: currentProduct?.title,
            discount:
              (currentProduct?.price - currentProduct?.discountedPrice) / 100,
            item_brand: currentProduct?.brand,
            item_category: currentProduct?.category.label,
            price:
              factorCartPrice(
                currentProduct?.discountedPrice,
                currentProduct?.price
              ) / 100,
            quantity: 1,
          },
        ],
      },
    });

    cart.onAdd({
      ...currentProduct,
      price: factorCartPrice(
        currentProduct?.discountedPrice,
        currentProduct?.price
      ),
    });
  };

  // Add to wishlist
  const handleAddToWishlist = (currentProduct) => {
    sendEvent({
      event: "add_to_wishlist",
      ecommerce: {
        currency: "BDT",
        value:
          factorCartPrice(
            currentProduct?.discountedPrice,
            currentProduct?.price
          ) / 100,
        items: [
          {
            item_id: currentProduct?._id,
            item_name: currentProduct?.title,
            discount:
              (currentProduct?.price - currentProduct?.discountedPrice) / 100,
            item_brand: currentProduct?.brand,
            item_category: currentProduct?.category?.label,
            price:
              factorCartPrice(
                currentProduct?.discountedPrice,
                currentProduct?.price
              ) / 100,
            quantity: 1,
          },
        ],
      },
    });

    wishlist.onAdd(currentProduct);
  };

  return { handleAddToCart, handleAddToWishlist };
};

// Random code generator
export function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
