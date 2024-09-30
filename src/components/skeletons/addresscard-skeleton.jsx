import { Card, CardContent } from "../ui/card";
import { ButtonSkeleton } from "./button-skeleton";
import { DatacellSkeleton } from "./datacell-skeleton";
import { HeadingSkeleton } from "./heading-skeleton";

export function AddresscardSkeleton() {
  return (
    <Card>
      <CardContent>
        <HeadingSkeleton />
        <div className="mt-3 mb-3 ml-0 mr-0 flex gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <DatacellSkeleton />
            <DatacellSkeleton />
            <DatacellSkeleton />
          </div>
          <div className="flex flex-col gap-4">
            <DatacellSkeleton />
            <DatacellSkeleton />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <ButtonSkeleton className="w-full" />
          <ButtonSkeleton className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
