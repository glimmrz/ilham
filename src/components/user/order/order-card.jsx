import { DataCell } from "@/components/data-cell";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function OrderCard({ orderItem }) {
  return (
    <Card className="shadow-regular transition-shadow duration-300 hover:shadow-active">
      <CardContent className="grid grid-cols-1 gap-2 items-center md:grid-cols-2">
        <figure className="relative h-[170px]">
          <Image
            src="https://zeris.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjtjatcqw%2Fimage%2Fupload%2Fv1726251147%2Fuskqyhddlnfz0e6jz9rd.webp&w=256&q=75"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 350px, 250px"
          />
        </figure>
        <section>
          <CardTitle className="text-base line-clamp-2">
            Organic juice
          </CardTitle>

          <div className="mt-2 grid gap-2 md:gap-4">
            <DataCell dataName="price" dataValue="৳20" />
            <DataCell dataName="quantity" dataValue="56" />
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
