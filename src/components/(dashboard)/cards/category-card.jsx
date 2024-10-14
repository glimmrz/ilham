import { Card, CardContent, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { DynamicIcon } from "../../dynamic-icon";

export function CategoryCard({ category }) {
  return (
    <Card title={category?.title}>
      <CardContent className="flex items-center gap-2 p-1 md:p-1">
        <div className="bg-slate-100 p-1">
          <DynamicIcon name={category?.icon} size={80} />
        </div>
        <div className="py-0 px-1 w-full space-y-2">
          <CardTitle className="capitalize font-bold text-base cursor-pointer transition-colors duration-300 hover:text-primary dark:hover:text-muted">
            {category?.label}
          </CardTitle>
          <div className="flex items-end justify-between space-x-2">
            <div>
              <p className="font-semibold line-clamp-2">
                {category?.description}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button size="icon" className="rounded-full" icon="edit" />
              <Button
                variant="destructive"
                size="icon"
                className="rounded-full"
                icon="delete"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
