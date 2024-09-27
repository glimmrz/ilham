"use client";
import { useProductModal } from "@/hooks/controllers";
import { DialogModal, Modal } from "./modal";
import Image from "next/image";
import { CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { Section } from "../section";

export const ProductModal = () => {
  const { isOpen, onClose } = useProductModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>
        <article>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {/* Product Images */}
            <div className="overflow-hidden h-fit lg:sticky md:top-0">
              <figure className="relative h-[400px] w-full">
                <Image
                  fill
                  src="https://zeris.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjtjatcqw%2Fimage%2Fupload%2Fv1726252688%2Fcgvstypfhmxtauhddp3e.webp&w=1920&q=75"
                  alt=""
                  className="object-contain p-2 transition-opacity duration-300"
                  priority
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </figure>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,0.5fr))] gap-2 pt-1 pb-1 overflow-hidden">
                <figure
                  className={`relative h-[100px] border-[1px] border-shade rounded-md cursor-pointer transition-[opacity,border-color] duration-300 hover:opacity-80 hover:border-theme_variant`}
                >
                  <Image
                    fill
                    src="https://zeris.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjtjatcqw%2Fimage%2Fupload%2Fv1726252688%2Fcgvstypfhmxtauhddp3e.webp&w=1920&q=75"
                    alt=""
                    className="object-contain p-2"
                  />
                </figure>
              </div>
            </div>
            {/* Product Details */}
            <div className="flex flex-col gap-8">
              <div>
                <CardTitle>john doe snow</CardTitle>
                {/* <RatingStars /> */}

                {/* Price section */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-inherit mr-1">
                    {/* ৳{(currentProduct?.discountedPrice / 100).toFixed(2)} */}
                    20$
                  </span>

                  <span className={`text-sm text-mute font-bold line-through`}>
                    35$
                    {/* ৳{(currentProduct?.price / 100).toFixed(2)} */}
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
                    2kg
                  </li>
                  <li className="capitalize">
                    <span className="inline-flex font-bold min-w-[100px]">
                      brand
                    </span>{" "}
                    ilham
                  </li>
                  <li className="capitalize">
                    <span className="inline-flex font-bold min-w-[100px]">
                      material
                    </span>{" "}
                    jute{" "}
                  </li>
                  <li className="capitalize">
                    <span className="inline-flex font-bold min-w-[100px]">
                      warranty
                    </span>{" "}
                    1 year
                  </li>
                  <li className="capitalize">
                    <span className="inline-flex font-bold min-w-[100px]">
                      box type
                    </span>{" "}
                    jute
                  </li>
                  <li className="capitalize">
                    <span className="inline-flex font-bold min-w-[100px]">
                      color
                    </span>{" "}
                    green
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="grid gap-2 md:grid-cols-2">
                <Button>
                  <Icon icon="bag" />
                  <span>add to cart</span>
                </Button>

                {/* {isInCart && (
                  <QuantityControl
                    id={currentProduct?._id}
                    title={currentProduct?.title}
                    quantity={isInCart?.quantity}
                  />
                )} */}
                <Button>
                  <span>add to wishlist</span>
                  <Icon icon="heart" />
                </Button>
              </div>

              {/* Tags */}
              <div>
                {/* <Heading title="tags" /> */}
                <h4 className="grid gap-2 text-xl font-bold capitalize after:content-[''] after:h-[1px] after:w-full after:rounded-md after:bg-shade">
                  tags
                </h4>
                {/* <div className="flex gap-2 flex-wrap mt-2">
                  {currentProduct?.tags?.map((tag, index) => (
                    <Link href={`/shop?tag=${factorLink(tag)}`} key={index}>
                      <Tag onClick={handleClose} tag={tag} />
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </article>
        {/* Product description */}
        <Section title="description">
          <article>
            {/* <RichView htmlContent={currentProduct?.description} /> */}
          </article>
        </Section>
        {/* customer reviews */}
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-2">
          <Section sectionTitle="reviews" contentStyles="flex flex-col gap-2">
            {/* <Review />
            <Review />
            <Review />
            <Rating /> */}
          </Section>
          <Section
            sectionTitle="related products"
            contentStyles="lg:sticky lg:top-[theme(gap.2)] lg:h-fit"
          >
            {/* <GridView customStyles="md:!grid-cols-2 lg:!grid-cols-1 !mt-0">
              {relatedProducts?.map((product, index) => (
                <ProductCardSlim key={index} product={product} />
              ))}
            </GridView> */}
          </Section>
        </div>
      </>
    </Modal>
  );
};
