import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEVICE_ID_COOKIE_NAME,
  generateDeviceId,
  DEVICE_ID_COOKIE_MAX_AGE,
} from "@/lib/device";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if device ID cookie exists
  const existingDeviceId = request.cookies.get(DEVICE_ID_COOKIE_NAME);

  // If no device ID exists, create one and set it
  if (!existingDeviceId) {
    const newDeviceId = generateDeviceId();

    response.cookies.set(DEVICE_ID_COOKIE_NAME, newDeviceId, {
      maxAge: DEVICE_ID_COOKIE_MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

// Run middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
