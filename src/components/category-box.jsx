import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export const CategoryBox = () => {
  return (
    <Card className="shadow-transparent hover:shadow-none cursor-pointer">
      <CardContent className="md:p-2">
        <figure className="relative h-20">
          <Image
            src="https://algomart-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.71ff2cc4.png&w=128&q=75"
            alt=""
            fill
            className="object-contain"
          />
        </figure>
        <h2 className="text-lg font-semibold mt-2 text-center">Food</h2>
      </CardContent>
    </Card>
  );
};
