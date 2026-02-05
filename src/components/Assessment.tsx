import { useMemo, useState } from "react";
import { questions, results, riskLabel, type Risk } from "../data";
import { computeMaxScore, riskFromScore } from "../risk";
import FooterDisclaimer from "./Footer";

type Answers = Record<string, string>;



export function Assessment() {
  const totalSteps = questions.length;

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finalRisk, setFinalRisk] = useState<Risk | null>(null);

  const currentQuestion = questions[stepIndex];
  const selectedOptionId = answers[currentQuestion.id];

  const selectedOption = useMemo(() => {
    return currentQuestion.options.find((o) => o.id === selectedOptionId);
  }, [currentQuestion.options, selectedOptionId]);

  function onSelect(optionId: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  }

  function onBack() {
    setStepIndex((s) => Math.max(0, s - 1));
  }

  function onNext() {
    if (!selectedOption) return;

    if (selectedOption.score === 4) {
      setFinalRisk("unacceptable");
      return;
    }

    const isLast = stepIndex === totalSteps - 1;
    if (isLast) {
      const score = computeMaxScore(questions, answers);
      setFinalRisk(riskFromScore(score));
      return;
    }

    setStepIndex((s) => s + 1);
  }

  function onReset() {
    setStepIndex(0);
    setAnswers({});
    setFinalRisk(null);
  }

  const stepNumber = stepIndex + 1;
  const pct = Math.round((stepNumber / totalSteps) * 100);

  if (finalRisk) {
    const copy = results[finalRisk];

    return (
      <section className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Resultat
        </p>

        <h2 className="mt-1 text-2xl font-semibold text-gray-900">
          {copy.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Risikonivå:{" "}
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "rgba(52,95,237,0.1)",
              color: "var(--nkom-blue-900)",
            }}
          >
            {riskLabel[finalRisk]}
          </span>
        </p>

        <div className="mt-4 space-y-3 text-sm text-gray-800">
          {copy.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-gray-900">Neste steg</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
            {copy.actions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onReset}
            className={[
              "rounded-xl px-4 py-2 text-sm font-semibold text-white",
              "transition-colors duration-150",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--nkom-blue-500)]",
              "bg-[var(--nkom-blue-900)] hover:bg-[var(--nkom-blue-700)]",
            ].join(" ")}
          >
            Begynn på nytt
          </button>

        </div>
        <FooterDisclaimer />
      </section>

    );
  }

  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">
          KI-veileder – Hvilket risikonivå er min KI-løsning?
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Dette er en forenklet veileder basert på KI-forordningens risikobaserte modell.
          Resultatet er veiledende og erstatter ikke juridisk vurdering.
        </p>
      </header>
      <div>
        <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
          <span>
            Steg <span className="font-medium text-gray-900">{stepNumber}</span>{" "}
            av {totalSteps}
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-gray-900 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>

      </div>
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          {currentQuestion.title}
        </h2>

        {currentQuestion.hint && (
          <p className="mt-2 text-sm text-gray-600">{currentQuestion.hint}</p>
        )}

        {currentQuestion.bullets?.length ? (
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {currentQuestion.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}

        <fieldset className="mt-5 space-y-3">
          <legend className="sr-only">Velg ett valg</legend>

          {currentQuestion.options.map((opt) => {
            const checked = selectedOptionId === opt.id;

            return (
              <label
                key={opt.id}
                className={[
                  "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition",

                  checked
                    ? "border-[var(--nkom-blue-700)] bg-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  className="mt-1 h-4 w-4"
                  checked={checked}
                  onChange={() => onSelect(opt.id)}
                />
                <span className="text-sm text-gray-900">{opt.label}</span>
              </label>
            );
          })}
        </fieldset>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            disabled={stepIndex === 0}
            className={[
              "rounded-xl px-4 py-2 text-sm font-medium",
              "transition-colors duration-150",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--nkom-blue-500)]",
              stepIndex === 0
                ? "cursor-not-allowed text-slate-400"
                : "text-[var(--nkom-blue-900)] hover:bg-slate-100",
            ].join(" ")}
          >
            Tilbake
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!selectedOptionId}
            className={[
              "rounded-xl px-4 py-2 text-sm font-semibold",
              "transition-colors duration-150",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--nkom-blue-500)]",
              !selectedOptionId
                ? "cursor-not-allowed bg-slate-200 text-slate-500"
                : "bg-[var(--nkom-blue-900)] text-white hover:bg-[var(--nkom-blue-700)]",
            ].join(" ")}
          >
            {stepIndex === totalSteps - 1 ? "Fullfør" : "Neste"}
          </button>

        </div>
      </section>
      <FooterDisclaimer />
    </div>
  );
}
