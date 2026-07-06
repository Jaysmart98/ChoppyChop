export default function HistoryPage() {
  // In a real app, this data comes from your GraphQL query
  const history = [
    { id: "TRP-001", vendor: "Vendor A", amount: "₦2,500", date: "Today" },
    { id: "TRP-002", vendor: "Vendor B", amount: "₦1,800", date: "Yesterday" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black mb-6">Delivery History</h1>
      <div className="space-y-3">
        {history.map((trip) => (
          <div key={trip.id} className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <p className="font-bold">{trip.vendor}</p>
              <p className="text-xs text-slate-500">{trip.id}</p>
            </div>
            <div className="text-right">
              <p className="text-emerald-400 font-bold">{trip.amount}</p>
              <p className="text-xs text-slate-500">{trip.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}