import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function ProductsmallSkeleton() {
  return (
    <Card>
      <CardContent className="flex items-center p-1 md:p-1">
        <Skeleton className="h-[100px] w-[120px]"></Skeleton>
        <div className="py-0 pl-1 pr-1 w-full flex flex-col gap-1">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-8 w-12" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
