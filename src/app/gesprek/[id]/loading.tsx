"use client";

import { Container, Page } from "@/components/layout";
import { FunFactCard } from "@/components/fun-fact-card";
import Image from "next/image";
import Link from "next/link";

export default function Loading() {
  return (
    <Page>
      <Container>
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Formatie Simulatie"
              width={120}
              height={120}
              className="w-48 h-auto"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[400px] gap-8 bg-background/20 rounded-4xl p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="size-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <p className="text-center text-background">
              Gesprek wordt geladen...
            </p>
          </div>

          <FunFactCard />
        </div>
      </Container>
    </Page>
  );
}
