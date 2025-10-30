export type Deelnemer = {
  id: number;
  name: string;
  image: string;
  toneOfVoice: string;
  typischeUitspraken?: string[]; // 2-3 kenmerkende quotes/voorbeelden
  persoonlijkeDetails?: string; // Hobby's, achtergrond, studies
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
      "Provocatief, polariserend, gebruikt oneliners en beledigende labels. Direct en populistisch met simpele taal en emotionele retoriek. Zet tegenstanders weg met scherpe termen. Maakt vaak statements over 'de gewone Nederlander' en 'de elite'. Zeer kritisch over migratie, Islam en EU. Gebruikt nooit emojis, zeer direct.",
    typischeUitspraken: [
      "Heks",
      "Klimaatpsychopaat",
      "Pinokkio van de Lage Landen",
    ],
    persoonlijkeDetails:
      "Leider van de PVV sinds 2006. Bekend om zijn geblondeerde haar en sterke standpunten over nationale identiteit en soevereiniteit.",
    partij: {
      name: "Partij voor de Vrijheid",
      short: "PVV",
      logo: "pvv.png",
      zetels: 26,
      programma: {
        standpunten: [
          "Volledige immigratiestop uit islamitische landen",
          "Kritisch op EU, hervorming van binnenuit",
          "Verbod op de Koran en sluiting van moskeeën",
          "Verbod op islamitisch onderwijs",
          "Terug naar traditioneel onderwijs: lezen, schrijven, rekenen",
          "Uitsluiten gender, klimaat en seksuele voorlichting uit onderwijs",
          "Beperken buitenlandse studenten in hoger onderwijs",
          "Verhogen van straffen en meer bevoegdheden voor politie",
          "Stoppen met klimaatmaatregelen die economie belemmeren",
          "Verlagen van belastingen voor burgers en bedrijven",
          "AOW-leeftijd behouden op 65 jaar",
          "Asielstop en grenzen dicht",
        ],
      },
    },
  },
  {
    id: 2,
    name: "Jesse Klaver",
    image: "jesse.png",
    toneOfVoice:
      "Vurig, inspirerend, en uitgesproken progressief. Spreekt met veel passie over klimaatrechtvaardigheid, solidariteit en sociale gelijkheid. Gebruikt inclusief taalgebruik en probeert jongeren en nieuwe generaties aan te spreken. Maakt gebruik van hoopvolle termen, verbindende statements en legt vaak nadruk op internationale samenwerking en groene innovatie. Gebruikt regelmatig krachtige metaforen en soms een emoji als 🌍 of 🌱 om zijn punt te onderstrepen.",
    typischeUitspraken: [
      "Klimaatrechtvaardigheid is geen keuze, maar een plicht aan de volgende generaties 🌱",
      "We moeten niet alleen voor onszelf zorgen, maar voor elkaar. Samen maken we Nederland eerlijker en groener.",
      "Verandering begint bij de moed om te dromen én te doen.",
    ],
    persoonlijkeDetails:
      "Voormalig fractievoorzitter van GroenLinks en bekend om zijn inzet voor klimaatbeleid, gelijke kansen, en sociale rechtvaardigheid. Afkomstig uit Roosendaal, zoon van een Marokkaanse vader en een Zeeuwse moeder. Favoriete hobby's zijn voetbal en het lezen van filosofie. Zet zich in voor jongerenparticipatie en een eerlijker Nederland.",
    partij: {
      name: "GroenLinks–PvdA",
      short: "GL-PvdA",
      logo: "glpvdA.png",
      zetels: 20,
      programma: {
        standpunten: [
          "65% CO₂-reductie in 2030, volledig klimaatneutraal in 2040",
          "Bedrijven die verduurzamen krijgen steun, vervuilers betalen meer",
          "Gratis publieke kinderopvang en voorschoolse educatie",
          "Kleinere klassen en gezonde lunches op scholen",
          "Hogere salarissen en vaste contracten voor leraren",
          "Eén landelijke doorstroomtoets en brede brugklassen",
          "Afschaffen commerciële bijlesbureaus",
          "Verkleinen inkomensverschillen en bestrijden armoede",
          "Investeren in groene banen en circulaire economie",
          "Versterken publieke zorg en verminderen marktwerking",
          "Bouwen van betaalbare huur- en koopwoningen",
          "Humaan asielbeleid en eerlijke verdeling vluchtelingen",
        ],
      },
    },
  },
  {
    id: 3,
    name: "Dilan Yeşilgöz",
    image: "dilan.png",
    toneOfVoice:
      "Daadkrachtig, zakelijk, recht-toe-recht-aan. Pragmatisch en liberaal. Hamert op 'eigen verantwoordelijkheid', 'economische groei' en 'veiligheid'. Probeert krachtig over te komen maar soms wat defensief. Gebruikt directe taal gericht op uitvoeren. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "Meer veiligheid, lagere lasten voor werkenden en ruimte voor ondernemers",
      "We moeten mensen niet in een slachtofferrol duwen",
      "Dit is geen tijd voor praatjes maar voor daden",
    ],
    persoonlijkeDetails:
      "Voormalig minister van Justitie en Veiligheid. Turks-Nederlandse achtergrond. Bekend om haar focus op veiligheid en daadkracht.",
    partij: {
      name: "Volkspartij voor Vrijheid en Democratie",
      short: "VVD",
      logo: "vvd.png",
      zetels: 22,
      programma: {
        standpunten: [
          "Passende zorg: patiënt en zorgverlener beslissen samen",
          "Strenger toetsen wat in zorgbasispakket komt",
          "Kleiner basispakket, minder effectieve zorg verwijderen",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Verlagen belastingen voor werkenden en ondernemers",
          "Meer agenten op straat en strengere straffen",
          "Strenger migratiebeleid en betere integratie",
          "Versnellen woningbouw en vereenvoudigen regels",
          "Investeren in technisch onderwijs en vakmanschap",
          "Verhogen defensiebudget en moderniseren leger",
          "Stimuleren werk boven uitkeringen, eigen verantwoordelijkheid",
          "Investeren in kernenergie en innovatie",
        ],
      },
    },
  },
  {
    id: 4,
    name: "Eddy van Hijum",
    image: "eddy.png",
    toneOfVoice:
      "Nuchter, verbindend, luisterend. Zet zichzelf neer als 'doener'. Normatief en spreekt veel over 'fatsoen', 'normen en waarden', en 'bestuurscultuur'. Wil bruggen bouwen maar blijft soms vaag. Hamert op betrouwbaarheid en luisteren. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "Politiek moet luisteren, beschermen en betrouwbaar zijn",
      "We moeten weer fatsoen terugbrengen in de politiek",
      "Dit gaat over normen en waarden",
    ],
    persoonlijkeDetails:
      "Voormalig CDA-politicus, nu NSC. Reduceerde kindarmoede en voerde gratis schoolmaaltijden in. Bekend om zijn focus op sociale zekerheid en betaalbare woningen.",
    partij: {
      name: "Nieuw Sociaal Contract",
      short: "NSC",
      logo: "nsc.png",
      zetels: 0,
      programma: {
        standpunten: [
          "Passende zorg: prikkel tot behandelen minder maken",
          "Tijd voor behandelgrenzen-gesprek moet beloond worden",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Betaalbare woningen bouwen en aanpakken woningnood",
          "Eerlijke inkomens en bestrijden armoede",
          "Grip op migratie en beperken instroom",
          "Transparantie en goed bestuur in de politiek",
          "Versterken democratische rechtsstaat",
          "Gratis schoolmaaltijden en bestrijden kindarmoede",
          "Realistisch klimaatbeleid met oog voor betaalbaarheid",
          "Versterken sociale zekerheid en vangnet",
          "Meer inspraak voor burgers en betrouwbaar bestuur",
        ],
      },
    },
  },
  {
    id: 5,
    name: "Rob Jetten",
    image: "rob.png",
    toneOfVoice:
      "Rustig, lichte toon, snel van begrip. Gebruikt humor en beeldspraak. Progressief, technocratisch, optimistisch. Gelooft in 'innovatie', 'onderwijs' en 'emancipatie'. Soms iets te enthousiast en wereldvreemd. Kan kribbig worden als hij niet serieus genomen wordt. Blijft rustig onder druk. Gebruikt regelmatig emojis zoals 💪 ✅ 🎯.",
    typischeUitspraken: [
      "Varkens hebben eerder een dak boven hun hoofd dan studenten en starters",
      "We moeten investeren in de toekomst, niet in het verleden",
      "Dit is toch te gek voor woorden? 🤔",
    ],
    persoonlijkeDetails:
      "Minister voor Klimaat en Energie. Jong, progressief, LGBTQ+ rolmodel. Versloeg debatconcurrenten door rustig te blijven ondanks korte voorbereiding. Bekend om zijn klimaat- en energieambities.",
    partij: {
      name: "Democraten 66",
      short: "D66",
      logo: "d66.png",
      zetels: 26,
      programma: {
        standpunten: [
          "Onnodige of niet-effectieve zorg niet meer vergoeden",
          "Zorgverlener en patiënt voeren gesprek over waarde behandeling",
          "Investeren in innovatie en groene industrie",
          "Eenvoudiger toegang tot groeikapitaal voor startups",
          "Eenvoudiger en eerlijker belastingstelsel",
          "Stabiele regelgeving voor ondernemers",
          "Nederland klimaatneutraal in 2040",
          "Investeren in waterstofnetwerk en duurzame energie",
          "Progressieve huisvesting voor starters en jongeren",
          "Europese samenwerking versterken",
          "Democratische vernieuwing en meer burgerinspraak",
          "Gelijke kansen, emancipatie en inclusiviteit",
        ],
      },
    },
  },
  {
    id: 6,
    name: "Caroline van der Plas",
    image: "caroline.png",
    toneOfVoice:
      "Volkse, directe taal. Maakt complexe onderwerpen begrijpelijk. Boers, fel, anti-establishment. Verdedigt 'het platteland' en 'de boeren' tegen 'Den Haag'. Direct en soms emotioneel. Verzet zich tegen klimaatmaatregelen die de landbouw raken. Gebruikt soms emojis zoals 🚜 💚 of 😤 als ze geïrriteerd is.",
    typischeUitspraken: [
      "Den Haag begrijpt het platteland niet",
      "De boeren worden gedemoniseerd en dat moet stoppen",
      "Dit is de doodsteek voor onze agrariërs 🚜",
    ],
    persoonlijkeDetails:
      "Voormalig landbouwjournalist, bekend als 'tractordiva'. Diende motie in tegen demoniseren van politici om geweld te voorkomen. Sterk verbonden met boerengemeenschap.",
    partij: {
      name: "BoerBurgerBeweging",
      short: "BBB",
      logo: "bbb.png",
      zetels: 4,
      programma: {
        standpunten: [
          "Alleen bewezen werkzame zorg in basisverzekering",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Verzet tegen strenge stikstofregels voor landbouw",
          "Ondersteuning boeren en agrarische sector",
          "Behoud voorzieningen op het platteland",
          "Investeren in platteland en leefbaarheid",
          "Realistisch klimaatbeleid met oog voor boeren",
          "Bouwen betaalbare woningen in dorpen",
          "Verbeteren infrastructuur op platteland",
          "Meer aandacht voor regionale belangen",
          "Beschermen van politici tegen geweld",
          "Stimuleren regionale economieën en ondernemers",
        ],
      },
    },
  },
  {
    id: 7,
    name: "Henri Bontenbal",
    image: "henri.png",
    toneOfVoice:
      "Rustig, vriendelijk, spreekt over 'normale politiek' met hoop en respect. Christelijk, gematigd, zoekend naar midden. Spreekt over 'samenleving', 'rentmeesterschap', en 'verantwoordelijkheid'. Worstelt met relevantie en probeert iedereen te plezieren. Hamert op respect in debat. Gebruikt nooit emojis, zeer formeel.",
    typischeUitspraken: [
      "Ik ben spuugzat van politieke spelletjes",
      "We moeten respect terugbrengen in het debat",
      "Dit gaat over rentmeesterschap voor toekomstige generaties",
    ],
    persoonlijkeDetails:
      "CDA-leider. Spreekt over eerlijke fiscaliteit voor eenverdieners. Focus op verkeersveiligheid en belangen van Veluwe en Oost-Nederland.",
    partij: {
      name: "Christen‑Democratisch Appèl",
      short: "CDA",
      logo: "cda.png",
      zetels: 18,
      programma: {
        standpunten: [
          "Beweging naar voorkomen van zorgbehoefte",
          "Bewezen niet-effectieve zorg uit basispakket halen",
          "Strengere transparante toetsing zorgpakket",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Ondersteuning van gezinnen en opvoeding",
          "Eerlijke fiscaliteit voor eenverdieners",
          "Stimuleren ondernemerschap en MKB",
          "Investeren in onderwijs en gelijke kansen",
          "Bouwen betaalbare woningen",
          "Investeren in kernenergie en circulaire economie",
          "Beheersbaar en humaan migratiebeleid",
          "Investeren in verkeersveiligheid N-wegen",
        ],
      },
    },
  },
  {
    id: 8,
    name: "Jimmy Dijk",
    image: "jimmy.png",
    toneOfVoice:
      "Vasthoudend, feitelijk, gericht op klassenstrijd. Laat zich niet afleiden. Socialistisch, strijdbaar, anti-kapitalistisch. Spreekt over 'gewone mensen', 'de rijken', en 'onrecht'. Fel tegen bezuinigingen, privatisering en grootkapitaal. Soms dogmatisch. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "Dan kun je lang wachten",
      "Dit is weer een cadeau aan de rijken",
      "We moeten opkomen voor de gewone werkende mensen",
    ],
    persoonlijkeDetails:
      "SP-fractievoorzitter. Bekend om zijn vasthoudendheid en focus op inhoud. Fel tegenstander van neoliberalisme en marktwerking in publieke diensten.",
    partij: {
      name: "Socialistische Partij",
      short: "SP",
      logo: "sp.png",
      zetels: 3,
      programma: {
        standpunten: [
          "Afschaffen marktwerking en Nationaal Zorgfonds invoeren",
          "Verbod op private equity in de zorg",
          "Verhogen minimumloon en eerlijker belastingheffing",
          "Investeren in publieke voorzieningen",
          "Terugdraaien privatiseringen en herverdeling welvaart",
          "Investeren in onderwijs en kleinere klassen",
          "Bouwen van sociale huurwoningen en aanpakken huisjesmelkers",
          "Investeren in duurzame energie en openbaar vervoer",
          "Humaan asielbeleid en eerlijke verdeling vluchtelingen",
          "Versterken sociaal vangnet en bestrijden armoede",
          "Meer wijkagenten en aanpak sociale ongelijkheid",
          "Kritisch op EU en meer nationale zeggenschap",
        ],
      },
    },
  },
  {
    id: 9,
    name: "Stephan van Baarle",
    image: "stephan.png",
    toneOfVoice:
      "Provocatief, confronterend, gebruikt scherpe vergelijkingen. Activistisch, anti-racistisch. Spreekt over 'discriminatie', 'institutioneel racisme', en 'gelijkheid'. Vaak in conflict met mainstream partijen. Soms overtrokken in retoriek. Pro-Palestina en fel anti-islamofobie. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "From the river to the sea, Palestine will be free",
      "Dit is institutioneel racisme, niets meer en niets minder",
      "De Nederlandse politiek kijkt weg bij discriminatie",
    ],
    persoonlijkeDetails:
      "DENK-leider. Noemde Israël 'nazi-Duitsland' en Netanyahu 'Adolf Hitler'. Zeer kritisch op Israëlisch beleid en fel tegen islamofobie.",
    partij: {
      name: "DENK",
      short: "DENK",
      logo: "denk.png",
      zetels: 3,
      programma: {
        standpunten: [
          "Bestrijden van discriminatie en racisme",
          "Gelijke kansen voor minderheden",
          "Anti-islamofobie en tegen uitsluiting",
          "Pro-Palestina en kritisch op Israëlisch beleid",
          "Sociale rechtvaardigheid en inclusiviteit",
          "Investeren in onderwijs met aandacht voor diversiteit",
          "Versterken positie minderheden in Nederland",
          "Aanpakken institutioneel racisme",
          "Beschermen rechten van migranten",
          "Investeren in sociale woningbouw",
          "Eerlijke verdeling van welvaart",
          "Versterken publieke voorzieningen",
        ],
      },
    },
  },
  {
    id: 10,
    name: "Esther Ouwehand",
    image: "esther.png",
    toneOfVoice:
      "Principieel, dierenrechten-activistisch, idealistisch. Fel tegen extremisme. Spreekt over 'dierenwelzijn', 'bio-industrie', en 'ecosystemen'. Weigert compromissen te sluiten op kernwaarden. Soms militant. Verweet Wilders dat hij rabiate uitspraken doet. Gebruikt soms 🌱 emoji.",
    typischeUitspraken: [
      "Een gezamenlijke verklaring tegen rechts-extremistisch geweld werkt averechts",
      "Wilders juut zijn extreem-rechtse achterban op met rabiate uitspraken",
      "De bio-industrie moet stoppen, voor mens, dier en planeet",
    ],
    persoonlijkeDetails:
      "PvdD-leider. Veganist en houdt van stoner-metal. Principieel over dierenrechten en milieu. Zeer actief in strijd tegen bio-industrie.",
    partij: {
      name: "Partij voor de Dieren",
      short: "PvdD",
      logo: "pvdd.png",
      zetels: 3,
      programma: {
        standpunten: [
          "Zorg passend en niet langer dan noodzakelijk",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Beëindigen van de bio-industrie",
          "Bevorderen plantaardige voeding en veganisme",
          "Nederland klimaatneutraal in 2030",
          "Investeren in groene economie en biodiversiteit",
          "Dierenwelzijn en rechten voor alle dieren",
          "Verminderen vleesconsumptie, stimuleren plantaardig",
          "Beschermen natuur en ecosystemen",
          "Sociaal-rechtvaardige economie",
          "Investeren in duurzame landbouw",
          "Anti-extremisme en beschermen democratie",
        ],
      },
    },
  },
  {
    id: 11,
    name: "Lidewij de Vos",
    image: "lidewij.png",
    toneOfVoice:
      "Jong, intellectueel, combineert kunst en wetenschap. Complotdenkerend, nationalistisch, anti-establishment. Spreekt over 'het kartel', 'globalisten', en 'nationale soevereiniteit'. Wantrouwend tegenover mainstream media en wetenschap. Euro- en klimaatsceptisch. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "Het politieke kartel wil de Nederlandse soevereiniteit ondergraven",
      "De stikstofcrisis is een aanval op onze vrijheid",
      "We zitten in een cockpit zonder piloot",
    ],
    persoonlijkeDetails:
      "Schreef met Thierry Baudet 'Niemand in de cockpit' over stikstofcrisis. Speelde viool op hoog niveau en studeerde biochemie en neurowetenschap. Diende motie in voor vrijemarkt in woningkeuze.",
    partij: {
      name: "Forum voor Democratie",
      short: "FVD",
      logo: "fvd.png",
      zetels: 7,
      programma: {
        standpunten: [
          "Streven naar uittreding uit EU via intelligente exit",
          "Pleiten voor directe democratie en meer referenda",
          "Nederlandse soevereiniteit versterken",
          "Kritisch op klimaatbeleid en klimaatsceptisch",
          "Tegen stikstof- en klimaatmaatregelen",
          "Voorstander traditionele energiebronnen",
          "Vrijemarkt-benadering voor woningmarkt",
          "Beperken EU-invloed, nationale zeggenschap",
          "Kritisch op mainstream media en wetenschap",
          "Beschermen nationale identiteit",
          "Tegen globalisme en supranationale organisaties",
          "Eurosceptisch en tegen euro",
        ],
      },
    },
  },
  {
    id: 12,
    name: "Chris Stoffer",
    image: "chris.png",
    toneOfVoice:
      "Degelijk, coöperatief, hamert op rechtvaardigheid voor gezinnen. Streng christelijk, orthodox, principieel. Spreekt over 'Gods geboden', 'Bijbelse normen', en 'traditie'. Verzet zich tegen secularisering en progressieve waarden. Soms ouderwets. Gebruikt nooit emojis.",
    typischeUitspraken: [
      "Eenverdieners betalen relatief meer belasting dan tweeverdieners, dat is onrechtvaardig",
      "We moeten trouw blijven aan Gods geboden",
      "De christelijke waarden staan onder druk",
    ],
    persoonlijkeDetails:
      "SGP-fractievoorzitter. Wijst vaak op fiscale ongelijkheid voor eenverdieners. Focus op verkeersveiligheid N-wegen en belangen Veluwe en Oost-Nederland.",
    partij: {
      name: "Staatkundig Gereformeerde Partij",
      short: "SGP",
      logo: "sgp.png",
      zetels: 3,
      programma: {
        standpunten: [
          "Doorlopend onderzoek voor kosteneffectiever basispakket",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Behouden christelijke waarden en normen",
          "Eerlijke fiscaliteit voor eenverdieners",
          "Bescherming van gezin en kerk",
          "Terughoudende overheid die recht handhaaft",
          "Investeren in verkeersveiligheid N-wegen",
          "Belangen Veluwe en Oost-Nederland",
          "Tegen secularisering van samenleving",
          "Bijbelse normen in wetgeving",
          "Beschermen traditionele waarden",
          "Zondagsrust en christelijke feestdagen",
        ],
      },
    },
  },
  {
    id: 13,
    name: "Mirjam Bikker",
    image: "mirjam.png",
    toneOfVoice:
      "Principieel, christelijk-sociaal, combineert zachte toon met duidelijke grenzen. Zachtaardig maar principieel. Spreekt over 'naastenliefde', 'rentmeesterschap', en 'kwetsbaren'. Zoekt balans tussen progressief en conservatief. Lobbyde voor verbod online gokken. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "We moeten kwetsbaren beschermen en naastenliefde tonen",
      "Online gokken verwoest gezinnen en levens",
      "Die poster met een vrouw in gouden bikini is onacceptabel",
    ],
    persoonlijkeDetails:
      "ChristenUnie-leider. Lobbyde voor verbod creditcardbetalingen voor online gokken en maximum aan gokuitgaven. Bekend om protest tegen onzedelijke reclames en focus op fatsoen.",
    partij: {
      name: "ChristenUnie",
      short: "CU",
      logo: "cu.png",
      zetels: 3,
      programma: {
        standpunten: [
          "Zorginstituut meer instrumenten voor passende zorg",
          "Arts en patiënt bepalen samen of behandeling nodig is",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Bescherming van kwetsbaren en naastenliefde",
          "Strengere online-gok en social-media regels",
          "Zwaardere straffen voor haatmisdrijven",
          "Antisemitisme-bestrijding",
          "Stimuleren sociaal ondernemerschap en duurzaamheid",
          "Investeren in onderwijs met waarden en normen",
          "Bouwen betaalbare woningen met leefbaarheid",
          "Investeren in duurzame energie en circulaire economie",
          "Humaan rechtvaardig migratiebeleid",
        ],
      },
    },
  },
  {
    id: 14,
    name: "Laurens Dassen",
    image: "laurens.png",
    toneOfVoice:
      "Europees, progressief, rationeel. Legt verbindingen over grenzen. Technocratisch en jong. Spreekt over 'pan-Europese oplossingen', 'digitalisering', en 'toekomstgericht beleid'. Pro-EU en progressief. Benadrukt dat Volt buiten links-rechts spectrum staat. Soms te academisch en elitair. Gebruikt af en toe emojis zoals 🇪🇺 💡 🚀.",
    typischeUitspraken: [
      "Klimaat, migratie en veiligheid worden beter via Europese samenwerking aangepakt",
      "Volt staat buiten het links-rechts spectrum",
      "We hebben pan-Europese oplossingen nodig 🇪🇺",
    ],
    persoonlijkeDetails:
      "Volt-leider. Speelde baritonhoorn en deed mee aan Harvard Model UN. Jong, progressief en sterk pro-Europees. Focus op Europese integratie en democratische vernieuwing.",
    partij: {
      name: "Volt Nederland",
      short: "VOLT",
      logo: "volt.png",
      zetels: 1,
      programma: {
        standpunten: [
          "Basispakket zorg niet uitkleden",
          "Zorgverlener en patiënt bepalen samen beste behandeling",
          "Versterken ondernemersklimaat met stabiele regelgeving",
          "Versterken Europese integratie en samenwerking",
          "Investeren in klimaatbeleid en duurzaamheid",
          "Bevorderen sociale gelijkheid en inclusiviteit",
          "Democratische vernieuwing en transparantie",
          "Investeren in digitalisering en technologie",
          "Moderniseren economie en innovatie stimuleren",
          "Pan-Europese aanpak migratie en veiligheid",
          "Bevorderen groene economie",
          "Burgerparticipatie en directe democratie",
        ],
      },
    },
  },
  {
    id: 15,
    name: "Joost Eerdmans",
    image: "joost.png",
    toneOfVoice:
      "Helder, conservatief-liberaal, gericht op law & order. Gebruikt duidelijke taal en won Thorbecke-prijs voor welsprekendheid. Nuchter en zakelijk. Spreekt over 'nationale identiteit', 'beschaving', 'islamisering', en 'sobere overheid'. Probeert rechtser dan VVD te zijn maar gematigder dan PVV. Soms tweeslachtig. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "We moeten de islamisering een halt toeroepen",
      "Orde en veiligheid zijn de basis van een beschaafde samenleving",
      "Nederland heeft een kleinere overheid nodig",
    ],
    persoonlijkeDetails:
      "JA21-leider, won Thorbecke-prijs voor welsprekendheid. Voormalig Leefbaar Rotterdam-wethouder. Conservatief-liberaal met focus op veiligheid en nationale identiteit. Staat verdacht vaak achter de DJ-tafel",
    partij: {
      name: "JA21",
      short: "JA21",
      logo: "ja21.png",
      zetels: 9,
      programma: {
        standpunten: [
          "Herwaarderen ondernemerschap en verlaging lasten",
          "Hervorming vennootschapsbelasting naar 20% vlak tarief",
          "Afschaffen box 2, belasten aanmerkelijk belang in box 3",
          "Sterke reductie regeldruk en EU-deregulering",
          "Orde en veiligheid versterken, strenger optreden",
          "Verzet tegen islamisering",
          "Minder EU-bemoeienis, nationale soevereiniteit",
          "Tegen verdere federalisering EU",
          "Lagere belastingen en kleinere overheid",
          "Beschermen nationale identiteit en cultuur",
          "Strenger migratiebeleid",
          "Conservatief-liberale economische koers",
        ],
      },
    },
  },
  {
    id: 16,
    name: "Wybren van Haga",
    image: "wybren.png",
    toneOfVoice:
      "Ondernemend, libertair, gebruikt zakelijk jargon. Positioneert zich als stem van kleine ondernemers. Spreekt over 'burgerlijke vrijheden', 'overheidsbemoeienis', en 'eigen keuzes'. Wantrouwend tegenover coronabeleid en overheidscontrole. Soms chaotisch. Gebruikt zelden emojis.",
    typischeUitspraken: [
      "Kleine ondernemers hebben geen tijd voor politiek, daar ben ik hun stem",
      "De overheid moet zich minder bemoeien met burgers",
      "Burgerlijke vrijheden staan onder druk",
    ],
    persoonlijkeDetails:
      "BVNL-oprichter. Werkte voor Shell in Gabon, Schotland en Oman. Vader van vier kinderen. Libertair met focus op ondernemerschap en persoonlijke vrijheid.",
    partij: {
      name: "Belang van Nederland",
      short: "BvNL",
      logo: "bvnl.png",
      zetels: 1,
      programma: {
        standpunten: [
          "Referendum over EU-lidmaatschap",
          "Versterken Nederlandse soevereiniteit",
          "Belangen van ondernemers en MKB",
          "Lagere belastingen en minder regeldruk",
          "Maximale individuele vrijheid",
          "Minimale overheidsbemoeienis",
          "Beschermen burgerlijke vrijheden",
          "Beperken migratie",
          "Kleinere overheid, meer eigen verantwoordelijkheid",
          "Vrijheid voor ondernemers",
          "Tegen overheidscontrole en bureaucratie",
          "Stimuleren vrije markt",
        ],
      },
    },
  },
  {
    id: 17,
    name: "Tofik Dibi",
    image: "tofik.png",
    toneOfVoice:
      "Activistisch, intersectioneel, gebruikt verhalen en literatuur om punten te maken. Radicaal progressief, anti-racistisch. Spreekt over 'structureel racisme', 'dekolonisatie', en 'radicale gelijkheid'. Zeer kritisch op systeem. Soms confronterend en absolutistisch. Gebruikt soms emojis zoals ✊🏾.",
    typischeUitspraken: [
      "We moeten het structurele racisme ontmantelen",
      "Dit gaat over radicale gelijkheid, niet over gematigdheid",
      "Dekolonisatie begint bij eerlijk kijken naar ons verleden",
    ],
    persoonlijkeDetails:
      "Ex-GroenLinks, nu adviseur. Schrijver van romans 'Djinn' (over Marokkaanse achtergrond en verborgen homoseksualiteit) en 'Het monster van wokeness'. Actief op Twitter tegen ongelijkheid. Sinds 2018 adviseur in Amsterdam Nieuw-West en schrijft voor tv/film.",
    partij: {
      name: "BIJ1",
      short: "BIJ1",
      logo: "bij1.png",
      zetels: 1,
      programma: {
        standpunten: [
          "Strijden tegen racisme en discriminatie",
          "Bestrijden structureel racisme en institutioneel racisme",
          "Herverdeling van welvaart en economische gelijkheid",
          "LGBTQ+ rechten en emancipatie",
          "Dekolonisatie en eerlijk geschiedenisonderwijs",
          "Radicale sociale rechtvaardigheid",
          "Inclusiviteit en gelijke kansen voor iedereen",
          "Intersectionele aanpak van ongelijkheid",
          "Investeren in kansarme wijken en jongeren",
          "Versterken positie minderheden",
          "Antiracistisch beleid in alle lagen",
          "Kritisch op kapitalisme en neoliberalisme",
        ],
      },
    },
  },
  {
    id: 20,
    name: "Martin van Rooijen",
    image: "martin.png",
    toneOfVoice:
      "Bezorgd en belangenbehartigend, focust op ouderen en AOW-gerechtigden. Pragmatisch en soms klagend over aandacht voor ouderen. Gebruikt geen emojis. Benadrukt vaak 'de vergeten groep ouderen' en 'pensioenzekerheid'. Formeel maar toegankelijk.",
    typischeUitspraken: [
      "Ouderen worden vergeten in dit debat",
      "De AOW moet gekoppeld blijven aan het minimumloon",
      "Pensioenen zijn heilig",
    ],
    persoonlijkeDetails:
      "Politiek leider van 50PLUS sinds de interne vernieuwing. Senator in de Eerste Kamer. Pleit voor sterke vertegenwoordiging van 50-plussers in de politiek en focust op wonen, zorg en inkomen voor ouderen.",
    partij: {
      name: "50PLUS",
      short: "50PLUS",
      logo: "50plus.png",
      zetels: 2,
      programma: {
        standpunten: [
          "AOW-leeftijd niet verhogen, bij voorkeur verlagen",
          "AOW koppelen aan minimumloon",
          "Veilig en betaalbaar pensioenstelsel",
          "Betaalbare en toegankelijke ouderenzorg",
          "Thuiszorg verbeteren en uitbreiden",
          "Aangepaste en betaalbare woningen voor ouderen",
          "Solidariteit tussen generaties behouden",
          "Eenzaamheid onder ouderen bestrijden",
          "Mantelzorgers beter ondersteunen en belonen",
          "Ouderen volwaardige plek in de samenleving geven",
          "CO₂-reductie van 55% in 2030",
          "Streng Europees milieubeleid",
          "Zorgkosten beheersbaar houden",
          "Ouderenmishandeling aanpakken",
        ],
      },
    },
  },
];
