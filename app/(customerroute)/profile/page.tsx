"use client";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { gql } from "graphql-tag";
import { 
  User, MapPin, CreditCard, Gift, Users, 
  Settings, HelpCircle, ShieldCheck, ChevronRight 
} from "lucide-react";

// GraphQL query to match your schema
const GET_ME = gql`
  query GetMe {
    me {
      profile {
        firstName
        lastName
      }
      email
    }
  }
`;

export default function ProfilePage() {
  const { data, loading } = useQuery(GET_ME);

  // Fallback to "Loading" or empty if data is still being fetched
  const user = data?.me;
  const fullName = user ? `${user.profile.firstName} ${user.profile.lastName}` : "Loading...";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-12">
      {/* User Header */}
      <div className="bg-white dark:bg-slate-900 p-8 border-b border-slate-100 dark:border-slate-800 text-center">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center text-emerald-600">
          <User size={40} />
        </div>
        <h2 className="text-xl font-black dark:text-white">{fullName}</h2>
        <p className="text-slate-400 text-sm">{user?.email || ""}</p>
        
        <div className="flex justify-center gap-4 mt-4">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-sm font-bold dark:text-slate-200">
            Points: 48
          </div>
          <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-xl text-sm font-bold text-amber-600">
            Rating: 5.0
          </div>
        </div>
      </div>

      {/* Wallet Widget */}
      <div className="px-6 py-6">
        <div className="bg-slate-900 text-white p-6 rounded-[2rem] flex justify-between items-center shadow-2xl shadow-slate-300 dark:shadow-none">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Wallet Balance</p>
            <h3 className="text-3xl font-black mt-1">₦ 12,450.00</h3>
          </div>
          <button className="bg-emerald-500 p-4 rounded-2xl">
            <CreditCard size={20} />
          </button>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 space-y-6">
        <Section title="Personal" items={[
          { icon: User, label: "Profile Details" },
          { icon: MapPin, label: "Addresses" },
          { icon: CreditCard, label: "Wallet" }
        ]} />
        
        <Section title="Services" items={[
          { icon: Gift, label: "Referrals" },
          { icon: Users, label: "Group Checkout" }
        ]} />

        <Section title="More" items={[
          { icon: Settings, label: "Preferences" },
          { icon: HelpCircle, label: "Help & Support" },
          { icon: ShieldCheck, label: "Legal" }
        ]} />
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string, items: any[] }) {
  return (
    <div>
      <h4 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">{title}</h4>
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-2">
        {items.map((item, i) => (
          <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all">
            <div className="flex items-center gap-4">
              <item.icon size={20} className="text-slate-400" />
              <span className="font-bold dark:text-slate-200">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-slate-300" />
          </button>
        ))}
      </div>
    </div>
  );
}