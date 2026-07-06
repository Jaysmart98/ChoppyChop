"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Package, TrendingUp, Clock, AlertCircle, Settings } from "lucide-react";

interface Order {
  id: number;
  item: string;
  customer: string;
  status: "New" | "Preparing" | "Dispatched";
}

export default function VendorDashboard() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 101, item: "Spicy Dan-Dan Noodles × 2", customer: "Sarah J.", status: "New" },
    { id: 102, item: "Chicken Fried Rice × 1", customer: "Mike T.", status: "New" },
  ]);

  const handlePrepare = (id: number) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: "Preparing" } : o));
  };

  const handleDispatch = (id: number) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: "Dispatched" } : o));
    setTimeout(() => {
      setOrders(prev => prev.filter(o => o.id !== id));
      alert(`Order #${id} has been dispatched to a nearby rider.`);
    }, 500);
  };

  const handleDecline = (id: number) => {
    const reason = prompt("Please provide a reason for declining this order:");
    if (reason) {
      setOrders(prev => prev.filter(o => o.id !== id));
    }
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Kitchen Console</h1>
          <p className="text-gray-500 font-medium">Welcome back, Wok Stars Kitchen.</p>
        </div>
        
        <div className="flex gap-3">
          <Link 
            href="/Vendor/settings" 
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all"
          >
            <Settings size={18} />
            Settings
          </Link>
          <Link 
            href="/Vendor/menu" 
            className="bg-[#00A859] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#00914C] transition-all"
          >
            + New Menu Item
          </Link>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Orders", val: orders.length.toString(), icon: Package, color: "text-blue-600" },
          { label: "Daily Revenue", val: "₦75,600", icon: TrendingUp, color: "text-[#00A859]" },
          { label: "Avg Prep Time", val: "14m", icon: Clock, color: "text-amber-600" },
          { label: "Alerts", val: "0", icon: AlertCircle, color: "text-red-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <stat.icon className={`w-6 h-6 mb-3 ${stat.color}`} />
            <p className="text-xs text-gray-400 font-bold uppercase">{stat.label}</p>
            <p className="text-3xl font-black text-gray-900 mt-1">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Live Order Queue */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Active Order Dispatch</h3>
        <div className="space-y-4">
          {orders.length === 0 && <p className="text-center text-gray-400 py-10">No active orders right now.</p>}
          
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-[#00A859]">#{order.id}</div>
                <div>
                  <p className="font-bold text-gray-900">{order.item}</p>
                  <p className="text-xs text-gray-500">Customer: {order.customer} • Status: <span className="font-bold text-[#00A859]">{order.status}</span></p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {order.status === "New" && (
                  <>
                    <button onClick={() => handlePrepare(order.id)} className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-bold text-sm text-gray-600 hover:bg-gray-100">
                      Prepare
                    </button>
                    <button onClick={() => handleDecline(order.id)} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-bold text-sm hover:bg-red-100">
                      Decline
                    </button>
                  </>
                )}
                {order.status === "Preparing" && (
                  <button onClick={() => handleDispatch(order.id)} className="px-4 py-2 bg-[#00A859] text-white rounded-lg font-bold text-sm hover:bg-[#00914C]">
                    Dispatch to Rider
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}