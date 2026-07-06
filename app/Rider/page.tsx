"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Star, Wallet, Power, Calendar, HelpCircle, Activity, History } from "lucide-react";

export default function RiderDashboard() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10 font-sans">
      {/* Header with Dynamic Status */}
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Welcome back, Rider</h1>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
            {isOnline ? "You are currently online" : "You are currently offline"}
          </p>
        </div>
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${isOnline ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'}`}
        >
          <Power size={18} />
          {isOnline ? "Go Offline" : "Go Online"}
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Trips" value="124" icon={<Activity size={20} className="text-blue-500" />} />
        <StatCard title="Rating" value="4.9" icon={<Star size={20} className="text-amber-500" />} />
        <StatCard title="Earnings" value="₦45,200" icon={<Wallet size={20} className="text-emerald-500" />} />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active Trip Section (Linked to /Rider/active-trip) */}
        <Link href="/Rider/active-trip" className="lg:col-span-2 group">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg group-hover:border-blue-500/50 transition-all">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="text-blue-500" /> Active Trip
            </h2>
            {isOnline ? (
              <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl animate-pulse">
                <p className="text-blue-300">Searching for nearby requests...</p>
              </div>
            ) : (
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-slate-500 text-center italic">
                Go online to start receiving trip requests.
              </div>
            )}
          </div>
        </Link>

        {/* Quick Actions */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg">
          <h2 className="text-lg font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/Rider/history" className="block">
              <ActionButton label="Trip History" icon={<History size={18} />} />
            </Link>
            <ActionButton label="View Schedule" icon={<Calendar size={18} />} />
            <ActionButton label="Help Center" icon={<HelpCircle size={18} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ... StatCard and ActionButton components remain the same, 
// but ensure ActionButton is wrapped in a Link when needed.

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
      <div className="flex justify-between items-start mb-4">
        <p className="text-xs font-mono text-slate-500 uppercase">{title}</p>
        {icon}
      </div>
      <p className="text-3xl font-black text-white">{value}</p>
    </div>
  );
}

function ActionButton({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="w-full flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-5 rounded-2xl text-sm transition-all cursor-pointer">
      {icon}
      {label}
    </div>
  );
}