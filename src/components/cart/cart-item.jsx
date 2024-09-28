"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { QuantityControl } from "../quantity-control";
import { Card, CardContent } from "../ui/card";
import { notify } from "@/utils/toast";

export function CartItem({ item }) {
  const handleRemoveFromCart = () => {
    notify("removed from cart", "organic juice removed from cart.");
  };

  return (
    <Card className="shadow-transparent hover:shadow-transparent">
      <CardContent className="p-0 md:p-1 grid grid-cols-[1.5fr_3fr] gap-2">
        <div className="relative">
          <Image
            src="https://zeris.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjtjatcqw%2Fimage%2Fupload%2Fv1726252688%2Fcgvstypfhmxtauhddp3e.webp&w=750&q=75"
            alt="organic juice"
            className="object-contain"
            fill
            sizes="100px"
          />
        </div>
        <div className="relative flex flex-col gap-2">
          <h3 className="capitalize text-base font-bold line-clamp-1">
            organic juice
          </h3>
          <p className="capitalize text-base font-bold line-clamp-1">
            ৳{(0 / 100).toFixed(2)} x 5
          </p>
          <QuantityControl id={item?._id} title={item?.title} quantity={5} />

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
