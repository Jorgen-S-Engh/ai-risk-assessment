import type { Question } from "../lib/types";

export const questions: Question[] = [
  {
    id: "q1",
    step: 1,
    title: "What is the AI system primarily used for?",
    options: [
      {
        id: "q1_a",
        label:
          "Improve or automate internal processes (e.g. sorting emails, content recommendations, data analysis)",
        risk: "minimal",
        score: 1,
      },
      {
        id: "q1_b",
        label:
          "Generate content for users (text, images, video, or similar)",
        risk: "limited",
        score: 2,
      },
      {
        id: "q1_c",
        label:
          "Provide decision support or automated assessments about individuals",
        risk: "high",
        score: 3,
      },
      {
        id: "q1_d",
        label:
          "Analyse or rank individuals (e.g. scoring, profiling, prioritisation)",
        risk: "high",
        score: 3,
      },
      {
        id: "q1_e",
        label:
          "Monitor or identify individuals (e.g. facial recognition)",
        risk: "high",
        score: 3,
      },
      {
        id: "q1_f",
        label: "Other / unsure",
        risk: "unsure",
        score: 0,
      },
    ],
  },
  {
    id: "q2",
    step: 2,
    title: "Is the system mainly used within one or more of these areas?",
    hint:
      "If multiple are relevant, choose the area most central to the AI system.",
    options: [
      { id: "q2_a", label: "Employment and recruitment", risk: "high", score: 3 },
      { id: "q2_b", label: "Education or admissions", risk: "high", score: 3 },
      { id: "q2_c", label: "Critical infrastructure operations", risk: "high", score: 3 },
      { id: "q2_d", label: "Law enforcement or justice", risk: "high", score: 3 },
      { id: "q2_e", label: "Access to essential services (e.g. credit, welfare, insurance)", risk: "high", score: 3 },
      { id: "q2_f", label: "None of these", risk: "minimal", score: 1 },
    ],
  },
  {
    id: "q3",
    step: 3,
    title: "How does the system affect individuals?",
    options: [
      {
        id: "q3_a",
        label: "No direct impact on rights or access to services",
        risk: "minimal",
        score: 1,
      },
      {
        id: "q3_b",
        label: "Provides recommendations/support, but humans make the final decision",
        risk: "limited",
        score: 2,
      },
      {
        id: "q3_c",
        label: "Makes or influences decisions with legal or similarly significant effects",
        risk: "high",
        score: 3,
      },
      { id: "q3_d", label: "Unsure", risk: "unsure", score: 0 },
    ],
  },
  {
    id: "q4",
    step: 4,
    title: "Does the system involve any of the following?",
    bullets: [
      "Social scoring of individuals",
      "Harmful manipulation of behaviour or exploiting vulnerabilities",
      "Real-time biometric identification in public spaces (e.g. facial recognition)",
    ],
    options: [
      { id: "q4_a", label: "Yes", risk: "unacceptable", score: 4 },
      { id: "q4_b", label: "No", risk: "minimal", score: 1 },
      { id: "q4_c", label: "Unsure", risk: "unsure", score: 0 },
    ],
  },
];
