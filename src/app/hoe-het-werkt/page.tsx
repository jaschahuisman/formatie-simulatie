import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Hoe het werkt - Formatie Simulatie",
  description:
    "Ontdek hoe onze AI-gestuurde formatie simulatie werkt en hoe politici tot een compromis komen.",
};

export default function HoeHetWerktPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
      <Link href="/">
        <Button className="mb-6">
          <ArrowLeftIcon className="size-4 mr-2" />
          Terug naar home
        </Button>
      </Link>

      <article className="bg-white rounded-2xl shadow-xl p-6 md:p-12 space-y-8 md:space-y-12 text-gray-900">
        <div>
          <h1 className="font-comic text-4xl md:text-5xl mb-4">
            Hoe werkt Formatie Simulatie?
          </h1>

          <p className="text-lg md:text-xl">
            Laat Nederlandse politici met elkaar in discussie gaan over elk
            onderwerp dat je wilt. Kies je coalitie en ontdek waar ze ruzie over
            maken en waar ze het (misschien) eens worden.
          </p>
        </div>

        <section>
          <h2 className="font-comic text-3xl mb-4">🎯 Wat is dit precies?</h2>
          <div className="space-y-4">
            <p>
              Formatie Simulatie laat je zien hoe politieke partijen met elkaar
              discussiëren. Kies een coalitie, gooi er een onderwerp in, en kijk
              hoe Wilders, Timmermans en de rest van de club reageren op elkaar.
            </p>
            <p>
              Het is entertainment met een serieuze ondertoon: je ziet de echte
              standpunten van partijen, hoe ze met elkaar omgaan, en waar de
              verschillen (of juist overeenkomsten) zitten. Geen garantie dat
              het zo in echt zou gaan, maar wel vermakelijk én informatief.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-6">🔧 Zo doe je het</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  1
                </span>
                Stel je coalitie samen
              </h3>
              <p>
                Kies minimaal 2 partijen die met elkaar in discussie gaan. Je
                ziet meteen hoeveel zetels je coalitie heeft en of dat genoeg is
                voor een meerderheid (76+ zetels).
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  2
                </span>
                Gooi er een onderwerp in
              </h3>
              <p>
                Klimaat? Migratie? De prijs van frikandelbroodjes? Maakt niet
                uit - zolang het geen haatspraak of NSFW is, mag alles. Kies
                waar de politici over moeten discussiëren.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  3
                </span>
                Het gesprek ontstaat
              </h3>
              <p className="mb-3">
                We genereren een gesprek van ongeveer 22 berichten. Elke
                politicus reageert op basis van hun echte standpunten en
                persoonlijkheid:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>
                    Hun <strong>verkiezingsprogramma 2025</strong>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>
                    Hun <strong>typische manier van praten</strong> (inclusief
                    emoji&apos;s bij jongere politici)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>
                    Hoeveel <strong>zetels</strong> ze hebben (macht in
                    onderhandelingen)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>
                    Wat ze <strong>écht kunnen doen</strong> in de Tweede Kamer
                    (moties, wetten, begrotingen)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  4
                </span>
                Lees het resultaat
              </h3>
              <p>
                Het gesprek verloopt als een WhatsApp-groepschat: korte
                berichten, emoji&apos;s hier en daar, en politici die op elkaar
                reageren. Aan het einde krijg je een compromis-voorstel (als ze
                het tenminste met elkaar eens kunnen worden).
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">🤖 De technologie</h2>
          <div className="space-y-6">
            <p>
              We gebruiken Google Gemini 2.0 om de gesprekken te genereren. Elke
              discussie wordt vers gemaakt, met variërende instellingen zodat
              geen twee gesprekken hetzelfde zijn.
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Wat het realistisch maakt
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    <strong>Echte verkiezingsprogrammas</strong> - Standpunten
                    komen uit de programma&apos;s van 2025
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    <strong>Typische uitdrukkingen</strong> - Elke politicus
                    praat zoals ze écht praten
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    <strong>Realistische acties</strong> - Geen vage &quot;in
                    gesprek gaan&quot;, maar concrete moties en wetten
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    <strong>Machtsbalans</strong> - Partijen met meer zetels
                    hebben meer invloed
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    <strong>Dynamische discussies</strong> - Ze reageren op
                    elkaar, niet op een script
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Content check
              </h3>
              <p className="mb-3">
                Elk onderwerp wordt gecheckt op gepastheid. NSFW, haatspraak en
                discriminatie worden geblokkeerd. Je krijgt meteen te horen
                waarom als iets niet door de check komt.
              </p>
              <p className="text-sm">
                <strong>Let op:</strong> Controversiële politieke standpunten
                zijn gewoon toegestaan. Ook ludieke onderwerpen (prijs van
                frikandelbroodjes, anyone?) zijn prima. Het hoeft echt niet per
                se een &quot;serieus politiek onderwerp&quot; te zijn.
              </p>
            </div>

            <p className="text-sm">
              <strong>Voor de nerds:</strong> Next.js 15, Vercel AI SDK voor
              streaming, Drizzle ORM, en variabele temperature/frequency penalty
              per gesprek.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">
            🎬 Waarom Formatie Simulatie?
          </h2>
          <div className="space-y-4">
            <p>
              Je ziet als burger nooit wat er écht gebeurt als politici achter
              gesloten deuren met elkaar moeten samenwerken. Formatie Simulatie
              laat je als het ware meekijken: jij bepaalt de coalitie en het
              onderwerp, wij simuleren hoe die politici met elkaar zouden kunnen
              discussiëren.
            </p>
            <p>
              Is het realistisch? Dat is lastig te zeggen - niemand weet precies
              hoe formateurs en politici écht met elkaar omgaan. Maar door echte
              verkiezingsprogramma&apos;s, typische uitspraken en politieke
              verhoudingen te combineren, krijg je in ieder geval een
              vermakelijke indruk van de mogelijke dynamiek.
            </p>
            <p className="text-sm">
              <strong>Vergeet niet:</strong> Dit is een AI-simulatie, geen
              voorspelling of documentaire. Zie het als entertainment dat je
              laat nadenken over politieke samenwerking.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">⚠️ Disclaimer</h2>
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 md:p-6">
            <p>
              <strong>Dit is geen documentaire.</strong> De gesprekken zijn
              AI-gegenereerd en bedoeld als entertainment met een serieuze
              ondertoon. De standpunten zijn gebaseerd op echte
              verkiezingsprogramma&apos;s, maar het taalgebruik en de specifieke
              reacties zijn kunstmatig. Gebruik het niet als politiek advies -
              ga stemmen op basis van échte informatie.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">🚀 Probeer het zelf!</h2>
          <p className="mb-6">
            Klaar om te kijken hoe je favoriete (of minst favoriete) coalitie
            het ervan af brengt? Start een gesprek en geniet van de show.
          </p>
          <div>
            <Link href="/">
              <Button size="lg" className="text-lg">
                Start een simulatie →
              </Button>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">💻 Open Source</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
            <p className="mb-4">
              Formatie Simulatie is volledig open source! Bekijk de code, draag
              bij, of fork het project om je eigen versie te maken.
            </p>
            <a
              href="https://github.com/jaschahuisman/formatie-simulatie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Bekijk op GitHub
            </a>
          </div>
        </section>

        <section className="text-sm border-t border-gray-200 pt-6 opacity-60">
          <p>
            <strong>Zetelverdeling:</strong> Gebaseerd op de eerste exitpoll van
            2025. De standpunten zijn afgeleid van actuele
            verkiezingsprogramma&apos;s en publieke statements van de partijen.
          </p>
        </section>
      </article>
    </div>
  );
}
