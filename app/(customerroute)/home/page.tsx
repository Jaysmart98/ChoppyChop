import React from "react";
import connectDB from "@/shared/database/db.connect";
import { Menu } from "@/shared/database/model/menu.model";
import { MapPin, Star, Clock, Search, Zap } from "lucide-react";

export default async function HomeDashboard() {
  await connectDB();
  const restaurants = await Menu.find({}).lean(); 

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-32">
      {/* Header */}
      <header className="p-6 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Delivering to</p>
          <h2 className="font-bold dark:text-white flex items-center gap-1"><MapPin size={14}/> Victoria Island, Lagos</h2>
        </div>
      </header>

      {/* Hero Section */}
      <section className="p-6">
        <div className="relative group">
          <Search className="absolute left-4 top-4 text-slate-400 group-focus-within:text-emerald-500" />
          <input className="w-full p-4 pl-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-4 ring-emerald-500/20 dark:text-white" placeholder="Find food, restaurants..." />
        </div>
      </section>

      {/* Popular Picks */}
      <section className="p-6">
        <h3 className="flex items-center gap-2 font-black text-2xl mb-8 dark:text-white">
          <Zap className="fill-emerald-500 text-emerald-500" /> Popular Picks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((r: any) => (
            <div 
              key={r._id.toString()} 
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-black text-xl dark:text-white">{r.name}</h4>
                  <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full">₦{r.price}</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">{r.food}</p>
                <div className="flex gap-4 text-[11px] font-bold text-slate-500 mt-4">
                  <span className="flex items-center gap-1 text-amber-500"><Star size={12} fill="currentColor" /> {r.rating || "N/A"}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> 20-30m</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}