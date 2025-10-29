import { Container, Page } from "@/components/layout";
import { getGesprekById, getAllDeelnemers } from "@/repository";
import { Gesprek } from "@/components/gesprek";
import { ShareSection } from "@/components/share-section";
import { notFound } from "next/navigation";
import { createLogger } from "@/lib/logger";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";

const logger = createLogger("app/gesprek/[id]");

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: idString } = await params;
  const id = parseInt(idString);
  const gesprek = await getGesprekById(id);

  if (!gesprek) {
    return {
      title: "Gesprek niet gevonden",
    };
  }

  const alleDeelnemers = await getAllDeelnemers();
  const deelnemers = alleDeelnemers.filter((d) =>
    gesprek.deelnemerIds.includes(d.id)
  );
  const partijNamen = deelnemers.map((d) => d.partij.short).join(", ");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const gesprekUrl = `${baseUrl}/gesprek/${id}`;
  const title = `${gesprek.onderwerp} - Live Formatie`;
  const description = `Een gesprek tussen ${partijNamen} over ${gesprek.onderwerp}`;

  return {
    title,
    description: `Zie wat ${partijNamen} vinden over ${gesprek.onderwerp}`,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Live Formatie",
      locale: "nl_NL",
      url: gesprekUrl,
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 200,
          alt: "Live Formatie Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

export default async function GesprekPage({ params }: Props) {
  const { id: idString } = await params;
  const id = parseInt(idString);

  logger.debug("Fetching gesprek", { id });

  const gesprek = await getGesprekById(id);

  if (!gesprek) {
    logger.warn("Gesprek not found", { id });
    notFound();
  }

  const alleDeelnemers = await getAllDeelnemers();
  const deelnemers = alleDeelnemers.filter((d) =>
    gesprek.deelnemerIds.includes(d.id)
  );

  logger.debug("Gesprek fetched", {
    id: gesprek.id,
    deelnemersCount: deelnemers.length,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const gesprekUrl = `${baseUrl}/gesprek/${id}`;

  return (
    <Page>
      <Container>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          <ArrowLeftIcon className="size-4" /> Terug naar home
        </Link>

        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Live Formatie"
              width={120}
              height={120}
              className="w-48 h-auto"
            />
          </Link>
        </div>

        <Gesprek
          gesprek={gesprek}
          berichten={gesprek.berichten.map((bericht) => ({
            ...bericht,
            deelnemer: bericht.deelnemer!,
          }))}
          deelnemers={deelnemers}
          showCompromis={true}
        />

        <ShareSection
          url={gesprekUrl}
          title={`Bekijk mijn simulatie van een formatiegesprek over ${gesprek.onderwerp}!`}
        />
      </Container>
    </Page>
  );
}
