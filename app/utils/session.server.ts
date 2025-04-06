import { createCookieSessionStorage } from "@remix-run/node";
import { ENV } from "~/environment/environment_local";

export const sessionStorage = createCookieSessionStorage({
    cookie: {
      name: "__session",
      secrets: [ENV.SESSION_SECRET],
      sameSite: "lax",
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  });
  
  // Helpers para manejar la sesión
  export async function getUserSession(request: Request) {
    return sessionStorage.getSession(request.headers.get("Cookie"));
  }
  
  export async function getTokenFromSession(request: Request) {
    const session = await getUserSession(request);
    return session.get("token");
  }
  
  export async function destroySession(request: Request) {
    const session = await getUserSession(request);
    return sessionStorage.destroySession(session);
  }