"use client";

import React, { useState } from "react";
import Link from "next/link";

// Custom type for our interactive food showcase
interface FoodItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  rating: string;
  prepTime: string;
  imageEmoji: string;
  bgColor: string;
  description: string;
}

// Custom type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

export default function ChoppyChopHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("customer");
  const [selectedFood, setSelectedFood] = useState<string>("pasta");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sample data for the interactive showcase
  const foodMenu: Record<string, FoodItem> = {
    pasta: {
      id: "pasta",
      name: "Truffle Mushroom Fettuccine",
      tagline: "Silky, twirled perfection with wild truffles",
      price: "$18.50",
      rating: "4.9",
      prepTime: "12-15 mins",
      imageEmoji: "🍝",
      bgColor: "from-amber-100 to-orange-100",
      description: "Hand-rolled fettuccine swirled in cream sauce, topped with shaved black truffles, roasted wild chanterelles, and freshly grated parmigiano-reggiano."
    },
    ramen: {
      id: "ramen",
      name: "Tonkotsu Spicy Noodle Bowl",
      tagline: "24-hour broth with hand-pulled noodles",
      price: "$16.00",
      rating: "4.8",
      prepTime: "10-12 mins",
      imageEmoji: "🍜",
      bgColor: "from-red-100 to-rose-100",
      description: "A steaming bowl of hand-pulled wheat noodles bathed in rich, creamy pork broth, accompanied by chashu pork belly, soft-boiled ajitama egg, and chili thread."
    },
    local: {
      id: "local",
      name: "Singapore Street Fried Noodles",
      tagline: "Wok-hei smoked traditional noodles",
      price: "$14.20",
      rating: "4.7",
      prepTime: "8-10 mins",
      imageEmoji: "🍛",
      bgColor: "from-yellow-100 to-amber-100",
      description: "Flash-fried thin rice vermicelli tossed with a aromatic light curry, crisp scallions, plump tiger prawns, and fresh bean sprouts singing with signature wok-hei smoke."
    }
  };

  const faqData: FAQItem[] = [
    {
      question: "How does ChoppyChop ensure food is delivered piping hot?",
      answer: "We pair our vendors with dispatch riders using proprietary logistics grouping. Our riders use insulated thermal delivery packs, ensuring that pasta, soups, and hand-pulled noodles reach you exactly as if they just left the stove."
    },
    {
      question: "I own a kitchen. How fast can I start selling on ChoppyChop?",
      answer: "Our self-onboarding portal takes less than 15 minutes. Once registered under our Vendor tier, our team will verify your kitchen details and activate your digital menu storefront within 24 hours."
    },
    {
      question: "What are the requirements to join as a ChoppyChop Rider?",
      answer: "You'll need a reliable bicycle, motorcycle, or car, a valid smartphone with GPS capabilities, and a pass on our quick safety and background check. We offer flexible shifts and weekly payouts."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans overflow-x-hidden">
      
      {/* --- STICKY NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#00A859] rounded-xl flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:rotate-6 overflow-hidden">
              {/* Spaghetti Bowl & Hand Fork Vector Logo */}
              <svg viewBox="0 0 800 800" className="w-9 h-9">
                <defs>
                  <radialGradient id="navBgGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#14c375"/>
                    <stop offset="100%" stopColor="#00A859"/>
                  </radialGradient>
                  <linearGradient id="navBowlShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e0e0e0"/>
                    <stop offset="100%" stopColor="#ffffff"/>
                  </linearGradient>
                </defs>
                <rect width="800" height="800" rx="180" fill="url(#navBgGrad)"/>
                <ellipse cx="400" cy="620" rx="260" ry="45" fill="#ffffff" opacity="0.2" />
                <ellipse cx="400" cy="615" rx="220" ry="30" fill="#ffffff" opacity="0.4" />
                <path d="M180 400 C180 560, 620 560, 620 400 Z" fill="#F4F4F4" />
                <ellipse cx="400" cy="400" rx="220" ry="40" fill="#ffffff" stroke="#e0e0e0" strokeWidth="3" />
                <ellipse cx="400" cy="405" rx="205" ry="32" fill="url(#navBowlShadow)" />
                <g fill="none" stroke="#FFD066" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M220 400 Q260 420, 320 395 T440 410 T560 395" strokeWidth="18" />
                  <path d="M240 390 Q300 370, 380 400 T520 385 T580 400" strokeWidth="16" stroke="#FFE099"/>
                  <path d="M210 405 Q310 430, 400 405 T590 405" strokeWidth="14" />
                  <path d="M260 395 C280 350, 340 350, 360 395" strokeWidth="15" />
                  <path d="M440 395 C460 360, 520 360, 540 395" strokeWidth="15" />
                  <path d="M320 400 C350 365, 410 365, 450 400" strokeWidth="16" />
                </g>
                <path d="M340 385 Q400 360, 460 385 Q400 410, 340 385" fill="#E63946" />
                <circle cx="380" cy="380" r="12" fill="#2A9D8F" />
                <circle cx="415" cy="385" r="10" fill="#2A9D8F" />
                <g fill="none" stroke="#FFD066" strokeWidth="14" strokeLinecap="round">
                  <path d="M365 400 Q350 300, 375 220" />
                  <path d="M390 390 Q405 290, 395 210" stroke="#FFE099" strokeWidth="12" />
                  <path d="M420 400 Q440 310, 415 225" />
                </g>
                <g transform="translate(250, 60)">
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
                <g>
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
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              choppychop
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-[#00A859] transition-colors">How it Works</a>
            <a href="#workspaces" className="hover:text-[#00A859] transition-colors">Unified Workspaces</a>
            <a href="#showcase" className="hover:text-[#00A859] transition-colors">Menu Matrix</a>
            <a href="#faq" className="hover:text-[#00A859] transition-colors">FAQs</a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-gray-700 hover:text-[#00A859] transition-colors px-4 py-2">
              Sign In
            </Link>
            <Link href="/signup" className="text-sm font-bold bg-[#00A859] text-white px-5 py-2.5 rounded-xl hover:bg-[#00914C] transition-all shadow-md">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl border border-gray-100 p-4 space-y-4 shadow-lg animate-fadeIn">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-gray-600 px-4 py-2 hover:bg-[#E6F6EF] hover:text-[#00A859] rounded-xl transition-all">How it Works</a>
            <a href="#workspaces" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-gray-600 px-4 py-2 hover:bg-[#E6F6EF] hover:text-[#00A859] rounded-xl transition-all">Workspaces</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-gray-600 px-4 py-2 hover:bg-[#E6F6EF] hover:text-[#00A859] rounded-xl transition-all">Menu Matrix</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-gray-600 px-4 py-2 hover:bg-[#E6F6EF] hover:text-[#00A859] rounded-xl transition-all">FAQs</a>
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-2">
              <Link href="/login" className="w-full text-center py-3 font-bold text-gray-700 hover:bg-gray-50 rounded-xl transition-all">
                Sign In
              </Link>
              <Link href="/signup" className="w-full text-center py-3 bg-[#00A859] text-white font-bold rounded-xl hover:bg-[#00914C] transition-all">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative px-6 pt-12 pb-20 md:px-12 md:pt-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Content */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#E6F6EF] text-[#00A859] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            ⚡ Blazing Fast Hot Meal Delivery
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
            Delicious food, <br />
            twirled straight to <span className="text-[#00A859]">your plate.</span>
          </h2>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Craving fresh hand-pulled noodles, spicy ramen, or signature gourmet dishes? ChoppyChop connects you instantly with five-star local culinary partners and rapid-transit delivery riders.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/signup" className="w-full sm:w-auto text-center px-8 py-4 bg-[#00A859] text-white font-bold rounded-xl shadow-md hover:bg-[#00914C] active:scale-95 transition-all text-base">
              Order Your First Bowl
            </Link>
            <a href="#showcase" className="w-full sm:w-auto text-center px-8 py-4 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-colors text-base">
              View Menu Matrix
            </a>
          </div>
        </div>

        {/* Right High-Fidelity SVG Art Illustration */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[480px] aspect-square rounded-[48px] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <svg viewBox="0 0 800 800" className="w-full h-full">
              <defs>
                <radialGradient id="heroBgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#14c375"/>
                  <stop offset="100%" stopColor="#00A859"/>
                </radialGradient>
                <linearGradient id="heroBowlShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e0e0e0"/>
                  <stop offset="100%" stopColor="#ffffff"/>
                </linearGradient>
                <filter id="heroShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#004d26" floodOpacity="0.3"/>
                </filter>
                <filter id="heroElementShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.15"/>
                </filter>
              </defs>

              <rect width="800" height="800" rx="180" fill="url(#heroBgGrad)"/>

              <g filter="url(#heroShadow)">
                {/* 1. PLATE BASE */}
                <ellipse cx="400" cy="620" rx="260" ry="45" fill="#ffffff" opacity="0.2" />
                <ellipse cx="400" cy="615" rx="220" ry="30" fill="#ffffff" opacity="0.4" />

                {/* 2. CERAMIC BOWL */}
                <path d="M180 400 C180 560, 620 560, 620 400 Z" fill="#F4F4F4" />
                <ellipse cx="400" cy="400" rx="220" ry="40" fill="#ffffff" stroke="#e0e0e0" strokeWidth="3" />
                <ellipse cx="400" cy="405" rx="205" ry="32" fill="url(#heroBowlShadow)" />

                {/* 3. SPAGHETTI NOODLES */}
                <g fill="none" stroke="#FFD066" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M220 400 Q260 420, 320 395 T440 410 T560 395" strokeWidth="18" />
                  <path d="M240 390 Q300 370, 380 400 T520 385 T580 400" strokeWidth="16" stroke="#FFE099"/>
                  <path d="M210 405 Q310 430, 400 405 T590 405" strokeWidth="14" />
                  <path d="M260 395 C280 350, 340 350, 360 395" strokeWidth="15" />
                  <path d="M440 395 C460 360, 520 360, 540 395" strokeWidth="15" />
                  <path d="M320 400 C350 365, 410 365, 450 400" strokeWidth="16" />
                </g>

                {/* Garnish Toppings */}
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
                <g transform="translate(250, 60)" filter="url(#heroElementShadow)">
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
                <g filter="url(#heroElementShadow)">
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
        </div>
      </header>

      <hr className="border-gray-100 max-w-7xl mx-auto" />

      {/* --- HOW IT WORKS SECTION --- */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Twirled in 3 Simple Steps
          </h3>
          <p className="text-gray-500 font-medium text-sm mt-2">
            The quickest loop from placing your order to your first delicious bite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#E6F6EF] text-[#00A859] rounded-full flex items-center justify-center font-black text-2xl mx-auto">
              1
            </div>
            <h4 className="text-xl font-bold text-gray-900">Select Your Craving</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Open our application, browse curated boutique kitchens in your local district, and customize your noodles or flavor options.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#E6F6EF] text-[#00A859] rounded-full flex items-center justify-center font-black text-2xl mx-auto">
              2
            </div>
            <h4 className="text-xl font-bold text-gray-900">Watch the Prep</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Five-star local vendors receive and prepare your meal layout with artisanal precision. Everything is cooked fresh on demand.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#E6F6EF] text-[#00A859] rounded-full flex items-center justify-center font-black text-2xl mx-auto">
              3
            </div>
            <h4 className="text-xl font-bold text-gray-900">Swiftly Delivered</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Your assigned delivery rider picks up the insulated thermal container and routes using live GPS tracking right to your plate.
            </p>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC WORKSPACE TABS --- */}
      <section id="workspaces" className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              One Unified Logistics Ecosystem
            </h3>
            <p className="text-gray-500 font-medium text-sm mt-2">
              Select your role profile below to explore our custom workspaces.
            </p>
          </div>

          {/* Segmented Tab Bar */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl gap-1">
              <button 
                onClick={() => setActiveTab("customer")}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "customer" ? "bg-white text-[#00A859] shadow-sm" : "text-gray-500 hover:text-gray-800"}`}
              >
                Customers
              </button>
              <button 
                onClick={() => setActiveTab("vendor")}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "vendor" ? "bg-white text-[#00A859] shadow-sm" : "text-gray-500 hover:text-gray-800"}`}
              >
                Food Vendors
              </button>
              <button 
                onClick={() => setActiveTab("rider")}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "rider" ? "bg-white text-[#00A859] shadow-sm" : "text-gray-500 hover:text-gray-800"}`}
              >
                Logistics Riders
              </button>
            </div>
          </div>

          {/* Interactive Dynamic Tab Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side detail block */}
            <div className="lg:col-span-6 space-y-6">
              {activeTab === "customer" && (
                <>
                  <h4 className="text-3xl font-black tracking-tight text-gray-900">
                    Savor the city’s finest <span className="text-[#00A859]">on demand.</span>
                  </h4>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    With our intuitive customer dashboard, you can browse verified kitchens, schedule recurring meals, choose custom spice levels, and follow your order status. Perfect for busy professionals, families, and high-tempo noodle fans.
                  </p>
                  <ul className="space-y-3 font-semibold text-gray-700">
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Precision flavor profile matching</li>
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Live order milestones & rider telemetry</li>
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Seamless single-click checkouts</li>
                  </ul>
                  <div className="pt-2">
                    <Link href="/signup" className="inline-flex items-center gap-1.5 font-bold text-[#00A859] hover:underline">
                      Join as a Customer today →
                    </Link>
                  </div>
                </>
              )}

              {activeTab === "vendor" && (
                <>
                  <h4 className="text-3xl font-black tracking-tight text-gray-900">
                    Accelerate your kitchen’s <span className="text-[#00A859]">revenue.</span>
                  </h4>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    Our vendor console equips chefs and restaurants with enterprise order management. Gain immediate online storefront access, real-time demand charts, dispatch queueing mechanisms, and detailed weekly sales analysis reports.
                  </p>
                  <ul className="space-y-3 font-semibold text-gray-700">
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Instant digital menu onboarding</li>
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Live logistics matching automation</li>
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Revenue metrics & inventory control</li>
                  </ul>
                  <div className="pt-2">
                    <Link href="/signup" className="inline-flex items-center gap-1.5 font-bold text-[#00A859] hover:underline">
                      Register your food business →
                    </Link>
                  </div>
                </>
              )}

              {activeTab === "rider" && (
                <>
                  <h4 className="text-3xl font-black tracking-tight text-gray-900">
                    Deliver happiness, earn <span className="text-[#00A859]">excellent payouts.</span>
                  </h4>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    Our logistics application provides optimized distribution routes using advanced GPS routing telemetry. Ride with bike, motorcycle, or car, choose your own hours, and enjoy stable, competitive pay metrics.
                  </p>
                  <ul className="space-y-3 font-semibold text-gray-700">
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Highly optimized transit routing guides</li>
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Transparent weekly earnings dashboards</li>
                    <li className="flex items-center gap-2"><span className="text-[#00A859]">✓</span> Direct in-app communication networks</li>
                  </ul>
                  <div className="pt-2">
                    <Link href="/signup" className="inline-flex items-center gap-1.5 font-bold text-[#00A859] hover:underline">
                      Become a delivery partner →
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Right side graphical card */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 shadow-inner flex flex-col justify-center min-h-[320px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6F6EF] rounded-full filter blur-3xl opacity-50" />
                
                {activeTab === "customer" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🍜</span>
                        <div>
                          <h5 className="font-bold text-gray-900 text-sm">Spicy Dan-Dan Noodles</h5>
                          <p className="text-xs text-gray-400 font-bold">Kitchen: Wok Stars</p>
                        </div>
                      </div>
                      <span className="bg-[#E6F6EF] text-[#00A859] text-xs font-black px-2.5 py-1 rounded-full">IN TRANSIT</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 font-bold">
                      <span>Rider: Nelson (2 mins away)</span>
                      <span>Est. Delivery: 12:42 PM</span>
                    </div>
                    {/* Visual GPS Line Sim */}
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00A859] rounded-full w-4/5 animate-pulse" />
                    </div>
                  </div>
                )}

                {activeTab === "vendor" && (
                  <div className="space-y-4">
                    <h5 className="font-bold text-gray-900 text-sm">Kitchen Dashboard Overview</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <span className="text-xs text-gray-400 font-bold">Today's Orders</span>
                        <p className="text-xl font-black text-gray-900">42</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <span className="text-xs text-gray-400 font-bold">Daily Revenue</span>
                        <p className="text-xl font-black text-[#00A859]">$756.20</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
                      <span>Active Delivery Handshakes:</span>
                      <span className="text-gray-900 font-black">4 Kitchen Dispatches</span>
                    </div>
                  </div>
                )}

                {activeTab === "rider" && (
                  <div className="space-y-4">
                    <h5 className="font-bold text-gray-900 text-sm">Next Route Payload</h5>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-amber-100 text-amber-800 font-black px-2 py-0.5 rounded-full">PICKUP</span>
                        <span className="text-gray-400">Pasta Palace</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-blue-100 text-blue-800 font-black px-2 py-0.5 rounded-full">DROP</span>
                        <span className="text-gray-400">42 Oak Avenue, Appt 5</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>Trip Payout: $12.50 + $4.00 Tip</span>
                      <span className="text-[#00A859]">Route optimized</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOD SHOWCASE (MENU MATRIX) --- */}
      <section id="showcase" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore the Menu Matrix
          </h3>
          <p className="text-gray-500 font-medium text-sm mt-2">
            Click down below to sample our most highly rated culinary offerings.
          </p>
        </div>

        {/* Dynamic Category Swapper Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {Object.keys(foodMenu).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedFood(key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFood === key 
                  ? "bg-[#00A859] text-white shadow-md" 
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {key === "pasta" && "🍝 Luxury Pasta"}
              {key === "ramen" && "🍜 Asian Ramen"}
              {key === "local" && "🍛 Local Street"}
            </button>
          ))}
        </div>

        {/* Dynamic Menu Display Panel */}
        <div className="bg-white rounded-[36px] border border-gray-100 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Showcase visual card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-[40px] bg-gradient-to-tr ${foodMenu[selectedFood].bgColor} flex items-center justify-center text-8xl md:text-9xl shadow-lg transform hover:scale-105 transition-transform duration-300`}>
              {foodMenu[selectedFood].imageEmoji}
            </div>
          </div>

          {/* Showcase narrative detail */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex gap-3 text-xs font-bold">
              <span className="bg-[#E6F6EF] text-[#00A859] px-3 py-1 rounded-full">⭐ {foodMenu[selectedFood].rating} Rating</span>
              <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full">⏱️ {foodMenu[selectedFood].prepTime}</span>
            </div>
            <h4 className="text-3xl font-black text-gray-900 leading-tight">
              {foodMenu[selectedFood].name}
            </h4>
            <p className="text-sm font-bold text-[#00A859] uppercase tracking-wider">
              {foodMenu[selectedFood].tagline}
            </p>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              {foodMenu[selectedFood].description}
            </p>
            <div className="pt-4 flex items-center gap-6 border-t border-gray-100">
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase block">Retail price</span>
                <span className="text-2xl font-black text-gray-900">{foodMenu[selectedFood].price}</span>
              </div>
              <Link href="/signup" className="px-6 py-3 bg-[#00A859] text-white font-bold rounded-xl hover:bg-[#00914C] transition-colors text-sm shadow-sm">
                Order This Dish Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIVE ECOSYSTEM STATS --- */}
      <section className="bg-[#E6F6EF] py-16 px-6 md:px-12 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h5 className="text-4xl font-extrabold text-[#00A859] mb-1">15+ Mins</h5>
            <p className="text-gray-600 font-bold text-sm">Average Delivery Time</p>
          </div>
          <div>
            <h5 className="text-4xl font-extrabold text-[#00A859] mb-1">3,000+</h5>
            <p className="text-gray-600 font-bold text-sm">Verified Food Kitchens</p>
          </div>
          <div>
            <h5 className="text-4xl font-extrabold text-[#00A859] mb-1">99.8%</h5>
            <p className="text-gray-600 font-bold text-sm">On-Time Ride Success</p>
          </div>
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section id="faq" className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-500 font-medium text-sm mt-2">
            Got queries? We have laid out the answers down below.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-[#00A859] font-black text-xl transition-transform duration-200 ${openFaqIndex === index ? "rotate-45" : "rotate-0"}`}>
                  +
                </span>
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-6 pt-1 text-sm text-gray-500 font-semibold leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto bg-[#111111] rounded-[36px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00A859]/20 to-transparent opacity-60" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Get your hot meals twirled on demand!
            </h3>
            <p className="text-gray-400 font-medium text-base md:text-lg max-w-2xl mx-auto">
              Join thousands of foodies enjoying localized, fast-paced food networks today. Select your account type during signup.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-[#00A859] text-white font-bold rounded-xl hover:bg-[#00914C] active:scale-95 transition-all text-base shadow-lg">
                Create Free Account
              </Link>
              <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base">
                Log Into Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-center md:text-left text-sm text-gray-400 font-semibold border-t border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ChoppyChop Logistics Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}