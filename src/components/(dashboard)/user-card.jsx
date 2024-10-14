import Link from "next/link";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Icon } from "../icon";

export function UserCard({ user }) {
  return (
    <Card title={user?.title}>
      <CardContent className="flex items-center p-1 md:p-1">
        <div className="bg-slate-100 p-1">
          <Icon icon="user" size={110} />
        </div>
        <div className="py-0 px-1 w-full flex flex-col gap-1">
          <CardTitle className="capitalize font-bold text-base cursor-pointer transition-colors duration-300 hover:text-primary dark:hover:text-muted">
            {user?.name}
          </CardTitle>
          <span>{user?.email}</span>
          <div className="flex items-center justify-between">
            <span>
              role:{" "}
              <span className="text-primary font-bold uppercase">
                {user?.role}
              </span>
            </span>
            <div className="space-x-2">
              <Button size="icon" className="rounded-full" icon="edit" />
              <Link href={`/dashboard/products/${user?.slug}`} passHref>
                <Button
                  size="icon"
                  className="rounded-full"
                  icon="details"
                ></Button>
              </Link>
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
