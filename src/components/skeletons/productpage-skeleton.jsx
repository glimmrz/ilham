"use client";

import { Skeleton } from "../ui/skeleton";
import { ButtonSkeleton } from "./button-skeleton";
import { Section } from "../section";

export function ProductPageSkeleton() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Product Images */}
          <div className="overflow-hidden h-fit lg:sticky md:top-0">
            <Skeleton className="h-[400px] w-full" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,0.5fr))] gap-2 pt-1 pb-1 overflow-hidden">
              <Skeleton className="h-[100px] border border-muted rounded-md" />
              <Skeleton className="h-[100px] border border-muted rounded-md" />
              <Skeleton className="h-[100px] border border-muted rounded-md" />
            </div>
          </div>
          {/* Product Details */}
          <div className="flex flex-col gap-8">
            <div className="space-y-1">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-4 w-12" />

              {/* Price section */}
              <Skeleton className="flex items-center gap-2 w-fit">
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-4 w-12" />
              </Skeleton>
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
                  <Skeleton className="h-6 w-12" />
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    brand
                  </span>{" "}
                  <Skeleton className="h-6 w-12" />
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    material
                  </span>{" "}
                  <Skeleton className="h-6 w-12" />
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    warranty
                  </span>{" "}
                  <Skeleton className="h-6 w-12" />
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    box type
                  </span>{" "}
                  <Skeleton className="h-6 w-12" />
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    color
                  </span>{" "}
                  <Skeleton className="h-6 w-12" />
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="grid gap-2 md:grid-cols-2">
              <ButtonSkeleton className="w-full" />
              <ButtonSkeleton className="w-full" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
