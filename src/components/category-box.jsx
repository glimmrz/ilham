import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export const CategoryBox = ({ category }) => {
  return (
    <Link href={`?sub=${category.name}`} passHref scroll={false}>
      <Card
        className="shadow-transparent hover:shadow-none cursor-pointer"
        style={{ backgroundColor: category.color }}
      >
        <CardContent className="md:p-2">
          <figure className="relative h-20">
            <Image
              src={category.icon}
              alt={category.name}
              fill
              className="object-contain"
              sizes="100px"
            />
          </figure>
          <h2 className="capitalize text-sm font-semibold mt-2 text-center dark:text-background">
            {category.name}
          </h2>
        </CardContent>
      </Card>
    </Link>
  );
};
