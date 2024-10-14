import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { RatingStars } from "../rating-stars";
import { CalculatePrice } from "../product-cards/calculate-price";
import { Button } from "../ui/button";

export function ProductCard({ product }) {
  return (
    <Card title={product?.title}>
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
          <RatingStars />
          <div className="flex items-center justify-between">
            <CalculatePrice
              price={220000}
              discountedPrice={130000}
              className="flex-col md:flex-row"
            />
            <div className="space-x-2">
              <Button size="icon" className="rounded-full" icon="edit" />
              <Link href={`/dashboard/products/${product?.slug}`} passHref>
                <Button
                  size="icon"
                  className="rounded-full"
                  icon="details"
                ></Button>
              </Link>
              <Button
                variant="destructive"
                size="icon"
                className="rounded-full"
                icon="delete"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
