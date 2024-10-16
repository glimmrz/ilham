"use client";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { notify } from "@/utils/toast";
import { CalculatePrice } from "./calculate-price";

export function ShareProduct({ product, referrer }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://ilham.com.bd/refer/product/${product?.slug}?referrer=${
          referrer ? referrer : ""
        }`
      );
      notify(
        "Copied to clipboard",
        "Product share link copied. Share and earn money!"
      );
    } catch (err) {
      console.log(err);
      notify("Could not copy product link.");
    }
  };

  return (
    <Card>
      <CardContent className="flex items-center p-1 md:p-1">
        <figure className="relative h-[100px] w-[120px]">
          <Image
            src={product?.images[0] ? product.images[0] : ""}
            alt={product?.title}
            fill
            sizes="100px"
            className="object-contain"
          />
        </figure>
        <div className="py-0 px-1 w-full flex flex-col gap-1">
          <CardTitle className="capitalize font-bold text-base cursor-pointer transition-colors duration-300 hover:text-primary dark:hover:text-muted">
            organic honey with spices
          </CardTitle>
          <div className="flex items-center justify-between">
            <div>
              <CalculatePrice
                price={product?.price}
                discountedPrice={product?.discountedPrice}
              />
              <p>
                Comission:{" "}
                <span className="text-primary font-bold">
                  ৳{((product?.discountedPrice * 10) / 100 / 100).toFixed(2)}
                </span>
              </p>
            </div>
            <Button
              size="icon"
              icon="copy"
              className="rounded-full"
              title="click to copy link"
              onClick={handleCopy}
            >
              <span className="sr-only"></span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
