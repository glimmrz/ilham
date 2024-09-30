import { AddresscardSkeleton } from "./addresscard-skeleton";

export function AddressSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
      <AddresscardSkeleton />
      <AddresscardSkeleton />
      <AddresscardSkeleton />
      <AddresscardSkeleton />
    </div>
  );
}
