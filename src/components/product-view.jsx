import Link from "next/link";
import { CardTitle } from "./ui/card";
import { Section } from "./section";

export function ProductView({ children, title }) {
  return (
    <Section>
      {/* Heading */}
      <div className="flex items-center justify-between mb-2">
        <CardTitle>{title}</CardTitle>

        <Link
          href=""
          className="capitalize text-theme font-bold hover:underline"
        >
          see all
        </Link>
      </div>
      <div className="grid gap-3 mt-3 grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(245px,_.5fr))]">
        {children}
      </div>
    </Section>
  );
}
