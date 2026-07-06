"use client";
import React, { useState } from "react";
import { Nav } from "@/app/components/NavButton";
import { Search, X, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["Restaurants", "Shops", "Pharmacies", "Local Markets", "Herbal"];
const recent = ["Item 7", "Spicy Wok", "Jollof Rice"];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-32">
      {/* Search Header */}
      <div className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-6 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="relative group">
          <Search className="absolute left-4 top-4 text-emerald-500" />
          <input 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 pl-12 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-emerald-500" 
            placeholder="Search for restaurants or food..." 
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-4 top-4 text-slate-400">
              <X size={20} />
            </button>
          )}
        </div>
        
        {/* Categories Pills */}
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((cat) => (
            <button key={cat} className="whitespace-nowrap bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 font-bold text-xs hover:border-emerald-500 transition-colors">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search Content */}
      <section className="p-6">
        {!query ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-500" /> Recent Searches
            </h3>
            <div className="space-y-2">
              {recent.map((item) => (
                <button key={item} className="flex items-center gap-3 w-full p-3 text-slate-500 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all">
                  <Clock size={16} /> {item}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="text-center mt-20 text-slate-400 font-bold">
            <p>Searching for "{query}"...</p>
          </div>
        )}
      </section>

      <Nav />
    </div>
  );
}