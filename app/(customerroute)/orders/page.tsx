"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Package, Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function OrdersPage() {
  const [tab, setTab] = useState("Active");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20">
      {/* Header */}
      <header className="p-6 sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-black dark:text-white">Orders</h1>
      </header>

      {/* Tabs */}
      <div className="px-6 py-4 flex gap-2">
        {["Active", "History"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 rounded-2xl font-black text-sm transition-all ${
              tab === t 
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" 
                : "bg-white dark:bg-slate-900 dark:text-slate-400 text-slate-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <section className="p-6">
        {tab === "Active" ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <ActiveOrderCard />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <PastOrderCard />
            <PastOrderCard />
          </motion.div>
        )}
      </section>
    </div>
  );
}

function ActiveOrderCard() {
  return (
    <div className="bg-emerald-600 text-white p-6 rounded-[2rem] shadow-xl shadow-emerald-500/20">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Preparing</span>
        <Clock size={16} />
      </div>
      <h3 className="font-black text-xl">Spicy Dan-Dan Noodles</h3>
      <p className="text-emerald-100 text-sm mt-1">Wok Stars Kitchen • Arriving in 12m</p>
      <div className="w-full h-2 bg-white/20 rounded-full mt-6 overflow-hidden">
        <div className="w-2/3 h-full bg-white rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function PastOrderCard() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex justify-between items-center group cursor-pointer hover:border-emerald-500 transition-all">
      <div className="flex items-center gap-4">
        <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 dark:bg-emerald-900/30">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <h4 className="font-black dark:text-white">Item 7 (Go)</h4>
          <p className="text-xs text-slate-500">Delivered • 2 days ago</p>
        </div>
      </div>
      <ChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" />
    </div>
  );
}