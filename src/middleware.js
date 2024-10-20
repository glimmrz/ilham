import { NextResponse } from "next/server";
import { getSession } from "./utils/auth";

export async function middleware(request) {
  const session = await getSession();

  if (
    session.payload?.role?.toLowerCase() !== "admin" &&
    request.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    (!session.error && request.nextUrl.pathname === "/login") ||
    (!session.error && request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (session.error && request.nextUrl.pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    session.error &&
    request.nextUrl.pathname.startsWith("/become-a-partner")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    !session.error &&
    request.nextUrl.pathname.startsWith("/forgot-password")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !session.error &&
    request.nextUrl.pathname.startsWith("/reset-password")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
