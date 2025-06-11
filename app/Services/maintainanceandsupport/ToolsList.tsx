// components/ToolsList.tsx
"use client";

export default function ToolsList() {
  const items = [
    'UptimeRobot or Pingdom for monitoring',
    'WP CLI & Composer for updates',
    'Snyk or Vulnerability DB for security',
    'New Relic or GTMetrix for performance insights'
  ];
  return (
    <section className="py-16 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Tools & Technology</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}