import Link from "next/link";
import { Section } from "./section";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";

export function ProductView({ children, title, href, className }) {
  return (
    <Section>
      {/* Heading */}
      <div className="flex items-center justify-between mb-2">
        {title && <Heading>{title}</Heading>}

        {href && (
          <Link
            href={href}
            className="capitalize text-primary font-bold underline decoration-wavy"
          >
            see all
          </Link>
        )}
      </div>
      <div
        className={cn(
          "w-full grid gap-3 mt-3 grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(245px,_.5fr))]",
          className
        )}
      >
        {children}
      </div>
    </Section>
  );
}
