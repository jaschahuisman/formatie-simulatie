import { NextRequest, NextResponse } from "next/server";
import { getGesprekById } from "@/repository";
import { createLogger } from "@/lib/logger";

const logger = createLogger("api/gesprekken/[id]");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idString } = await params;
    const id = parseInt(idString);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid gesprek ID" },
        { status: 400 }
      );
    }

    logger.debug("Fetching gesprek", { id });

    const gesprek = await getGesprekById(id);

    if (!gesprek) {
      logger.warn("Gesprek not found", { id });
      return NextResponse.json(
        { error: "Gesprek not found" },
        { status: 404 }
      );
    }

    logger.info("Gesprek fetched successfully", { id });

    return NextResponse.json(gesprek);
  } catch (error) {
    logger.error("Error fetching gesprek", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

