// components/ProcessSteps.tsx
"use client";
export default function ProcessSteps() {
  const steps = [
    'Kickoff & Access Setup',
    'Baseline Audit & Performance Scan',
    'Define Update & Reporting Cadence',
    'Ongoing Monitoring & Monthly Review',
    'Quarterly Strategy Call'
  ];
  return (
    <section className="py-16 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Process</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-300">
          {steps.map(s=><li key={s}>{s}</li>)}
        </ol>
      </div>
    </section>
  );
}