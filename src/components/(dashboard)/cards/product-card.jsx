import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../../ui/card";
import { RatingStars } from "../../rating-stars";
import { CalculatePrice } from "../../product-cards/calculate-price";
import { Button } from "../../ui/button";
import { DeleteItem } from "../modals/delete";

export function ProductCard({ product }) {
  return (
    <Card title={product?.title}>
      <CardContent className="flex items-center gap-2 p-1 md:p-1">
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
          <CardTitle className="capitalize font-bold text-base">
            {product?.title}
          </CardTitle>
          <RatingStars />
          <div className="flex items-center justify-between">
            <CalculatePrice
              price={product?.price}
              discountedPrice={product?.discountedPrice}
              className="flex-col md:flex-row"
            />
            <div className="space-x-2">
              <Link href={`/dashboard/products/${product?.slug}`} passHref>
                <Button size="icon" className="rounded-full" icon="edit" />
              </Link>
              <DeleteItem requestUrl="products" _id={product?._id} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
