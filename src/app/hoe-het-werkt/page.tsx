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
    <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeftIcon className="size-4 mr-2" />
          Terug naar home
        </Button>
      </Link>

      <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-12 space-y-8 md:space-y-12">
        <div>
          <h1 className="font-comic text-4xl md:text-5xl mb-4">
            Hoe werkt Live Formatie?
          </h1>

          <p className="text-lg md:text-xl">
            Live Formatie simuleert realistische politieke gesprekken tussen
            Nederlandse partijleiders. Ontdek hoe onze AI-technologie werkt en
            wat je kunt leren over formaties.
          </p>
        </div>

        <section>
          <h2 className="font-comic text-3xl mb-4">🎯 Wat is Live Formatie?</h2>
          <div className="space-y-4">
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
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-6">
            🔧 Hoe werkt de simulatie?
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
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

            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  2
                </span>
                Bepaal het onderwerp
              </h3>
              <p>
                Kies waar de politici het over moeten hebben. Van klimaat en
                migratie tot de prijs van frikandelbroodjes - alle onderwerpen
                zijn mogelijk. Ons systeem controleert automatisch of het onderwerp
                gepast is (geen NSFW, haatspraak of discriminatie).
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  3
                </span>
                AI genereert het gesprek
              </h3>
              <p className="mb-3">
                Onze AI-technologie genereert een realistisch gesprek van ~22
                berichten over 5 minuten. Elke politicus reageert op basis van:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Actuele standpunten</strong> - Gebaseerd op verkiezingsprogramma's 2025</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Persoonlijkheid</strong> - Tone of voice, typische uitspraken en communicatiestijl</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Zetelverdeling</strong> - Machtsposities en coalitiekansen</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Parlementaire instrumenten</strong> - Moties, hoorzittingen, begrotingswijzigingen</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
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

        <section>
          <h2 className="font-comic text-3xl mb-4">🤖 De technologie</h2>
          <div className="space-y-6">
            <p>
              Live Formatie gebruikt geavanceerde AI-modellen (Google Gemini 2.0
              Flash) om realistische gesprekken te genereren. We variëren tussen
              verschillende model-configuraties om elk gesprek uniek te maken.
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Realistische politieke dynamiek
              </h3>
              <p className="mb-3">Het systeem houdt rekening met:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Politieke verhoudingen</strong> - Wie zijn natuurlijke bondgenoten of rivalen?</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Reactieve flow</strong> - Politici reageren logisch op elkaar, niet op oude context</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Sprekersverdeling</strong> - Iedereen komt aan bod, geen pingpong tussen twee personen</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span><strong>Machtsbalans</strong> - Grote partijen kunnen hun mandaat benadrukken, kleine partijen hun unieke positie</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Content moderatie
              </h3>
              <p className="mb-3">
                We controleren alle input op gepastheid. Dit is een zwart-wit
                check: NSFW content, haatspraak en discriminatie worden geblokkeerd.
                Gebruikers krijgen direct feedback met de reden.
              </p>
              <p className="text-sm">
                <strong>Belangrijk:</strong> Controversiële maar legitieme politieke
                standpunten zijn toegestaan. Ook ludieke onderwerpen (zoals de prijs
                van frikandelbroodjes) kunnen prima. Het hoeft niet per se een
                "serieus politiek onderwerp" te zijn.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">
            📚 Wat leer je van Live Formatie?
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="shrink-0">•</span>
              <span><strong>Hoe formeren partijen een coalitie?</strong> - Ontdek welke partijen goed kunnen samenwerken</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0">•</span>
              <span><strong>Wat zijn de partijstandpunten?</strong> - Leer de actuele visies van alle 17 Tweede Kamerpartijen kennen</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0">•</span>
              <span><strong>Hoe komen politici tot compromissen?</strong> - Zie hoe verschillende standpunten naar elkaar toe groeien</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0">•</span>
              <span><strong>Wat kan de Tweede Kamer écht doen?</strong> - Begrijp de bevoegdheden: moties, wetsvoorstellen, budgetrecht</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0">•</span>
              <span><strong>Waarom zijn zetels belangrijk?</strong> - Ervaar hoe machtsposities onderhandelingen beïnvloeden</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">⚠️ Belangrijke notitie</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-xl p-5 md:p-6">
            <p>
              <strong>Let op:</strong> Live Formatie is een educatief hulpmiddel
              en geen voorspelling van echte formatie-onderhandelingen. De
              gesprekken zijn AI-gegenereerd en weerspiegelen niet de exacte
              meningen of taalgebruik van de echte politici. Gebruik het platform
              als een manier om politieke standpunten en dynamieken beter te
              begrijpen, niet als politiek advies.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">🚀 Probeer het zelf!</h2>
          <p className="mb-6">
            Klaar om je eigen formatie te simuleren? Start een gesprek en
            ontdek hoe jouw ideale coalitie tot een compromis komt.
          </p>
          <div>
            <Link href="/">
              <Button size="lg" className="text-lg">
                Start een simulatie →
              </Button>
            </Link>
          </div>
        </section>

        <section className="text-sm border-t border-gray-200 dark:border-gray-700 pt-6 opacity-60">
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

