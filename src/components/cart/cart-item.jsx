"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { QuantityControl } from "../quantity-control";
import { Card, CardContent } from "../ui/card";
import { useCart } from "@/hooks/use-cart";
import { useEcommerceEvent } from "@/hooks/use-ecommerce-event";
import { factorCartPrice } from "@/utils/helpers";

export function CartItem({ item }) {
  const cart = useCart();
  const { sendEvent } = useEcommerceEvent();

  const handleRemoveFromCart = () => {
    sendEvent({
      event: "remove_from_cart",
      currency: "BDT",
      value:
        (factorCartPrice(item?.discountedPrice, item?.price) / 100) *
        item?.quantity,
      ecommerce: {
        items: [
          {
            item_id: item?._id,
            item_name: item?.title,
            affiliation: "iLHAM",
            discount: (item?.price - item?.discountedPrice) / 100,
            index: 0,
            item_brand: item?.brand,
            item_category: item?.category?.label,
            price: factorCartPrice(item?.discountedPrice, item?.price) / 100,
            quantity: item?.quantity,
          },
        ],
      },
    });

    cart.onRemove(item._id, item.title);
  };

  return (
    <Card className="shadow-transparent hover:shadow-transparent">
      <CardContent className="p-1 grid grid-cols-[1.5fr_3fr] gap-2">
        <div className="relative">
          <Image
            src={item.images[0] ? item.images[0] : ""}
            alt={item.title}
            className="object-contain"
            fill
            sizes="100px"
          />
        </div>
        <div className="relative flex flex-col gap-2">
          <h3 className="capitalize text-base font-bold line-clamp-1">
            {item.title}
          </h3>
          <p className="capitalize text-base font-bold line-clamp-1">
            ৳{(item.price / 100).toFixed(2)} x {item.quantity}
          </p>
          <QuantityControl
            id={item?._id}
            title={item?.title}
            quantity={item.quantity}
          />

          <Button
            onClick={handleRemoveFromCart}
            className="rounded-full absolute top-0 bottom-0 right-0 m-auto"
            icon="delete"
            variant="destructive"
            size="icon"
          >
            <span className="sr-only">remove item from cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
