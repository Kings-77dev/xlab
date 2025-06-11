// components/PricingTable.tsx
"use client";
export default function PricingTable() {
  const plans = [
    { plan: "Basic", hours: "2 hrs", sla: "Next-business-day", price: "€100" },
    { plan: "Pro", hours: "5 hrs", sla: "4-hour SLA", price: "€250" },
    { plan: "Enterprise", hours: "10+ hrs", sla: "1-hour SLA", price: "Custom" },
  ];
  return (
    <section className="py-16 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Support Tiers & Pricing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr>
                {['Plan','Hours Included','Response Time','Price / month'].map(h=> <th key={h} className="py-2">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {plans.map(p=>(
                <tr key={p.plan} className="border-t border-gray-700">
                  <td className="py-2">{p.plan}</td>
                  <td>{p.hours}</td>
                  <td>{p.sla}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
