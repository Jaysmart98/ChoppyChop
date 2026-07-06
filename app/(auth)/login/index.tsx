"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { gql } from "graphql-tag";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LOGIN_USER = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        email
        role
      }
      token
    }
  }
`;

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [login, { loading }] = useMutation(LOGIN_USER);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginSchemaType) => {
    setErrorMsg(null);
    try {
      const { data } = await login({ variables: { input: values } });
      const { token, user } = data.login;

      const response = await fetch("/api/setcookies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (response.status === 200) {
        const userRole = user.role.toLowerCase();
        router.push(userRole === "customer" ? "/" : `/dashboard/${userRole}`);
        router.refresh();
      } else {
        throw new Error("Failed to configure authentication session.");
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Invalid credentials. Please try again.");
    }
  };

  return (
       <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4 py-12">
      
      {/* Brand Header using your premium artwork asset */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl transform rotate-3 overflow-hidden">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <defs>
              <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#14c375"/>
                <stop offset="100%" stopColor="#00A859"/>
              </radialGradient>
              <linearGradient id="bowlShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0e0e0"/>
                <stop offset="100%" stopColor="#ffffff"/>
              </linearGradient>
              <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#004d26" floodOpacity="0.3"/>
              </filter>
              <filter id="elementShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.15"/>
              </filter>
            </defs>

            <rect width="800" height="800" rx="180" fill="url(#bgGrad)"/>

            <g filter="url(#shadow)">
              {/* 1. PLATE BASE */}
              <ellipse cx="400" cy="620" rx="260" ry="45" fill="#ffffff" opacity="0.2" />
              <ellipse cx="400" cy="615" rx="220" ry="30" fill="#ffffff" opacity="0.4" />

              {/* 2. CERAMIC BOWL */}
              <path d="M180 400 C180 560, 620 560, 620 400 Z" fill="#F4F4F4" />
              <ellipse cx="400" cy="400" rx="220" ry="40" fill="#ffffff" stroke="#e0e0e0" strokeWidth="3" />
              <ellipse cx="400" cy="405" rx="205" ry="32" fill="url(#bowlShadow)" />

              {/* 3. SPAGHETTI NOODLES IN BOWL */}
              <g fill="none" stroke="#FFD066" strokeLinecap="round" strokeLinejoin="round">
                <path d="M220 400 Q260 420, 320 395 T440 410 T560 395" strokeWidth="18" />
                <path d="M240 390 Q300 370, 380 400 T520 385 T580 400" strokeWidth="16" stroke="#FFE099"/>
                <path d="M210 405 Q310 430, 400 405 T590 405" strokeWidth="14" />
                <path d="M260 395 C280 350, 340 350, 360 395" strokeWidth="15" />
                <path d="M440 395 C460 360, 520 360, 540 395" strokeWidth="15" />
                <path d="M320 400 C350 365, 410 365, 450 400" strokeWidth="16" />
              </g>

              {/* Garnish */}
              <path d="M340 385 Q400 360, 460 385 Q400 410, 340 385" fill="#E63946" />
              <circle cx="380" cy="380" r="12" fill="#2A9D8F" />
              <circle cx="415" cy="385" r="10" fill="#2A9D8F" />

              {/* 4. STREAMING STRANDS */}
              <g fill="none" stroke="#FFD066" strokeWidth="14" strokeLinecap="round">
                <path d="M365 400 Q350 300, 375 220" />
                <path d="M390 390 Q405 290, 395 210" stroke="#FFE099" strokeWidth="12" />
                <path d="M420 400 Q440 310, 415 225" />
              </g>

              {/* 5. FORK WITH TWIRLED SPAGHETTI */}
              <g transform="translate(250, 60)" filter="url(#elementShadow)">
                <ellipse cx="140" cy="140" rx="65" ry="45" fill="#FFD066" />
                <g fill="none" stroke="#FFAA00" strokeWidth="6" strokeLinecap="round">
                  <path d="M80 130 C90 100, 190 100, 200 130" />
                  <path d="M75 145 C85 115, 195 115, 205 145" stroke="#FFE099" strokeWidth="8" />
                  <path d="M82 155 C92 125, 188 125, 198 155" />
                  <path d="M90 165 C110 140, 170 140, 190 165" />
                </g>
                <path d="M105 110 V70 C105 55, 175 55, 175 70 V110" fill="none" stroke="#D1D5DB" strokeWidth="10" strokeLinecap="round" />
                <path d="M128 100 V60" stroke="#D1D5DB" strokeWidth="9" />
                <path d="M152 100 V60" stroke="#D1D5DB" strokeWidth="9" />
                <path d="M105 75 C105 115, 175 115, 175 75 C175 130, 140 140, 140 160 V220" fill="none" stroke="#D1D5DB" strokeWidth="12" strokeLinecap="round" />
              </g>

              {/* 6. HAND HOLDING FORK */}
              <g filter="url(#elementShadow)">
                <path d="M620 320 L510 280 L480 325 L600 370 Z" fill="#FFCDA3" stroke="#E0A370" strokeWidth="2" />
                <rect x="420" y="230" width="95" height="100" rx="30" fill="#FFCDA3" transform="rotate(-20, 420, 230)" />
                <g fill="#FFCDA3" stroke="#E0A370" strokeWidth="3">
                  <rect x="375" y="210" width="75" height="24" rx="12" transform="rotate(-15, 375, 210)" />
                  <rect x="380" y="234" width="75" height="24" rx="12" transform="rotate(-15, 380, 234)" />
                  <rect x="388" y="258" width="72" height="24" rx="12" transform="rotate(-15, 388, 258)" />
                  <rect x="398" y="282" width="65" height="24" rx="12" transform="rotate(-15, 398, 282)" />
                  <path d="M450 200 C420 200, 400 220, 420 245 C435 255, 460 230, 465 215 Z" fill="#FFCDA3" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h1 className="text-3xl font-black text-[#111111] tracking-tight mt-2">
          choppychop
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-gray-500 mt-1 text-sm">Please log in to manage your active pipeline</p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm mb-5 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email Address</label>
            <input 
              {...register("email")} 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-[#F4F4F4] rounded-xl border border-transparent focus:border-[#00A859] outline-none text-gray-900 placeholder-gray-400" 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Password</label>
              <Link href="/forgot-password" className="text-xs font-bold text-[#00A859] hover:underline">Forgot?</Link>
            </div>
            <input 
              {...register("password")} 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-[#F4F4F4] rounded-xl border border-transparent focus:border-[#00A859] outline-none text-gray-900 placeholder-gray-400" 
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-4 bg-[#00A859] text-white font-bold rounded-xl hover:bg-[#00914C] transition-colors"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-3 text-gray-400 text-xs font-bold uppercase tracking-wider">New to ChoppyChop?</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        <Link href="/signup" className="block w-full py-4 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl text-center hover:bg-gray-100 transition-colors">
          Create an Account
        </Link>
      </div>
    </div>
  );
}