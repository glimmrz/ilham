import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
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
          <Button icon="edit">edit</Button>
          <Button variant="destructive" icon="delete">
            delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
