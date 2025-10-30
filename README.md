# Live Formatie

AI-gestuurde simulatie van Nederlandse formatiegesprekken. Genereert dynamische politieke discussies op basis van verkiezingsprogramma's 2025, met realistische standpunten en conversatie-stijlen per politicus. 

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-5.0-black)](https://sdk.vercel.ai/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0-blue)](https://ai.google.dev/)

## Features

- **19 Nederlandse politieke partijen** met verkiezingsprogramma's 2025
- **AI-gestuurde gesprekken** via Google Gemini 2.0 Flash met streaming responses
- **Realtime chat interface** met typing indicators
- **Geautomatiseerde compromis-generatie** op basis van partijstandpunten
- **Variabele AI-parameters** per gesprek (temperature, frequency penalty)
- **Content moderatie** voor NSFW en haatdragende content
- **Evaluatie-tooling** voor analyse van gespreksuitkomsten
- **Type-safe database layer** met Drizzle ORM
- **Responsive UI** gebouwd met Tailwind CSS 4

## Setup

### Requirements

- Node.js 20.x+
- Yarn 1.22.x (of npm/pnpm)
- PostgreSQL database
- Google AI API key (Gemini 2.0)

### Installation

```bash
# Clone repository
git clone https://github.com/jaschahuisman/formatie-simulatie.git
cd formatie-simulatie

# Install dependencies
yarn install

# Configure environment
cp .env.example .env.local
# Edit .env.local met je DATABASE_URL en GOOGLE_GENERATIVE_AI_API_KEY

# Setup database
yarn db:push  # of yarn db:migrate voor productie

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

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

## Tech Stack

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

## Architecture

### Conversation Generation

De AI prompt wordt opgebouwd met:
- Verkiezingsprogramma's van geselecteerde partijen
- Tone of voice en typische uitspraken per politicus
- Partijgrootte (zetels) voor machtsbalans
- Realistische Kamer-acties (moties, wetten, begrotingen)

### Streaming Implementation

Vercel AI SDK streamt responses met structured output:
```typescript
{
  message: string,      // Bericht tekst
  sender: number,       // Deelnemer ID
  reasoning: string     // Intern redenering voor standpunt
}
```

### Compromise Generation

Na ongeveer 22 berichten wordt een compromis-voorstel gegenereerd op basis van:
- Gemeenschappelijke standpunten
- Realistische concessies per partij
- Concrete Kamer-procedures

### Content Moderation

Pre-flight check voor elk onderwerp:
- NSFW content detection
- Haatspraak filtering
- Discriminatie check
- Controversiële politieke onderwerpen zijn toegestaan

## Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build voor productie
yarn start        # Start productie server
yarn lint         # Run ESLint

# Database
yarn db:generate  # Genereer migraties uit schema
yarn db:migrate   # Run migraties
yarn db:push      # Push schema direct naar DB (dev)
yarn db:studio    # Open Drizzle Studio (GUI)

# Evaluation
yarn evaluate     # Analyseer gespreksuitkomsten
```

### Evaluation Output

Het evaluatie-script genereert JSON-rapporten in `evaluation-results/` met:
- Aantal gesprekken per partijcombinatie
- Gemiddelde berichtenlengte
- Compromis-statistieken
- Timestamp per evaluatie

## Adding Political Parties

Edit `src/data/deelnemers.ts` om een partij toe te voegen:

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

## Configuration

### AI Parameters

`src/lib/ai/index.ts`:
```typescript
temperature: 0.8        // Creativiteit (0-2)
maxTokens: 4000        // Max tokens per response
topP: 0.95             // Nucleus sampling
frequencyPenalty: 0.5  // Herhaling voorkomen
```

### Conversation Length

`src/lib/live-formatie/genereer-gesprek-berichten.ts`:
```typescript
const AANTAL_BERICHTEN = 22  // Standaard aantal berichten
```

## Contributing

Contributions zijn welkom.

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/new-feature`)
3. Commit je changes (`git commit -m 'Add new feature'`)
4. Push naar de branch (`git push origin feature/new-feature`)
5. Open een Pull Request

## Disclaimer

Dit is een AI-simulatie voor entertainment doeleinden. Gesprekken zijn kunstmatig gegenereerd en geen voorspelling van echte formatiegesprekken. Standpunten zijn gebaseerd op verkiezingsprogramma's 2025, maar het taalgebruik en specifieke reacties zijn gegenereerd door AI.
