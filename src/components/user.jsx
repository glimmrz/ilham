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
import { getLocalData, setLocalData } from "@/utils/local-storage";
import { logout } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function User() {
  const [user, setUser] = useState(null);

  // Set userdata
  useEffect(() => {
    const userData = getLocalData("ilm-user");
    setUser(userData);
  }, []);
  const router = useRouter();

  // Logout user
  const handleLogout = async () => {
    await Promise.all([setLocalData("ilm-user", ""), logout()]);
    setUser(null);
    router.refresh();
  };

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
        {user && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>logout</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
