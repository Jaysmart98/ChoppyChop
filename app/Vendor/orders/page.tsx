"use client";
import React, { useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    { id: "ORD-101", customer: "John Doe", item: "Jollof Rice + Chicken", status: "PENDING" }
  ]);

  const updateStatus = (id: string, status: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-black mb-6">Incoming Orders</h1>
      {orders.map(order => (
        <div key={order.id} className="bg-slate-900 p-6 rounded-xl border border-slate-700 space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-lg">{order.item}</p>
              <p className="text-sm text-slate-400">Customer: {order.customer}</p>
            </div>
            <span className="text-emerald-400 font-mono">{order.status}</span>
          </div>

          {order.status === "PENDING" && (
            <div className="flex gap-4">
              <button onClick={() => updateStatus(order.id, "ACCEPTED")} className="bg-emerald-600 px-6 py-2 rounded-lg font-bold">Accept</button>
              <button onClick={() => updateStatus(order.id, "DECLINED")} className="bg-rose-600 px-6 py-2 rounded-lg font-bold">Decline</button>
            </div>
          )}

          {order.status === "ACCEPTED" && (
            <button className="w-full bg-blue-600 py-3 rounded-lg font-bold">Assign to Nearby Rider</button>
          )}
        </div>
      ))}
    </div>
  );
}