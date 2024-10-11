"use client";
import { Heading } from "@/components/heading";
import { ProductSmall } from "@/components/product-cards/product-small";
import { ProductView } from "@/components/product-view";
import { QuantityControl } from "@/components/quantity-control";
import { RatingStars } from "@/components/rating-stars";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import {
  factorCartPrice,
  useCheckCart,
  useCheckWishlist,
} from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RichTextViewer } from "./rich-text-viewer";
import { Review } from "./review";
import { useEcommerceEvent } from "@/hooks/use-ecommerce-event";
import { setCookie } from "@/utils/cookie";

export function ProductPage({ currentProduct, referrer }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { sendEvent } = useEcommerceEvent();
  const cart = useCart();
  const wishlist = useWishlist();

  const isInCart = useCheckCart(currentProduct);
  const isInWishlist = useCheckWishlist(currentProduct);

  // Set referrer cookie for 30 days
  const setReferrer = async () => {
    await setCookie("referrer", referrer, 2592000);
  };

  useEffect(() => {
    if (referrer) {
      setReferrer();
    }
  }, [referrer]);

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
    <>
      <Section>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Product Images */}
          <div className="overflow-hidden h-fit lg:sticky md:top-0">
            <figure className="relative h-[400px] w-full">
              <Image
                fill
                src={
                  currentProduct?.images && currentProduct?.images[currentIndex]
                }
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
          {/* Product Details */}
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
                  <span className="inline-flex font-bold min-w-[100px]">
                    weight
                  </span>{" "}
                  {currentProduct?.weight}
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    brand
                  </span>{" "}
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
                  <span className="inline-flex font-bold min-w-[100px]">
                    color
                  </span>{" "}
                  {currentProduct?.color}
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="grid gap-2 md:grid-cols-2">
              {!isInCart && (
                <Button
                  aria-label="add product to shopping cart"
                  icon="bag"
                  onClick={() =>
                    cart.onAdd({
                      ...currentProduct,
                      price: factorCartPrice(
                        currentProduct?.discountedPrice,
                        currentProduct?.price
                      ),
                    })
                  }
                >
                  add to cart
                </Button>
              )}
              {isInCart && (
                <QuantityControl
                  id={currentProduct?._id}
                  title={currentProduct?.title}
                  quantity={isInCart?.quantity}
                />
              )}
              <Button
                aria-label="add product to wishlist"
                icon={!isInWishlist ? "heart" : "heartCross"}
                variant="outline"
                onClick={
                  !isInWishlist
                    ? () => wishlist.onAdd(currentProduct)
                    : () =>
                        wishlist.onRemove(
                          currentProduct?._id,
                          currentProduct?.title
                        )
                }
              >
                {!isInWishlist ? "add to wishlist" : "remove from wishlist"}
              </Button>
            </div>

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
        </div>
      </Section>
      {/* Product description */}
      <Section className="space-y-4">
        <Heading>Description</Heading>
        <RichTextViewer htmlContent={currentProduct?.description} />
      </Section>
      {/* customer reviews */}
      <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-2">
        <Section className="flex flex-col gap-2">
          <Review />
          <Review />
          <Review />
          {/* <Rating /> */}
        </Section>

        <ProductView className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {/* {relatedProducts?.map((product, index) => (
            ))} */}
          <ProductSmall />
          <ProductSmall />
          <ProductSmall />
        </ProductView>
      </div>
    </>
  );
}
