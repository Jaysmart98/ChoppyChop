"use client";
import React, { useState } from "react";

export default function ActiveTripPage() {
  const [status, setStatus] = useState("PENDING"); // PENDING, ACCEPTED, PICKED, DELIVERED
  const [code, setCode] = useState("");

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-black mb-6">Active Delivery</h1>
      
      {/* Dynamic Status Card */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Status</span>
          <span className="text-emerald-400 font-bold">{status}</span>
        </div>

        {status === "PENDING" && (
          <div className="space-y-4">
            <p>New Order: Meal from Vendor A</p>
            <div className="flex gap-4">
              <button onClick={() => setStatus("ACCEPTED")} className="flex-1 bg-emerald-600 py-3 rounded-xl font-bold">Accept</button>
              <button className="flex-1 bg-rose-600 py-3 rounded-xl font-bold">Decline</button>
            </div>
          </div>
        )}

        {status === "ACCEPTED" && (
          <button onClick={() => setStatus("PICKED")} className="w-full bg-blue-600 py-4 rounded-xl font-bold">
            Mark Order Picked
          </button>
        )}

        {status === "PICKED" && (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">Enter Customer Delivery Code</p>
            <input 
              value={code} 
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700"
              placeholder="Enter 4-digit code"
            />
            <button onClick={() => setStatus("DELIVERED")} className="w-full bg-indigo-600 py-4 rounded-xl font-bold">
              Complete Delivery
            </button>
          </div>
        )}
      </div>
    </div>
  );
}