"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLocalData } from "@/utils/local-storage";

export function User() {
  const user = useLocalData("ilm-user");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="user" />
          <AvatarFallback>IL</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="capitalize">
          {user?.name ? user?.name : "My account"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!user && (
          <>
            <Link passHref href="/login" className="w-full">
              <DropdownMenuItem>login</DropdownMenuItem>
            </Link>
            <Link passHref href="/register" className="w-full">
              <DropdownMenuItem>sign up</DropdownMenuItem>
            </Link>
          </>
        )}
        {user && (
          <>
            <Link passHref href="/user/profile" className="w-full">
              <DropdownMenuItem>profile</DropdownMenuItem>
            </Link>
            <Link passHref href="/user/orders" className="w-full">
              <DropdownMenuItem>orders</DropdownMenuItem>
            </Link>
            <Link passHref href="/user/address" className="w-full">
              <DropdownMenuItem>addresses</DropdownMenuItem>
            </Link>
          </>
        )}
        <DropdownMenuSeparator />
        <Link href="/become-a-partner" className="w-full">
          <DropdownMenuItem>become a partner</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
