"use client";
import Image from "next/image";
import { useEcommerceEvent } from "@/hooks/use-ecommerce-event";
import { useState, useEffect } from "react";
import { factorCartPrice } from "@/utils/helpers";

export function ProductImages({ currentProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { sendEvent } = useEcommerceEvent();

  useEffect(() => {
    sendEvent({
      event: "view_item",
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
            index: 0,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProduct]);

  return (
    <div className="overflow-hidden h-fit lg:sticky md:top-0">
      <figure className="relative h-[400px] w-full">
        <Image
          fill
          src={currentProduct?.images && currentProduct?.images[currentIndex]}
          alt=""
          className="object-contain p-2 transition-opacity duration-300"
          priority
          sizes="(max-width: 768px) 80vw, 40vw"
        />
      </figure>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,0.5fr))] gap-2 pt-1 pb-1 overflow-hidden">
        {currentProduct?.images?.map((image, index) => (
          <figure
            className={`relative h-[100px] border border-muted rounded-md cursor-pointer transition-[opacity,border-color] duration-300 hover:opacity-80 hover:border-primary ${
              currentIndex === index && "!border-primary"
            }`}
            key={index}
          >
            <Image
              fill
              src={image}
              alt=""
              className="object-contain p-2"
              onClick={() => setCurrentIndex(index)}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
