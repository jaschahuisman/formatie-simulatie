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

      <article className="bg-white rounded-2xl shadow-xl p-6 md:p-12 space-y-8 md:space-y-12 text-gray-900">
        <div>
          <h1 className="font-comic text-4xl md:text-5xl mb-4">
            Hoe werkt Live Formatie?
          </h1>

          <p className="text-lg md:text-xl">
            Laat Nederlandse politici met elkaar in discussie gaan over elk
            onderwerp dat je wilt. Kies je coalitie en ontdek waar ze ruzie
            over maken en waar ze het (misschien) eens worden.
          </p>
        </div>

        <section>
          <h2 className="font-comic text-3xl mb-4">🎯 Wat is dit precies?</h2>
          <div className="space-y-4">
            <p>
              Live Formatie laat je zien hoe politieke partijen met elkaar
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
          <h2 className="font-comic text-3xl mb-6">
            🔧 Zo doe je het
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-xl md:text-2xl mb-3 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  1
                </span>
                Stel je coalitie samen
              </h3>
              <p>
                Kies minimaal 2 partijen die met elkaar in discussie gaan.
                Je ziet meteen hoeveel zetels je coalitie heeft en of dat
                genoeg is voor een meerderheid (76+ zetels).
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
                We genereren een gesprek van ongeveer 22 berichten. Elke politicus
                reageert op basis van hun echte standpunten en persoonlijkheid:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Hun <strong>verkiezingsprogramma 2025</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Hun <strong>typische manier van praten</strong> (inclusief emoji's bij jongere politici)</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Hoeveel <strong>zetels</strong> ze hebben (macht in onderhandelingen)</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Wat ze <strong>écht kunnen doen</strong> in de Tweede Kamer (moties, wetten, begrotingen)</span>
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
                Het gesprek verloopt als een WhatsApp-groepschat: korte berichten,
                emoji's hier en daar, en politici die op elkaar reageren. Aan
                het einde krijg je een compromis-voorstel (als ze het tenminste
                met elkaar eens kunnen worden).
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">🤖 De technologie</h2>
          <div className="space-y-6">
            <p>
              We gebruiken Google Gemini 2.0 om de gesprekken te genereren.
              Elke discussie wordt vers gemaakt, met variërende instellingen
              zodat geen twee gesprekken hetzelfde zijn.
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Wat het realistisch maakt
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span><strong>Echte verkiezingsprogramma's</strong> - Standpunten komen uit de programma's van 2025</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span><strong>Typische uitdrukkingen</strong> - Elke politicus praat zoals ze écht praten</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span><strong>Realistische acties</strong> - Geen vage "in gesprek gaan", maar concrete moties en wetten</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span><strong>Machtsbalans</strong> - Partijen met meer zetels hebben meer invloed</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">✅</span>
                  <span><strong>Dynamische discussies</strong> - Ze reageren op elkaar, niet op een script</span>
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
                <strong>Let op:</strong> Controversiële politieke standpunten zijn
                gewoon toegestaan. Ook ludieke onderwerpen (prijs van frikandelbroodjes,
                anyone?) zijn prima. Het hoeft echt niet per se een "serieus
                politiek onderwerp" te zijn.
              </p>
            </div>

            <p className="text-sm">
              <strong>Voor de nerds:</strong> Next.js 15, Vercel AI SDK voor streaming,
              Drizzle ORM, en variabele temperature/frequency penalty per gesprek.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">
            🎬 Waarom Live Formatie?
          </h2>
          <div className="space-y-4">
            <p>
              Je ziet als burger nooit wat er écht gebeurt als politici achter
              gesloten deuren met elkaar moeten samenwerken. Live Formatie laat
              je als het ware meekijken: jij bepaalt de coalitie en het onderwerp,
              wij simuleren hoe die politici met elkaar zouden kunnen discussiëren.
            </p>
            <p>
              Is het realistisch? Dat is lastig te zeggen - niemand weet precies
              hoe formateurs en politici écht met elkaar omgaan. Maar door echte
              verkiezingsprogramma's, typische uitspraken en politieke verhoudingen
              te combineren, krijg je in ieder geval een vermakelijke indruk van
              de mogelijke dynamiek.
            </p>
            <p className="text-sm">
              <strong>Vergeet niet:</strong> Dit is een AI-simulatie, geen
              voorspelling of documentaire. Zie het als entertainment dat je laat
              nadenken over politieke samenwerking.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-comic text-3xl mb-4">⚠️ Disclaimer</h2>
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 md:p-6">
            <p>
              <strong>Dit is geen documentaire.</strong> De gesprekken zijn
              AI-gegenereerd en bedoeld als entertainment met een serieuze ondertoon.
              De standpunten zijn gebaseerd op echte verkiezingsprogramma's, maar
              het taalgebruik en de specifieke reacties zijn kunstmatig. Gebruik
              het niet als politiek advies - ga stemmen op basis van échte informatie.
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

        <section className="text-sm border-t border-gray-200 pt-6 opacity-60">
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

