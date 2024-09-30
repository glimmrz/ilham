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
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import {
  factorCartPrice,
  useCheckCart,
  useCheckWishlist,
} from "@/utils/helpers";

export const Product = ({ product }) => {
  const cart = useCart();
  const wishlist = useWishlist();

  const isInCart = useCheckCart(product);
  const isInWishlist = useCheckWishlist(product);

  return (
    <Card className="group border-transparent dark:border-secondary cursor-pointer">
      <CardContent className="relative pb-2">
        <div className="absolute top-2 left-0 flex items-center justify-between w-full px-2 z-[1]">
          <Button
            size="icon"
            icon={isInWishlist ? "heartCross" : "heart"}
            variant="outline"
            className="rounded-full"
            onClick={
              isInWishlist
                ? () => wishlist.onRemove(product._id, product.title)
                : () => wishlist.onAdd(product)
            }
          >
            <span className="sr-only">add to wishlist</span>
          </Button>

          {product?.status && <Badge>{product.status}</Badge>}
        </div>

        <figure className="relative h-[120px] md:h-[140px] w-full group-hover:scale-105 transition-transform">
          <Image
            src={product?.images[0] ? product.images[0] : ""}
            alt={product?.title}
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
        <Button
          icon={isInCart ? "check" : "cart"}
          variant="outline"
          onClick={() =>
            cart.onAdd({
              ...product,
              price: factorCartPrice(product?.discountedPrice, product?.price),
            })
          }
        >
          <span>add</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
