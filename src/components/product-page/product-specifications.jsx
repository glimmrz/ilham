"use client";
import Link from "next/link";
import { Heading } from "../heading";
import { RatingStars } from "../rating-stars";
import { ProductActions } from "./product-actions";

export function ProductSpecifications({ currentProduct, actionButtons }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-1">
        <Heading>{currentProduct?.title}</Heading>
        <RatingStars />

        {/* Price section */}
        <div className="flex items-center gap-2">
          {currentProduct?.discountedPrice < currentProduct?.price && (
            <span className="font-bold text-2xl text-inherit">
              ৳{(currentProduct?.discountedPrice / 100).toFixed(2)}
            </span>
          )}
          <span
            className={`text-sm text-muted-foreground font-bold line-through ${
              currentProduct?.discountedPrice > currentProduct?.price &&
              "!text-2xl !text-inherit !no-underline"
            }`}
          >
            ৳{(currentProduct?.price / 100).toFixed(2)}
          </span>
        </div>
      </div>
      {/* Product specification */}
      <div>
        {" "}
        <h4 className="grid gap-2 text-xl font-bold capitalize after:content-[''] after:h-[1px] after:w-full after:rounded-md after:bg-shade">
          product specifications
        </h4>
        <ul className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
          <li className="capitalize">
            <span className="inline-flex font-bold min-w-[100px]">weight</span>{" "}
            {currentProduct?.weight}
          </li>
          <li className="capitalize">
            <span className="inline-flex font-bold min-w-[100px]">brand</span>{" "}
            {currentProduct?.brand}
          </li>
          <li className="capitalize">
            <span className="inline-flex font-bold min-w-[100px]">
              material
            </span>{" "}
            {currentProduct?.material}
          </li>
          <li className="capitalize">
            <span className="inline-flex font-bold min-w-[100px]">
              warranty
            </span>{" "}
            {currentProduct?.warranty}
          </li>
          <li className="capitalize">
            <span className="inline-flex font-bold min-w-[100px]">
              box type
            </span>{" "}
            {currentProduct?.boxType}
          </li>
          <li className="capitalize">
            <span className="inline-flex font-bold min-w-[100px]">color</span>{" "}
            {currentProduct?.color}
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      {actionButtons}

      {/* Tags */}
      <div>
        {/* <Heading title="tags" /> */}
        <h4 className="grid gap-2 text-xl font-bold capitalize after:content-[''] after:h-[1px] after:w-full after:rounded-md after:bg-shade">
          tags
        </h4>
        <div className="flex gap-2 flex-wrap mt-2">
          {currentProduct?.tags?.map((tag, index) => (
            <Link href={`/shop?tag=}`} key={index}>
              {/* <Tag onClick={handleClose} tag={tag} /> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
