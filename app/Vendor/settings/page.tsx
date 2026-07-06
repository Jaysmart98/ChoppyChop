"use client";
import React, { useState } from "react";

export default function SettingsPage() {
  // 1. Unified state for profile and preferences
  const [profile, setProfile] = useState({ 
    name: "Joshua Kayode", 
    email: "joshua@example.com", 
    phone: "+234 800 000 0000" 
  });
  
  const [prefs, setPrefs] = useState({
    notifications: true,
    darkMode: true,
    autoAccept: false
  });

  // 2. Handle text input changes
  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black mb-8">Account Settings</h1>

      {/* Profile Section */}
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 mb-6">
        <h2 className="text-lg font-bold mb-6">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" value={profile.name} onChange={(v) => handleProfileChange('name', v)} />
          <InputField label="Email Address" value={profile.email} onChange={(v) => handleProfileChange('email', v)} />
          <InputField label="Phone Number" value={profile.phone} onChange={(v) => handleProfileChange('phone', v)} />
        </div>
        <button 
          onClick={() => alert("Profile Updated!")}
          className="mt-6 bg-indigo-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-indigo-500 transition-colors"
        >
          Update Profile
        </button>
      </div>

      {/* Preferences Section */}
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-bold mb-6">Operational Preferences</h2>
        <div className="space-y-4">
          <ToggleOption 
            label="Push Notifications" 
            active={prefs.notifications} 
            onToggle={() => setPrefs(p => ({ ...p, notifications: !p.notifications }))} 
          />
          <ToggleOption 
            label="Dark Mode" 
            active={prefs.darkMode} 
            onToggle={() => setPrefs(p => ({ ...p, darkMode: !p.darkMode }))} 
          />
          <ToggleOption 
            label="Auto-Accept Orders" 
            active={prefs.autoAccept} 
            onToggle={() => setPrefs(p => ({ ...p, autoAccept: !p.autoAccept }))} 
          />
        </div>
      </div>
    </div>
  );
}

// Helper: Input Field
function InputField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs text-slate-400 uppercase font-bold mb-2">{label}</label>
      <input 
        className="w-full bg-slate-950 p-3 rounded-lg border border-slate-700 text-white focus:border-indigo-500 outline-none" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

// Helper: Toggle Switch
function ToggleOption({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-slate-800 last:border-0">
      <p className="font-bold">{label}</p>
      <button 
        onClick={onToggle}
        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${active ? 'bg-indigo-600' : 'bg-slate-700'}`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${active ? 'left-7' : 'left-1'}`}></div>
      </button>
    </div>
  );
}