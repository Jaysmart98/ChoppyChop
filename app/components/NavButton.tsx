"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, User } from "lucide-react";

export function Nav() {
  const p = usePathname();
  const links = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Search", href: "/search", icon: Search },
    { name: "Orders", href: "/orders", icon: ShoppingBag },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-800 flex justify-around p-4 z-50">
      {links.map((l) => (
        <Link key={l.name} href={l.href} className={`flex flex-col items-center gap-1 transition-all ${p === l.href ? 'text-emerald-500 scale-110' : 'text-slate-400'}`}>
          <l.icon size={24} />
          <span className="text-[9px] font-black uppercase tracking-widest">{l.name}</span>
        </Link>
      ))}
    </div>
  );
}