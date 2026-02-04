
import type { Question, Risk } from "./data";

export function riskFromScore(score: number): Risk {
  if (score >= 4) return "unacceptable";
  if (score === 3) return "high";
  if (score === 2) return "limited";
  if (score === 1) return "minimal";
  return "unsure";
}

export function computeMaxScore(
  questions: Question[],
  answers: Record<string, string>
) {
  let max = 0;

  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const opt = q.options.find((o) => o.id === optionId);
    if (!opt) continue;
    if (opt.score > max) max = opt.score;
  }

  return max;
}
