"use server";
import { jwtVerify } from "jose";
import { getCookie, setCookie } from "./cookie";

export async function getSession() {
  const session = await getCookie("ilm-session");

  if (!session)
    return {
      error: true,
      payload: null,
    };

  try {
    const verifiedToken = await jwtVerify(
      session,
      new TextEncoder().encode(process.env.TOKEN_SECRET),
      {
        algorithms: ["HS256"],
      }
    );

    return {
      error: false,
      payload: verifiedToken.payload,
    };
  } catch (err) {
    return {
      error: true,
      payload: null,
    };
  }
}

export async function logout() {
  await Promise.all([setCookie("ilm-session", "", 0)]);
}
