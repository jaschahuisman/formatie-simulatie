import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export const DEVICE_ID_COOKIE_NAME = "formatie_device_id";
export const DEVICE_ID_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Generate a new unique device ID
 */
export function generateDeviceId(): string {
  return uuidv4();
}

/**
 * Get or create a device ID from cookies
 * This should be called in API routes or server components
 */
export async function getOrCreateDeviceId(): Promise<string> {
  const cookieStore = await cookies();
  const existingDeviceId = cookieStore.get(DEVICE_ID_COOKIE_NAME);

  if (existingDeviceId?.value) {
    return existingDeviceId.value;
  }

  // Generate new device ID
  const newDeviceId = generateDeviceId();

  // Set cookie
  cookieStore.set(DEVICE_ID_COOKIE_NAME, newDeviceId, {
    maxAge: DEVICE_ID_COOKIE_MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return newDeviceId;
}

/**
 * Get device ID from cookies (returns null if not found)
 */
export async function getDeviceId(): Promise<string | null> {
  const cookieStore = await cookies();
  const deviceId = cookieStore.get(DEVICE_ID_COOKIE_NAME);
  return deviceId?.value || null;
}
