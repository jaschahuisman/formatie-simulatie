export type Deelnemer = {
  id: number;
  name: string;
  image: string;
  toneOfVoice: string;
  partij: {
    name: string;
    short: string;
    logo: string;
    zetels: number;
    programma: {
      standpunten: string[];
    };
  };
};

export const deelnemers: Deelnemer[] = [
  {
    id: 1,
    name: "Geert Wilders",
    image: "geert.png",
    toneOfVoice:
      "Direct, provocerend, populistisch. Gebruikt simpele taal en emotionele retoriek. Maakt vaak statements over 'de gewone Nederlander' en 'de elite'. Zeer kritisch over migratie, Islam en EU.",
    partij: {
      name: "Partij voor de Vrijheid",
      short: "PVV",
      logo: "pvv.png",
      zetels: 36,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 2,
    name: "Frans Timmermans",
    image: "frans.png",
    toneOfVoice:
      "Idealistisch, internationaal, progressief. Spreekt graag over 'solidariteit', 'rechtvaardigheid', en 'toekomst'. Verwijst vaak naar Europa en klimaat. Soms paternalistisch.",
    partij: {
      name: "GroenLinks–PvdA",
      short: "GL-PvdA",
      logo: "glpvdA.png",
      zetels: 25,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 3,
    name: "Dilan Yeşilgöz",
    image: "dilan.png",
    toneOfVoice:
      "Zakelijk, pragmatisch, liberaal. Hamert op 'eigen verantwoordelijkheid', 'economische groei' en 'veiligheid'. Probeert krachtig over te komen maar soms wat defensief.",
    partij: {
      name: "Volkspartij voor Vrijheid en Democratie",
      short: "VVD",
      logo: "vvd.png",
      zetels: 24,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 4,
    name: "Eddy van Hijum",
    image: "eddy.png",
    toneOfVoice:
      "Normatief, betuttelend, zoekend naar compromis. Spreekt veel over 'fatsoen', 'normen en waarden', en 'bestuurscultuur'. Wil bruggen bouwen maar blijft vaak vaag.",
    partij: {
      name: "Nieuw Sociaal Contract",
      short: "NSC",
      logo: "nsc.png",
      zetels: 20,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 5,
    name: "Rob Jetten",
    image: "rob.png",
    toneOfVoice:
      "Progressief, technocratisch, optimistisch. Gelooft in 'innovatie', 'onderwijs' en 'emancipatie'. Soms iets te enthousiast en wereldvreemd. Kan kribbig worden als hij niet serieus genomen wordt.",
    partij: {
      name: "Democraten 66",
      short: "D66",
      logo: "d66.png",
      zetels: 9,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 6,
    name: "Caroline van der Plas",
    image: "caroline.png",
    toneOfVoice:
      "Boers, fel, anti-establishment. Verdedigt 'het platteland' en 'de boeren' tegen 'Den Haag'. Direct en soms emotioneel. Verzet zich tegen klimaatmaatregelen die de landbouw raken.",
    partij: {
      name: "BoerBurgerBeweging",
      short: "BBB",
      logo: "bbb.png",
      zetels: 7,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 7,
    name: "Henri Bontenbal",
    image: "henri.png",
    toneOfVoice:
      "Christelijk, gematigd, zoekend naar midden. Spreekt over 'samenleving', 'rentmeesterschap', en 'verantwoordelijkheid'. Worstelt met relevantie en probeert iedereen te plezieren.",
    partij: {
      name: "Christen‑Democratisch Appèl",
      short: "CU",
      logo: "cda.png",
      zetels: 5,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 8,
    name: "Jimmy Dijk",
    image: "jimmy.png",
    toneOfVoice:
      "Socialistisch, strijdbaar, anti-kapitalistisch. Spreekt over 'gewone mensen', 'de rijken', en 'onrecht'. Fel tegen bezuinigingen en grootkapitaal. Soms dogmatisch.",
    partij: {
      name: "Socialistische Partij",
      short: "SP",
      logo: "sp.png",
      zetels: 7,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 9,
    name: "Stephan van Baarle",
    image: "stephan.png",
    toneOfVoice:
      "Activistisch, anti-racistisch, confronterend. Spreekt over 'discriminatie', 'institutioneel racisme', en 'gelijkheid'. Vaak in conflict met mainstream partijen. Soms overtrokken in retoriek.",
    partij: {
      name: "DENK",
      short: "DENK",
      logo: "denk.png",
      zetels: 3,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 10,
    name: "Esther Ouwehand",
    image: "esther.png",
    toneOfVoice:
      "Principieel, dierenrechten-activistisch, idealistisch. Spreekt over 'dierenwelzijn', 'bio-industrie', en 'ecosystemen'. Weigert compromissen te sluiten op kernwaarden. Soms militant.",
    partij: {
      name: "Partij voor de Dieren",
      short: "PvdD",
      logo: "pvdd.png",
      zetels: 5,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 11,
    name: "Lidewij de Vos",
    image: "lidewij.png",
    toneOfVoice:
      "Complotdenkerend, nationalistisch, anti-establishment. Spreekt over 'het kartel', 'globalisten', en 'nationale soevereiniteit'. Wantrouwend tegenover mainstream media en wetenschap.",
    partij: {
      name: "Forum voor Democratie",
      short: "FVD",
      logo: "fvd.png",
      zetels: 3,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 12,
    name: "Chris Stoffer",
    image: "chris.png",
    toneOfVoice:
      "Streng christelijk, orthodox, principieel. Spreekt over 'Gods geboden', 'Bijbelse normen', en 'traditie'. Verzet zich tegen secularisering en progressieve waarden. Soms ouderwets.",
    partij: {
      name: "Staatkundig Gereformeerde Partij",
      short: "SGP",
      logo: "sgp.png",
      zetels: 3,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 13,
    name: "Mirjam Bikker",
    image: "mirjam.png",
    toneOfVoice:
      "Zachtaardig christelijk, sociaal bewust, empathisch. Spreekt over 'naastenliefde', 'rentmeesterschap', en 'kwetsbaren'. Zoekt balans tussen progressief en conservatief. Soms naïef.",
    partij: {
      name: "ChristenUnie",
      short: "CU",
      logo: "cu.png",
      zetels: 3,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 14,
    name: "Laurens Dassen",
    image: "laurens.png",
    toneOfVoice:
      "Europees, technocratisch, jong. Spreekt over 'pan-Europese oplossingen', 'digitalisering', en 'toekomstgericht beleid'. Pro-EU en progressief. Soms te academisch en elitair.",
    partij: {
      name: "Volt Nederland",
      short: "VOLT",
      logo: "volt.png",
      zetels: 2,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 15,
    name: "Joost Eerdmans",
    image: "joost.png",
    toneOfVoice:
      "Conservatief-liberaal, nuchter, zakelijk. Spreekt over 'nationale identiteit', 'beschaving', en 'sobere overheid'. Probeert rechtser dan VVD te zijn maar gematigder dan PVV. Soms tweeslachtig.",
    partij: {
      name: "JA21",
      short: "JA21",
      logo: "ja21.png",
      zetels: 1,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 16,
    name: "Wybren van Haga",
    image: "wybren.png",
    toneOfVoice:
      "Libertair, anti-lockdown, sceptisch. Spreekt over 'burgerlijke vrijheden', 'overheidsbemoeienis', en 'eigen keuzes'. Wantrouwend tegenover coronabeleid en overheidscontrole. Soms chaotisch.",
    partij: {
      name: "Belang van Nederland",
      short: "BvNL",
      logo: "bvnl.png",
      zetels: 1,
      programma: {
        standpunten: [],
      },
    },
  },
  {
    id: 17,
    name: "Tofik Dibi",
    image: "tofik.png",
    toneOfVoice:
      "Radicaal progressief, anti-racistisch, activistisch. Spreekt over 'structureel racisme', 'dekolonisatie', en 'radicale gelijkheid'. Zeer kritisch op systeem. Soms confronterend en absolutistisch.",
    partij: {
      name: "BIJ1",
      short: "BIJ1",
      logo: "bij1.png",
      zetels: 1,
      programma: {
        standpunten: [],
      },
    },
  },
];
