import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Hoe het werkt - Live Formatie",
  description:
    "Ontdek hoe onze AI-gestuurde formatie simulatie werkt en hoe politici tot een compromis komen.",
};

export default function HoeHetWerktPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeftIcon className="size-4 mr-2" />
          Terug naar home
        </Button>
      </Link>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-comic text-4xl md:text-5xl mb-6">
          Hoe werkt Live Formatie?
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Live Formatie simuleert realistische politieke gesprekken tussen
          Nederlandse partijleiders. Ontdek hoe onze AI-technologie werkt en
          wat je kunt leren over formaties.
        </p>

        <section className="mb-12">
          <h2 className="font-comic text-3xl mb-4">🎯 Wat is Live Formatie?</h2>
          <p>
            Live Formatie is een educatief platform dat je laat zien hoe
            Nederlandse politieke partijen met elkaar in gesprek gaan. Door
            AI-technologie kunnen we realistische gesprekken simuleren waarin
            partijleiders hun standpunten verdedigen, naar elkaar luisteren, en
            op zoek gaan naar compromissen.
          </p>
          <p>
            Het doel? Democratie begrijpelijker maken en inzicht geven in hoe
            complexe onderhandelingen in de Tweede Kamer verlopen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-comic text-3xl mb-4">
            🔧 Hoe werkt de simulatie?
          </h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  1
                </span>
                Kies je coalitie
              </h3>
              <p>
                Selecteer minimaal 2 politieke partijen die met elkaar in
                gesprek moeten. Je ziet direct hoeveel Tweede Kamerzetels je
                coalitie heeft en of je een meerderheid (76+ zetels) bereikt.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  2
                </span>
                Bepaal het onderwerp
              </h3>
              <p>
                Kies waar de politici het over moeten hebben. Van klimaat en
                migratie tot zorg en woningbouw - alle actuele thema's zijn
                mogelijk. Ons systeem controleert automatisch of het onderwerp
                geschikt is voor een serieus politiek gesprek.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  3
                </span>
                AI genereert het gesprek
              </h3>
              <p>
                Onze AI-technologie genereert een realistisch gesprek van ~22
                berichten over 5 minuten. Elke politicus reageert op basis van:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Actuele standpunten</strong> - Gebaseerd op
                  verkiezingsprogramma's 2025
                </li>
                <li>
                  <strong>Persoonlijkheid</strong> - Tone of voice, typische
                  uitspraken en communicatiestijl
                </li>
                <li>
                  <strong>Zetelverdeling</strong> - Machtsposities en
                  coalitiekansen
                </li>
                <li>
                  <strong>Parlementaire instrumenten</strong> - Moties,
                  hoorzittingen, begrotingswijzigingen
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-2xl mb-3 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  4
                </span>
                Bekijk het resultaat
              </h3>
              <p>
                Het gesprek verloopt in chat-stijl met korte, snelle berichten.
                Politici sturen 1-3 berichten per beurt, compleet met emoji's
                (vooral jongere politici) en typische uitspraken. Aan het einde
                krijg je een compromis-voorstel met concrete stappen.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-comic text-3xl mb-4">🤖 De technologie</h2>
          <p>
            Live Formatie gebruikt geavanceerde AI-modellen (Google Gemini 2.0
            Flash) om realistische gesprekken te genereren. We variëren tussen
            verschillende model-configuraties om elk gesprek uniek te maken.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">
            Realistische politieke dynamiek
          </h3>
          <p>Het systeem houdt rekening met:</p>
          <ul className="space-y-2 mt-3">
            <li>
              <strong>Politieke verhoudingen</strong> - Wie zijn natuurlijke
              bondgenoten of rivalen?
            </li>
            <li>
              <strong>Reactieve flow</strong> - Politici reageren logisch op
              elkaar, niet op oude context
            </li>
            <li>
              <strong>Sprekersverdeling</strong> - Iedereen komt aan bod, geen
              pingpong tussen twee personen
            </li>
            <li>
              <strong>Machtsbalans</strong> - Grote partijen kunnen hun mandaat
              benadrukken, kleine partijen hun unieke positie
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-3">
            Content moderatie
          </h3>
          <p>
            We controleren alle input op geschiktheid voor een politiek
            gesprek. NSFW content, haatdragende uitspraken en spam worden
            automatisch geblokkeerd. Gebruikers krijgen direct feedback over
            waarom bepaalde onderwerpen niet toegestaan zijn.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-comic text-3xl mb-4">
            📚 Wat leer je van Live Formatie?
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>Hoe formeren partijen een coalitie?</strong> - Ontdek
              welke partijen goed kunnen samenwerken
            </li>
            <li>
              <strong>Wat zijn de partijstandpunten?</strong> - Leer de actuele
              visies van alle 17 Tweede Kamerpartijen kennen
            </li>
            <li>
              <strong>Hoe komen politici tot compromissen?</strong> - Zie hoe
              verschillende standpunten naar elkaar toe groeien
            </li>
            <li>
              <strong>Wat kan de Tweede Kamer écht doen?</strong> - Begrijp de
              bevoegdheden: moties, wetsvoorstellen, budgetrecht
            </li>
            <li>
              <strong>Waarom zijn zetels belangrijk?</strong> - Ervaar hoe
              machtsposities onderhandelingen beïnvloeden
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-comic text-3xl mb-4">⚠️ Belangrijke notitie</h2>
          <p className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <strong>Let op:</strong> Live Formatie is een educatief hulpmiddel
            en geen voorspelling van echte formatie-onderhandelingen. De
            gesprekken zijn AI-gegenereerd en weerspiegelen niet de exacte
            meningen of taalgebruik van de echte politici. Gebruik het platform
            als een manier om politieke standpunten en dynamieken beter te
            begrijpen, niet als politiek advies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-comic text-3xl mb-4">🚀 Probeer het zelf!</h2>
          <p>
            Klaar om je eigen formatie te simuleren? Start een gesprek en
            ontdek hoe jouw ideale coalitie tot een compromis komt.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button size="lg" className="text-lg">
                Start een simulatie →
              </Button>
            </Link>
          </div>
        </section>

        <section className="text-sm text-muted-foreground border-t border-border pt-6 mt-12">
          <p>
            <strong>Zetelverdeling:</strong> Gebaseerd op de eerste exitpoll
            van 2025. De standpunten zijn afgeleid van actuele
            verkiezingsprogramma's en publieke statements van de partijen.
          </p>
        </section>
      </article>
    </div>
  );
}

