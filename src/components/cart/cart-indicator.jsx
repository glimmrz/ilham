"use client";
import { useCartSidebar } from "@/hooks/controllers";
import { Icon } from "../icon";
import { useCart } from "@/hooks/use-cart";
import { useEcommerceEvent } from "@/hooks/use-ecommerce-event";
import { factorCartPrice } from "@/utils/helpers";

export function CartIndicator() {
  const { onOpen } = useCartSidebar();
  const { total, cartItems } = useCart();
  const { sendEvent } = useEcommerceEvent();

  const handleViewCart = () => {
    onOpen();

    const products = cartItems?.map((product) => ({
      item_id: product?._id,
      item_name: product?.title,
      affiliation: "iLHAM",
      discount: (product?.price - product?.discountedPrice) / 100,
      item_brand: product?.brand,
      item_category: product?.category?.label,
      price: factorCartPrice(product?.discountedPrice, product?.price) / 100,
      quantity: product?.quantity,
    }));

    sendEvent({
      event: "view_cart",
      currency: "BDT",
      value: total / 100,
      ecommerce: {
        items: [...products],
      },
    });
  };

  return (
    <div
      onClick={handleViewCart}
      role="button"
      className="hidden md:block fixed top-0 bottom-0 right-0 m-auto h-fit z-10 bg-card border border-muted rounded-md cursor-pointer overflow-hidden shadow-active"
    >
      <div className="px-2 py-1 flex flex-col items-center justify-center gap-1">
        <Icon icon="shoppingbasket" size={32} />
        <span className="text-xs uppercase">{cartItems.length} items</span>
      </div>
      <div className="bg-primary dark:bg-primary-foreground px-2 py-1">
        <span className="text-xs uppercase text-accent">
          {(total / 100).toFixed(2)} TK
        </span>
      </div>
    </div>
  );
}
