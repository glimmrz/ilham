"use client";
import Image from "next/image";
import { Icon } from "../icon";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { useProductModal } from "@/hooks/controllers";

export const Product = () => {
  const { onOpen } = useProductModal();

  return (
    <Card onClick={onOpen}>
      <CardContent className="relative pb-2">
        <div className="absolute top-2 left-0 flex items-center justify-between w-full px-2 z-[1]">
          <Badge>sale</Badge>
          <Button size="icon" variant="outline" className="rounded-full">
            <Icon icon="heart" />
          </Button>
        </div>

        <figure className="relative h-[120px] md:h-[140px] w-full">
          <Image
            src="https://zeris.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjtjatcqw%2Fimage%2Fupload%2Fv1726252688%2Fcgvstypfhmxtauhddp3e.webp&w=1920&q=75"
            alt=""
            fill
            className="object-contain"
          />
        </figure>
      </CardContent>
      <CardHeader className="py-2">
        <CardTitle className="text-base capitalize h-12 line-clamp-2">
          orange jam with hot spices and cool spices
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <span>$21.00</span>
        <Button variant="outline">
          <span>add</span>
          <Icon icon="check" />
        </Button>
      </CardFooter>
    </Card>
  );
};
