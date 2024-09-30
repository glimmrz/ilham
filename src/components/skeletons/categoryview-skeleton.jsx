import { Section } from "../section";
import { CategoryboxSkeleton } from "./categorybox-skeleton";

export function CategoryviewSkeleton() {
  return (
    <Section>
      <div className="flex gap-4 overflow-hidden">
        <CategoryboxSkeleton />
        <CategoryboxSkeleton />
        <CategoryboxSkeleton />
        <CategoryboxSkeleton />
        <CategoryboxSkeleton />
        <CategoryboxSkeleton />
        <CategoryboxSkeleton />
      </div>
    </Section>
  );
}
