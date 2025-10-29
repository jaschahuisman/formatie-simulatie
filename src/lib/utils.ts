import { clsx, type ClassValue } from "clsx";
import { NextRequest, NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";
import { GeneratedMessage } from "./live-formatie/genereer-gesprek-berichten";
import { Chance } from "chance";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Require a cron secret to be present in the request headers.
 * @param request - The request to check the secret for.
 * @returns NextResponse.json({ error: "Unauthorized" }, { status: 401 }) if the secret is not present, otherwise NextResponse.next().
 */
export function requireCronSecret(request: NextRequest) {
  const token = request.headers.get("Authorization");

  if (
    process.env.NODE_ENV !== "development" &&
    token !== process.env.CRON_SECRET
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.next();
}

/**
 * Add timestamps to messages based on the duration of the conversation and the start time.
 * @param messages - The messages to add timestamps to.
 * @param durationMinutes - The duration of the conversation in minutes.
 * @param startTime - The start time of the conversation. Defaults to the current time.
 * @returns The messages with timestamps.
 */
export function addTimestampsToMessages(
  messages: GeneratedMessage[],
  startAt: Date,
  endAt: Date
) {
  const chance = new Chance();

  let currentTime = startAt.getTime();

  const totalMessages = messages.length;
  const averageGap = (endAt.getTime() - startAt.getTime()) / totalMessages;

  return messages.map((message, index) => {
    // Add some variance to the time gaps
    // Short messages get shorter gaps, simulate natural conversation flow
    const variance = chance.floating({ min: 0.5, max: 1.5 });

    // Occasionally have rapid-fire exchanges (30% chance)
    const isRapidFire = chance.bool({ likelihood: 30 });

    let gap: number;
    if (isRapidFire) {
      // Rapid fire: 5-15 seconds
      gap = chance.integer({ min: 5000, max: 15000 });
    } else {
      // Normal pace: use average with variance
      gap = averageGap * variance;
    }

    // First message starts at startTime
    if (index > 0) {
      currentTime += gap;
    }

    return {
      ...message,
      timestamp: new Date(currentTime),
    };
  });
}

/**
 * Sanitize party name by removing text in parentheses
 * E.g. "Partij voor de Vrijheid (PVV)" becomes "Partij voor de Vrijheid"
 */
export function sanitizePartijNaam(naam: string): string {
  return naam.replace(/\s*\([^)]*\)/g, "").trim();
}
