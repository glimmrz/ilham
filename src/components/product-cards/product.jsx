"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { RatingStars } from "../rating-stars";
import { CalculatePrice } from "./calculate-price";

export const Product = ({ product }) => {
  return (
    <Card className="group border-transparent cursor-pointer">
      <CardContent className="relative pb-2">
        <div className="absolute top-2 left-0 flex items-center justify-between w-full px-2 z-[1]">
          {product?.status && <Badge>{product.status}</Badge>}
          <Button
            size="icon"
            icon="heart"
            variant="outline"
            className="rounded-full"
          >
            <span className="sr-only">add to wishlist</span>
          </Button>
        </div>

        <figure className="relative h-[120px] md:h-[140px] w-full group-hover:scale-105 transition-transform">
          <Image
            src="https://zeris.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjtjatcqw%2Fimage%2Fupload%2Fv1726252688%2Fcgvstypfhmxtauhddp3e.webp&w=1920&q=75"
            alt=""
            fill
            className="object-contain"
          />
        </figure>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-base line-clamp-2">
          {product?.title}
        </CardTitle>
      </CardHeader>
      <div className="px-2 py-2 md:px-3">
        <RatingStars />
        <span className="text-sm capitalize">
          <span>by </span>
          <Link
            href={{
              pathname: "/shop",
              query: { brand: product?.brand },
            }}
            className="text-primary"
          >
            {product?.brand}
          </Link>
        </span>
      </div>
      <CardFooter className="flex items-center justify-between md:pt-0">
        <CalculatePrice
          discountedPrice={product?.discountedPrice}
          price={product?.price}
          className="text-primary flex-col md:flex-row items-start md:items-center"
        />
        <Button icon="cart" variant="outline">
          <span>add</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
