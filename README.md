# 🏛️ Live Formatie

> **Laat Nederlandse politici met elkaar in discussie gaan en ontdek waar ze het (on)eens over worden.**

Live Formatie is een AI-gestuurde simulatie van Nederlandse formatiegesprekken. Kies je coalitie, gooi er een onderwerp in, en kijk hoe partijleiders als Wilders, Timmermans en anderen met elkaar in debat gaan - compleet met hun échte standpunten en typische uitspraken. 

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-5.0-black)](https://sdk.vercel.ai/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0-blue)](https://ai.google.dev/)

## ✨ Features

- 🗳️ **19 Nederlandse politieke partijen** - Van PVV tot Volt, up to date met de verkiezingsprogramma's 2025
- 🤖 **AI-gestuurde gesprekken** - Google Gemini 2.0 Flash genereert dynamische discussies
- 💬 **WhatsApp-stijl chat** - Korte berichten, emoji's en realtime typing indicators
- 🎯 **Slimme compromissen** - AI bedenkt concrete voorstellen op basis van de standpunten
- 🎲 **Unieke gesprekken** - Variabele temperature/frequency penalty zorgt voor variatie
- 🛡️ **Content moderatie** - Automatische filtering van NSFW en haatdragende content
- 📊 **Evaluatie-systeem** - Scripts om gespreksuitkomsten te analyseren
- 📱 **Responsive design** - Werkt perfect op mobiel en desktop
- 🎨 **Speelse UI** - Kleurrijke ornamenten en partijleider-illustraties

## 🚀 Aan de slag

### Vereisten

- **Node.js** 20.x of hoger
- **Yarn** 1.22.x (of npm/pnpm)
- **PostgreSQL** database
- **Google AI API key** (Gemini 2.0)

### Installatie

1. **Clone de repository**
```bash
git clone https://github.com/jaschahuisman/formatie-simulatie.git
cd formatie-simulatie
```

2. **Installeer dependencies**
```bash
yarn install
```

3. **Maak een `.env.local` bestand**
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/formatie"

# Google AI
GOOGLE_GENERATIVE_AI_API_KEY="jouw-api-key-hier"

# Next.js
NODE_ENV="development"
```

4. **Setup database**
```bash
# Genereer migraties
yarn db:generate

# Run migraties
yarn db:migrate

# Of push direct naar database (development)
yarn db:push
```

5. **Start development server**
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) en maak je eerste formatiegesprek! 🎉

## 📁 Project structuur

```
formatie-simulatie/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   │   └── gesprekken/       # Gesprekken endpoints
│   │   ├── gesprek/[id]/         # Individueel gesprek pagina
│   │   ├── hoe-het-werkt/        # Uitleg pagina
│   │   └── page.tsx              # Homepage
│   ├── components/               # React componenten
│   │   ├── bericht.tsx           # Chat bericht component
│   │   ├── conversation-dialog.tsx # Nieuw gesprek dialog
│   │   ├── conversation-form.tsx # Gesprek formulier
│   │   ├── gesprek.tsx           # Volledig gesprek
│   │   └── ui/                   # shadcn/ui componenten
│   ├── data/
│   │   └── deelnemers.ts         # Partijen en politici data
│   ├── lib/
│   │   ├── ai/                   # AI SDK configuratie
│   │   ├── db/                   # Database schema en queries
│   │   └── live-formatie/        # Core AI logica
│   │       ├── genereer-gesprek-berichten.ts
│   │       ├── genereer-compromis.ts
│   │       ├── genereer-titel.ts
│   │       └── genereer-stem-opties.ts
│   └── repository/               # Data access layer
├── scripts/
│   └── evaluate-conversations.ts # Evaluatie script
├── drizzle/                      # Database migraties
├── public/
│   └── images/                   # Partijlogo's en partijleiders
└── evaluation-results/           # Evaluatie resultaten
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework met App Router
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible componenten
- **Lucide React** - Iconenbibliotheek
- **React Share** - Social sharing

### Backend & AI
- **Vercel AI SDK 5** - AI streaming en tools
- **Google Gemini 2.0 Flash** - Large Language Model
- **Drizzle ORM** - Type-safe SQL
- **PostgreSQL** - Database
- **Zod** - Schema validatie

### Development
- **ESLint** - Code linting
- **tsx** - TypeScript execution
- **Vercel Analytics** - Analytics

## 💬 Hoe werkt de AI?

### 1. Gesprek genereren
De AI krijgt een gestructureerde prompt met:
- ✅ Verkiezingsprogramma's van geselecteerde partijen
- ✅ Tone of voice per politicus
- ✅ Typische uitspraken en persoonlijke details
- ✅ Aantal zetels (machtsbalans)
- ✅ Realistische Kamer-acties (moties, wetten, begrotingen)

### 2. Streaming responses
Met de Vercel AI SDK worden berichten real-time gestreamed, inclusief:
- 💬 **Tekst** - Wat de politicus zegt
- 🎭 **Sender** - Wie spreekt
- 💭 **Reasoning** - Waarom dit standpunt wordt ingenomen

### 3. Compromis
Na ~22 berichten genereert de AI een compromis-voorstel met:
- 📝 Concrete acties die alle partijen kunnen steunen
- ⚖️ Balans tussen verschillende standpunten
- 🎯 Realistische Kamer-procedures

### 4. Content moderatie
Elk onderwerp wordt eerst gescreend op:
- 🚫 NSFW content
- 🚫 Haatspraak
- 🚫 Discriminatie
- ✅ Controversiële politieke onderwerpen zijn toegestaan

## 📊 Scripts

### Development
```bash
yarn dev          # Start development server
yarn build        # Build voor productie
yarn start        # Start productie server
yarn lint         # Run ESLint
```

### Database
```bash
yarn db:generate  # Genereer migraties uit schema
yarn db:migrate   # Run migraties
yarn db:push      # Push schema direct naar DB (dev)
yarn db:studio    # Open Drizzle Studio (GUI)
```

### Evaluatie
```bash
yarn evaluate     # Analyseer gespreksuitkomsten
```

Het evaluatie-script genereert een JSON-rapport met:
- Aantal gesprekken per partijcombinatie
- Gemiddelde berichtenlengte
- Compromis-statistieken
- Timestamp per evaluatie

Resultaten worden opgeslagen in `evaluation-results/`.

## 🎨 Partijen toevoegen

Wil je een partij toevoegen? Edit `src/data/deelnemers.ts`:

```typescript
{
  id: 20,
  name: "Nieuwe Politicus",
  image: "naam.png",  // Plaats in public/images/partijleiders/
  toneOfVoice: "Beschrijf hoe deze persoon praat...",
  typischeUitspraken: ["Quote 1", "Quote 2"],
  persoonlijkeDetails: "Achtergrond info...",
  partij: {
    name: "Partijnaam",
    short: "PN",
    logo: "pn.png",  // Plaats in public/images/
    zetels: 10,
    programma: {
      standpunten: [
        "Standpunt 1",
        "Standpunt 2",
        // etc.
      ]
    }
  }
}
```

## 🔧 Configuratie

### AI Parameters
Pas in `src/lib/ai/index.ts` aan:
```typescript
temperature: 0.8        // Creativiteit (0-2)
maxTokens: 4000        // Max tokens per response
topP: 0.95             // Nucleus sampling
frequencyPenalty: 0.5  // Herhaling voorkomen
```

### Gesprek Lengte
In `src/lib/live-formatie/genereer-gesprek-berichten.ts`:
```typescript
const AANTAL_BERICHTEN = 22  // Standaard aantal berichten
```

## 🤝 Bijdragen

Contributions zijn welkom! 🎉

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/vette-feature`)
3. Commit je changes (`git commit -m 'Add vette feature'`)
4. Push naar de branch (`git push origin feature/vette-feature`)
5. Open een Pull Request

### Development Tips
- 📝 Gebruik TypeScript voor type safety
- 🧪 Test je gesprekken met verschillende partijcombinaties
- 🎨 Houd de UI speels maar toegankelijk
- 📚 Update de documentatie bij nieuwe features

## 📝 Database Schema

```sql
-- Conversations tabel
CREATE TABLE user_conversations (
  id TEXT PRIMARY KEY,
  title TEXT,
  onderwerp TEXT NOT NULL,
  deelnemer_ids INTEGER[] NOT NULL,
  berichten JSONB NOT NULL,
  compromis TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🐛 Bekende Issues

- ⚠️ Gesprekken kunnen soms langer duren dan verwacht (afhankelijk van API)
- ⚠️ Zeer controversiële onderwerpen kunnen worden geblokkeerd door content filter

## 📄 Licentie

Dit project is open source en beschikbaar onder de [MIT License](LICENSE).

## 🙏 Credits

Gebouwd met:
- [Next.js](https://nextjs.org/) - React framework
- [Vercel AI SDK](https://sdk.vercel.ai/) - AI streaming
- [Google Gemini](https://ai.google.dev/) - Language model
- [Drizzle ORM](https://orm.drizzle.team/) - Database toolkit
- [shadcn/ui](https://ui.shadcn.com/) - UI componenten
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 💡 Disclaimer

Live Formatie is een **AI-simulatie** bedoeld als **entertainment met een serieuze ondertoon**. De gesprekken zijn kunstmatig gegenereerd en geen voorspelling van echte formatiegesprekken. Standpunten zijn gebaseerd op échte verkiezingsprogramma's, maar het taalgebruik en specifieke reacties zijn niet authentiek. 

**Gebruik dit niet als politiek advies** - stem op basis van échte informatie! 🗳️

---

Gemaakt met ❤️ voor transparantere politiek

**Questions?** Open een issue of start een discussie!

🔗 [Live Demo](https://formatie-simulatie.vercel.app) | 📖 [Documentation](docs/) | 🐦 [Twitter](https://twitter.com)
