export type Risk = "unsure" | "minimal" | "limited" | "high" | "unacceptable";

export type Option = {
  id: string;
  label: string;
  risk: Risk;
  score: 0 | 1 | 2 | 3 | 4;
};

export type Question = {
  id: string;
  step: number; // 1..4
  title: string;
  hint?: string;
  bullets?: string[];
  options: Option[];
};

export type ResultCopy = {
  title: string;
  body: string[];
  actions: string[];
};


export const riskLabel: Record<Risk, string> = {
  unsure: "Usikker",
  minimal: "Minimal",
  limited: "Begrenset",
  high: "Høy",
  unacceptable: "Uakseptabel",
};

export type ResultsMap = Record<Risk, ResultCopy>;

export const questions: Question[] = [
  {
    id: "q1",
    step: 1,
    title: "Hva brukes KI-løsningen hovedsakelig til?",
    options: [
      {
        id: "q1_a",
        label:
          "Forbedre eller automatisere interne prosesser (for eksempel sortering av e-post, anbefaling av innhold, analyse av data)",
        risk: "minimal",
        score: 1,
      },
      {
        id: "q1_b",
        label:
          "Generere innhold for brukere (tekst, bilder, video eller lignende)",
        risk: "limited",
        score: 2,
      },
      {
        id: "q1_c",
        label:
          "Gi beslutningsstøtte eller automatiserte vurderinger om enkeltpersoner",
        risk: "high",
        score: 3,
      },
      {
        id: "q1_d",
        label:
          "Analysere eller rangere personer (for eksempel scoring, profilering eller prioritering)",
        risk: "high",
        score: 3,
      },
      {
        id: "q1_e",
        label:
          "Overvåking eller identifisering av personer (for eksempel ansiktsgjenkjenning)",
        risk: "high",
        score: 3,
      },
      {
        id: "q1_f",
        label: "Annet / usikker",
        risk: "unsure",
        score: 0,
      },
    ],
  },
  {
    id: "q2",
    step: 2,
    title:
      "Brukes løsningen hovedsakelig innenfor ett eller flere av følgende områder?",
    hint:
      "Dersom flere er relevante, velg det området som er mest sentralt for KI-løsningen.",
    options: [
      { id: "q2_a", label: "Rekruttering og arbeidsliv", risk: "high", score: 3 },
      { id: "q2_b", label: "Utdanning eller opptak", risk: "high", score: 3 },
      {
        id: "q2_c",
        label: "Drift av kritisk infrastruktur",
        risk: "high",
        score: 3,
      },
      {
        id: "q2_d",
        label: "Rettssystemet eller politiarbeid",
        risk: "high",
        score: 3,
      },
      {
        id: "q2_e",
        label:
          "Tilgang til viktige tjenester (for eksempel kreditt, velferd eller forsikring)",
        risk: "high",
        score: 3,
      },
      {
        id: "q2_f",
        label: "Ingen av disse",
        risk: "minimal",
        score: 1,
      },
    ],
  },
  {
    id: "q3",
    step: 3,
    title: "Hvordan påvirker løsningen enkeltpersoner?",
    options: [
      {
        id: "q3_a",
        label:
          "Den har ingen direkte betydning for rettigheter eller tilgang til tjenester",
        risk: "minimal",
        score: 1,
      },
      {
        id: "q3_b",
        label:
          "Den gir anbefalinger eller støtte, men mennesker tar endelig beslutning",
        risk: "limited",
        score: 2,
      },
      {
        id: "q3_c",
        label:
          "Den tar eller påvirker beslutninger som kan få rettslige eller tilsvarende virkninger",
        risk: "high",
        score: 3,
      },
      {
        id: "q3_d",
        label: "Usikker",
        risk: "unsure",
        score: 0,
      },
    ],
  },
  {
    id: "q4",
    step: 4,
    title: "Innebærer løsningen noe av det følgende?",
    bullets: [
      "Sosial poengsetting av personer",
      "Skadelig påvirkning av menneskers atferd eller utnyttelse av sårbarheter",
      "Sanntids overvåking eller identifisering av personer ved bruk av biometriske data (for eksempel ansiktsgjenkjenning i offentlige rom)",
    ],
    options: [
      { id: "q4_a", label: "Ja", risk: "unacceptable", score: 4 },
      { id: "q4_b", label: "Nei", risk: "minimal", score: 1 },
      { id: "q4_c", label: "Usikker", risk: "unsure", score: 0 },
    ],
  },
];


export const results: ResultsMap = {
  unsure: {
    title: "Usikker vurdering",
    body: [
      "Basert på svarene dine kan vi ikke gi en tydelig indikasjon på risikonivå.",
      "Noen KI-systemer kan falle mellom kategorier eller ha særskilte egenskaper som krever nærmere vurdering.",
    ],
    actions: [
      "Gå gjennom bruksområdet mer detaljert",
      "Sett deg inn i relevant veiledning og regelverk",
      "Vurder å innhente faglig eller juridisk rådgivning",
    ],
  },

  minimal: {
    title: "Minimal eller ingen risiko",
    body: [
      "Løsningen ser ut til å falle innenfor kategorien minimal eller ingen risiko.",
      "For slike KI-systemer stilles det normalt ingen spesifikke regulatoriske krav etter KI-forordningen.",
    ],
    actions: [
      "Følg virksomhetens etiske retningslinjer for bruk av KI",
      "Sørg for god informasjonssikkerhet",
      "Dokumenter formål og ansvar for løsningen",
    ],
  },

  limited: {
    title: "KI med begrenset risiko",
    body: [
      "Løsningen kan falle inn under kategorien KI med begrenset risiko.",
      "KI-forordningen stiller i slike tilfeller krav til transparens, slik at brukere forstår at de samhandler med KI.",
    ],
    actions: [
      "Informer brukere om at løsningen er KI-basert",
      "Merk KI-generert innhold der det er relevant",
      "Dokumenter hvordan transparenskravene oppfylles",
    ],
  },

  high: {
    title: "Høyrisiko-KI",
    body: [
      "Løsningen kan falle inn under kategorien høyrisiko-KI.",
      "Høyrisiko-KI er underlagt strenge krav til blant annet risikostyring, dokumentasjon og menneskelig kontroll.",
    ],
    actions: [
      "Gjennomfør en systematisk risikovurdering",
      "Etabler rutiner for internkontroll og tilsyn",
      "Dokumenter hvordan KI-systemet fungerer og brukes",
    ],
  },

  unacceptable: {
    title: "Uakseptabel risiko (forbudt KI)",
    body: [
      "Løsningen kan falle inn under kategorien uakseptabel risiko etter KI-forordningen.",
      "Slike KI-systemer er i utgangspunktet forbudt å bruke.",
    ],
    actions: [
      "Stans videre bruk av løsningen",
      "Kartlegg omfang og mulige konsekvenser",
      "Sett deg grundig inn i regelverket og eventuelle unntak",
    ],
  },
};

