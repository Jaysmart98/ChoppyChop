export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar Navigation */}
      <nav className="w-64 border-r border-slate-800 p-6">
        <h2 className="font-bold text-xl mb-8">RiderPanel</h2>
        <ul className="space-y-4">
          <li><a href="/Rider" className="text-slate-400 hover:text-white">Overview</a></li>
          <li><a href="/Rider/active-trip" className="text-slate-400 hover:text-white">Active Trip</a></li>
          <li><a href="/Rider/history" className="text-slate-400 hover:text-white">Trip History</a></li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}