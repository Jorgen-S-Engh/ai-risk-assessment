import type { ResultsMap } from "../lib/types";

export const results: ResultsMap = {
  unsure: {
    title: "Unclear / unsure",
    body: [
      "Based on your answers, we cannot determine a clear risk level.",
      "Some systems sit between categories or require a more detailed assessment.",
    ],
    actions: [
      "Review the system's purpose and context",
      "Check relevant guidance and documentation",
      "Consider reaching out for expert advice",
    ],
  },
  minimal: {
    title: "Minimal or no risk",
    body: [
      "The system appears to fall within the minimal or no-risk category.",
      "This typically implies no specific regulatory requirements under the AI Act.",
    ],
    actions: [
      "Follow internal ethical guidelines for AI use",
      "Maintain solid information security practices",
      "Document basic governance and ownership",
    ],
  },
  limited: {
    title: "Limited risk",
    body: [
      "The system may fall under the limited risk category.",
      "Transparency requirements typically apply (e.g. users should know they interact with AI).",
    ],
    actions: [
      "Clearly label AI-generated content where relevant",
      "Inform users that the solution is AI-based",
      "Document how transparency requirements are met",
    ],
  },
  high: {
    title: "High-risk AI",
    body: [
      "The system may fall under the high-risk category.",
      "High-risk AI is subject to stricter requirements such as risk management, documentation, and human oversight.",
    ],
    actions: [
      "Perform a structured risk assessment",
      "Establish internal controls and governance",
      "Document how the system works and is used",
    ],
  },
  unacceptable: {
    title: "Unacceptable risk (prohibited AI)",
    body: [
      "The system may fall under the unacceptable risk category.",
      "Such AI systems are generally prohibited under the AI Act.",
    ],
    actions: [
      "Stop further use of the system",
      "Assess scope and potential impact",
      "Review the legal basis and applicable exemptions",
    ],
  },
};
